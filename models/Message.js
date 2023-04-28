const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    conversation: {
      type: Schema.Types.ObjectId,
      ref: "conversation",
    },
    text: {
      type: String,
      required: true,
    },
    senderProfile: {
      type: Schema.Types.ObjectId,
      ref: "profile",
    },
    recipientRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = Message = mongoose.model("message", messageSchema);
