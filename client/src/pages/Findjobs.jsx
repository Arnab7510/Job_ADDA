import React, { useState, useEffect } from "react";
import axios from "axios";
import Jobcard from "../components/Jobcard";
import { useAuth } from "../context/AuthContext";

const Findjobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5500/api/jobs");
      setJobs(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="text-center mb-10">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-5">
            💼 Explore Opportunities
          </span>

          <h1 className="text-5xl font-extrabold mb-4">
            Find Your Dream Job
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Browse thousands of opportunities from top companies
            and take the next step in your career.
          </p>

        </div>

        {/* User Info */}
        {user && (
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl">
              Logged in as:
              <span className="ml-2 text-orange-400 font-semibold capitalize">
                {user.role}
              </span>
            </div>
          </div>
        )}

        

        

        {/* Jobs Grid */}
        {jobs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <Jobcard
                key={job._id}
                job={job}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-400">
              No Jobs Available
            </h2>

            <p className="text-gray-500 mt-3">
              Check back later for new opportunities.
            </p>
          </div>
        )}

      </div>

    </div>
  );
};

export default Findjobs;