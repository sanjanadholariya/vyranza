import { successResponse, errorResponse } from "@/utils/apiResponse";
import { connectDatabase } from "@/config/db";
import { Contact } from "@/models/Contact";
import { formatISTTimestamp } from "@/utils/formatDate";

export async function GET() {
  try {
    await connectDatabase();
    const contacts = await Contact.find({}).sort({ createdAt: 1 });

    const googleSheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!googleSheetWebhookUrl) {
      return errorResponse("GOOGLE_SHEET_WEBHOOK_URL is not configured in .env", 400);
    }

    let syncedCount = 0;
    const errors = [];

    for (const contact of contacts) {
      try {
        const res = await fetch(googleSheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          redirect: "follow",
          body: JSON.stringify({
            timestamp: formatISTTimestamp(contact.createdAt || new Date()),
            firstName: contact.firstName || "",
            lastName: contact.lastName || "",
            email: contact.email || "",
            businessType: contact.businessType || "N/A",
            interestedServices: Array.isArray(contact.interestedServices)
              ? contact.interestedServices.join(", ")
              : contact.interestedServices || "",
            message: contact.message || "N/A",
          }),
        });

        const text = await res.text();
        if (text.includes("You need access") || text.includes("Drive")) {
          return errorResponse(
            "Google Sheet permission error: 'Who has access' must be set to 'Anyone' in your Google Apps Script deployment settings.",
            403
          );
        }

        syncedCount++;
      } catch (err) {
        errors.push({ email: contact.email, error: err.message });
      }
    }

    return successResponse(
      { syncedCount, totalContacts: contacts.length, errors },
      `Successfully synced ${syncedCount} contacts to your Google Sheet!`
    );
  } catch (error) {
    console.error("Error syncing contacts to Google Sheet:", error);
    return errorResponse("Failed to sync contacts to Google Sheet", 500);
  }
}
