import prisma from "../../prisma/client";
import { Task } from "@prisma/client";

export const getTasks = async () => {
  return prisma.task.findMany();
};

export const getTaskById = async (id: number) => {
  return prisma.task.findUnique({ where: { id } });
};

export const createTask = async (task: Task) => {
  return prisma.task.create({ data: task });
};

export const deleteTask = async (id: number) => {
  return prisma.task.delete({ where: { id } });
};

export const updateTaskById = async (id: number, task: Task) => {
  return prisma.task.update({ where: { id: id }, data: task });
};
