import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { motion } from "framer-motion";


// import images
import nails4 from "../assets/images/nails4.jpg";
import galaxynails from "../assets/images/galaxynails.jpg";




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

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-center space-x-6">
    <Link to="/" className="text-pink-600 hover:underline font-medium">
      Home
    </Link>
    <Link to="/lashes" className="text-pink-600 hover:underline font-medium">
      Lashes
    </Link>
    <Link to="/nails" className="text-pink-600 hover:underline font-medium">
      Nails
    </Link>
  </nav>
);



const nails = [
  {
    name: "Rose Quartz",
    description: "Elegant soft pink gel manicure.",
    image: "https://media.allure.com/photos/5f5e75c6e5690b9de2eb176e/16:9/w_2560%2Cc_limit/Rose%252520Quartz%252520Nails.png",
    price: "$29.99",
  },
  {
    name: "Galaxy Tips",
    description: "Space-inspired shimmer nail design.",
    image: galaxynails,
    price: "$34.99",
  },
  {
    name: "Nude Elegance",
    description: "Timeless neutral shades with matte finish.",
    image: nails4,
    price: "$24.99",
  },
];


function Nails() {
  return (


    <div className="p-6 bg-rose-50 min-h-screen font-sans">
      <Navbar />
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-pink-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Stylish Nail Designs
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {nails.map((nail, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <figure>
                <img
                  src={nail.image}
                  alt={nail.name}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <CardContent>
                <h2 className="card-title text-pink-700">{nail.name}</h2>
                <p className="text-gray-600">{nail.description}</p>
                <p className="text-pink-600 font-bold">{nail.price}</p>
                <div className="card-actions justify-end">
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
    
  );
}


export default Nails;