import { Request, Response } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  getTaskById,
  updateTaskById,
} from "../services/tasks.service";

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
    const task = await getTaskById(Number(req.params.id));
    res.status(200).json({ task });
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
    const task = await updateTaskById(Number(req.params.id), req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const removeTask = async (req: Request, res: Response) => {
  try {
    const task = await deleteTask(Number(req.params.id));
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
