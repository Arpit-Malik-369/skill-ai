const mongoose = require("mongoose");
const trainingRecordSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    status: {
      type: String,
      enum: ["enrolled", "in_Progress", "Completed"],
      default: "enrolled",
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    startedAt: Date,
    completedAt: Date,
    certificateUrl: String,
  },
  { timestamps: true },
);
module.exports = mongoose.model("TrainingRecord", trainingRecordSchema);
