import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Heart,
  Sparkles,
  Calendar,
  Phone,
  Instagram,
  MapPin,
} from "lucide-react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import FloralNails from "../assets/images/frenchtips.jpg";
import GalaxyNails from "../assets/images/galaxynails.jpg";

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-pink-600 border-2 border-pink-500 hover:bg-pink-50",
    ghost: "bg-transparent text-pink-600 hover:bg-pink-50",
  };

  return (
    <button
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${className}`}
  >
    {children}
  </div>
);

const services = [
  {
    name: "Rose Quartz Elegance",
    description:
      "Delicate soft pink gel manicure with rose gold accents and crystal details",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500",
    price: "$45",
    duration: "60 mins",
    rating: 4.9,
    popular: true,
  },
  {
    name: "Galaxy Dreams",
    description:
      "Mesmerizing space-inspired design with holographic shimmer and star details",
    image: GalaxyNails,
    price: "$55",
    duration: "75 mins",
    rating: 4.8,
    popular: false,
  },
  {
    name: "Nude Sophistication",
    description:
      "Timeless neutral shades with matte finish and subtle geometric patterns",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=500",
    price: "$38",
    duration: "45 mins",
    rating: 4.7,
    popular: false,
  },
  {
    name: "Chrome Reflection",
    description:
      "Ultra-modern chrome finish with mirror-like shine and metallic accents",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=500",
    price: "$65",
    duration: "90 mins",
    rating: 5.0,
    popular: true,
  },
  {
    name: "Floral Fantasy",
    description: "Hand-painted botanical designs with 3D flower embellishments",
    image: FloralNails,
    price: "$70",
    duration: "105 mins",
    rating: 4.9,
    popular: false,
  },
  {
    name: "Minimalist Chic",
    description:
      "Clean lines and negative space designs for the modern professional",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
    price: "$35",
    duration: "40 mins",
    rating: 4.6,
    popular: false,
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "Absolutely stunning work! My nails have never looked better.",
    rating: 5,
  },
  {
    name: "Emma K.",
    text: "The attention to detail is incredible. Highly recommend!",
    rating: 5,
  },
  {
    name: "Lisa R.",
    text: "Professional service and beautiful results every time.",
    rating: 5,
  },
];

function SpectacularNailPage() {
  const navigate = useNavigate();
  const handleBookClick = () => {
    navigate("/Book-appointment");
  };
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = ["all", "gel", "chrome", "artistic", "minimal"];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => {
          if (selectedCategory === "gel")
            return (
              service.name.includes("Rose") || service.name.includes("Nude")
            );
          if (selectedCategory === "chrome")
            return (
              service.name.includes("Chrome") || service.name.includes("Galaxy")
            );
          if (selectedCategory === "artistic")
            return (
              service.name.includes("Floral") || service.name.includes("Galaxy")
            );
          if (selectedCategory === "minimal")
            return (
              service.name.includes("Minimalist") ||
              service.name.includes("Nude")
            );
          return true;
        });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <Navbar />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-rose-200/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-purple-200/30 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-rose-600/20"></div>
        <div className="relative z-10 text-center py-20 px-6">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-pink-500 animate-spin" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-pulse">
            Taylor Kate Beauty Studio
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where artistry meets elegance. Transform your nails into
            masterpieces with our premium services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="text-lg px-8 py-4" onClick={handleBookClick}>
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Appointment
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call Now (480)-486-6757
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                    : "bg-white/80 text-pink-600 hover:bg-pink-50"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="transform transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="h-full group relative overflow-hidden">
                  {service.popular && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Popular
                    </div>
                  )}

                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {hoveredCard === index && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                          <Heart className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {service.name}
                      </h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {service.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-pink-600">
                        {service.price}
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {service.duration}
                      </span>
                    </div>

                    <Button className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book This Service
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white/40 backdrop-blur-sm py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-pink-600">
                  {testimonial.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-6 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Transform Your Nails?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your appointment today and experience luxury nail artistry
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              <span className="text-lg">(480) 486-6757</span>
            </div>
            {/* <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span className="text-lg">123 Beauty Lane, Salon City</span>
            </div> */}
            <div className="flex items-center">
              <Instagram className="w-6 h-6 mr-2" />
              <span className="text-lg">@TaylorKateBeauty</span>
            </div>
          </div>

          <Button
            variant="secondary"
            className="text-lg px-8 py-4"
            onClick={handleBookClick}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule An Appointment
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SpectacularNailPage;
