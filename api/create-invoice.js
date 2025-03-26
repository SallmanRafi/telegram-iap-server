import axios from 'axios';

const BOT_TOKEN = process.env.BOT_TOKEN;
const PROVIDER_TOKEN = process.env.PROVIDER_TOKEN;

export default async function handler(req, res) {
  const { chat_id, payload } = req.query;

  const invoice = {
    chat_id,
    title: "100 Coins",
    description: "Buy 100 coins for your game!",
    payload,
    provider_token: PROVIDER_TOKEN,
    currency: "USD",
    prices: [{ label: "100 Coins", amount: 100 }]
  };

  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendInvoice`, invoice);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
