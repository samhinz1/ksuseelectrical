import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Users, Home, Clock, CheckCircle, Star } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}lovable-uploads/pole.webp')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About K Skuse Electrical</h1>
            <p className="text-xl text-gray-200">
              Licensed electrician with 25+ years of experience serving Brisbane and SE Queensland.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left side - Text content */}
            <div className="lg:w-3/5">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="text-lg space-y-6">
                <p className="text-gray-700">
                  At K Skuse Electrical, we believe in doing it right the first time. Founded by Kurt Skuse, our company is built on a foundation of honesty, integrity, and trust. With a commitment to old-school service, we treat every project with the care and attention it deserves, ensuring our clients in the local community receive reliable, high-quality electrical solutions.
                </p>
                <p className="text-gray-700">
                  Kurt Skuse, a skilled and dedicated electrician, brings years of expertise to every job. As a local and trusted professional, Kurt takes pride in delivering quality workmanship that is guaranteed to meet the highest standards. Whether it's a small repair or a complex installation, Kurt and his team at K Skuse Electrical are committed to providing exceptional service, fostering lasting relationships with our clients, and powering homes and businesses with confidence.
                </p>
                <p className="text-gray-700">
                  When you choose K Skuse Electrical, you're choosing a partner who values your trust and strives to exceed your expectations. We're here to light the way, one project at a time.
                </p>
              </div>
            </div>
            
            {/* Right side - Stat cards and certifications */}
            <div className="lg:w-2/5">
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 mb-8">
                <div className="relative overflow-hidden bg-white rounded-xl shadow-md p-5 flex flex-col items-center transform transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-orange-400"></div>
                  <div className="bg-gradient-to-br from-brand-orange/10 to-orange-100/50 p-3 rounded-full mb-3">
                    <Clock className="h-7 w-7 text-brand-orange" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-brand-orange to-orange-500 bg-clip-text text-transparent mb-1">25+</span>
                  <span className="text-gray-700 font-medium text-sm">Years of Experience</span>
                </div>
                <div className="relative overflow-hidden bg-white rounded-xl shadow-md p-5 flex flex-col items-center transform transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-orange-400"></div>
                  <div className="bg-gradient-to-br from-brand-orange/10 to-orange-100/50 p-3 rounded-full mb-3">
                    <CheckCircle className="h-7 w-7 text-brand-orange" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-brand-orange to-orange-500 bg-clip-text text-transparent mb-1">3000+</span>
                  <span className="text-gray-700 font-medium text-sm">Jobs Completed</span>
                </div>
                <div className="relative overflow-hidden bg-white rounded-xl shadow-md p-5 flex flex-col items-center transform transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-orange-400"></div>
                  <div className="bg-gradient-to-br from-brand-orange/10 to-orange-100/50 p-3 rounded-full mb-3">
                    <Star className="h-7 w-7 text-brand-orange" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-brand-orange to-orange-500 bg-clip-text text-transparent mb-1">100+</span>
                  <span className="text-gray-700 font-medium text-sm">5 Star Reviews</span>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Our Certifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/zurich.png`} 
                      alt="Insured by Zurich" 
                      className="h-16 w-auto mb-2 object-contain"
                    />
                    <h4 className="font-bold text-sm text-center">Insured by Zurich</h4>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/qldgov.webp`} 
                      alt="QLD Government License" 
                      className="h-16 w-auto mb-2 object-contain"
                    />
                    <h4 className="font-bold text-sm text-center">QLD Licensed Electrician #1503362</h4>
                    <a 
                      href="https://rapid.appianportals.com/public_licence_search" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-2 text-xs bg-brand-orange text-white px-3 py-1 rounded-md hover:bg-orange-600 transition-colors"
                    >
                      Check here
                    </a>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/mea.webp`} 
                      alt="MEA License" 
                      className="h-16 w-auto mb-2 object-contain"
                    />
                    <h4 className="font-bold text-sm text-center">MEA Certified</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Ready to work with us?"
        subtitle="Contact K Skuse Electrical today for all your electrical needs in Brisbane."
      />
    </>
  );
};

export default AboutPage;
