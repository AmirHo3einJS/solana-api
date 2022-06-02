import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import Moralis from "moralis/node";
import { HttpError } from "../errors/http-error";
import { TNetwork } from "../models/network";

/**
 * get metadata for a given SPL NFT address
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 */
export const getNftMetadata = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { address, network } = req.query;
    if (!address) throw new HttpError(400, "You must provide an address");

    const options = {
      network: (network as TNetwork) ?? "mainnet",
      address: address as string,
    };

    const nftMetadata = await Moralis.SolanaAPI.nft.getNFTMetadata(options);

    return res.json({ status: true, result: nftMetadata });
  } catch (e) {
    next(e);
  }
};
