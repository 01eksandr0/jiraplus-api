import { Schema, Types, model } from "mongoose";

const project = new Schema({
  creater: {
    type: Types.ObjectId,
    ref: "users",
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  users: [
    {
      type: Types.ObjectId,
      ref: "users",
      required: false,
    },
  ],
});

export const Project = model("projects", project);
