import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // 🔄 Loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // 🟢 Start loading
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/"); // ✅ Redirect on success
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Check your credentials and try again.");
    } finally {
      setLoading(false); // 🔴 End loading
    }
  };

  return (
    <>
      <Navbar />
      <div className={`p-6 bg-pink-50 min-h-screen flex flex-col items-center justify-center ${loading ? "cursor-wait" : ""}`}>
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
            <button
              type="submit"
              className="btn btn-primary w-full bg-pink-500 hover:bg-pink-600 border-0 text-white flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm text-white"></span>
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>
          <Footer />
      </div>
    
    </>
  );
};

export default Login;