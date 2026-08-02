import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Projects = () => {

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  const fetchProjects = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await API.get(
        "/project/my-projects",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProjects(res.data.projects);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchProjects();

  }, []);

  const handleDelete = async (id) => {

    try {

      const token = localStorage.getItem("token");

      await API.delete(
        `/project/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Project Deleted Successfully");

      fetchProjects();

    } catch (error) {

      console.log(error);

      alert("Failed to delete project");

    }

  };

  const filteredProjects = projects.filter(
    (project) =>
      project.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      project.prompt
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (

    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        My Projects
      </h1>

      <input
        type="text"
        placeholder="Search Projects..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full bg-gray-900 p-4 rounded-lg mb-8"
      />

      {filteredProjects.length === 0 ? (

        <h2>No Projects Found</h2>

      ) : (

        <div className="grid gap-5">

          {filteredProjects.map((project) => (

            <div
              key={project._id}
              className="bg-gray-900 p-5 rounded-lg"
            >

              <div className="flex justify-between items-center">

                <div
                  className="cursor-pointer flex-1"
                  onClick={() =>
                    navigate(
                      "/project-details",
                      {
                        state: project,
                      }
                    )
                  }
                >

                  <h2 className="text-2xl font-bold">
                    {project.title}
                  </h2>

                  <p className="mt-3">
                    {project.prompt}
                  </p>

                </div>

                <button
                  onClick={() =>
                    handleDelete(project._id)
                  }
                  className="bg-red-500 px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

};

export default Projects;