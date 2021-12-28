import { Request, Response } from "express";

export const secret = (req: Request, res: Response) => {
  // eslint-disable-next-line dot-notation
  res.send(JSON.stringify(req["tokenData"]));
};
