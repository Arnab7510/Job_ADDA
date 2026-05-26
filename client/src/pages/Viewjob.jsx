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

  // Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-blue-500">
          Loading...
        </h2>
      </div>
    );
  }

  // Job Not Found
  if (!job) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-3xl font-bold text-red-500">
          Job Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
        
        {/* Job Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {job.title}
        </h2>

        {/* Job ID */}
        <div className="mb-4">
          <p className="text-gray-500 text-sm">
            Job ID
          </p>

          <p className="text-gray-700 font-medium break-all">
            {job._id}
          </p>
        </div>

        {/* Salary */}
        <h3 className="text-2xl font-bold text-green-600 mb-6">
          ₹ {job.salary}
        </h3>

        {/* Buttons */}
        <div className="flex gap-4">
          
          <Link
            to={`/edit/${job._id}`}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg transition duration-300"
          >
            Edit
          </Link>

          <Link
            to="/find_jobs"
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition duration-300"
          >
            Back
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Viewjob;