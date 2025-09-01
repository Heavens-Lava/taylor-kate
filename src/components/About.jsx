import { Button } from "../components/ui/button";
import { Heart, Users, Calendar, Award } from "lucide-react";

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Users, number: "20+", label: "Happy Clients" },
    { icon: Heart, number: "100%", label: "Satisfaction Rate" },
    { icon: Award, number: "2", label: "Years Experience" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-serif font-light text-pink-400 mb-8 leading-tight">
              Meet Taylor Kate
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Taylor Kate is a passionate, self-taught beauty specialist with
                over two years of experience helping clients feel confident and
                radiant. She brings dedication, care, and creativity to every
                session, ensuring each client receives a personalized and
                luxurious experience.
              </p>

              <p>
                Specializing in nail artistry, lash extensions, and therapeutic
                massage, Taylor combines a keen eye for detail with a genuine
                love for enhancing natural beauty. Every session is tailored to
                your individual needs and preferences, creating results that
                delight and inspire.
              </p>
            </div>

            {/* Personal Achievements / Highlights */}
            <div className="mt-12">
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Highlights
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <Award size={18} className="text-pink-400" />
                  Over 20 happy clients served
                </li>
                <li className="flex items-center gap-3">
                  <Award size={18} className="text-pink-400" />
                  2+ years of hands-on beauty experience
                </li>
                <li className="flex items-center gap-3">
                  <Award size={18} className="text-pink-400" />
                  100% client satisfaction focus
                </li>
              </ul>
            </div>

            <Button
              onClick={scrollToContact}
              className="mt-8 bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              <Calendar size={18} className="mr-2" />
              Book with Taylor
            </Button>
          </div>

          {/* Right Profile Section */}
          <div className="animate-scale-in lg:sticky lg:top-24">
            <div className="relative">
              {/* Profile Circle */}
              <div className="w-80 h-80 mx-auto mb-8 bg-pink-100/60 rounded-full flex items-center justify-center shadow-lg">
                <Heart size={80} className="text-pink-400" />
              </div>

              {/* Name and Title */}
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-2">
                  Taylor Kate
                </h3>
                <p className="text-lg text-gray-500 font-light">
                  Beauty Specialist
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <stat.icon
                      className="text-pink-400 mx-auto mb-2"
                      size={20}
                    />
                    <div className="text-xl font-bold text-gray-800">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-pink-400 mb-6">
              My Philosophy
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              "Beauty is about more than appearance—it's about feeling
              confident, relaxed, and fully yourself. I believe everyone
              deserves to feel pampered and to enjoy the transformative power of
              self-care in a serene, luxurious environment."
            </p>
            <div className="text-lg text-pink-400 font-serif">
              — Taylor Kate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
