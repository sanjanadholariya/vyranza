import mongoose from "mongoose";

const crmSchema = new mongoose.Schema(
  {
    leadName: { type: String, required: true },
    status: { type: String, default: "NEW" },
  },
  { timestamps: true }
);

export const Crm = mongoose.models.Crm || mongoose.model("Crm", crmSchema);
