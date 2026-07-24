import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    contactEmail: { type: String, required: true },
  },
  { timestamps: true }
);

export const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);
