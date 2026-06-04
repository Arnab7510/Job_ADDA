import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-6 px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-blue-400">
            JOB_ADDA
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            Your trusted job portal for finding dream jobs,
            building careers, and connecting with top companies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/find"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Jobs
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">
            <p>📧 ghosharnab436@gmail.com</p>
            <p>📍 Memari, Purba Bardhaman</p>
            <p>📞 +91 7001051436</p>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Facebook
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © 2026 JOB_ADDA | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;