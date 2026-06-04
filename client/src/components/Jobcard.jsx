import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Jobcard = ({ job }) => {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 border">
      
      {/* Job Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {job.title}
      </h2>

      {/* Salary */}
      <h3 className="text-green-600 text-lg font-semibold mb-4">
        ₹ {job.salary}
      </h3>

      {/* Buttons */}
      <div className="flex gap-3">
        <Link
          to={`/view/${job._id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View
        </Link>

        {user?.role === "admin" && (
          <Link
            to={`/edit/${job._id}`}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Edit
          </Link>
        )}
      </div>
    </div>
  );
};

export default Jobcard;