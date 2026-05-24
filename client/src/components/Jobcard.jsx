import React from 'react'
import { Link } from 'react-router-dom'

const Jobcard = ({ job }) => {
  return (
    <div className='group bg-white rounded-2xl p-6 mt-6 border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>
      
      {/* Top Section */}
      <div className='flex justify-between items-start mb-4'>
        <div>
          <h2 className='text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition'>
            {job.title}
          </h2>

          <p className='text-gray-500 mt-1 text-sm'>
            Great opportunity for talented candidates
          </p>
        </div>

        <span className='bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full'>
          Hiring
        </span>
      </div>

      {/* Salary */}
      <div className='mb-5'>
        <h3 className='text-3xl font-extrabold text-green-600'>
          ₹ {job.salary}
        </h3>

        <p className='text-gray-400 text-sm'>
          Monthly Salary
        </p>
      </div>

      {/* Buttons */}
      <div className='flex gap-4'>
        <Link
          to={`/view/${job._id}`}
          className='bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-xl font-medium transition duration-300'
        >
          View
        </Link>

        <Link
          to={`/edit/${job._id}`}
          className='bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-medium transition duration-300'
        >
          Edit
        </Link>
      </div>
    </div>
  )
}

export default Jobcard