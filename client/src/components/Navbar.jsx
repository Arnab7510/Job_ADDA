import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useAuth} from "../context/Authcontext"
const Navbar = () => {
  const {user,logout} = useAuth();

  const navigate = useNavigate();

  const h1 = ()=>{
    logout();
    navigate("/login");
  }
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition duration-300"
        >
          Job_ADDA
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-lg">
          <Link
            to="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/find_jobs"
            className="hover:text-blue-400 transition duration-300"
          >
            Find Jobs
          </Link>
          {user?.role === "admin" && (
          <Link
            to="/add"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300"
          >
            Add Job
          </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar