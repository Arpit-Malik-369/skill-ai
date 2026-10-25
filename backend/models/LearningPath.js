const mongoose = require("mongoose");
const learnibngPathSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },
    ],
    status: {
      type: String,
      enum: ["not started", "in progress", "completed"],
      default: "not started",
    },
    generateBy: {
      type: String,
      enum: ["manual", "ai"],
      default: "ai",
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("LearningPath", learnibngPathSchema);
