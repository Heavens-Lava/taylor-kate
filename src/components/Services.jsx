import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Clock, Star, Calendar } from "lucide-react";
import nailImage from "../assets/images/nail-service.jpg";
import lashImage from "../assets/images/lash-service.jpg";
import massageImage from "../assets/images/massage-service.jpg";

const Services = () => {
  const services = [
    {
      title: "Nail Services",
      description:
        "Professional manicures and artistic nail designs that express your unique style.",
      image: nailImage,
      duration: "60-90 min",
      price: "Starting at $45",
      features: [
        "Classic & Gel Manicures",
        "Custom Nail Art",
        "French Tips & Ombré",
        "Nail Strengthening Treatments",
      ],
    },
    {
      title: "Lash Extensions",
      description:
        "Enhance your natural beauty with stunning, long-lasting lash extensions.",
      image: lashImage,
      duration: "90-120 min",
      price: "Starting at $120",
      features: [
        "Classic Lash Extensions",
        "Volume Lash Sets",
        "Lash Lifts & Tints",
        "Maintenance & Touch-ups",
      ],
    },
    {
      title: "Back Massage Therapy",
      description:
        "Relax and rejuvenate with therapeutic back massages tailored to your needs.",
      image: massageImage,
      duration: "45-75 min",
      price: "Starting at $80",
      features: [
        "Deep Tissue Massage",
        "Swedish Relaxation",
        "Hot Stone Therapy",
        "Aromatherapy Options",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-pink-400 mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Indulge in our premium beauty services, each designed to enhance
            your natural radiance and provide a truly luxurious experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Service Image */}
              <div className="relative overflow-hidden h-80">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-pink-400/90 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {service.price}
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Service Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Clock size={16} />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </div>

              {/* Hidden content that appears on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-xs text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className="w-full bg-pink-400 hover:bg-pink-500 text-white rounded-full py-2 text-sm font-medium transition-colors duration-300"
                >
                  <Calendar size={14} className="mr-2" />
                  Book This Service
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-pink-400 mb-4">
            Ready to Experience Luxury?
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Book your appointment today and let us help you look and feel your
            absolute best.
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
          >
            <Calendar size={18} className="mr-2" />
            Schedule Your Visit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
