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
import lashes from "../assets/images/lashes/bolddrama.jpg"; // Add a new image for lashes

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-white to-purple-300 min-h-screen relative">
      {/* Navbar */}
      <NavBar />

      {/* Floating badge */}
      <div className="fixed z-50 top-24 left-5 bg-pink-500 text-white px-4 py-2 rounded-full shadow-md text-sm md:text-xl">
        💖 Jesus Loves You
      </div>

      {/* Title */}
      <motion.h1
        className="text-5xl  text-center mt-32 text-pink-800 font-myFont"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to my nail and lashes shop
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

      {/* Image carousel for nails */}
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
      </div>

      {/* New section for Lashes */}
      <div className="text-center my-10">
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
        <Link to="/SHOP-LASHES">
          <button className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition">
            Shop Lashes
          </button>
        </Link>
      </div>

      {/* Animated Chat Bubbles */}
      <div className="text-xl mt-10 flex flex-col items-end px-4 md:px-20 space-y-6">
        {[
          {
            text: "Heyyy!\nBeautiful nails!",
            type: "chat-start",
            style: "chat-bubble-error",
          },
          {
            text: "Thank you! \nI got them done at Taylor Kates!",
            type: "chat-end",
            style: "chat-bubble-secondary",
          },
          {
            text: "Wow! I love them!",
            type: "chat-start",
            style: "chat-bubble-success",
          },
          {
            text: "I know and I got them at such a great price!",
            type: "chat-end",
            style: "chat-bubble-secondary",
          },
          {
            text: "And don't forget, the lashes are to die for!",
            type: "chat-start",
            style: "chat-bubble-warning",
          },
          {
            text: "I'm getting those too! 💕",
            type: "chat-end",
            style: "chat-bubble-success",
          },
        ].map((chat, i) => {
          const ChatBubble = () => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`chat ${chat.type}`}
              >
                <div
                  className={`chat-bubble ${chat.style} whitespace-pre-line`}
                >
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
