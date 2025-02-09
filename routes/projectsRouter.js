import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import {
  addOneProject,
  deleteProject,
  getOneProgect,
  getProgectsUser,
  updateProject,
} from "../controllers/projectsControllers.js";

const projectsRouter = express.Router();

projectsRouter.post("", authenticate, addOneProject);

projectsRouter.get("", authenticate, getProgectsUser);

projectsRouter.get("/:id", authenticate, getOneProgect);

projectsRouter.put("/:id", authenticate, updateProject);

projectsRouter.delete("/:id", authenticate, deleteProject);

export default projectsRouter;
