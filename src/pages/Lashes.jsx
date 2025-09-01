import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Heart,
  ShoppingBag,
  Sparkles,
  Eye,
  Award,
  Users,
} from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Import lash images
import bolddrama from "../assets/images/lashes/bolddrama2.jpg";
import glamluxe from "../assets/images/lashes/glamluxe.jpg";
import naturalwhisper from "../assets/images/lashes/naturalwhisper.jpg";

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseClasses =
    "font-semibold transition-all duration-300 rounded-xl transform hover:scale-105 active:scale-95";
  const variants = {
    primary:
      "bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-pink-500 border-2 border-pink-500 hover:bg-pink-50",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-pink-500",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const FloatingElement = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -10, 0],
      rotate: [0, 1, -1, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

const lashes = [
  {
    name: "Glam Luxe",
    description: "Full volume lashes for a night out.",
    image: glamluxe,
    price: "$19.99",
    originalPrice: "$24.99",
    rating: 4.8,
    reviews: 247,
    features: ["Dramatic Volume", "12-Hour Wear", "Cruelty-Free"],
    bestseller: true,
    category: "dramatic",
  },
  {
    name: "Natural Whisper",
    description: "Lightweight lashes for everyday wear.",
    image: naturalwhisper,
    price: "$14.99",
    originalPrice: "$18.99",
    rating: 4.9,
    reviews: 389,
    features: ["Natural Look", "Comfortable", "Easy Application"],
    category: "natural",
  },
  {
    name: "Bold Drama",
    description: "Intensely dramatic lashes to make a statement.",
    image: bolddrama,
    price: "$21.99",
    originalPrice: "$26.99",
    rating: 4.7,
    reviews: 156,
    features: ["Ultra Volume", "Statement Look", "Professional Grade"],
    newArrival: true,
    category: "dramatic",
  },
];

function Lashes() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredLashes =
    selectedCategory === "all"
      ? lashes
      : lashes.filter((lash) => lash.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero Section with Floating Elements */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 pt-24 pb-16">
        {/* Floating decorative elements */}
        <FloatingElement
          className="absolute top-20 left-10 text-pink-300 opacity-30"
          delay={0}
        >
          <Sparkles size={24} />
        </FloatingElement>
        <FloatingElement
          className="absolute top-32 right-20 text-rose-300 opacity-30"
          delay={1}
        >
          <Eye size={28} />
        </FloatingElement>
        <FloatingElement
          className="absolute bottom-20 left-1/4 text-pink-400 opacity-20"
          delay={2}
        >
          <Heart size={32} />
        </FloatingElement>

        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-rose-400/10 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-rose-600 to-pink-700 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Discover Your
              <span className="block">Perfect Lashes</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Transform your look with our premium collection of handcrafted
              lashes. From natural elegance to bold drama, find your signature
              style.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              className="flex justify-center space-x-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">100%</div>
                <div className="text-sm text-gray-600">Cruelty-Free</div>
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="flex justify-center space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {["all", "natural", "dramatic"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-pink-50 border border-pink-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredLashes.map((lash, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                variants={cardVariants}
                className="group relative"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative">
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
                    {lash.bestseller && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Award className="w-3 h-3 mr-1" />
                        Bestseller
                      </span>
                    )}
                    {lash.newArrival && (
                      <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        New Arrival
                      </span>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(index)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors duration-300 ${
                        favorites.includes(index)
                          ? "text-red-500 fill-red-500"
                          : "text-gray-400 hover:text-red-400"
                      }`}
                    />
                  </button>

                  {/* Image with overlay effect */}
                  <div className="relative overflow-hidden h-64 bg-gradient-to-br from-pink-100 to-purple-100">
                    <img
                      src={lash.image}
                      alt={lash.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Quick view overlay */}
                    <AnimatePresence>
                      {hoveredCard === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute inset-0 bg-black/40 flex items-center justify-center"
                        >
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Quick View
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                        {lash.name}
                      </h3>
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium text-gray-600">
                          {lash.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {lash.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {lash.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price and Reviews */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-pink-600">
                          {lash.price}
                        </span>
                        {lash.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {lash.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {lash.reviews} reviews
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button className="flex-1">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="secondary" size="md" className="px-4">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400/0 to-purple-400/0 group-hover:from-pink-400/10 group-hover:to-purple-400/10 transition-all duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Trust Indicators */}
      <motion.div
        className="bg-gradient-to-r from-pink-600 to-purple-600 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg">Premium Quality</h4>
              <p className="text-pink-100 text-sm">
                Handcrafted with the finest materials
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg">Cruelty-Free</h4>
              <p className="text-pink-100 text-sm">
                100% ethical beauty products
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg">Award Winning</h4>
              <p className="text-pink-100 text-sm">
                Recognized by beauty experts worldwide
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg">50K+ Customers</h4>
              <p className="text-pink-100 text-sm">Join our beauty community</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        className="bg-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Stay Updated with Beauty Trends
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get exclusive access to new collections and beauty tips
          </p>
          <div className="flex flex-col md:flex-row max-w-md mx-auto space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors"
            />
            <Button>
              <Sparkles className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </motion.div>

      <Footer />

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all duration-300">
          <ShoppingBag className="w-6 h-6" />
        </button>
      </motion.div>
    </div>
  );
}

export default Lashes;
