import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

const Register = () => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {

      setLoading(true);

      const res = await API.post(
        "/auth/register",
        formData
      );

      toast.success("Registration Successful!");

      console.log(res.data);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {

      console.error(error);

      toast.error(
       error.response?.data?.message ||
       "Something went wrong."
    );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="bg-black min-h-screen flex items-center justify-center text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-lg w-[400px]"
      >

        <h1 className="text-3xl font-bold mb-5">
          Register
        </h1>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="w-full p-3 rounded bg-gray-800 mb-4"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="w-full p-3 rounded bg-gray-800 mb-4"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
          className="w-full p-3 rounded bg-gray-800 mb-4"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded text-white ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>

      </form>

    </div>

  );

};

export default Register;