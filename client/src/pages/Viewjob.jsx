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
      setJob(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleJob();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 via-white to-indigo-100">
        <h2 className="text-4xl font-extrabold text-blue-600 animate-pulse">
          Loading...
        </h2>
      </div>
    );
  }

  // Job Not Found
  if (!job) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-red-100 via-white to-pink-100">
        <h2 className="text-4xl font-extrabold text-red-500">
          Job Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex justify-center items-center p-6">
      
      {/* Main Card */}
      <div className="relative overflow-hidden bg-white/80 backdrop-blur-lg border border-white shadow-2xl rounded-[35px] p-8 w-full max-w-3xl hover:scale-[1.01] transition duration-500">

        {/* Background Glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10">

          {/* Badge */}
          <div className="flex justify-between items-start">
            
            <div>
              <p className="uppercase tracking-[4px] text-sm font-bold text-blue-600">
                Featured Job
              </p>

              <h2 className="text-5xl font-black text-gray-800 mt-3 leading-tight">
                {job.title}
              </h2>

              <p className="text-gray-500 mt-4 text-lg">
                Start your professional journey with this amazing opportunity.
              </p>
            </div>

            <div className="bg-green-500 text-white px-5 py-2 rounded-2xl text-sm font-bold shadow-lg animate-bounce">
              Hiring
            </div>
          </div>

          {/* Salary Box */}
          <div className="mt-10 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 rounded-3xl p-7 text-white shadow-2xl">
            
            <p className="uppercase text-sm tracking-widest opacity-80">
              Salary Package
            </p>

            <h3 className="text-6xl font-black mt-3">
              ₹ {job.salary}
            </h3>

            <p className="mt-3 text-sm opacity-80">
              Monthly Salary • Full Time Position
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-5 mt-8">
            
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:bg-blue-50 transition">
              <p className="text-gray-400 text-sm">
                Job ID
              </p>

              <h4 className="font-bold text-gray-700 mt-2 break-all">
                {job._id}
              </h4>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:bg-pink-50 transition">
              <p className="text-gray-400 text-sm">
                Work Type
              </p>

              <h4 className="font-bold text-gray-700 mt-2">
                Remote / Hybrid
              </h4>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">
            
            <Link
              to={`/edit/${job._id}`}
              className="flex-1 text-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-4 rounded-2xl text-lg font-bold shadow-xl transition duration-300"
            >
              Edit Job
            </Link>

            <Link
              to="/find_jobs"
              className="flex-1 text-center bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-4 rounded-2xl text-lg font-bold shadow-xl transition duration-300"
            >
              Back
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Viewjob;