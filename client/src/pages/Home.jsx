import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-6">
              🚀 India's Growing Job Portal
            </span>

            {/* Original Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              One Platform <span className="text-orange-500">.</span>
              <br />
              Endless Opportunities
            </h1>

            <p className="text-gray-300 text-lg mt-6 leading-8 max-w-2xl">
              Explore thousands of job opportunities from top companies.
              Build your career, upload your resume, and get hired faster
              with{" "}
              <span className="font-bold text-orange-400">
                JOB_ADDA
              </span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-8">
              <Link to="/find">
                <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition duration-300 hover:scale-105">
                  Explore Jobs
                </button>
              </Link>

              <Link to="/register">
                <button className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 hover:scale-105">
                  Join Now
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-orange-500 opacity-20 blur-3xl rounded-full"></div>

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Job Illustration"
                className="relative w-full max-w-md transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-orange-500">JOB_ADDA</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500 transition duration-300">
            <div className="text-5xl mb-4">💼</div>

            <h3 className="text-xl font-bold mb-3">
              Thousands of Jobs
            </h3>

            <p className="text-gray-400">
              Explore opportunities from startups, MNCs, and leading
              organizations across multiple industries.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500 transition duration-300">
            <div className="text-5xl mb-4">⚡</div>

            <h3 className="text-xl font-bold mb-3">
              Fast Applications
            </h3>

            <p className="text-gray-400">
              Apply quickly and efficiently to jobs that match your
              skills and interests.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500 transition duration-300">
            <div className="text-5xl mb-4">🎯</div>

            <h3 className="text-xl font-bold mb-3">
              Career Growth
            </h3>

            <p className="text-gray-400">
              Connect with recruiters and discover opportunities that
              help you advance your career.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;