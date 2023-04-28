const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const {
  createNotification,
  notificationList,
  updateReadStatus,
  notificationCount,
} = require("../controllers/notifications");

router.route("/").post(protect, createNotification);
router.route("/count").get(protect, notificationCount);
router.route("/").get(protect, notificationList);
router.route("/").patch(protect, updateReadStatus);

module.exports = router;
