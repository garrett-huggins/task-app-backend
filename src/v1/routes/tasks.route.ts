import { Router } from "express";
import { getAllTasks, addTask } from "../controllers/tasks.controller";

const router = Router();
router.get("/tasks", getAllTasks);
router.post("/tasks", addTask);

export default router;
