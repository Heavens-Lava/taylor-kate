// Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "../components/NavBar"; // adjust the path if your Navbar is elsewhere

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Check your credentials and try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 bg-pink-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Log In</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
            <button type="submit" className="btn btn-primary w-full bg-pink-500 hover:bg-pink-600 border-0 text-white">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;