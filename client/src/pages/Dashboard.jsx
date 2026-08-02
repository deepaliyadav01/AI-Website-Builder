import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Dashboard = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [projectCount, setProjectCount] = useState(0);
  const [recentProjects, setRecentProjects] = useState([]);

  const fetchUser = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await API.get(
        "/user/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data.user);

    } catch (error) {

      console.log(error);

    }

  };

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

      setProjectCount(
        res.data.projects.length
      );

      setRecentProjects(
        res.data.projects.slice(-5).reverse()
      );

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchUser();
    fetchProjects();

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="bg-black min-h-screen text-white flex">

      <div className="w-[250px] bg-gray-900 p-5">

        <h1 className="text-2xl font-bold mb-10">
          AI Builder
        </h1>

        <div className="flex flex-col gap-5">

          <button
            className="text-left"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>

          <button
            className="text-left"
            onClick={() => navigate("/generate")}
          >
            Generate Website
          </button>

          <button
            className="text-left"
            onClick={() => navigate("/projects")}
          >
            Projects
          </button>

          <button
            className="text-left"
            onClick={() => navigate("/pricing")}
          >
            Pricing
          </button>

          <button
            onClick={handleLogout}
            className="text-left text-red-400"
          >
            Logout
          </button>

        </div>

      </div>

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold">
          Welcome {user?.name}
        </h1>

        <div className="grid grid-cols-4 gap-5 mt-8">

          <div className="bg-gray-900 p-5 rounded-lg">

            <h2 className="text-xl font-bold">
              Total Projects
            </h2>

            <p className="text-3xl mt-2">
              {projectCount}
            </p>

          </div>

          <div className="bg-gray-900 p-5 rounded-lg">

            <h2 className="text-xl font-bold">
              Credits
            </h2>

            <p className="text-3xl mt-2">
              {user?.credits}
            </p>

          </div>

          <div className="bg-gray-900 p-5 rounded-lg">

            <h2 className="text-xl font-bold">
              Subscription
            </h2>

            <p className="text-2xl mt-2">
              {user?.subscription}
            </p>

          </div>

          <div className="bg-gray-900 p-5 rounded-lg">

            <h2 className="text-xl font-bold">
              Email
            </h2>

            <p className="mt-2 break-all">
              {user?.email}
            </p>

          </div>

        </div>

        <div className="bg-gray-900 p-6 rounded-lg mt-10">

          <h2 className="text-2xl font-bold mb-5">
            Recent Projects
          </h2>

          {recentProjects.length === 0 ? (

            <p>No Projects Yet</p>

          ) : (

            <div className="space-y-3">

              {recentProjects.map((project) => (

                <div
                  key={project._id}
                  className="bg-gray-800 p-4 rounded cursor-pointer"
                  onClick={() =>
                    navigate(
                      "/project-details",
                      {
                        state: project,
                      }
                    )
                  }
                >

                  <h3 className="font-bold">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {project.prompt}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>

  );

};

export default Dashboard;