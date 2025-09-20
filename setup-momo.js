import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// 👉 Mets ici ta clé Subscription récupérée dans le MoMo Developer Portal
const subscriptionKey = "8ee4670acd7d4beaa0695a44bcd51880";

// 1. Créer un API User
async function createApiUser() {
  const apiUser = uuidv4(); // identifiant unique

  try {
    await axios.post(
      "https://sandbox.momodeveloper.mtn.com/v1_0/apiuser",
      { providerCallbackHost: "localhost" },
      {
        headers: {
          "Ocp-Apim-Subscription-Key": subscriptionKey,
          "X-Reference-Id": apiUser,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ API User créé :", apiUser);

    return apiUser;
  } catch (err) {
    console.error("❌ Erreur création API User :", err.response?.data || err.message);
    process.exit(1);
  }
}

// 2. Générer une API Key pour ce user
async function generateApiKey(apiUser) {
  try {
    const response = await axios.post(
      `https://sandbox.momodeveloper.mtn.com/v1_0/apiuser/${apiUser}/apikey`,
      {},
      {
        headers: { "Ocp-Apim-Subscription-Key": subscriptionKey },
      }
    );

    console.log("✅ API Key générée :", response.data.apiKey);
    return response.data.apiKey;
  } catch (err) {
    console.error("❌ Erreur génération API Key :", err.response?.data || err.message);
    process.exit(1);
  }
}

// Exécution
(async () => {
  const apiUser = await createApiUser();
  const apiKey = await generateApiKey(apiUser);

  console.log("\n🎉 Mets ces infos dans ton fichier .env :\n");
  console.log("MOMO_SUBSCRIPTION_KEY=" + subscriptionKey);
  console.log("MOMO_API_USER=" + apiUser);
  console.log("MOMO_API_KEY=" + apiKey);
})();
