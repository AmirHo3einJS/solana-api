import { Request } from "express";

export interface IRequest<BodyType> extends Request {
  body: BodyType;
}