import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    businessType: { type: String, default: "", trim: true },
    interestedServices: { type: [String], default: [] },
    message: { type: String, default: "", trim: true },
    status: { type: String, enum: ["new", "contacted", "converted", "closed"], default: "new" },
  },
  { timestamps: true }
);

export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
