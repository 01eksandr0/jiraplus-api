import { Project } from "../models/project.js";
import { User } from "../models/user.js";

export const addOneProject = async (req, res, next) => {
  const { _id } = req?.user;
  const project = await Project.create({
    ...req?.body,
    creater: _id,
    users: [...(req?.body?.users || []), _id],
  });

  await User.findByIdAndUpdate(req.user._id, {
    $push: { projects: project._id },
  });
  res.status(201).json(project);
};

export const getProgectsUser = async (req, res) => {
  try {
    const { userId, limit = 10, page = 1 } = req.query;

    const projects = await Project.find({
      users: { $in: [userId] },
    })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getOneProgect = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate("tasks");
    res.json(project);
  } catch (error) {}
};

export const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
