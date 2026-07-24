import { errorResponse } from "@/utils/apiResponse.js";

export function handleRouteError(err) {
  console.error("[Route Handler Error]:", err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return errorResponse(message, statusCode);
}
