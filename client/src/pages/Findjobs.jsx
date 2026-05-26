import React from 'react'
import Jobcard from '../components/Jobcard'
import {useState,useEffect} from 'react'
import axios from 'axios'
const Findjobs = () => {
    const [jobs,setJobs] = useState([]);
    const fetchJobs = async()=>{
        try {
            const res = await axios.get('http://localhost:5500/api/jobs');
            setJobs(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchJobs();
    },[])

  return <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {jobs.map(x => (
    <Jobcard key={x._id} job={x} />
  ))}
</div>
  </>;
}

export default Findjobs
