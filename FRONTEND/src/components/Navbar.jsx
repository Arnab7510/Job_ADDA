import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">

  
        <div className="logo">
          <h1 className="logo1">JOB_ADDA</h1>
        </div>

        
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/jobs">Find Job</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

      
        <div className={`nav-auth ${menuOpen ? "show-auth" : ""}`}>

          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="signup-btn">
              Sign Up
            </button>
          </Link>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;