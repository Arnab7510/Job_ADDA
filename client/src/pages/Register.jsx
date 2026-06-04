import React, { useState } from "react";
import axios from "axios";

function Signup() {

  const [form, setForm] = useState({
    name: "",
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

    await axios.post(
      "http://localhost:5500/api/auth/register",
      form
    );

    alert("Account Created");
  };

  return (
    <form onSubmit={hs}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={hc}
      />

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

      <button>Signup</button>
    </form>
  );
}

export default Signup;