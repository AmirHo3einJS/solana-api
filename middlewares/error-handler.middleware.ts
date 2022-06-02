import { ErrorRequestHandler } from "express";
import { HttpError } from "../errors/http-error";

export const handleError: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({ status: false, msg: err.message });
  }

  next(err);
};
