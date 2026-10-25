const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    skills: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Competency",
      },
    ],
    category: String,
    diffculty: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
    duration: {
      type: Number,
      min: 0,
      required: true,
    },
    source: {
      name: String,
      url: String,
      type: {
        type: String,
        enum: ["video", "article", "document", "course", "other"],
      },
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Course", courseSchema);
