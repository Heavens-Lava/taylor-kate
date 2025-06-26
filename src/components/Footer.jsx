import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-20 mt-20">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Promo Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Special Offer</h2>
          <p className="text-sm">🎉 50% off your first visit!</p>
        </div>

        {/* Menu Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Menu</h2>
          <ul className="text-sm space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/Search">Search</Link></li>
            <li><Link to="/book">Book Now</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm">Email: RoblesTAK9218@yahoo.com</p>
          <p className="text-sm">Phone: (480) 486-6757</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Taylor Kate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
