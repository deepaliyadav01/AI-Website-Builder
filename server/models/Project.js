import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(

  {

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    title: {
      type: String,
      required: true,
    },

    prompt: {
      type: String,
      required: true,
    },

    generatedCode: {
      type: String,
      required: true,
    },

  },

  {
    timestamps: true,
  }

);

const Project = mongoose.model(
  "Project",
  projectSchema
);

export default Project;