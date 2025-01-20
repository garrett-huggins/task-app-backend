import { Request, Response } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  getTaskById,
  updateTaskById,
} from "../services/tasks.service";

/**
 * Validates task by ID, then returns the task if it exists
 */
const validateTask = async (id: number, res: Response) => {
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }
  const task = await getTaskById(id);
  if (!task) {
    res.status(404).json({ error: "Task not found" });
    return;
  }
  return task;
};

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await getTasks();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const task = await validateTask(Number(req.params.id), res);
    if (task) {
      res.status(200).json({ task });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const addTask = async (req: Request, res: Response) => {
  try {
    const task = await createTask(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await validateTask(Number(req.params.id), res);
    if (task) {
      const updatedTask = await updateTaskById(Number(req.params.id), req.body);
      res.status(200).json({ task: updatedTask });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const removeTask = async (req: Request, res: Response) => {
  try {
    const task = await validateTask(Number(req.params.id), res);
    if (task) {
      await deleteTask(task.id);
      res.status(200).json({ task });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
