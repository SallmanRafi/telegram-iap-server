# Telegram IAP Server (Vercel Backend)

This is a simple Node.js backend to handle Telegram game in-app purchases using the `sendInvoice` API.

## 📂 Files
- `/api/create-invoice.js` - Sends an invoice to a user
- `/api/webhook.js` - Handles payment confirmation from Telegram
- `vercel.json` - Routing and build config for Vercel

## 🛠️ How to Use

1. Push this code to a GitHub repo.
2. Deploy it to Vercel.
3. Set the environment variables:
   - `BOT_TOKEN`
   - `PROVIDER_TOKEN`
4. Set your Telegram bot webhook to:
```
https://your-vercel-app.vercel.app/api/webhook
```
5. Call the `create-invoice` endpoint from Unity like so:
```
https://your-vercel-app.vercel.app/api/create-invoice?chat_id=YOUR_CHAT_ID&payload=game_purchase_100_coins
```
