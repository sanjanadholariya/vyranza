import { successResponse } from "@/utils/apiResponse.js";
import { connectDatabase } from "@/config/db.js";

export async function POST(_req) {
  await connectDatabase();
  return successResponse({ user: null }, "Register route placeholder");
}
