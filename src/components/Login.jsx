import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="login-page">

      <div className="login-container">

        
        <div className="login-left">

          <h1>Welcome Back 👋</h1>

          <p>
            Login to your JOB_ADDA account and continue
            your career journey with top companies.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="login"
          />

        </div>

        
        <div className="login-right">

          <form className="login-form">

            <h2>Login</h2>

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
                  placeholder="Enter your password"
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

            <div className="login-options">

              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <a href="#">Forgot Password?</a>

            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <p className="signup-text">

              Don't have an account?

              <Link to="/signup">
                Sign Up
              </Link>

            </p>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Login;