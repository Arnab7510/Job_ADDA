import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-extrabold text-cyan-500 tracking-wide">
            JOB_ADDA
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-cyan-500 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/add-jobs"
              className="text-gray-700 hover:text-cyan-500 transition duration-300"
            >
              Add Jobs
            </Link>
          </li>

          <li>
            <Link
              to="/edit-jobs"
              className="text-gray-700 hover:text-cyan-500 transition duration-300"
            >
              Edit Jobs
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-cyan-500 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <button className="px-5 py-2 border-2 border-cyan-500 text-cyan-500 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition duration-300">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-5 py-2 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition duration-300 shadow-lg">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Hamburger Button */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-7 h-1 bg-cyan-500 rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>

          <span
            className={`w-7 h-1 bg-cyan-500 rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`w-7 h-1 bg-cyan-500 rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-5">
          <ul className="flex flex-col gap-5 text-lg font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-cyan-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/add-jobs"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-cyan-500"
              >
                Add Jobs
              </Link>
            </li>

            <li>
              <Link
                to="/edit-jobs"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-cyan-500"
              >
                Edit Jobs
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-cyan-500"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <Link to="/login">
              <button className="w-full py-2 border-2 border-cyan-500 text-cyan-500 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition duration-300">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="w-full py-2 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition duration-300 shadow-lg">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;