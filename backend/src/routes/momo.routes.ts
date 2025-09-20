import { Router } from "express";
import { initiatePayment, getPaymentStatus } from "../controllers/momo.controller";

const router = Router();

router.post("/pay", initiatePayment);
router.get("/status/:referenceId", getPaymentStatus);

export default router;
