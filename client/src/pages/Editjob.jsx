import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Editjob = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    salary: '',
    
  })

  // Handle Change
  const hc = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // Fetch Single Job
  const fetchJob = async () => {
    try {
      const res = await axios.get(`http://localhost:5500/api/jobs/${id}`)
      setForm(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchJob()
  }, [])

  // Update Job
  const hs = async (e) => {
    e.preventDefault()

    try {
      await axios.put(`http://localhost:5500/api/jobs/${id}`, form)

      alert('Job Updated Successfully')

      navigate('/find_jobs')

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex justify-center items-center p-6">

      <div className="w-full max-w-2xl bg-white rounded-[35px] shadow-2xl overflow-hidden">

        
        <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 p-8 text-white">

          <h2 className="text-4xl font-black">
            Edit Job
          </h2>

          <p className="mt-3 text-blue-100">
            Update your job information easily.
          </p>

        </div>

        
        <form onSubmit={hs} className="p-8 space-y-6">

          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Job Title
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={hc}
              placeholder="Enter Job Title"
              className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Salary
            </label>

            <input
              type="number"
              name="salary"
              value={form.salary}
              onChange={hc}
              placeholder="Enter Salary"
              className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          

          
          <div className="flex gap-4 pt-4">

            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg transition duration-300"
            >
              Update Job
            </button>

            <button
              type="button"
              onClick={() => navigate('/find_jobs')}
              className="flex-1 bg-gray-900 hover:bg-black text-white py-4 rounded-2xl font-bold text-lg transition duration-300"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  )
}

export default Editjob