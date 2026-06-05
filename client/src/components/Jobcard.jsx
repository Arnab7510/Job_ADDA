import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Jobcard = ({ job }) => {
  const { user } = useAuth();

  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      {/* Top Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>

      <div className="p-6">

        {/* Header */}
        <div className="flex justify-between items-start mb-4">

          <div>
            <h2 className="text-2xl font-bold text-white group-hover:text-orange-400 transition">
              {job.title}
            </h2>

            <p className="text-gray-400 mt-2">
              🏢 {job.company || "Job ADDA"}
            </p>
          </div>

          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30">
            Hiring
          </span>

        </div>

        {/* Location */}
        <div className="mb-4">
          <p className="text-gray-400">
            📍 {job.location || "Remote"}
          </p>
        </div>

        {/* Salary */}
        <div className="mb-5">
          <h3 className="text-3xl font-bold text-orange-500">
            ₹{job.salary}
          </h3>

          <p className="text-sm text-gray-500">
            Monthly Salary
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 leading-7 line-clamp-3">
          {job.description ||
            "Join our growing team and work on exciting projects using modern technologies."}
        </p>

        {/* Footer */}
        <div className="flex gap-3 mt-6">

          <Link
            to={`/view/${job._id}`}
            className="flex-1 text-center py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
          >
            View Details
          </Link>

          {user?.role === "admin" && (
            <Link
              to={`/edit/${job._id}`}
              className="flex-1 text-center py-3 rounded-xl border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold transition"
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