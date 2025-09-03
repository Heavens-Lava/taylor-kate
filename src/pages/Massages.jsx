import React, { useState } from "react";
import {
  Star,
  Heart,
  Leaf,
  Calendar,
  Phone,
  Instagram,
  MapPin,
  Clock,
  Waves,
  Sun,
  Moon,
} from "lucide-react";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-emerald-600 border-2 border-emerald-500 hover:bg-emerald-50",
    ghost: "bg-transparent text-emerald-600 hover:bg-emerald-50",
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
    className={`bg-white/85 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${className}`}
  >
    {children}
  </div>
);

const services = [
  {
    name: "Swedish Serenity",
    description:
      "Classic relaxation massage with gentle, flowing strokes to melt away tension and stress",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500",
    price: "$85",
    duration: "60 mins",
    rating: 4.9,
    popular: true,
    benefits: ["Stress relief", "Improved circulation", "Muscle relaxation"],
  },
  {
    name: "Deep Tissue Renewal",
    description:
      "Therapeutic deep pressure massage targeting chronic pain and muscle knots",
    image: "https://images.unsplash.com/photo-1559829235-3f37c06aaee9?w=500",
    price: "$110",
    duration: "75 mins",
    rating: 4.8,
    popular: true,
    benefits: ["Pain relief", "Increased mobility", "Tension release"],
  },
  {
    name: "Hot Stone Harmony",
    description:
      "Luxurious heated stone massage combined with aromatherapy oils for ultimate relaxation",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
    price: "$125",
    duration: "90 mins",
    rating: 5.0,
    popular: false,
    benefits: ["Deep relaxation", "Improved circulation", "Stress reduction"],
  },
  {
    name: "Prenatal Bliss",
    description:
      "Gentle, specialized massage for expecting mothers to ease pregnancy discomfort",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500",
    price: "$95",
    duration: "60 mins",
    rating: 4.9,
    popular: false,
    benefits: ["Reduced swelling", "Better sleep", "Stress relief"],
  },
  {
    name: "Couples Retreat",
    description:
      "Side-by-side relaxation massage experience for you and your partner",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500",
    price: "$180",
    duration: "60 mins",
    rating: 4.7,
    popular: true,
    benefits: ["Shared experience", "Bonding time", "Stress relief"],
  },
  {
    name: "Aromatherapy Escape",
    description:
      "Customized massage with essential oils tailored to your mood and wellness needs",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=500",
    price: "$100",
    duration: "75 mins",
    rating: 4.8,
    popular: false,
    benefits: ["Mood enhancement", "Stress relief", "Aromatherapy benefits"],
  },
];

const testimonials = [
  {
    name: "Maria L.",
    text: "The most relaxing experience I've ever had. I felt completely rejuvenated!",
    rating: 5,
  },
  {
    name: "David R.",
    text: "Professional and a truly serene environment. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jennifer K.",
    text: "The hot stone massage was incredible. I'm already booking my next appointment.",
    rating: 5,
  },
];

const therapists = [
  {
    name: "Elena Rodriguez",
    specialty: "Swedish & Deep Tissue",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300",
  },
  {
    name: "Michael Chen",
    specialty: "Hot Stone & Sports Massage",
    experience: "6 years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300",
  },
  {
    name: "Sarah Williams",
    specialty: "Prenatal & Aromatherapy",
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300",
  },
];

function FabulousMassagePage() {
  const navigate = useNavigate();
  const handleBookClick = () => {
    navigate("/Book-appointment");
  };
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    "all",
    "relaxation",
    "therapeutic",
    "specialty",
    "couples",
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => {
          if (selectedCategory === "relaxation")
            return (
              service.name.includes("Swedish") ||
              service.name.includes("Aromatherapy")
            );
          if (selectedCategory === "therapeutic")
            return (
              service.name.includes("Deep") ||
              service.name.includes("Hot Stone")
            );
          if (selectedCategory === "specialty")
            return (
              service.name.includes("Prenatal") ||
              service.name.includes("Hot Stone")
            );
          if (selectedCategory === "couples")
            return service.name.includes("Couples");
          return true;
        });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Animated Background Elements */}
      <Navbar />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-teal-200/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-cyan-200/20 rounded-full animate-pulse delay-1000"></div>
        <Waves className="absolute top-1/2 left-1/4 w-16 h-16 text-emerald-200/30 animate-pulse" />
        <Leaf className="absolute top-1/3 right-1/3 w-12 h-12 text-teal-200/30 animate-bounce delay-500" />
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
        <div className="relative z-10 text-center py-20 px-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Leaf className="w-12 h-12 text-emerald-500 animate-pulse" />
              <div className="absolute inset-0 animate-ping">
                <Leaf className="w-12 h-12 text-emerald-300" />
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Zen Wellness Spa
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Escape to tranquility. Rejuvenate your body, mind, and spirit with
            our therapeutic massage treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="text-lg px-8 py-4" onClick={handleBookClick}>
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Escape
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call (480) 486-6757
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
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                    : "bg-white/80 text-emerald-600 hover:bg-emerald-50"
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
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Most Popular
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
                          Learn More
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

                    <div className="mb-4">
                      <h4 className="font-semibold text-emerald-600 mb-2">
                        Benefits:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, i) => (
                          <span
                            key={i}
                            className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-emerald-600">
                        {service.price}
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </span>
                    </div>

                    <Button className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book This Treatment
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Therapists Section */}
      {/* <div className="bg-white/40 backdrop-blur-sm py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Meet Our Expert Therapists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {therapists.map((therapist, index) => (
              <Card key={index} className="text-center p-6">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {therapist.name}
                </h3>
                <p className="text-emerald-600 font-semibold mb-1">
                  {therapist.specialty}
                </p>
                <p className="text-gray-600">
                  {therapist.experience} experience
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div> */}

      {/* Testimonials Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Client Testimonials
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
                <p className="font-semibold text-emerald-600">
                  {testimonial.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Wellness Tips Section */}
      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Wellness Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <Sun className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Pre-Massage</h3>
              <p className="text-gray-600">
                Arrive 15 minutes early, stay hydrated, and avoid heavy meals
                beforehand.
              </p>
            </Card>
            <Card className="p-6">
              <Moon className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Post-Massage</h3>
              <p className="text-gray-600">
                Drink plenty of water, rest when possible, and avoid strenuous
                activity.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-6 bg-gradient-to-r from-emerald-500 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Ready to Unwind?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your therapeutic massage today and discover true relaxation
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              <span className="text-lg">(480) 486-6757</span>
            </div>
            {/* <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span className="text-lg">456 Serenity Ave, Wellness City</span>
            </div> */}
            <div className="flex items-center">
              <Instagram className="w-6 h-6 mr-2" />
              <span className="text-lg">@TaylorKateBeauty</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              className="text-lg px-8 py-4"
              onClick={handleBookClick}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Today
            </Button>
            {/* <Button
              variant="ghost"
              className="text-lg px-8 py-4 border-2 border-white/30 hover:bg-white/10"
            >
              <Leaf className="w-5 h-5 mr-2" />
              Gift Certificates
            </Button> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FabulousMassagePage;
