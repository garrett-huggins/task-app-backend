import prisma from "../../prisma/client";
import { Task } from "@prisma/client";

export const getTasks = async () => {
  return prisma.task.findMany();
};

export const createTask = async (task: Task) => {
  return prisma.task.create({ data: task });
};
