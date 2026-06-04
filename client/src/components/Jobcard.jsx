import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Jobcard = ({ job }) => {
  const { user } = useAuth();

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      
      {/* Top Gradient */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="p-6">
        {/* Title */}
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
            {job.title}
          </h2>

          <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
            Hiring
          </span>
        </div>

        {/* Company */}
        <p className="text-gray-500 mt-2">
          🏢 {job.company || "Job ADDA Company"}
        </p>

        {/* Location */}
        <p className="text-gray-500 mt-1">
          📍 {job.location || "Remote"}
        </p>

        {/* Salary */}
        <div className="mt-4">
          <span className="text-3xl font-bold text-green-600">
            ₹{job.salary}
          </span>
          <span className="text-gray-500 text-sm ml-2">per month</span>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-600 line-clamp-3">
          {job.description ||
            "Join our growing team and build amazing products with modern technologies."}
        </p>

        

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <Link
            to={`/view/${job._id}`}
            className="flex-1 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            View Details
          </Link>

          {user?.role === "admin" && (
            <Link
              to={`/edit/${job._id}`}
              className="flex-1 text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Edit Job
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobcard;