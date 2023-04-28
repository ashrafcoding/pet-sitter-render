const mongoose = require("mongoose");
const Message = require("../models/Message");
const asyncHandler = require("express-async-handler");
const Conversation = require("../models/Conversation");

// @route POST /messages
// @desc Send a message
// @access private
exports.sendMessage = asyncHandler(async (req, res, next) => {
  try {
    const { conversationId, text, recipientProfileId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(conversationId)) {
      res.status(400);
      throw new Error("Invalid conversationId");
    }

    if (!mongoose.Types.ObjectId.isValid(recipientProfileId)) {
      res.status(400);
      throw new Error("Invalid recipientProfileId");
    }

    const recipientProfile = await Profile.findOne({ _id: recipientProfileId });

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

    const conversation = await Conversation.findOne({
      _id: conversationId,
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

    if (!conversation) {
      res.status(404);
      throw new Error(
        "Couldn't find a conversation with the conversationId and participants"
      );
    }

    let message = await Message.create({
      conversation: conversation._id,
      senderProfile: userProfile._id,
      text,
      recipientRead: false,
    });

    conversation.latestMessage = message._id;
    await conversation.save();
    message = await message
      .populate("senderProfile", "userId photos firstName lastName")
      .execPopulate();

    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
});
