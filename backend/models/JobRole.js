const mongoose = require("mongoose");
const jobRoleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    department: String,
    description: String,
    competencyRequirements: [
      {
        competency: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Competency",
        },
        requiredLevel: {
          type: Number,
          min: 0,
          max: 5,
          required: true,
        },
      },
    ],
  },
  { timestamps: true },
);
module.exports = mongoose.model("JobRole", jobRoleSchema);
