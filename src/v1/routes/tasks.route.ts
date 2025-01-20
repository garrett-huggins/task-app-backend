import { Router } from "express";
import {
  getAllTasks,
  addTask,
  removeTask,
  getTask,
  updateTask,
} from "../controllers/tasks.controller";
import { createTaskSchema, updateTaskSchema } from "../schemas/tasks";
import { validateSchema } from "../middleware/validation";

const router = Router();
router.get("/", getAllTasks);
router.post("/", validateSchema(createTaskSchema), addTask);
router.get("/:id", getTask);
router.put("/:id", validateSchema(updateTaskSchema), updateTask);
router.delete("/:id", removeTask);

export default router;
