// Homepage Component

import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { motion } from "framer-motion";


// import images
import nails from "../assets/images/nails5.jpg";
import nails2 from "../assets/images/charming.jpg";
import nails3 from "../assets/images/frenchtips.jpg";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-pink-200 to-purple-200 h-[236vh] relative scrollbar scrollbar-thumb-rose-500">
      {/* display imported components to build homepage */}
      {/* display navbar */}
 
      <div className="btn btn-primary absolute text-3xl left-10 top-48">
        I love you babe!
      </div>
      {/* navbar is place after btn to overlay on top of it */}
           <NavBar />
      <div>
       {/* title section */}
      <motion.h1
        className="text-5xl font-bold text-center mb-8 text-pink-800 m-[30px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
       Welcome to my nail shop
      </motion.h1>
        {/* subtitle section */}
        <p className="text-center mt-4   text-xl text-info font-semibold Alex">
          Explore beautiful nail designs and styles
        </p>

        <div className="flex items-center justify-center mt-10">
          <div className="rounded-box carousel carousel-center  ">
            <img className="carousel-item h-[272px] " src={nails} alt="" />
            <img className="carousel-item" src={nails2} alt="" />
            <img className="carousel-item" src={nails3} alt="" />
          </div>
        </div>

        <div className="text-xl mt-10 flex flex-col items-end ">
          <div class="chat chat-start">
            <div class="chat-bubble chat-bubble-error">
              Heyyy!
              <br />
              Beautiful nails!
            </div>
          </div>
          <div class="chat chat-end">
            <div class="chat-bubble chat-bubble-secondary">
              Thank you! <br />I got them done at Taylor Kates!
            </div>
          </div>
          <div class="chat chat-start">
            <div class="chat-bubble chat-bubble-success">
              Wow! I love them!
            </div>
          </div>
          <div className="p-6"> <Footer/></div>
       
        </div>
      </div>
    </div>
  );
};



export default Home;
