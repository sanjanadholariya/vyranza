import { successResponse, errorResponse } from "@/utils/apiResponse";
import { connectDatabase } from "@/config/db";
import { Contact } from "@/models/Contact";

export async function POST(req) {
  try {
    await connectDatabase();
    const body = await req.json();

    const { firstName, lastName, email, businessType, interestedServices, message } = body;

    if (!firstName || !lastName || !email) {
      return errorResponse("First name, last name, and email are required fields.", 400);
    }

    // 1. Save to MongoDB Atlas
    const newContact = await Contact.create({
      firstName,
      lastName,
      email,
      businessType: businessType || "",
      interestedServices: Array.isArray(interestedServices) ? interestedServices : [],
      message: message || "",
    });

    // 2. Sync to Live Google Sheet Webhook (if URL configured)
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (googleSheetWebhookUrl) {
      try {
        await fetch(googleSheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          redirect: "follow",
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            firstName,
            lastName,
            email,
            businessType: businessType || "N/A",
            interestedServices: Array.isArray(interestedServices)
              ? interestedServices.join(", ")
              : interestedServices,
            message: message || "N/A",
          }),
        });
      } catch (sheetErr) {
        console.error("Google Sheets webhook sync error:", sheetErr);
        // Non-blocking error so user request succeeds
      }
    }

    return successResponse(newContact, "Contact request saved & synced successfully!", 201);
  } catch (error) {
    console.error("Error saving contact request to MongoDB:", error);
    return errorResponse(error.message || "Failed to save contact request", 500);
  }
}

export async function GET() {
  try {
    await connectDatabase();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return successResponse(contacts, "Contacts fetched successfully");
  } catch (error) {
    console.error("Error fetching contacts from MongoDB:", error);
    return errorResponse("Failed to fetch contacts", 500);
  }
}
