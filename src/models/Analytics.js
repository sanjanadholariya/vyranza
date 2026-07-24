import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    metric: { type: String, required: true },
    value: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Analytics = mongoose.models.Analytics || mongoose.model("Analytics", analyticsSchema);
