import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const hl = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition"
        >
          Job_ADDA
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-yellow-300 transition font-medium"
          >
            Home
          </Link>

          <Link
            to="/find"
            className="hover:text-yellow-300 transition font-medium"
          >
            Find Jobs
          </Link>

          {user?.role === "admin" && (
            <Link
              to="/add"
              className="hover:text-yellow-300 transition font-medium"
            >
              Add Job
            </Link>
          )}

          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition font-semibold"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="bg-blue-500 px-3 py-1 rounded-lg text-sm">
                👤 {user.name} ({user.role})
              </div>

              <button
                onClick={hl}
                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition font-semibold"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;