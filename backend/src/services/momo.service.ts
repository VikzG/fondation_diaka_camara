import axios from "axios";
import crypto from "crypto";
import { momoConfig } from "../config/momo.config";

export async function generateToken() {
  const response = await axios.post(
    "https://sandbox.momodeveloper.mtn.com/collection/token/",
    {},
    {
      auth: { username: momoConfig.apiUser, password: momoConfig.apiKey },
      headers: { "Ocp-Apim-Subscription-Key": momoConfig.subscriptionKey },
    }
  );
  return response.data.access_token;
}

export async function requestToPay(amount: string, phoneNumber: string) {
  const token = await generateToken();
  const referenceId = crypto.randomUUID();

  await axios.post(
    `${momoConfig.baseUrl}/requesttopay`,
    {
      amount,
      currency: "XOF",
      externalId: referenceId,
      payer: { partyIdType: "MSISDN", partyId: phoneNumber },
      payerMessage: "Paiement Gala",
      payeeNote: "Merci pour votre don",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Reference-Id": referenceId,
        "X-Target-Environment": momoConfig.environment,
        "Ocp-Apim-Subscription-Key": momoConfig.subscriptionKey,
        "Content-Type": "application/json",
      },
    }
  );

  return referenceId;
}

export async function checkPaymentStatus(referenceId: string) {
  const token = await generateToken();
  const response = await axios.get(
    `${momoConfig.baseUrl}/requesttopay/${referenceId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Target-Environment": momoConfig.environment,
        "Ocp-Apim-Subscription-Key": momoConfig.subscriptionKey,
      },
    }
  );
  return response.data;
}
