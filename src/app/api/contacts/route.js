import { successResponse, errorResponse } from "@/utils/apiResponse";
import { connectDatabase } from "@/config/db";
import { Contact } from "@/models/Contact";
import { formatISTTimestamp } from "@/utils/formatDate";

export async function POST(req) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, businessType, interestedServices, message } = body;

    if (!firstName || !lastName || !email) {
      return errorResponse("First name, last name, and email are required fields.", 400);
    }

    let dbSaved = false;
    let dbError = null;
    let newContact = null;

    // 1. Try saving to MongoDB Atlas
    try {
      if (process.env.MONGODB_URI) {
        await connectDatabase();
        newContact = await Contact.create({
          firstName,
          lastName,
          email,
          businessType: businessType || "",
          interestedServices: Array.isArray(interestedServices) ? interestedServices : [],
          message: message || "",
        });
        dbSaved = true;
      } else {
        console.warn("MONGODB_URI is not configured in environment variables.");
      }
    } catch (err) {
      console.error("Error saving contact request to MongoDB:", err);
      dbError = err;
    }

    // 2. Sync to Live Google Sheet Webhook (if URL configured)
    let sheetSaved = false;
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL;
    if (googleSheetWebhookUrl) {
      try {
        await fetch(googleSheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          redirect: "follow",
          body: JSON.stringify({
            timestamp: formatISTTimestamp(new Date()),
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
        sheetSaved = true;
      } catch (sheetErr) {
        console.error("Google Sheets webhook sync error:", sheetErr);
      }
    }

    // If either DB or Google Sheets saved successfully, return success to the user!
    if (dbSaved || sheetSaved) {
      return successResponse(newContact, "Contact request saved & synced successfully!", 201);
    }

    // If MongoDB URI was provided but failed, and Google Sheets wasn't reached, throw DB error
    if (dbError) {
      return errorResponse(dbError.message || "Failed to save contact request", 500);
    }

    // If neither MONGODB_URI nor GOOGLE_SHEET_WEBHOOK_URL was set in production
    return errorResponse("Database connection not configured in live environment. Please set MONGODB_URI in your server environment variables.", 500);
  } catch (error) {
    console.error("Error processing contact request:", error);
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
