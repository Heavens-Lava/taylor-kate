import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    notes: "",
  });
  const [date, setDate] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

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
        time: date
          ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          : "",
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-1 py-12 px-3 bg-gradient-to-b from-[#fff9f7] via-[#fdf3f1] to-[#fff9f7]">
        <div className="max-w-2xl mx-auto text-center mt-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-pink-400 mb-2">
            Book Your Appointment
          </h2>
          <p className="text-gray-600 text-base">
            Fill out the form below to schedule your appointment.
          </p>
        </div>
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-5 border border-gray-100">
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 font-medium rounded-md shadow-sm text-sm">
              ✅ Appointment booked successfully! We will contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-left text-gray-700 text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-left text-gray-700 text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                required
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-left text-gray-700 text-sm font-medium mb-1">
                Select a Service
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-pink-400"
                required
              >
                <option value="">Choose a service</option>
                <option value="Lash Appointment">Lash Appointment</option>
                <option value="Nail Appointment">Nail Appointment</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-left text-gray-700 text-sm font-medium mb-1">
                Select a Date
              </label>
              <DatePicker
                selected={date}
                onChange={setDate}
                className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                placeholderText="Choose a date"
                required
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-left text-gray-700 text-sm font-medium mb-1">
                Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Any additional details..."
                className="w-full min-h-[80px] px-3 py-2 text-sm rounded-md border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-pink-400 hover:bg-pink-500 text-white text-sm font-medium rounded-full py-2 shadow-md transition"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BookAppointment;
