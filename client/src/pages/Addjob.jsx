import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const Addjob = () => {
  const navigate = useNavigate();
  const {token} = useAuth();
  const [form,setForm] = useState({
    title:"",
    salary:"",
    company:"",
    location:"",
    description:"",
  });

  const hc = (e)=> {
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    })
  }
  const hs = async (e)=>{
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
      alert("Job added");
      navigate("/");
    } catch(err) {
      console.log(err);
    }
  }

  return <>
  <div className="flex justify-center items-center mt-10">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Add Job
        </h2>

        <form onSubmit={hs}>

          <div className="mb-4">

            <label className="block mb-2">
              Job Title
            </label>

            <input
              type="text"
              name="title"
              onChange={hc}
              className="w-full border p-3 rounded"
              required
            />

          </div>

          <div className="mb-4">

            <label className="block mb-2">
              Job Salary
            </label>

            <input
              type="number"
              name="salary"
              onChange={hc}
              className="w-full border p-3 rounded"
              required
            />

          </div>

          <div className="mb-4">

            <label className="block mb-2">
              Company Name
            </label>

            <input
              type="text"
              name="company"
              onChange={hc}
              className="w-full border p-3 rounded"
              required
            />

          </div>

          <div className="mb-4">

            <label className="block mb-2">
              Job Location
            </label>

            <input
              type="text"
              name="location"
              onChange={hc}
              className="w-full border p-3 rounded"
              required
            />

          </div>

          <div className="mb-4">

            <label className="block mb-2">
              Job Description
            </label>

            <textarea
              name="description"
              onChange={hc}
              className="w-full border p-3 rounded"
              required
            />

          </div>
              

          <button className="w-full bg-blue-600 text-white py-3 rounded">
            Add Job
          </button>

        </form>

      </div>

    </div>
  
  </>
}

export default Addjob