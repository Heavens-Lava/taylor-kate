// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { auth } from "../firebase"; // make sure this path is correct
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("HOME");
  const [user, setUser] = useState(null);
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
const links = [
  { id: 1, link: "HOME" },
  { id: 2, link: "LASHES" },
  { id: 3, link: "NAILS" },
  { id: 4, link: "BOOK APPOINTMENT" },
  ...(user
    ? [
        { id: 5, link: "MY ACCOUNT" },
        { id: 6, link: "LOGOUT", onClick: handleLogout },
      ]
    : [
        { id: 7, link: "SIGN UP" },
        { id: 8, link: "LOGIN" },
      ]),
];

  return (
    <div className="navBarParent flex justify-between items-center w-full h-20 px-4 text-white dark:bg-red-600 bg-pink-600 z-50 dark:opacity-80">
      <div className="myNameText text-2xl sm:text-5xl ml-2 font-[AlexBrush] font-AlexBrush">
        Taylor Kates
      </div>

      {/* Desktop Menu */}
      <ul className="navBarLinks hidden md:flex">
        {links.map(({ id, link, onClick }) => (
          <li
            key={id}
            className={`firstLink px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 ${
              active === link ? "text-white border-b-2 border-white" : "text-stone-100"
            }`}
          >
            {onClick ? (
              <button onClick={onClick}>{link}</button>
            ) : (
              <RouterLink
                to={link === "HOME" ? "/" : `/${link.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => setActive(link)}
              >
                {link}
              </RouterLink>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Icon */}
      <div
        className="cursor-pointer pr-4 z-10 text-pink-700 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full h-screen bg-pink-100 text-pink-800 transform transition-transform duration-500 ease-in-out z-40 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center h-full space-y-6 px-4 overflow-y-auto">
          {links.map(({ id, link, onClick }) => (
            <li
              key={id}
              className={`w-full text-center py-4 text-3xl border-b border-pink-200 ${
                active === link ? "text-pink-600 underline underline-offset-4" : "hover:text-pink-600"
              }`}
            >
              {onClick ? (
                <button onClick={() => { setNav(false); onClick(); }}>{link}</button>
              ) : (
                <RouterLink
                  onClick={() => {
                    setNav(false);
                    setActive(link);
                  }}
                  to={link === "HOME" ? "/" : `/${link.toLowerCase().replace(/ /g, "-")}`}
                >
                  {link}
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
