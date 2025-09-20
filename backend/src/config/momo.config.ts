export const momoConfig = {
  subscriptionKey: process.env.MOMO_SUBSCRIPTION_KEY!,
  apiUser: process.env.MOMO_API_USER!,
  apiKey: process.env.MOMO_API_KEY!,
  environment: process.env.MOMO_ENVIRONMENT || "sandbox",
  baseUrl: "https://sandbox.momodeveloper.mtn.com/collection/v1_0",
};
