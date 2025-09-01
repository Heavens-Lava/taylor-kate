import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Chatbubbles from "../components/ui/chatbubbles";

// images
import nails from "../assets/images/nails5.jpg";
import nails2 from "../assets/images/charming.jpg";
import nails3 from "../assets/images/frenchtips.jpg";
import lashes from "../assets/images/lashes/bolddrama.jpg"; // Add a new image for lashes
import About from "../components/About";
import Contact from "../components/Contact";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <div>
      {/* Hero section with its own background */}
      <div className="relative">
        {/* Navbar positioned over hero */}
        <div className="absolute top-0 left-0 right-0 z-30">
          <NavBar />
        </div>

        {/* Floating badge */}
        <div className="fixed z-50 top-24 left-5 hover:bg-pink-400 text-white px-4 py-2 rounded-full shadow-md text-sm md:text-xl">
          💖 Jesus Loves You
        </div>

        <Hero />
        <Services />
        <About />
        <Chatbubbles />
        <Contact />
      </div>

      {/* Rest of content with gradient background */}
      <div className="bg-gradient-to-r from-white to-pink-200 min-h-screen relative">
        {/* Title */}
        <motion.h1
          className="text-5xl text-center pt-20 text-pink-800 font-myFont"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          “Because your nails deserve a little love and creativity.”
        </motion.h1>
        {/* Subtitle + Book Now */}
        {/* <div className="text-center my-6">
          <Link to="/BOOK-APPOINTMENT">
            <button className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition">
              Book Now
            </button>
          </Link>
        </div> */}
        {/* Image carousel for nails
        <div className="flex items-center justify-center m-10">
          <div className="carousel carousel-center rounded-box gap-4">
            <img
              className="carousel-item h-[272px]"
              src={nails}
              alt="nail design 1"
            />
            <img
              className="carousel-item h-[272px]"
              src={nails2}
              alt="nail design 2"
            />
            <img
              className="carousel-item h-[272px]"
              src={nails3}
              alt="nail design 3"
            />
          </div>
        </div> */}
        {/* New section for Lashes */}
        {/* <div className="text-center my-10">
          <motion.h2
            className="text-3xl font-bold text-pink-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get Gorgeous Lashes
          </motion.h2>
          <p className="text-xl text-pink-700 font-semibold mt-4">
            Shop our premium lashes and give your eyes the perfect look!
          </p>
          <div className="flex items-center justify-center m-10">
            <img
              className="h-[272px] rounded-lg shadow-xl"
              src={lashes}
              alt="lash design"
            />
          </div>
          <Link to="/lashes">
            <button className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition">
              Shop Lashes
            </button>
          </Link>
        </div> */}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
