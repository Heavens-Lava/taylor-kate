// SignUp.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // make sure this path is correct
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";


const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // redirect to homepage
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMsg("This email is already in use.");
      } else if (error.code === "auth/invalid-email") {
        setErrorMsg("Invalid email address.");
      } else if (error.code === "auth/weak-password") {
        setErrorMsg("Password should be at least 6 characters.");
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
    }
  };

  return (
            <>
      <Navbar /> 
    <div className="flex flex-col justify-center items-center h-[136vh] bg-pink-50 px-4 pt-20">
      <form
        onSubmit={handleSignUp}
        className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-pink-600 mb-4 text-center">
          Create an Account
        </h2>

        {errorMsg && (
          <p className="text-red-500 text-sm mb-4 text-center">{errorMsg}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-full transition-colors"
        >
          Sign Up
        </button>
      </form>
          <Footer/>
    </div>

    </>
  );
};

export default SignUp;
