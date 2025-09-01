// import Link using react-router-dom
import React, { useState, useEffect } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Lashes from "./pages/Lashes";
import Nails from "./pages/Nails";
import BookAppointment from "./pages/BookAppointment";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyAccount from "./pages/MyAccount";
import MyAppointments from "./pages/MyAppointments";

// ---------------------------------------- the component for the popup window ----------------------------------------
const Popup = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing! Enjoy your 50% discount at ${email}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-pink-600 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-pink-700 mb-2">Get 50% Off!</h2>
        <p className="text-gray-700 mb-4">
          Enter your email to receive an exclusive discount on your first
          booking.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="input input-bordered w-full bg-white"
            required
          />
          <div className="flex justify-between">
            <button type="submit" className="btn btn-pink-600 text-white">
              Claim Offer
            </button>
            <button type="button" onClick={onClose} className="btn btn-outline">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ---------------------------------------- The main App component ----------------------------------------
function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HOME" element={<Home />} />
        <Route path="/LASHES" element={<Lashes />} />
        <Route path="/NAILS" element={<Nails />} />
        <Route path="/BOOK-APPOINTMENT" element={<BookAppointment />} />
        <Route path="/SIGN-UP" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/MY-APPOINTMENTS" element={<MyAppointments />} />

        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
