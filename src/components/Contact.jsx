import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleBookClick = () => {
    navigate("/Book-appointment");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-[#fff9f7] via-[#fdf3f1] to-[#fff9f7]"
    >
      <div className="max-w-3xl mx-auto text-center mb-4">
        <h2 className="text-4xl md:text-5xl font-serif font-light text-pink-400 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-lg">
          Have a question or just want to say hello? I’d love to hear from you.
        </p>
      </div>

      {/* Call-to-Action for Booking */}
      <div className="max-w-2xl mx-auto mt-2 text-center">
        <p className="text-gray-700 mb-4">
          Or if you're ready to book an appointment, click Here!{" "}
          <button
            onClick={handleBookClick}
            className="bg-pink-400 hover:bg-pink-500 text-white font-medium rounded-full py-3 px-6 shadow-md transition"
          >
            Book Appointment
          </button>
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 font-medium rounded-md shadow-sm">
            ✅ Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-left text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full h-12 px-4 rounded-md border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-left text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full h-12 px-4 rounded-md border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-left text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message..."
              className="w-full min-h-[120px] px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-400 hover:bg-pink-500 text-white font-medium rounded-full py-3 shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center mt-12 text-gray-500 text-sm">
        Website Designed by:{" "}
        <a
          href="https://www.jeffreymacy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:underline"
        >
          Jeffrey's Tech Solutions
        </a>
      </div>
    </section>
  );
};

export default Contact;
