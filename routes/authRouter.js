import express from "express";
import {
  loginUser,
  logoutUser,
  registrUser,
} from "../controllers/authController.js";
import { authenticate } from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post("/register", registrUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", authenticate, logoutUser);

export default authRouter;
