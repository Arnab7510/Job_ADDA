import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
            to="/add"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300"
          >
            Add Job
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar