import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-cyan-400 mb-4">
            JOB_ADDA
          </h2>

          <p className="text-gray-300 leading-7">
            Your trusted job portal for finding dream jobs,
            building careers, and connecting with top companies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/jobs"
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                Jobs
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">
            Contact
          </h3>

          <div className="space-y-3 text-gray-300">
            <p>📧 ghosharnab436@gmail.com</p>
            <p>📍 Memari, Purba Bardhaman</p>
            <p>📞 +91 7001051436</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">
            Follow Us
          </h3>

          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Facebook
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-5 text-center text-gray-400 text-sm">
        <p>© 2026 JOB_ADDA | All Rights Reserved</p>
      </div>

    </footer>
  );
};

export default Footer;