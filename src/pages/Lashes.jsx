import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

//import images from lashes folder
import bolddrama from "../assets/images/lashes/bolddrama2.jpg";
import glamluxe from "../assets/images/lashes/glamluxe.jpg"; 
import naturalwhisper from "../assets/images/lashes/naturalwhisper.jpg";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl font-semibold transition bg-pink-600 hover:bg-pink-700 text-white ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md">
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const lashes = [
  {
    name: "Glam Luxe",
    description: "Full volume lashes for a night out.",
    image: glamluxe,
    price: "$19.99",
  },
  {
    name: "Natural Whisper",
    description: "Lightweight lashes for everyday wear.",
    image: naturalwhisper,
    price: "$14.99",
  },
  {
    name: "Bold Drama",
    description: "Intensely dramatic lashes to make a statement.",
    image: bolddrama,
    price: "$21.99",
  },
];

function Lashes() {
  return (
    
    <div> <NavBar />
    
    <div className="p-6  bg-pink-50 min-h-screen font-sans">
      
      {/* title section */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-pink-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Discover Your Perfect Lashes
      </motion.h1>

      {/* card section */}
      {/* Each card is mapped out */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lashes.map((lash, index) => (
          <motion.div
            key={index}
            className="rounded-2xl shadow-lg overflow-hidden bg-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <img
                src={lash.image}
                alt={lash.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold text-pink-700">
                  {lash.name}
                </h2>
                <p className="text-gray-600 my-2">{lash.description}</p>
                <p className="text-pink-600 font-bold mb-3">{lash.price}</p>
                <Button className="w-full">Shop Now</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <Footer/>
    </div>
    </div>
  );
}

export default Lashes;