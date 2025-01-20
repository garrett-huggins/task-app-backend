import { z } from "zod";

const TaskColors = [
  "none",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
] as const;

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  color: z.enum(TaskColors),
});

export type CreateTaskDto = z.infer<typeof createTaskSchema>;

export const updateTaskSchema = z.object({
  title: z.string().min(1, "Title is required").max(255).optional(),
  color: z.enum(TaskColors).optional(),
  completed: z.boolean().optional(),
});

export type UpdateTaskDto = z.infer<typeof updateTaskSchema>;
