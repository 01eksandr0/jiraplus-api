import { Project } from "../models/project.js";
import { User } from "../models/user.js";

export const addOneProject = async (req, res, next) => {
  const { _id } = req?.user;
  const project = await Project.create({
    ...req?.body,
    creater: _id,
    users: [_id],
  });
  await User.findByIdAndUpdate(req.user._id, {
    $push: { projects: project._id },
  });
  res.status(201).json(project);
};

export const getProgectsUser = async (req, res) => {
  try {
    const projects = await Project.find({
      users: { $in: [req.query?.userId] },
    });
    res.json(projects);
  } catch (error) {}
};
