const mongoose = require("mongoose");
const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    competency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Competency",
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    questions: [
      {
        question: {
          type: String,
          required: true,
        },
        options: {
          type: [String],
          required: true,
        },
        correctAnswer: {
          type: Number,
          required: true,
          min: 0,
        },
        explanation: String,
        marks: {
          type: Number,
          default: 1,
          min: 0,
        },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Quiz", quizSchema);
