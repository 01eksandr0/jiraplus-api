import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import authRouter from "./routes/authRouter.js";
import projectsRouter from "./routes/projectsRouter.js";
import tasksRouter from "./routes/tasksRouter.js";
import usersRouter from "./routes/usersRouter.js";
import sudgestRouter from "./routes/sudgestRoutes.js";

configDotenv();
const URL = process.env.URL_DB || "";
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());

app.use("/api/auth", authRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/tasks", tasksRouter);
app.use("/api/users", usersRouter);
app.use("/api/sudgest", sudgestRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(URL)
  .then(() => {
    app.listen(5357, () => {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });
