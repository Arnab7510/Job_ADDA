import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
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
        "http://localhost:5500/api/auth/register",
        form
      );

      if (res.data.success) {
        alert("Registration Successful!");
        navigate("/login");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-blue-600 px-4 py-10">
      
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-gray-300 mt-3">
            Join Job ADDA and discover your next opportunity 🚀
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-white mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white mb-2 font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a strong password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-white"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-white mb-3 font-medium">
              Select Role
            </label>

            <div className="grid grid-cols-2 gap-4">

              {/* User */}
              <label
                className={`cursor-pointer rounded-xl p-4 text-center font-semibold border transition-all duration-300 ${
                  form.role === "user"
                    ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={form.role === "user"}
                  onChange={handleChange}
                  className="hidden"
                />
                👨‍💼 User
              </label>

              {/* Admin */}
              <label
                className={`cursor-pointer rounded-xl p-4 text-center font-semibold border transition-all duration-300 ${
                  form.role === "admin"
                    ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={form.role === "admin"}
                  onChange={handleChange}
                  className="hidden"
                />
                👑 Admin
              </label>

            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg shadow-lg transition duration-300 hover:scale-[1.02]"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-400 hover:text-orange-300 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Register;