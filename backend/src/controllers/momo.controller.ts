import { Request, Response } from "express";
import { requestToPay, checkPaymentStatus } from "../services/momo.service";

export async function initiatePayment(req: Request, res: Response) {
  try {
    const { amount, phoneNumber } = req.body;
    const referenceId = await requestToPay(amount, phoneNumber);
    res.json({ success: true, referenceId });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
}

export async function getPaymentStatus(req: Request, res: Response) {
  try {
    const { referenceId } = req.params;
    const status = await checkPaymentStatus(referenceId);
    res.json({ success: true, status });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
}
