import { Schema, model, Types } from "mongoose";

const user = new Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  full_name: {
    type: String,
    required: [true, "Full name is required"],
  },
  token: {
    type: String,
    default: null,
  },
  avatar: {
    type: String,
    default: null,
  },
  projects: [
    {
      type: Types.ObjectId,
      ref: "projects",
      required: false,
    },
  ],
  tasks: [
    {
      type: Types.ObjectId,
      ref: "tasks",
      required: false,
    },
  ],
});

export const User = model("users", user);
