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
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "services",
    },
    {
      id: 4,
      link: "orders",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  // NavBar Display
  return (
    //     <nav className="navBarParent z-50 bg-white w-[96%] flex py-6 px-10 justify-between items-center h-20 shadow-xl rounded-md mt-10 ml-6 mr-10 text-black fixed opacity-80 border-sky-400 border-4 hover:border-[5px] hover:border-blue-500 hover:opacity-100 hover:shadow-lg duration-200">
    //       <div>
    //         <img
    //           className="navbarIcon fixed ml-3"
    //           // src={navbarIcon}
    //           width={"2.5%"}
    //         />
    //         <h1 className="WebsiteNameText text-4xl font-bold pl-16 text-fuchsia-600 font-AlexBrush">
    //           <Link to={"/home"} smooth duration={500}>
    //             Poodle Me Not
    //           </Link>
    //         </h1>
    //       </div>

    //       {/* when screen size is medium or bigger, will display flex, else will be hidden on mobile */}
    //       <ul className="navBarLinks hidden md:flex">
    //         {/* create a loop for each item in the 'links' array, then declare item.value(such as link.id) */}
    //         {/* this  '{links.map((link) => {}' can also work. 'link' can be named anything, then to get values, type link.id, link.link */}
    //         {links.map(({ id, link, icon, size }) => (
    //           <li
    //             //   for each key, get the 'link' name
    //             key={id}
    //             className="navbarLink px-14 cursor-pointer capitalize font-medium text-black text-lg hover:bg-fuchsia-300 hover:rounded-lg py-3 "
    //           >
    //             {/* display link name while adding "/"" to the link name to redirect to that page*/}
    //             <Link to={"/" + link} smooth duration={500}>
    //               {/* link icon */}
    //               <img
    //                 // Remove the flex from the icon, and set it on the same line, must have text-right in navbarLink
    //                 className="fixed ml-[-40px] mt-[-2px]"
    //                 src={icon}
    //                 alt=""
    //                 width={size}
    //               />
    //               {/* purely the link name, no backslash */}
    //               <div className="hover:underline hover:font-bold hover:scale-110 hover:text-white duration-200">
    //                 {" "}
    //                 {link}
    //               </div>
    //             </Link>
    //           </li>
    //         ))}
    //         {/* end loop */}
    //       </ul>
    //     </nav>
    //   );
    // };

    <div className="navBarParent flex justify-between items-center w-full h-20 px-4 text-white dark:bg-red-600 fixed z-50 dark:opacity-80">
      <div>
        <div className="myNameText text-2xl sm:text-5xl ml-2 font-[AlexBrush] font-AlexBrush">
          Taylor Kate
        </div>
      </div>

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
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        {/* end loop */}
      </ul>

      {/* --------------------------------------- for mobile view */}
      {/* #navBarMobileMenuIcon properties for both clicked and unclicked (top right icon in navBar) */}
      {/* is hidden once it reaches medium screen */}
      {/* has a onClick event 'setNav' that sets nav(false) to true or from true to false */}
      <div
        className="navBarMobileMenuIcon cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        // nav initial state is 'false'
        onClick={() => setNav(!nav)}
      >
        {/* if nav is true(clicked state), use FaTimes icon, else(false, default state), FaBars icon */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* If nav is true(clicked state) show this menu*/}
      {nav && (
        // Menu for mobile screen
        <ul className="navBarMobileMenuClicked-Background flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {/* same loop as before, use to display a list of links '<li>link</>'  */}
          {links.map(({ id, link }) => (
            <li
              //   for each key, get the 'link' name
              key={id}
              className="navBarMobileMenuClick-Links px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {/* display link name, Onclick closes menu, then scrolls to selected menu */}
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
            // end loop
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
