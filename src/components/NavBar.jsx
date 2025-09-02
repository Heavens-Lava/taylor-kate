// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaEye,
  FaHandSparkles,
  FaCalendarCheck,
  FaUserCircle,
  FaSignOutAlt,
  FaUserPlus,
  FaSignInAlt,
  FaClipboardList,
} from "react-icons/fa";
import { Phone } from "lucide-react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("HOME");
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const baseLinks = [
    { id: 1, link: "Home", icon: <FaHome /> },
    { id: 2, link: "Lashes", icon: <FaEye /> },
    { id: 3, link: "Nails", icon: <FaHandSparkles /> },
  ];

  const appointmentLinks = [
    { id: 4, link: "BOOK APPOINTMENT", icon: <FaCalendarCheck /> },
    { id: 9, link: "MY APPOINTMENTS", icon: <FaClipboardList /> },
  ];

  const authLinks = user
    ? [
        { id: 5, link: "MY ACCOUNT", icon: <FaUserCircle /> },
        {
          id: 6,
          link: "LOGOUT",
          icon: <FaSignOutAlt />,
          onClick: handleLogout,
        },
      ]
    : [
        { id: 7, link: "Sign Up", icon: <FaUserPlus /> },
        { id: 8, link: "Login", icon: <FaSignInAlt /> },
      ];

  return (
    <div className="navBarParent flex justify-between items-center w-full h-14 px-6 text-white  bg-gradient-to-r from-pink-500 via via-rose-600 to-pink-600 opacity-70 shadow-md z-50">
      {/* Left: Logo + Main Links */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="text-xl sm:text-4xl font-[AlexBrush] font-AlexBrush">
            Taylor Kate
          </div>
          <span className="text-sm text-gray-200 font-light">Beauty</span>
        </div>
        <ul className="hidden md:flex items-center space-x-4">
          {baseLinks.map(({ id, link, icon }) => (
            <li
              key={id}
              className={`px-2 cursor-pointer flex items-center gap-1 capitalize font-thin  ${
                active === link
                  ? "text-white border-b-2 border-white"
                  : "text-gray-100 hover:text-white"
              }`}
            >
              <RouterLink
                to={
                  link === "HOME"
                    ? "/"
                    : `/${link.toLowerCase().replace(/ /g, "-")}`
                }
                onClick={() => setActive(link)}
                className="flex items-center gap-1"
              >
                {icon} {link}
              </RouterLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Book + Phone + Auth Links */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Book + Phone */}
        <div className="flex items-center space-x-2 relative">
          <span className="flex items-center gap-2 text-sm text-gray-200">
            <Phone size={16} /> 480-486-6757
          </span>
          <button
            className="flex items-center gap-1 px-4 py-2 text-white hover:text-gray-200"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaCalendarCheck /> Book
          </button>

          {showDropdown && (
            <ul className="absolute top-full right-0 bg-white text-pink-700 rounded shadow-lg mt-2 py-1 min-w-[180px] z-50">
              {appointmentLinks.map(({ id, link, icon }) => (
                <li key={id}>
                  <RouterLink
                    to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-pink-100 transition-colors"
                  >
                    {icon} {link}
                  </RouterLink>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Auth Links */}
        {authLinks.map(({ id, link, onClick, icon }) =>
          onClick ? (
            <button
              key={id}
              onClick={onClick}
              className="flex items-center gap-1 px-4 py-2 text-white hover:text-gray-200"
            >
              {icon} {link}
            </button>
          ) : (
            <RouterLink
              key={id}
              to={`/${link.toLowerCase().replace(/ /g, "-")}`}
              className="flex items-center gap-1 px-4 py-2 text-white hover:text-gray-200"
            >
              {icon} {link}
            </RouterLink>
          )
        )}
      </div>

      {/* Mobile Hamburger Icon */}
      <div
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-14 left-0 w-full h-screen bg-pink-100 text-pink-800 transform transition-transform duration-500 ease-in-out z-40 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 px-4 py-10 overflow-y-auto max-h-[calc(100vh-5rem)]">
          {[...baseLinks, ...appointmentLinks, ...authLinks].map(
            ({ id, link, onClick, icon }) => (
              <li
                key={id}
                className="w-full text-center py-4 text-xl flex items-center justify-center gap-2 border-b border-pink-200 hover:text-pink-600"
              >
                {onClick ? (
                  <button
                    onClick={() => {
                      setNav(false);
                      onClick();
                    }}
                    className="flex items-center gap-2"
                  >
                    {icon} {link}
                  </button>
                ) : (
                  <RouterLink
                    to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    onClick={() => setNav(false)}
                    className="flex items-center gap-2"
                  >
                    {icon} {link}
                  </RouterLink>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
