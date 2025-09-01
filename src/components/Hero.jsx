// Hero.jsx
import { Button } from "./ui/button";
import { Calendar, Star, Sparkles } from "lucide-react";
import heroImage from "../assets/images/hero-beauty-spa.jpg";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image + Soft Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Luxury beauty spa environment"
          className="w-full h-full object-cover"
        />
        {/* Strong white overlay for that milky effect */}
        <div className="absolute inset-0 bg-white/70"></div>
        {/* Additional subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="text-orange-300/40" size={24} />
      </div>
      <div
        className="absolute top-40 right-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Star className="text-orange-300/50" size={20} />
      </div>
      <div
        className="absolute bottom-40 left-20 animate-float"
        style={{ animationDelay: "4s" }}
      >
        <Sparkles className="text-orange-300/30" size={28} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto animate-slide-up">
          {/* Main Title */}
          <h1 className="mb-8">
            <span className="block text-6xl md:text-8xl font-serif font-light text-pink-400/90 mb-2 tracking-wide">
              Taylor Kate
            </span>
            <span className="block text-2xl md:text-3xl font-light text-gray-600 tracking-widest">
              Beauty Studio
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Experience luxury beauty services in a serene spa environment.
            Expert nail care, stunning lash extensions, and therapeutic back
            massages.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              variant="luxury"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-base px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-full border-0 font-medium"
            >
              <Calendar size={18} className="mr-2" />
              Book Your Session
            </Button>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("services")}
              className="text-base px-8 py-3 bg-transparent border-2 border-pink-400 text-pink-500 hover:bg-pink-400 hover:text-white rounded-full font-medium"
            >
              View Services
            </Button>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto py-5">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">💅</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Nail Artistry
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional manicures & artistic designs
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Lash Extensions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beautiful, natural-looking lashes
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">💆</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Relaxing Massage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Therapeutic back massage therapy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
