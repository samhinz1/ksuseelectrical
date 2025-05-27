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
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${import.meta.env.BASE_URL}lovable-uploads/pole.avif")`,
            backgroundSize: '100%',
            backgroundPosition: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl text-left pl-4 md:pl-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About K Skuse Electrical</h1>
            <p className="text-xl text-gray-200">
              Licensed electrician with 10+ years of experience serving Brisbane and SE Queensland.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/2">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/kskusephot.webp`}
                alt="Professional Electrician"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                At K Skuse Electrical, we believe in doing it right the first time. Founded by Kurt Skuse, our company is built on a foundation of honesty, integrity, and trust. With a commitment to old-school service, we treat every project with the care and attention it deserves, ensuring our clients in the local community receive reliable, high-quality electrical solutions.
              </p>
              <p className="text-gray-700 mb-4">
                Kurt Skuse, a skilled and dedicated electrician, brings years of expertise to every job. As a local and trusted professional, Kurt takes pride in delivering quality workmanship that is guaranteed to meet the highest standards. Whether it's a small repair or a complex installation, Kurt and his team at K Skuse Electrical are committed to providing exceptional service, fostering lasting relationships with our clients, and powering homes and businesses with confidence.
              </p>
              <p className="text-gray-700 mb-4">
                When you choose K Skuse Electrical, you're choosing a partner who values your trust and strives to exceed your expectations. We're here to light the way, one project at a time.
              </p>
              {/* Stat Cards */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
                <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-orange-400"></div>
                  <div className="bg-gradient-to-br from-brand-orange/10 to-orange-100/50 p-5 rounded-2xl mb-6">
                    <Clock className="h-10 w-10 text-brand-orange" />
                  </div>
                  <span className="text-5xl font-bold bg-gradient-to-r from-brand-orange to-orange-500 bg-clip-text text-transparent mb-3">10+</span>
                  <span className="text-gray-700 font-semibold text-lg">Years of Experience</span>
                </div>
                <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-orange-400"></div>
                  <div className="bg-gradient-to-br from-brand-orange/10 to-orange-100/50 p-5 rounded-2xl mb-6">
                    <CheckCircle className="h-10 w-10 text-brand-orange" />
                  </div>
                  <span className="text-5xl font-bold bg-gradient-to-r from-brand-orange to-orange-500 bg-clip-text text-transparent mb-3">3000+</span>
                  <span className="text-gray-700 font-semibold text-lg">Jobs Completed</span>
                </div>
                <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-orange-400"></div>
                  <div className="bg-gradient-to-br from-brand-orange/10 to-orange-100/50 p-5 rounded-2xl mb-6">
                    <Star className="h-10 w-10 text-brand-orange" />
                  </div>
                  <span className="text-5xl font-bold bg-gradient-to-r from-brand-orange to-orange-500 bg-clip-text text-transparent mb-3">100+</span>
                  <span className="text-gray-700 font-semibold text-lg">5 Star Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Certifications</h2>
            <p className="text-gray-600 mb-10">
              K Skuse Electrical is fully licensed and certified to perform electrical work throughout Queensland.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(25%-2rem)]">
                <img 
                  src={`${import.meta.env.BASE_URL}lovable-uploads/qbcc.webp`} 
                  alt="QBCC License" 
                  className="h-24 md:h-32 w-auto mx-auto mb-4 object-contain"
                />
                <h3 className="font-bold mb-2 text-sm md:text-base">QBCC License</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Licensed electrical contractor in Queensland
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(25%-2rem)]">
                <img 
                  src={`${import.meta.env.BASE_URL}lovable-uploads/qldgov.webp`} 
                  alt="QLD Government License" 
                  className="h-24 md:h-32 w-auto mx-auto mb-4 object-contain"
                />
                <h3 className="font-bold mb-2 text-sm md:text-base">QLD Government License</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Government certified electrical contractor
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(25%-2rem)]">
                <img 
                  src={`${import.meta.env.BASE_URL}lovable-uploads/ARC.webp`} 
                  alt="ARC License" 
                  className="h-24 md:h-32 w-auto mx-auto mb-4 object-contain"
                />
                <h3 className="font-bold mb-2 text-sm md:text-base">ARC License</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Authorized Refrigeration Contractor
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(25%-2rem)]">
                <img 
                  src={`${import.meta.env.BASE_URL}lovable-uploads/mea.webp`} 
                  alt="MEA License" 
                  className="h-24 md:h-32 w-auto mx-auto mb-4 object-contain"
                />
                <h3 className="font-bold mb-2 text-sm md:text-base">MEA License</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Master Electricians Australia Certified
                </p>
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
