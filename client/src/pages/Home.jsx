import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {

  const navigate = useNavigate();

  return (

    <div className="bg-black min-h-screen text-white">

      <Navbar />

      {/* Hero Section */}

      <div className="max-w-7xl mx-auto px-10 py-24">

        <div className="text-center">

          <h1 className="text-7xl font-bold leading-tight">

            Build Websites With

            <span className="text-blue-500">
              {" "} AI
            </span>

          </h1>

          <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto">

            Create professional websites using simple prompts.
            Generate, preview, edit and download complete websites
            in seconds.

          </p>

          <div className="flex justify-center gap-5 mt-10">

            <button
              onClick={() => navigate("/register")}
              className="bg-blue-500 px-8 py-4 rounded-lg text-lg font-semibold"
            >
              Get Started Free
            </button>

            <button
              onClick={() => navigate("/pricing")}
              className="border border-gray-700 px-8 py-4 rounded-lg text-lg"
            >
              View Pricing
            </button>

          </div>

        </div>

      </div>

      {/* Features */}

      <div className="max-w-7xl mx-auto px-10 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">

          Powerful Features

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-8 rounded-xl">

            <h3 className="text-2xl font-bold">

              AI Website Generation

            </h3>

            <p className="text-gray-400 mt-4">

              Generate complete websites from simple text prompts.

            </p>

          </div>

          <div className="bg-gray-900 p-8 rounded-xl">

            <h3 className="text-2xl font-bold">

              Live Preview

            </h3>

            <p className="text-gray-400 mt-4">

              Instantly preview generated websites before download.

            </p>

          </div>

          <div className="bg-gray-900 p-8 rounded-xl">

            <h3 className="text-2xl font-bold">

              Export Code

            </h3>

            <p className="text-gray-400 mt-4">

              Download HTML code and use it in your own projects.

            </p>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="max-w-7xl mx-auto px-10 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-8 rounded-xl text-center">

            <h2 className="text-5xl font-bold text-blue-500">
              100+
            </h2>

            <p className="mt-3 text-gray-400">
              Free Credits
            </p>

          </div>

          <div className="bg-gray-900 p-8 rounded-xl text-center">

            <h2 className="text-5xl font-bold text-blue-500">
              6+
            </h2>

            <p className="mt-3 text-gray-400">
              Website Categories
            </p>

          </div>

          <div className="bg-gray-900 p-8 rounded-xl text-center">

            <h2 className="text-5xl font-bold text-blue-500">
              24/7
            </h2>

            <p className="mt-3 text-gray-400">
              Instant Generation
            </p>

          </div>

        </div>

      </div>

      {/* How It Works */}

<div className="max-w-7xl mx-auto px-10 pb-20">

  <h2 className="text-4xl font-bold text-center mb-12">
    How It Works
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-gray-900 p-8 rounded-xl">

      <h3 className="text-2xl font-bold">
        1. Enter Prompt
      </h3>

      <p className="text-gray-400 mt-4">
        Describe the website you want to create.
      </p>

    </div>

    <div className="bg-gray-900 p-8 rounded-xl">

      <h3 className="text-2xl font-bold">
        2. Generate Website
      </h3>

      <p className="text-gray-400 mt-4">
        AI generates website code instantly.
      </p>

    </div>

    <div className="bg-gray-900 p-8 rounded-xl">

      <h3 className="text-2xl font-bold">
        3. Preview & Download
      </h3>

      <p className="text-gray-400 mt-4">
        Preview and download generated website.
      </p>

    </div>

  </div>

</div>

      {/* Footer */}

      <div className="border-t border-gray-800 py-8 text-center text-gray-500">

        © 2026 AI Website Builder | 

      </div>

    </div>

  );

};

export default Home;