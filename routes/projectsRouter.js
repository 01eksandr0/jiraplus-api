import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import {
  addOneProject,
  getProgectsUser,
} from "../controllers/projectsControllers.js";

const projectsRouter = express.Router();

projectsRouter.post("", authenticate, addOneProject);

projectsRouter.get("", authenticate, getProgectsUser);

export default projectsRouter;
