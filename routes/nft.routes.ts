import { Router } from "express";
import { getNftMetadata } from "../controllers/nft.controller";

const router = Router();

router.get("nft-metadata", getNftMetadata);

export default router;
