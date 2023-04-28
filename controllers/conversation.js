const mongoose = require("mongoose");
const Conversation = require("../models/Conversation");
const asyncHandler = require("express-async-handler");

// @route GET /conversations
// @desc Get all conversations of a logged-in user
// @access private
exports.getAllConversations = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;

    const userProfile = await Profile.findOne({ userId });

    if (!userProfile) {
      res.status(404);
      throw new Error("Couldn't find a profile for this user");
    }

    let conversations = await Conversation.find({
      $or: [
        { user1Profile: userProfile._id },
        { user2Profile: userProfile._id },
      ],
    })
      .populate("latestMessage")
      .populate("user1Profile", "userId photos firstName lastName")
      .populate("user2Profile", "userId photos firstName lastName");

    conversations.sort((first, second) => {
      return second.latestMessage.createdAt - first.latestMessage.createdAt;
    });

    convosFormat = conversations.map((convo) => {
      const convoCopy = { ...convo._doc };
      if (
        convoCopy.user1Profile._id.toString() === userProfile._id.toString()
      ) {
        convoCopy.otherUserProfile = convoCopy.user2Profile;
      } else {
        convoCopy.otherUserProfile = convoCopy.user1Profile;
      }
      delete convoCopy.user1Profile;
      delete convoCopy.user2Profile;
      return convoCopy;
    });

    res.status(200).json(convosFormat);
  } catch (error) {
    next(error);
  }
});

// @route GET /conversations/:conversationId
// @desc Get a conversation (all messages in the conversation) of a logged-in user
// @access private
exports.getConversation = asyncHandler(async (req, res, next) => {
  try {
    const { conversationId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(conversationId)) {
      res.status(400);
      throw new Error("Invalid conversationId");
    }

    const userId = req.user.id;

    const userProfile = await Profile.findOne({ userId });

    if (!userProfile) {
      res.status(404);
      throw new Error("Couldn't find a profile for this user");
    }

    const conversation = await Conversation.findOne({
      _id: conversationId,
      $or: [
        { user1Profile: userProfile._id },
        { user2Profile: userProfile._id },
      ],
    })
      .populate("user1Profile", "userId photos firstName lastName")
      .populate("user2Profile", "userId photos firstName lastName");

    if (!conversation) {
      res.status(404);
      throw new Error(
        "Couldn't find a conversation for the user with the conversationId"
      );
    }

    const messages = await Message.find({
      conversation: conversation._id,
    }).populate("senderProfile", "userId photos firstName lastName");

    const convoCopy = { ...conversation._doc };

    if (convoCopy.user1Profile._id.toString() === userProfile._id.toString()) {
      convoCopy.otherUserProfile = convoCopy.user2Profile;
    } else {
      convoCopy.otherUserProfile = convoCopy.user1Profile;
    }
    delete convoCopy.user1Profile;
    delete convoCopy.user2Profile;

    res.status(200).json({
      conversationId,
      otherUserProfile: convoCopy.otherUserProfile,
      messages,
    });
  } catch (error) {
    next(error);
  }
});

// @route POST /conversations
// @desc Create a conversation between a logged-in user and the other user (recipient)
// @access private
exports.createConversation = asyncHandler(async (req, res, next) => {
  try {
    const { recipientId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(recipientId)) {
      res.status(400);
      throw new Error("Invalid recipientId");
    }

    const recipientProfile = await Profile.findOne({ userId: recipientId });

    if (!recipientProfile) {
      res.status(404);
      throw new Error("Couldn't find a profile for recipient");
    }

    const userId = req.user.id;
    const userProfile = await Profile.findOne({ userId });

    if (!userProfile) {
      res.status(404);
      throw new Error("Couldn't find a profile for this user");
    }
    let conversation;

    conversation = await Conversation.findOne({
      $or: [
        {
          $and: [
            { user1Profile: userProfile._id },
            { user2Profile: recipientProfile._id },
          ],
        },
        {
          $and: [
            { user1Profile: recipientProfile._id },
            { user2Profile: userProfile._id },
          ],
        },
      ],
    });

    if (conversation) {
      res.status(409);
      throw new Error(
        "Conversation between this user and recipient already exists."
      );
    }

    conversation = await Conversation.create({
      user1Profile: userProfile._id,
      user2Profile: recipientProfile._id,
    });

    conversation = await conversation
      .populate("user1Profile", "userId photos firstName lastName")
      .populate("user2Profile", "userId photos firstName lastName")
      .execPopulate();

    res.status(200).json(conversation);
  } catch (error) {
    next(error);
  }
});
