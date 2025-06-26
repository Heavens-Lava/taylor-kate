import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";


const MyAccount = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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

  return (
  <div className="bg-white min-h-screen">
    <Navbar /> 
    <div className="max-w-md mx-auto mt-20 p-6 bg-pink-100 rounded-xl shadow-lg text-center text-pink-800">
      <h2 className="text-3xl font-semibold mb-4">My Account</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>User ID:</strong> {user.uid}</p>
      {/* Add more user details if needed */}
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg text-center text-gray-800">
          <h3 className="text-2xl font-semibold mb-4">Welcome, {user.email}!</h3>
          <p className="mb-4">Manage your account settings and preferences here.</p>
          <button
            onClick={() => navigate("/edit-account")}
            className="btn btn-primary bg-pink-500 hover:bg-pink-600 text-white"
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

  