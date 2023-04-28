const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = new Schema(
  {
    user1Profile: {
      type: Schema.Types.ObjectId,
      ref: "profile",
    },
    user2Profile: {
      type: Schema.Types.ObjectId,
      ref: "profile",
    },
    latestMessage: {
      type: Schema.Types.ObjectId,
      ref: "message",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = Conversation = mongoose.model(
  "conversation",
  conversationSchema
);
