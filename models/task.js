import { Schema, model, Types } from "mongoose";

const task = new Schema({
  creater: {
    type: Types.ObjectId,
    ref: "users",
    required: true,
  },
  user: {
    type: Types.ObjectId,
    ref: "users",
    required: false,
  },
  project: {
    type: Types.ObjectId,
    ref: "projects",
    required: true,
  },
  status: {
    type: String,
    enum: ["todo", "inprogress", "qa", "done"],
    default: "todo",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  timesheet: {
    start: {
      type: Date,
      required: false,
    },
    end: {
      type: Date,
      required: false,
    },
  },
  deadline: {
    type: Date,
    required: false,
  },
  comments: [
    {
      user: {
        type: Types.ObjectId,
        ref: "users",
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: false,
  },
});

export const Task = model("tasks", task);
