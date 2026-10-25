const mongoose = require("mongoose");
const uploadedDocumentSchema = new mongoose.Schema(
  {
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    fileUrl: String,
    mimeType: String,
    ExtractedText: String,
    chunks: [
      {
        text: {
          type: String,
          required: true,
        },
        chunkIndex: {
          type: Number,
        },
      },
    ],
    status: {
      type: String,
      enum: ["uploaded", "processing", "processed"],
      default: "uploaded",
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("UploadedDocument", uploadedDocumentSchema);
