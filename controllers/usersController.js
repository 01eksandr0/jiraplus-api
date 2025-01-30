import { User } from "../models/user.js";
import mongoose from "mongoose";

export const getAllUsers = async (req, res, next) => {
  try {
    const projectId = req?.query?.projectId;

    const users = projectId
      ? await User.find({ projects: { $in: [projectId] } })
      : await User.find();

    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getOneUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req?.params?.id });
    res.json(user);
  } catch (error) {}
};

export const getUsersSudgest = async (req, res, next) => {
  try {
    const search = req?.query?.search;
    const id = req?.params?.id;

    if (!search) {
      return res.status(400).json({ message: "Search query is required" });
    }

    if (id === "users") {
      const users =
        (await User.find({
          $or: [
            { email: { $regex: search, $options: "i" } },
            { full_name: { $regex: search, $options: "i" } },
            ...(mongoose.Types.ObjectId.isValid(search)
              ? [{ _id: search }]
              : []),
          ],
        })) || [];

      res.status(200).json(users);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching users" });
  }
};
