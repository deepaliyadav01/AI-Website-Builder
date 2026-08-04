import Project from "../models/Project.js";
import User from "../models/User.js";

// =========================
// SAVE PROJECT
// =========================
export const saveProject = async (req, res) => {
  try {
    const { title, prompt, generatedCode } = req.body;

    if (!title || !prompt || !generatedCode) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (user.credits < 10) {
      return res.status(400).json({
        success: false,
        message: "Insufficient credits.",
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

    return res.status(201).json({
      success: true,
      message: "Project saved successfully.",
      project,
      remainingCredits: user.credits,
    });

  } catch (error) {

    console.error("Save Project Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =========================
// GET ALL PROJECTS
// =========================
export const getProjects = async (req, res) => {
  try {

    const projects = await Project.find({
      userId: req.user.id,
    });

    return res.status(200).json({
      success: true,
      projects,
    });

  } catch (error) {

    console.error("Get Projects Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =========================
// DELETE PROJECT
// =========================
export const deleteProject = async (req, res) => {
  try {

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    if (project.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access.",
      });
    }

    await Project.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully.",
    });

  } catch (error) {

    console.error("Delete Project Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =========================
// UPDATE PROJECT
// =========================
export const updateProject = async (req, res) => {
  try {

    const { title, prompt, generatedCode } = req.body;

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    if (project.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access.",
      });
    }

    project.title = title;
    project.prompt = prompt;
    project.generatedCode = generatedCode;

    await project.save();

    return res.status(200).json({
      success: true,
      message: "Project updated successfully.",
      project,
    });

  } catch (error) {

    console.error("Update Project Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};