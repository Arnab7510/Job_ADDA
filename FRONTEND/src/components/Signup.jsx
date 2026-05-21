import React, { useState } from "react";
import { Link } from "react-router-dom";


const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="signup-page">

      <div className="signup-container">

        
        <div className="signup-left">

          <h1>Create Account 🚀</h1>

          <p>
            Join JOB_ADDA today and discover thousands
            of job opportunities from top companies.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
            alt="signup"
          />

        </div>

        
        <div className="signup-right">

          <form className="signup-form">

            <h2>Sign Up</h2>

            
            <div className="input-box">

              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                required
              />

            </div>

    
            <div className="input-box">

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />

            </div>

            
            <div className="input-box">

              <label>Password</label>

              <div className="password-box">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  required
                />

                <span
                  className="show-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>

              </div>

            </div>

    
            <div className="input-box">

              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm password"
                required
              />

            </div>

            
            <div className="signup-options">

              <label>
                <input type="checkbox" required />
                I agree to the Terms & Conditions
              </label>

            </div>

        
            <button type="submit" className="signup-btn">
              Create Account
            </button>

        
            <p className="login-text">

              Already have an account?

              <Link to="/login">
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Signup;