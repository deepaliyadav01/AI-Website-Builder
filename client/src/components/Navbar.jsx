import { Link } from "react-router-dom"

const Navbar = () => {

  return (

    <div className="bg-gray-900 text-white flex justify-between items-center p-5">

      <h1 className="text-2xl font-bold">
        AI WEBSITE BUILDER
      </h1>

      <div className="flex gap-5">

        <Link to="/">
          Home
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

      </div>

    </div>

  )

}

export default Navbar