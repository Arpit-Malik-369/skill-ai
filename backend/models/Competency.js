const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    category: {
      type: String,
      required: true,
    },
    description: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Competency", Schema);
