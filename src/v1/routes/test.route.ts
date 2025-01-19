import { Router } from "express";
import { testHandler } from "../controllers/test.controller";

const router = Router();
router.get("/test", testHandler);

export default router;
