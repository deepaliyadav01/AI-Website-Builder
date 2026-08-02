import API from "../services/api";

const Pricing = () => {

  const handleUpgrade = async (plan) => {

    try {

      const token =
        localStorage.getItem("token");

      await API.post(
        "/user/upgrade",
        { plan },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        `${plan.toUpperCase()} Plan Activated Successfully`
      );

    } catch (error) {

      console.log(error);

      alert("Upgrade Failed");

    }

  };

  return (

    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl font-bold text-center">
        Pricing Plans
      </h1>

      <div className="grid grid-cols-3 gap-10 mt-16">

        <div className="bg-gray-900 p-10 rounded-lg">

          <h2 className="text-3xl font-bold">
            Basic
          </h2>

          <h3 className="text-5xl font-bold mt-5">
            ₹199
          </h3>

          <p className="mt-5 text-gray-400">
            +100 Credits
          </p>

          <button
            onClick={() =>
              handleUpgrade("basic")
            }
            className="mt-10 bg-blue-500 w-full py-3 rounded-lg"
          >
            Upgrade
          </button>

        </div>

        <div className="bg-blue-600 p-10 rounded-lg">

          <h2 className="text-3xl font-bold">
            Pro
          </h2>

          <h3 className="text-5xl font-bold mt-5">
            ₹499
          </h3>

          <p className="mt-5">
            +500 Credits
          </p>

          <button
            onClick={() =>
              handleUpgrade("pro")
            }
            className="mt-10 bg-black w-full py-3 rounded-lg"
          >
            Upgrade
          </button>

        </div>

        <div className="bg-gray-900 p-10 rounded-lg">

          <h2 className="text-3xl font-bold">
            Enterprise
          </h2>

          <h3 className="text-5xl font-bold mt-5">
            ₹999
          </h3>

          <p className="mt-5 text-gray-400">
            +5000 Credits
          </p>

          <button
            onClick={() =>
              handleUpgrade("enterprise")
            }
            className="mt-10 bg-blue-500 w-full py-3 rounded-lg"
          >
            Upgrade
          </button>

        </div>

      </div>

    </div>

  );

};

export default Pricing;