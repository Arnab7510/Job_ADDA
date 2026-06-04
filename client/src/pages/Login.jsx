import React, { useState } from "react";
import axios from "axios";

function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const hc = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const hs = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5500/api/auth/login",
      form
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    alert("Login Success");
  };

  return (
    <form onSubmit={hs}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={hc}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={hc}
      />

      <button>Login</button>
    </form>
  );
}

export default Login;