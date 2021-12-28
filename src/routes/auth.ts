import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

export const auth = (req: Request, res: Response) => {
  const { user, pass } = req.body;

  // TO DO: CHECAGEM NO BANCO.

  const token = sign(
    {
      user,
      pass,
    },
    process.env.JWT_SALT,
    {
      expiresIn: 120,
    }
  );
  res.json({
    token,
  });
};
