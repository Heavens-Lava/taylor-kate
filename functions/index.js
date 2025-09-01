const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { initializeApp } = require("firebase-admin/app");
const twilio = require("twilio");

// Load .env locally (ignored in Firebase deployment)
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

initializeApp();

// Use Firebase secrets if available, otherwise fall back to .env
const accountSid =
  process.env.TWILIO_ACCOUNT_SID ||
  (() => {
    throw new Error("TWILIO_ACCOUNT_SID not set");
  })();

const authToken =
  process.env.TWILIO_AUTH_TOKEN ||
  (() => {
    throw new Error("TWILIO_AUTH_TOKEN not set");
  })();

const twilioPhone =
  process.env.TWILIO_PHONE ||
  (() => {
    throw new Error("TWILIO_PHONE not set");
  })();

exports.notifyNewAppointment = onDocumentCreated(
  {
    document: "appointments/{appointmentId}",
    // If you use Firebase secrets, uncomment these:
    // secrets: [
    //   defineSecret("TWILIO_ACCOUNT_SID"),
    //   defineSecret("TWILIO_AUTH_TOKEN"),
    //   defineSecret("TWILIO_PHONE"),
    // ],
  },
  async (event) => {
    const data = event.data.data();

    const client = twilio(accountSid, authToken);

    const messageBody = `📅 New appointment:
Service: ${data.service}
Date: ${data.date}
Time: ${data.time}
Name: ${data.name || "N/A"}
Phone: ${data.phone || "N/A"}`;

    try {
      await client.messages.create({
        body: messageBody,
        from: twilioPhone,
        to: "+16026194553", // Your verified number
      });
      console.log("✅ SMS sent!");
    } catch (err) {
      console.error("❌ Failed to send SMS:", err);
    }
  }
);
