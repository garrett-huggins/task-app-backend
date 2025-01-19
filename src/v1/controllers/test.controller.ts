import { Request, Response } from "express";
import { getTestMessage } from "../services/test.service";

export const testHandler = async (req: Request, res: Response) => {
  try {
    const message = await getTestMessage();
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
