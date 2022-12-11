import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const createProject = async (req, res) => {
  try {
    const { name, description, priority } = req.body;

    const newProject = await Project.create({
      name,
      description,
      priority,
    });

    res.send({ message: "creating project" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();

    res.json(projects);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, priority } = req.body;

    const projectUpdated = await Project.findByPk(id);

    projectUpdated.name = name;
    projectUpdated.description = description;
    projectUpdated.priority = priority;

    await projectUpdated.save();
    res.json({ message: "project updated" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      where: {
        id,
      },
    });
    res.status(204).json({ message: "elemento borrado!" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
export const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const projectFound = await Project.findOne({
      where: {
        id,
      },
    });
    res.json(projectFound);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const getProjectTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const projectTasks = await Task.findAll({
      where: {
        projectId: id,
      },
    });
    res.status(200).json(projectTasks);
  } catch (error) {
    return res.json({ message: error.message });
  }
};
