import prisma from "../../prisma/client";
import { CreateTaskDto, UpdateTaskDto } from "../schemas/tasks";

export const getTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getTaskById = async (id: number) => {
  return prisma.task.findUnique({ where: { id } });
};

export const createTask = async (task: CreateTaskDto) => {
  return prisma.task.create({ data: task });
};

export const deleteTask = async (id: number) => {
  return prisma.task.delete({ where: { id } });
};

export const updateTaskById = async (id: number, task: UpdateTaskDto) => {
  return prisma.task.update({ where: { id: id }, data: task });
};
