import React, { useState } from "react";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Button = ({ children, className = "", ...props }) => (
  <button className={`btn btn-primary ${className}`} {...props}>
    {children}
  </button>
);

function Book() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", notes: "" });
  const [date, setDate] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const db = getFirestore();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to book an appointment.");
      return navigate("/login");
    }

    try {
      await addDoc(collection(db, "appointments"), {
        userId: user.uid,
        name: form.name,
        phone: form.phone,
        service: form.service,
        notes: form.notes,
        date: date ? date.toDateString() : "",
        time: date ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "",
        status: "Pending",
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
      setForm({ name: "", phone: "", service: "", notes: "" });
      setDate(null);
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 min-h-screen bg-pink-200">
        <div className="max-w-xl mx-auto bg-pink-50 shadow-lg rounded-xl p-6 mt-8">
          <h2 className="text-3xl font-bold mb-4 text-pink-700 text-center">Book an Appointment</h2>
          {success && (
            <div className="alert alert-success text-green-800 font-medium bg-green-100 mb-4">
              ✅ Appointment booked successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered w-full bg-white text-gray-900 placeholder-gray-500"
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="input input-bordered w-full bg-white text-gray-900 placeholder-gray-500"
              required
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="select select-bordered w-full bg-white text-gray-900"
              required
            >
              <option value="">Select a Service</option>
              <option value="Lash Appointment">Lash Appointment</option>
              <option value="Nail Appointment">Nail Appointment</option>
            </select>
            <DatePicker
              selected={date}
              onChange={setDate}
              className="input input-bordered w-full bg-white text-gray-900 placeholder-gray-500"
              placeholderText="Select a date"
              required
            />
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Notes (optional)"
              className="textarea textarea-bordered w-full bg-white text-gray-900 placeholder-gray-500"
            ></textarea>
            <Button type="submit" className="w-full">Confirm Appointment</Button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Book;
