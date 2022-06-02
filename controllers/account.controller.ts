import { NextFunction, Request, Response } from "express";
import Moralis from "moralis/node";
import { HttpError } from "../errors/http-error";
import { TNetwork } from "../models/network";

/**
 * get SOL balance for a given address
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 */
export const getBalance = async (
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

    const solBalance = await Moralis.SolanaAPI.account.balance(options);

    return res.json({ status: true, result: solBalance });
  } catch (e) {
    next(e);
  }
};

/**
 * get SPL token balance for a given address
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 */
export const getSPL = async (
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

    const tokenBalance = await Moralis.SolanaAPI.account.getSPL(options);

    return res.json({ status: true, result: tokenBalance });
  } catch (e) {
    next(e);
  }
};

/**
 * get SPL NFT balance for a given address
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 */
export const getNft = async (
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

    const nftBalance = await Moralis.SolanaAPI.account.getNFTs(options);

    return res.json({ status: true, result: nftBalance });
  } catch (e) {
    next(e);
  }
};

/**
 * get portfolio (SOL balance, SPL token balance, SPL NFT balance) for a given address
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 */
export const getPortfolio = async (
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

    const portfolio = await Moralis.SolanaAPI.account.getPortfolio(options);

    return res.json({ status: true, result: portfolio });
  } catch (e) {
    next(e);
  }
};
