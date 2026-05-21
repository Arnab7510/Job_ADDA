import React, { useState } from "react";


const Jobs = () => {

  const [active, setActive] = useState("Recent Jobs");

  const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      type: "Full Time",
      location: "Bangalore",
      salary: "₹45,000 / month",
    },

    {
      id: 2,
      title: "React JS Developer",
      company: "Infosys",
      type: "Part Time",
      location: "Kolkata",
      salary: "₹25,000 / month",
    },

    {
      id: 3,
      title: "Backend Developer",
      company: "TCS",
      type: "Full Time",
      location: "Hyderabad",
      salary: "₹50,000 / month",
    },

    {
      id: 4,
      title: "UI/UX Designer",
      company: "Wipro",
      type: "Part Time",
      location: "Delhi",
      salary: "₹20,000 / month",
    },
  ];
  const filteredJobs =
    active === "Recent Jobs"
      ? jobsData
      : jobsData.filter((job) => job.type === active);

  return (
    <section id="Jobs" className="jobs">

      <div className="jobs-heading">
        <h1>Latest Job Notifications</h1>
        <p>Find your dream job from top companies</p>
      </div>

  
      <section className="job-section">

        <ul className="job-id">

          <li
            className={active === "Recent Jobs" ? "active" : ""}
            onClick={() => setActive("Recent Jobs")}
          >
            Recent Jobs
          </li>

          <li
            className={active === "Full Time" ? "active" : ""}
            onClick={() => setActive("Full Time")}
          >
            Full Time
          </li>

          <li
            className={active === "Part Time" ? "active" : ""}
            onClick={() => setActive("Part Time")}
          >
            Part Time
          </li>

        </ul>

      </section>

      
      <div className="job-container">

        {filteredJobs.map((job) => (
          <div className="job-card" key={job.id}>

            <h2>{job.title}</h2>

            <p className="company">
              {job.company}
            </p>

            <div className="job-details">

              <span>{job.type}</span>
              <span>{job.location}</span>

            </div>

            <h3>{job.salary}</h3>

            <button className="apply-btn">
              Apply Now
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Jobs;