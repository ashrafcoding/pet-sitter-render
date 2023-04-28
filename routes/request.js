const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const {
  createRequest,
  userRequests,
  updateStatus,
} = require("../controllers/request");

router.route("/").post(protect, createRequest);
router.route("/:currentTime").get(protect, userRequests);
router.route("/").patch(protect, updateStatus);

module.exports = router;
