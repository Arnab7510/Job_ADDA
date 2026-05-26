import React from 'react'
import { Link } from 'react-router-dom'

const Jobcard = ({ job }) => {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-white border border-gray-200 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
      
      {/* Top Gradient Line */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"></div>

      {/* Background Effects */}
      <div className="absolute -top-16 -right-16 w-44 h-44 bg-blue-200 rounded-full blur-3xl opacity-30 group-hover:scale-125 transition duration-700"></div>

      <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-pink-200 rounded-full blur-3xl opacity-20 group-hover:scale-125 transition duration-700"></div>

      <div className="relative z-10 p-7">

        {/* Header */}
        <div className="flex justify-between items-start">
          
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
              New Opportunity
            </p>

            <h2 className="text-3xl font-extrabold text-gray-800 mt-2 leading-tight">
              {job.title}
            </h2>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Build your career with top companies and unlock your professional growth.
            </p>
          </div>

          {/* Status Badge */}
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-2xl text-sm font-bold shadow-sm animate-bounce">
            Hiring
          </div>
        </div>

        {/* Salary Card */}
        <div className="mt-8 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

          <p className="uppercase tracking-widest text-sm opacity-80">
            Salary Package
          </p>

          <h3 className="text-5xl font-black mt-3">
            ₹ {job.salary}
          </h3>

          <p className="mt-2 text-sm opacity-80">
            Per Month • Negotiable
          </p>
        </div>

        {/* Job Info */}
        <div className="grid grid-cols-2 gap-4 mt-7">
          
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:bg-blue-50 transition">
            <p className="text-gray-400 text-sm">Location</p>
            <h4 className="font-bold text-gray-700 mt-1">
              Remote
            </h4>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:bg-pink-50 transition">
            <p className="text-gray-400 text-sm">Job Type</p>
            <h4 className="font-bold text-gray-700 mt-1">
              Full Time
            </h4>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          
          <Link
            to={`/view/${job._id}`}
            className="flex-1 text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-blue-300 transition duration-300"
          >
            View Details
          </Link>

          <Link
            to={`/edit/${job._id}`}
            className="flex-1 text-center bg-gray-900 hover:bg-black text-white py-4 rounded-2xl font-bold shadow-lg transition duration-300"
          >
            Edit Job
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Jobcard