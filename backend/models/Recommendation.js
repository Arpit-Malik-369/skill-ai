const mongoose = require("mongoose");
const recommendationSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    competency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Competency",
      required: true,
    },
    currentLevel: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    requiredLevel: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    skillGap: {
      type: Number,
      required: true,
      min: 0,
    },
    recommendedCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    reason: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "dismissed"],
      default: "pending",
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Recommendation", recommendationSchema);
