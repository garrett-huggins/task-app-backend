import { Router } from "express";
import {
  getAllTasks,
  addTask,
  removeTask,
  getTask,
  updateTask,
} from "../controllers/tasks.controller";

const router = Router();
router.get("/tasks", getAllTasks);
router.post("/tasks", addTask);
router.get("/tasks/:id", getTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", removeTask);

export default router;
