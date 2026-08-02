import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

const ProjectDetails = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const project = location.state;

  const [isEditing, setIsEditing] =
    useState(false);

  const [title, setTitle] =
    useState(project?.title || "");

  const [prompt, setPrompt] =
    useState(project?.prompt || "");

  const [generatedCode, setGeneratedCode] =
    useState(project?.generatedCode || "");

  if (!project) {

    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        Project Not Found
      </div>
    );

  }

  const handleCopyCode = () => {

    navigator.clipboard.writeText(
      generatedCode
    );

    alert("Code Copied Successfully");

  };

  const handleDownload = () => {

    const element =
      document.createElement("a");

    const file = new Blob(
      [generatedCode],
      {
        type: "text/html",
      }
    );

    element.href =
      URL.createObjectURL(file);

    element.download =
      "website.html";

    document.body.appendChild(
      element
    );

    element.click();

    document.body.removeChild(
      element
    );

  };

  const handleUpdate = async () => {

    try {

      const token =
        localStorage.getItem("token");

      await API.put(
        `/project/update/${project._id}`,
        {
          title,
          prompt,
          generatedCode,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "Project Updated Successfully"
      );

      setIsEditing(false);

    } catch (error) {

      console.log(error);

      alert("Update Failed");

    }

  };

  return (

    <div className="bg-black min-h-screen text-white p-10">

      {isEditing ? (

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="bg-gray-800 p-3 rounded w-full mb-5"
        />

      ) : (

        <h1 className="text-4xl font-bold mb-5">
          {title}
        </h1>

      )}

      {isEditing ? (

        <textarea
          value={prompt}
          onChange={(e) =>
            setPrompt(e.target.value)
          }
          className="bg-gray-800 p-3 rounded w-full mb-5"
        />

      ) : (

        <p className="mb-5">
          {prompt}
        </p>

      )}

      <div className="flex gap-4 mb-10">

        <button
          onClick={() =>
            navigate("/preview", {
              state: {
                ...project,
                generatedCode,
              },
            })
          }
          className="bg-green-500 px-6 py-3 rounded-lg"
        >
          Live Preview
        </button>

        <button
          onClick={handleCopyCode}
          className="bg-blue-500 px-6 py-3 rounded-lg"
        >
          Copy Code
        </button>

        <button
          onClick={handleDownload}
          className="bg-purple-500 px-6 py-3 rounded-lg"
        >
          Download HTML
        </button>

        <button
          onClick={() =>
            setIsEditing(!isEditing)
          }
          className="bg-yellow-500 px-6 py-3 rounded-lg"
        >
          Edit
        </button>

        {isEditing && (

          <button
            onClick={handleUpdate}
            className="bg-red-500 px-6 py-3 rounded-lg"
          >
            Save Changes
          </button>

        )}

      </div>

      <div className="bg-gray-900 p-5 rounded-lg">

        <h2 className="text-2xl font-bold mb-5">
          Generated Code
        </h2>

        {isEditing ? (

          <textarea
            value={generatedCode}
            onChange={(e) =>
              setGeneratedCode(
                e.target.value
              )
            }
            className="w-full h-[400px] bg-gray-800 p-5 rounded-lg"
          />

        ) : (

          <pre className="whitespace-pre-wrap overflow-auto bg-gray-800 p-5 rounded-lg">
            {generatedCode}
          </pre>

        )}

      </div>

    </div>

  );

};

export default ProjectDetails;