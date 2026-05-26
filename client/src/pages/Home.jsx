import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-blue-900 via-indigo-900 to-black text-white flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            One Platform <span className="text-blue-400">.</span>
            <br />
            Endless Opportunities
          </h1>

          <p className="text-gray-300 text-lg mt-6 leading-8 max-w-2xl">
            Explore thousands of job opportunities from top companies.
            Build your career, upload your resume, and get hired faster
            with <span className="font-bold text-white">JOB_ADDA</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-8">
            <Link to="/find_jobs">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition duration-300 hover:scale-105">
                Explore Jobs
              </button>
            </Link>

            <Link to="/signup">
              <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 hover:scale-105">
                Join Now
              </button>
            </Link>
          </div>

        </div>

        {/* Right Side Image */}
        <div className="hidden lg:flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Job Illustration"
            className="w-[500px] drop-shadow-2xl animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;