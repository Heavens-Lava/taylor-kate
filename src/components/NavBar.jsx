// This component sets up the Navigation for the website.
// It includes a responsive navigation bar with links to different sections of the site.

import React, { useState, useContext } from "react";
// import icons
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  //NavBar variables/constants

  // create nav useState, 'nav' initial state set to false
  const [nav, setNav] = useState(false);

  

  // create json array 'links', use to display each link
  const links = [
    {id: 1,link: "HOME",},
    {id: 2,link: "LASHES",},
    {id: 3,link: "NAILS",},
    {id: 4,link: "BOOK APPOINTMENT",},
    {id: 5,link: "SIGN UP",},
    {id: 5,link: "LOGIN",},
  ];

  // NavBar Display
  return (
    // main container for NavBar
    <div className="navBarParent flex justify-between items-center w-full h-20 px-4 text-white dark:bg-red-600 bg-pink-600 z-50 dark:opacity-80">
      {/* Display Taylor Kate on top right of navigation */}
      <div className="myNameText text-2xl sm:text-5xl ml-2 font-[AlexBrush]">
        Taylor Kates
      </div>

      {/* ---------------------------------------- Code For Desktop View ---------------------------------------- */}
      {/* #navBarLinks will be hidden by default until it reaches at least medium size screen(mobile is hidden) */}
      <ul className="navBarLinks hidden md:flex">
        {/* create a loop for each item in the 'links' array, then declare item.value(such as link.id) */}
        {/* this  '{links.map((link) => {}' can also work. 'link' can be named anything, then to get values, type link.id, link.link */}
        {links.map(({ id, link }) => (
          <li
            //   for each key, get the 'link' name
            key={id}
            className="firstLink px-4 cursor-pointer capitalize font-medium text-stone-100 hover:scale-105 duration-200"
          >
            {/* display link name */}
            {/* Allows link to smooth to part of page with link, imported from react-scroll */}
            <Link to={"/" + link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        {/* end loop */}
      </ul>

      {/* --------------------------------------- for mobile view ---------------------------------------- */}
      {/* #navBarMobileMenuIcon properties for both clicked and unclicked (top right icon in navBar) */}
      {/* is hidden once it reaches medium screen */}
      {/* has a onClick event 'setNav' that sets nav(false) to true or from true to false */}
      {/* Mobile Hamburger Icon */}
      <div
        className="cursor-pointer pr-4 z-10 text-pink-700 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-pink-100 text-pink-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-pink-600"
            >
              <Link
                onClick={() => setNav(false)}
                to={"/" + link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
