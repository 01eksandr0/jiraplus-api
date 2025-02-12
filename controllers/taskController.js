import { Task } from "../models/task.js";

export const addOneTask = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const task = await Task.create({ ...req.body, creater: _id });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params?.id);
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Server Error" });
  }
};

export const editTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params?.id, req.body, {
      new: true,
    });
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getTasksByUser = async (req, res, next) => {
  try {
    const tasks = await Task.find({ users: { $in: [req.body.userId] } });
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
