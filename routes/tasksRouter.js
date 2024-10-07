import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { addOneTask } from "../controllers/taskController.js";

const tasksRouter = express.Router();

tasksRouter.post("", authenticate, addOneTask);

export default tasksRouter;
