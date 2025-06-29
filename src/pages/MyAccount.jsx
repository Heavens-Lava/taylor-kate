import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const MyAccount = () => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const db = getFirestore();

  // 🔒 Authenticate user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // 🔎 Fetch real appointment data
        try {
          const q = query(collection(db, "appointments"), where("userId", "==", currentUser.uid));
          const querySnapshot = await getDocs(q);
          const fetchedAppointments = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setAppointments(fetchedAppointments);
        } catch (error) {
          console.error("Error fetching appointments:", error);
        }
      } else {
        navigate("/login"); // Redirect if not logged in
      }
    });
    return () => unsubscribe();
  }, [navigate, db]);

  if (!user) {
    return <div className="text-center mt-10">Loading your account...</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-20 p-6 bg-pink-100 rounded-xl shadow-lg text-center text-pink-800">
        <h2 className="text-3xl font-semibold mb-4">My Account</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.uid}</p>

        <div className="mt-10 bg-white p-6 rounded-xl shadow text-gray-800 text-left">
          <h3 className="text-2xl font-bold mb-4 text-center">My Appointments</h3>
          {appointments.length === 0 ? (
            <p className="text-center text-gray-500">You have no upcoming appointments.</p>
          ) : (
            <ul className="space-y-4">
              {appointments.map((appointment) => (
                <li
                  key={appointment.id}
                  className="border border-gray-200 p-4 rounded-lg bg-gray-50"
                >
                  <p><strong>Service:</strong> {appointment.service}</p>
                  <p><strong>Date:</strong> {appointment.date}</p>
                  <p><strong>Time:</strong> {appointment.time}</p>
                  <p><strong>Status:</strong> <span className={`font-semibold ${appointment.status === "Confirmed" ? "text-green-600" : "text-yellow-600"}`}>{appointment.status}</span></p>
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
