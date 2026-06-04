import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5500/api/auth/login",
        form
      );

      if (res.data.success) {
        login(res.data.user, res.data.token);
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 px-4">

      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Job ADDA
          </h1>
          <p className="text-gray-200 mt-2">
            Welcome Back 👋
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-white mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-white"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-gray-200 hover:text-white"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-white text-blue-700 font-bold py-3 rounded-xl hover:scale-105 transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-gray-200 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-white hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;