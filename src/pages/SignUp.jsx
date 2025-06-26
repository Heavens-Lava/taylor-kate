// SignUp.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; // these are coming from firebase library
import { auth, db } from "../firebase"; //  These variables are coming from within project src/firebase.js
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../components/NavBar";


// auth and db are retrieved from firebase.js, which initializes Firebase services
// createUserWithEmailAndPassword is used to create a new user with email and password
// addDoc is used to add a new document to a Firestore collection
// collection is used to reference a Firestore collection
// "react-datepicker/dist/react-datepicker.css" is imported to style the date picker component

// This component allows users to sign up by providing their name, email, and password.
// It handles form submission, creates a new user in Firebase Authentication, and stores user details in Firestore.


const SignUp = () => {
    // useState hooks to manage form data and error state
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await addDoc(collection(db, "users"), {
        uid: userCredential.user.uid,
        name: formData.name,
        email: formData.email
      });
      alert(`Welcome, ${formData.name}! Your account has been created.`);
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Error signing up:", error);
      setError(error.message);
    }
  };

  return (
    
    <div>
    <NavBar />

    
    <div className="p-6 bg-pink-50 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="input input-bordered w-full"
            required
          />
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
