import { z, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateSchema = (schema: z.ZodObject<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  };
};
