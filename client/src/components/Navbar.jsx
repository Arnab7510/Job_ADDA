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
    <nav className="bg-slate-900 border-b border-slate-700 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
              J
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white">
                Job<span className="text-orange-500">ADDA</span>
              </h1>
            </div>
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-6">

            <Link
              to="/"
              className="text-gray-300 hover:text-orange-500 transition font-medium"
            >
              Home
            </Link>

            <Link
              to="/find"
              className="text-gray-300 hover:text-orange-500 transition font-medium"
            >
              Find Jobs
            </Link>

            {user?.role === "admin" && (
              <Link
                to="/add"
                className="text-gray-300 hover:text-orange-500 transition font-medium"
              >
                Add Job
              </Link>
            )}

            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2 rounded-xl border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-5 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition shadow-lg"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 bg-slate-800 px-4 py-2 rounded-xl border border-slate-700">
                  <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <p className="text-white text-sm font-semibold">
                      {user.name}
                    </p>

                    <p className="text-xs text-orange-400 capitalize">
                      {user.role}
                    </p>
                  </div>
                </div>

                <button
                  onClick={hl}
                  className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;