import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const MyAccount = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 🔒 Authenticate user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login"); // Redirect if not logged in
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return <div className="text-center mt-10">Loading your account...</div>;
  }

  // 📦 Temporary mock booking data
  const bookings = [
    {
      id: 1,
      service: "Full Set - Pink & White",
      date: "July 5, 2025",
      time: "2:30 PM",
      status: "Confirmed",
    },
    {
      id: 2,
      service: "Lash Fill",
      date: "July 15, 2025",
      time: "11:00 AM",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-20 p-6 bg-pink-100 rounded-xl shadow-lg text-center text-pink-800">
        <h2 className="text-3xl font-semibold mb-4">My Account</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.uid}</p>

        <div className="mt-10 bg-white p-6 rounded-xl shadow text-gray-800 text-left">
          <h3 className="text-2xl font-bold mb-4 text-center">My Appointments</h3>
          {bookings.length === 0 ? (
            <p className="text-center text-gray-500">You have no upcoming appointments.</p>
          ) : (
            <ul className="space-y-4">
              {bookings.map((booking) => (
                <li
                  key={booking.id}
                  className="border border-gray-200 p-4 rounded-lg bg-gray-50"
                >
                  <p><strong>Service:</strong> {booking.service}</p>
                  <p><strong>Date:</strong> {booking.date}</p>
                  <p><strong>Time:</strong> {booking.time}</p>
                  <p><strong>Status:</strong> <span className={`font-semibold ${booking.status === "Confirmed" ? "text-green-600" : "text-yellow-600"}`}>{booking.status}</span></p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Account Settings</h3>
          <button
            onClick={() => navigate("/edit-account")}
            className="btn btn-primary bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
          >
            Edit Account
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;