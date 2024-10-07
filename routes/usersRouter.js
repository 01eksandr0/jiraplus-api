import express from "express";
import { getAllUsers, getOneUser } from "../controllers/usersController.js";

const usersRouter = express.Router();

usersRouter.get("", getAllUsers);

usersRouter.get("/:id", getOneUser);

export default usersRouter;
