import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



import Navbar from "../components/NavBar";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`btn btn-primary ${className}`}
    {...props}
  >
    {children}
  </button>
);

function Book() {
  const [form, setForm] = useState({ name: "", service: "", notes: "" });
  const [date, setDate] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    setForm({ name: "", service: "", notes: "" });
    setDate(null);
  };

  return (
    <div>   <Navbar />
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
            className="input input-bordered w-full bg-white"
            required
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="select select-bordered w-full bg-white"
            required
          >
            <option value="">Select a Service</option>
            <option value="Lash Appointment">Lash Appointment</option>
            <option value="Nail Appointment">Nail Appointment</option>
          </select>
          <DatePicker
            selected={date}
            onChange={setDate}
            className="input input-bordered w-full bg-white"
            placeholderText="Select a date"
            required
          />
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Notes (optional)"
            className="textarea textarea-bordered w-full bg-white"
          ></textarea>
          <Button type="submit" className="w-full">Confirm Appointment</Button>
        </form>
      </div>
    </div>
    </div>
  );
}
export default Book;
