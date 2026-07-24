import { successResponse } from "@/utils/apiResponse.js";
import { connectDatabase } from "@/config/db.js";

export async function GET() {
  await connectDatabase();
  return successResponse(
    { status: "ok", timestamp: new Date().toISOString() },
    "Vyranza API is healthy"
  );
}
