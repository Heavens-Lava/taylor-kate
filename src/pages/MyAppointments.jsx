import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const MyAppointments = () => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setLoading(false);
      } else {
        setUser(currentUser);
        try {
          const q = query(collection(db, "appointments"), where("userId", "==", currentUser.uid));
          const snapshot = await getDocs(q);
          const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setAppointments(fetched);
        } catch (err) {
          console.error("Error loading appointments:", err);
        } finally {
          setLoading(false);
        }
      }
    });
    return () => unsubscribe();
  }, [db]);

  return (
    <div className="min-h-screen bg-pink-100">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-xl shadow text-pink-800 text-center">
        <h2 className="text-3xl font-bold mb-6">My Appointments</h2>

        {loading ? (
          <p>Loading...</p>
        ) : !user ? (
          <p className="text-gray-600">Please <span onClick={() => navigate("/login")} className="text-pink-600 underline cursor-pointer">log in</span> to view your appointments.</p>
        ) : appointments.length === 0 ? (
          <p className="text-gray-500">No upcoming appointments found.</p>
        ) : (
          <ul className="space-y-4 text-left">
            {appointments.map(app => (
              <li key={app.id} className="bg-pink-50 p-4 rounded shadow">
                <p><strong>Service:</strong> {app.service}</p>
                <p><strong>Date:</strong> {app.date}</p>
                <p><strong>Time:</strong> {app.time}</p>
                <p><strong>Status:</strong> <span className={`font-semibold ${app.status === "Confirmed" ? "text-green-600" : "text-yellow-600"}`}>{app.status}</span></p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyAppointments;
