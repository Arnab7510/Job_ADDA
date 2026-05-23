import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Background Blur Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-300 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          One Platform <span className="text-yellow-300">.</span>
          <br />
          Endless Opportunities
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-8">
          Explore thousands of job opportunities from top companies.
          Build your career, upload your resume, and get hired faster
          with JOB_ADDA.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <Link to="/jobs">
            <button className="px-8 py-3 bg-white text-cyan-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Explore Jobs
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-cyan-600 transition duration-300">
              Join Now
            </button>
          </Link>

        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-105 transition duration-300">
            <h2 className="text-4xl font-extrabold text-yellow-300">
              10K+
            </h2>

            <p className="mt-2 text-gray-200 text-lg">
              Jobs Posted
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-105 transition duration-300">
            <h2 className="text-4xl font-extrabold text-yellow-300">
              5K+
            </h2>

            <p className="mt-2 text-gray-200 text-lg">
              Companies
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-105 transition duration-300">
            <h2 className="text-4xl font-extrabold text-yellow-300">
              20K+
            </h2>

            <p className="mt-2 text-gray-200 text-lg">
              Active Users
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;