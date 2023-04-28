const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { validateSendMessage } = require("../validate");
const { sendMessage } = require("../controllers/message");

router.route("/").post(protect, validateSendMessage, sendMessage);

module.exports = router;
