const mongoose = require("mongoose");
const employeeProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    skills: [
      {
        name: {
          type: String,
          required: true,
        },
        level: {
          type: Number,
          min: 0,
          max: 5,
          default: 0,
        },
      },
    ],
    education: [
      {
        degree: String,
        institution: String,
        field: String,
        year: Number,
      },
    ],
    experience: [
      {
        organization: String,
        designation: String,
        years: Number,
        description: String,
      },
    ],
    careerGoals: [String],
    previousTraining: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TrainingRecord",
      },
    ],
  },
  { timestamps: true },
);
module.exports = mongoose.model("EmployeeProfile", employeeProfileSchema);
