const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { validateCreateConversation } = require("../validate");
const {
  getAllConversations,
  getConversation,
  createConversation,
} = require("../controllers/conversation");

router.route("/").get(protect, getAllConversations);

router.route("/:conversationId").get(protect, getConversation);

router.route("/").post(protect, validateCreateConversation, createConversation);

module.exports = router;
