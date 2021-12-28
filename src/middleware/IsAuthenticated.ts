import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const IsAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization.replace("Bearer", "");
    const validToken = verify(token, process.env.JWT_SALT);
    // eslint-disable-next-line dot-notation
    req["tokenData"] = validToken;
    next();
  } catch (error) {
    res.status(401).json("Unauthorized");
    console.log("Auth Middleware error: " + error);
  }
};
