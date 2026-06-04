import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Viewjob() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSingleJob = async () => {
    try {
      const res = await axios.get(`http://localhost:5500/api/jobs/${id}`);
      setJob(res.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleJob();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-blue-600">
          Loading Job...
        </h2>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold text-red-500">
          Job Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white">
          <h1 className="text-4xl font-bold">{job.title}</h1>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-white/20 px-4 py-2 rounded-full">
              💼 Full Time
            </span>

            <span className="bg-white/20 px-4 py-2 rounded-full">
              📍 Remote
            </span>

            <span className="bg-white/20 px-4 py-2 rounded-full">
              🚀 Hiring
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">

          {/* Salary Card */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
            <h3 className="text-lg text-gray-600 mb-2">
              Salary
            </h3>

            <p className="text-4xl font-bold text-green-600">
              ₹ {job.salary}
            </p>
          </div>

          {/* Job Details */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-gray-50 p-5 rounded-xl">
              <h4 className="font-semibold text-gray-500 mb-2">
                Job ID
              </h4>

              <p className="break-all text-gray-800">
                {job._id}
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl">
              <h4 className="font-semibold text-gray-500 mb-2">
                Company
              </h4>

              <p className="text-gray-800">
                {job.company || "Job ADDA Pvt Ltd"}
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl">
              <h4 className="font-semibold text-gray-500 mb-2">
                Location
              </h4>

              <p className="text-gray-800">
                {job.location || "Remote"}
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl">
              <h4 className="font-semibold text-gray-500 mb-2">
                Job Type
              </h4>

              <p className="text-gray-800">
                {job.jobType || "Full Time"}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">
              Job Description
            </h3>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 leading-8">
                {job.description ||
                  "No description available for this position."}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to={`/edit/${job._id}`}
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-semibold transition"
            >
              ✏️ Edit Job
            </Link>

            <Link
              to="/find"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
            >
              ← Back to Jobs
            </Link>

            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition">
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Viewjob;