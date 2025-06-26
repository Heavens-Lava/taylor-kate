import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useInView } from "react-intersection-observer";


// images
import nails from "../assets/images/nails5.jpg";
import nails2 from "../assets/images/charming.jpg";
import nails3 from "../assets/images/frenchtips.jpg";

// const chatVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.4, duration: 0.5 },
//   }),
// };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};



const Home = () => {
  return (
    <div className="bg-gradient-to-r from-pink-200 to-purple-200 min-h-screen relative">
      {/* Navbar */}
      <NavBar />

      {/* Floating badge */}
      <div className="fixed z-50 top-24 left-5 bg-pink-500 text-white px-4 py-2 rounded-full shadow-md text-sm md:text-xl">
        💖 I love you babe!
      </div>

      {/* Title */}
      <motion.h1
        className="text-5xl font-bold text-center mt-32 text-pink-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to my nail shop
      </motion.h1>

      {/* Subtitle + Book Now */}
      <div className="text-center my-6">
        <p className="text-xl text-pink-700 font-semibold font-[AlexBrush]">
          Explore beautiful nail designs and styles
        </p>
        <Link to="/BOOK-APPOINTMENT">
          <button className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition">
            Book Now
          </button>
        </Link>
      </div>

      {/* Image carousel */}
      <div className="flex items-center justify-center m-10">
        <div className="carousel carousel-center rounded-box gap-4">
          <img className="carousel-item h-[272px]" src={nails} alt="nail design 1" />
          <img className="carousel-item h-[272px]" src={nails2} alt="nail design 2" />
          <img className="carousel-item h-[272px]" src={nails3} alt="nail design 3" />
        </div>
      </div>

{/* Animated Chat Bubbles */}
<div className="text-xl mt-10 flex flex-col items-end px-4 md:px-20 space-y-6">
  {[
    { text: "Heyyy!\nBeautiful nails!", type: "chat-start", style: "chat-bubble-error" },
    { text: "Thank you! \nI got them done at Taylor Kates!", type: "chat-end", style: "chat-bubble-secondary" },
    { text: "Wow! I love them!", type: "chat-start", style: "chat-bubble-success" },
    { text: "I know and I got them at such a great price!", type: "chat-end", style: "chat-bubble-secondary" },
  ].map((chat, i) => {
    // Move hook OUTSIDE of conditional or loop
    const ChatBubble = () => {
      const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className={`chat ${chat.type}`}
        >
          <div className={`chat-bubble ${chat.style} whitespace-pre-line`}>
            {chat.text}
          </div>
        </motion.div>
      );
    };

    return <ChatBubble key={i} />;
  })}
</div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
