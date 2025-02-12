import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import {
  addOneTask,
  deleteTask,
  editTask,
  getTaskById,
  getTasksByUser,
} from "../controllers/taskController.js";

const tasksRouter = express.Router();

tasksRouter.get("", authenticate, getTasksByUser);

tasksRouter.post("", authenticate, addOneTask);

tasksRouter.put("/:id", authenticate, editTask);

tasksRouter.get("/:id", authenticate, getTaskById);

tasksRouter.delete("/:id", authenticate, deleteTask);

export default tasksRouter;
