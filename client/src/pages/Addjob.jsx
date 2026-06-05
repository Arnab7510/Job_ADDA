import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Addjob = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [form, setForm] = useState({
    title: "",
    salary: "",
    company: "",
    location: "",
    description: "",
  });

  const hc = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const hs = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5500/api/jobs",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.data.success) {
        alert(res.data.message || "Job add failed");
        return;
      }

      alert("Job Added Successfully");
      navigate("/find");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-4">
            💼 Admin Panel
          </span>

          <h2 className="text-4xl font-bold text-white">
            Add New Job
          </h2>

          <p className="text-gray-400 mt-3">
            Create a new job posting and publish it instantly.
          </p>

        </div>

        <form onSubmit={hs} className="space-y-5">

          {/* Job Title */}
          <div>
            <label className="block text-gray-300 mb-2">
              Job Title
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={hc}
              placeholder="Frontend Developer"
              className="w-full bg-white/5 border border-white/10 text-white p-3 rounded-xl focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          {/* Salary */}
          <div>
            <label className="block text-gray-300 mb-2">
              Salary
            </label>

            <input
              type="number"
              name="salary"
              value={form.salary}
              onChange={hc}
              placeholder="50000"
              className="w-full bg-white/5 border border-white/10 text-white p-3 rounded-xl focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-gray-300 mb-2">
              Company Name
            </label>

            <input
              type="text"
              name="company"
              value={form.company}
              onChange={hc}
              placeholder="Google"
              className="w-full bg-white/5 border border-white/10 text-white p-3 rounded-xl focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-300 mb-2">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={form.location}
              onChange={hc}
              placeholder="Kolkata / Remote"
              className="w-full bg-white/5 border border-white/10 text-white p-3 rounded-xl focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-300 mb-2">
              Job Description
            </label>

            <textarea
              name="description"
              rows="5"
              value={form.description}
              onChange={hc}
              placeholder="Enter job details..."
              className="w-full bg-white/5 border border-white/10 text-white p-3 rounded-xl focus:outline-none focus:border-orange-500 resize-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg transition duration-300"
          >
            Publish Job
          </button>

        </form>

      </div>

    </div>
  );
};

export default Addjob;