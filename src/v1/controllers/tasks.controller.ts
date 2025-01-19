import { Request, Response } from "express";
import { getTasks, createTask } from "../services/tasks.service";

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await getTasks();
    res.status(200).json({ tasks });
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
