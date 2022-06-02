import { Router } from "express";
import {
  getBalance,
  getNft,
  getPortfolio,
  getSPL,
} from "../controllers/account.controller";

const router = Router();

router.get("/balance", getBalance);
router.get("/nft", getNft);
router.get("/portfolio", getPortfolio);
router.get("/spl", getSPL);

export default router;
