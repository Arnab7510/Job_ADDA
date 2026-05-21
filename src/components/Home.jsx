import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section id="home" className="home">

      
      <div className="overlay"></div>

  
      <div className="home-content">

        <h1 className="home-title">
          One Platform <span>.</span>
          <br />
          Endless Opportunities
        </h1>

        <p className="home-subtitle">
          Explore thousands of job opportunities from top companies.
          Build your career, upload your resume, and get hired faster
          with JOB_ADDA.
        </p>

        
        <div className="home-buttons">

          <Link to="/jobs">
            <button className="explore-btn">
              Explore Jobs
            </button>
          </Link>

          <Link to="/signup">
            <button className="join-btn">
              Join Now
            </button>
          </Link>

        </div>

    
        <div className="home-stats">

          <div className="stat-box">
            <h2>10K+</h2>
            <p>Jobs Posted</p>
          </div>

          <div className="stat-box">
            <h2>5K+</h2>
            <p>Companies</p>
          </div>

          <div className="stat-box">
            <h2>20K+</h2>
            <p>Active Users</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;