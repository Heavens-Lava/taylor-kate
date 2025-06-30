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
  FaClipboardList
} from "react-icons/fa";
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
    { id: 1, link: "HOME", icon: <FaHome /> },
    { id: 2, link: "LASHES", icon: <FaEye /> },
    { id: 3, link: "NAILS", icon: <FaHandSparkles /> }
  ];

  const appointmentLinks = [
    { id: 4, link: "BOOK APPOINTMENT", icon: <FaCalendarCheck /> },
    { id: 9, link: "MY APPOINTMENTS", icon: <FaClipboardList /> }
  ];

  const authLinks = user
    ? [
        { id: 5, link: "MY ACCOUNT", icon: <FaUserCircle /> },
        { id: 6, link: "LOGOUT", icon: <FaSignOutAlt />, onClick: handleLogout }
      ]
    : [
        { id: 7, link: "SIGN UP", icon: <FaUserPlus /> },
        { id: 8, link: "LOGIN", icon: <FaSignInAlt /> }
      ];

  return (
    <div className="navBarParent flex justify-between items-center w-full h-14 px-6 text-white dark:bg-red-600 bg-pink-600 z-50 shadow-md dark:opacity-90">
      <div className="myNameText text-xl sm:text-4xl ml-2 font-[AlexBrush] font-AlexBrush">
        Taylor Kate
      </div>

      {/* Desktop Menu */}
      <ul className="navBarLinks hidden md:flex items-center">
        {[...baseLinks].map(({ id, link, onClick, icon }) => (
          <li
            key={id}
            className={`firstLink px-4 cursor-pointer capitalize font-medium flex items-center gap-2 hover:text-white transition-colors duration-200 ${
              active === link ? "text-white border-b-2 border-white" : "text-stone-100"
            }`}
          >
            <RouterLink
              to={link === "HOME" ? "/" : `/${link.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setActive(link)}
              className="flex items-center gap-2"
            >
              {icon} {link}
            </RouterLink>
          </li>
        ))}
        <li className="relative px-4">
          <button
            className="firstLink capitalize font-medium flex items-center gap-2 text-stone-100 hover:text-white transition-colors duration-200"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaCalendarCheck /> Book
          </button>
          {showDropdown && (
            <ul className="absolute top-full left-0 bg-white text-pink-700 rounded shadow-lg z-50 min-w-[180px] mt-2 py-1">
              {appointmentLinks.map(({ id, link, icon }) => (
                <li key={id}>
                  <RouterLink
                    to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    onClick={() => {
                      setActive(link);
                      setShowDropdown(false);
                    }}
                    className="block px-4 py-2 hover:bg-pink-100 transition-colors flex items-center gap-2"
                  >
                    {icon} {link}
                  </RouterLink>
                </li>
              ))}
            </ul>
          )}
        </li>
        {authLinks.map(({ id, link, onClick, icon }) => (
          <li
            key={id}
            className={`firstLink px-4 cursor-pointer capitalize font-medium flex items-center gap-2 hover:text-white transition-colors duration-200 ${
              active === link ? "text-white border-b-2 border-white" : "text-stone-100"
            }`}
          >
            {onClick ? (
              <button onClick={onClick} className="flex items-center gap-2">
                {icon} {link}
              </button>
            ) : (
              <RouterLink
                to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => setActive(link)}
                className="flex items-center gap-2"
              >
                {icon} {link}
              </RouterLink>
            )}
          </li>
        ))}
      </ul>

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
          {[...baseLinks, ...appointmentLinks, ...authLinks].map(({ id, link, onClick, icon }) => (
            <li
              key={id}
              className={`w-full text-center py-4 text-xl flex items-center justify-center gap-2 border-b border-pink-200 ${
                active === link ? "text-pink-600 underline underline-offset-4" : "hover:text-pink-600"
              }`}
            >
              {onClick ? (
                <button onClick={() => { setNav(false); onClick(); }} className="flex items-center gap-2">
                  {icon} {link}
                </button>
              ) : (
                <RouterLink
                  onClick={() => {
                    setNav(false);
                    setActive(link);
                  }}
                  to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center gap-2"
                >
                  {icon} {link}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
