import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
       
        <h1 className="logo1">JOB_ADDA</h1>

        <ul className="nav-links">

          <li><a href="#home">Home</a></li>
          <li><a href="#jobs">Find Job</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact </a></li>
        </ul>

      <div className="nav-auth">

        <button className="login-btn">
          Login
        </button>

        <button className="signup-btn">
          Sign Up
        </button>

      </div>
        
              
      </nav>
    </header>
  )
}

export default Navbar
