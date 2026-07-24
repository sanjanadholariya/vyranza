import { errorResponse } from "@/utils/apiResponse.js";

export async function validateRequestBody(req, schema) {
  try {
    const body = await req.json();
    const validatedData = schema.parse(body);
    return { data: validatedData, error: null };
  } catch (err) {
    if (err.errors) {
      const message = err.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ");
      return { data: null, error: errorResponse(message, 400) };
    }
    return { data: null, error: errorResponse("Invalid request body payload", 400) };
  }
}
