import { Request, Response } from "express";

const createUSerController = async (req: Request, res: Response) => {
  return res.status(201).json("usuario criado");
};

export { createUSerController };
