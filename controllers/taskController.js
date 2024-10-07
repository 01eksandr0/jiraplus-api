import { Task } from "../models/task.js";

export const addOneTask = async (req, res, next) => {
  const { _id } = req.user;

  const task = await Task.create({ ...req.body, creater: _id });
  res.status(201).json(task);
};
