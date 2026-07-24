import jwt from "jsonwebtoken";
import { ENV } from "@/config/env.js";
import { errorResponse } from "@/utils/apiResponse.js";

export function authenticateRequest(req) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return { error: errorResponse("Access denied. No token provided.", 401), user: null };
  }

  try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    return { error: null, user: decoded };
  } catch (_err) {
    return { error: errorResponse("Invalid or expired token.", 403), user: null };
  }
}
