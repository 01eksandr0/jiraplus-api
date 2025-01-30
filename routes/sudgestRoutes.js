import express from "express";
import { getUsersSudgest } from "../controllers/usersController.js";

const sudgestRouter = express.Router();

sudgestRouter.get("/:id", getUsersSudgest);

export default sudgestRouter;
