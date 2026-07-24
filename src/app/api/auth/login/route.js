import { successResponse } from "@/utils/apiResponse.js";
import { connectDatabase } from "@/config/db.js";

export async function POST(_req) {
  await connectDatabase();
  return successResponse({ token: "placeholder_token" }, "Login route placeholder");
}
