export default async function handler(req, res) {
  const body = req.body;

  if (body.message?.successful_payment) {
    const chatId = body.message.chat.id;
    const payload = body.message.successful_payment.invoice_payload;

    console.log("✅ Payment success from:", chatId, "Payload:", payload);
    // You can store this info in a DB if needed
  }

  res.status(200).send("OK");
}
