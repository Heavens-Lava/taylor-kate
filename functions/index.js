const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { initializeApp } = require("firebase-admin/app");
const { defineSecret } = require("firebase-functions/params");
const twilio = require("twilio");

initializeApp();

const accountSid = defineSecret("ACd4d8bfd2a30d6ef63e6b7f110b14ed11");
const authToken = defineSecret("d3b405b3eaa86841f2d3054dfee38318");
const twilioPhone = defineSecret("+18333864836");

exports.notifyNewAppointment = onDocumentCreated(
  {
    document: "appointments/{appointmentId}",
    secrets: [accountSid, authToken, twilioPhone],
  },
  async (event) => {
    const data = event.data.data();

    const client = twilio(accountSid.value(), authToken.value());

    const messageBody = `📅 New appointment:
Service: ${data.service}
Date: ${data.date}
Time: ${data.time}
Name: ${data.name || "N/A"}
Phone: ${data.phone || "N/A"}`;

    try {
      await client.messages.create({
        body: messageBody,
        from: twilioPhone.value(),
        to: "+16026194553", // Your verified number
      });
      console.log("✅ SMS sent!");
    } catch (err) {
      console.error("❌ Failed to send SMS:", err);
    }
  }
);
