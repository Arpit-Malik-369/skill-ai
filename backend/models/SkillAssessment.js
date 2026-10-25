const mongoose = require("mongoose");
const skillAssessmentSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    jobRole: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobRole",
    },
    competency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Competency",
      required: true,
    },
    currentLevel: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    requiredLevel: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    gap: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    assessedAt: {
      type: Date,
      default: Date.now,
    },
    assessedBy: {
      type: String,
      enum: ["self", "trainer", "ai"],
      default: "self"
    },
  },

  { timestamps: true },
);

module.exports = mongoose.model("SkillAssessment", skillAssessmentSchema);
