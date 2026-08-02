import Project from "../models/Project.js";
import User from "../models/User.js";

export const saveProject = async (req, res) => {

  try {

    const { title, prompt, generatedCode } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    }

    if (user.credits < 10) {

      return res.status(400).json({
        success: false,
        message: "Not enough credits",
      });

    }

    const project = await Project.create({

      userId: req.user.id,

      title,

      prompt,

      generatedCode,

    });

    user.credits -= 10;

    await user.save();

    res.status(201).json({

      success: true,

      project,

      remainingCredits: user.credits,

    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

export const getProjects = async (req, res) => {

  try {

    const projects = await Project.find({
      userId: req.user.id,
    });

    res.status(200).json({
      success: true,
      projects,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

export const deleteProject = async (req, res) => {

  try {

    const project = await Project.findById(
      req.params.id
    );

    if (!project) {

      return res.status(404).json({
        success: false,
        message: "Project not found",
      });

    }

    await Project.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Project deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

export const updateProject = async (req, res) => {

  try {

    const { title, prompt, generatedCode } =
      req.body;

    const project = await Project.findById(
      req.params.id
    );

    if (!project) {

      return res.status(404).json({
        success: false,
        message: "Project not found",
      });

    }

    project.title = title;
    project.prompt = prompt;
    project.generatedCode =
      generatedCode;

    await project.save();

    res.status(200).json({
      success: true,
      project,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};