import { User } from "../models/user.js";

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
