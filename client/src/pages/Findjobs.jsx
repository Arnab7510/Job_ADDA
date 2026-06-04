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
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Find Your Dream Job
        </h1>

        {user && (
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">
            Logged in as: <span className="font-semibold">{user.role}</span>
          </div>
        )}
      </div>

      {/* Job List */}
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Jobcard
              key={job._id}
              job={job}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No jobs available.
          </div>
        )}
      </div>
    </div>
  );
};

export default Findjobs;