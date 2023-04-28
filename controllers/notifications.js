const Notification = require("../models/Notifications");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

// @route POST /notification
// @desc create a new notification
// @access Private
exports.createNotification = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;

    const { type, title, description } = req.body;

    if (!type && !title && !description) {
      res.status(400).json({
        message: "Bad Request",
      });
    }
    const notificatonModel = {
      userId: ObjectId(userId),
      type,
      title,
      description,
    };

    const notification = await Notification.create(notificatonModel);
    res.status(201).json({
      success: { notification },
    });
  } catch (error) {
    next(error);
  }
});

// @route GET /notification/
// @desc list of notifications; only get read if query unread = true;
// @access Private
exports.notificationList = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { unread } = req.query;

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;

    const options = { userId: ObjectId(userId) };
    if (unread === "true") options.read = false;

    const notifications = await Notification.find(options)
      .sort({ createdAt: "desc" })
      .limit(limit)
      .skip(skipIndex)
      .exec();

    res.status(200).json({
      success: { notifications },
    });
  } catch (error) {
    next(error);
  }
});

// @route UPDATE /notification/
// @desc Update notifications as read
// @access Private
exports.updateReadStatus = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { notificationsToUpd } = req.body;

    if (!notificationsToUpd?.length) {
      return res.status(200).json({
        success: { notifications: [] },
      });
    }

    await Notification.updateMany(
      {
        _id: { $in: notificationsToUpd },
        userId,
      },
      { read: true }
    );

    res.status(200).json({
      success: { notifications: notificationsToUpd },
    });
  } catch (error) {
    next(error);
  }
});

// @route GET /notification/count
// @desc get count of notifications
// @access Private
exports.notificationCount = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { unread } = req.query;

    const options = { userId: ObjectId(userId) };
    if (unread === "true") options.read = false;

    const count = await Notification.countDocuments(options);
    res.status(200).json({
      success: { count },
    });
  } catch (error) {
    next(error);
  }
});
