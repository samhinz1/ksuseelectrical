import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Users, Home } from "lucide-react";
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1709656602966-b71944dbad64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <img
                src="/lovable-uploads/kskusephot.png"
                alt="Professional Electrician"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                At K Skuse Electrical, we believe in doing it right the first time. Founded by Kurt Skuse, our company is built on a foundation of honesty, integrity, and trust. With a commitment to old-school service, we treat every project with the care and attention it deserves, ensuring our clients in the local community receive reliable, high-quality electrical solutions.
              </p>
              <p className="text-gray-700 mb-4">
                Kurt Skuse, a skilled and dedicated electrician, brings years of expertise to every job. As a local and trusted professional, Kurt takes pride in delivering quality workmanship that is guaranteed to meet the highest standards. Whether it's a small repair or a complex installation, Kurt and his team at K Skuse Electrical are committed to providing exceptional service, fostering lasting relationships with our clients, and powering homes and businesses with confidence.
              </p>
              <p className="text-gray-700 mb-4">
                When you choose K Skuse Electrical, you're choosing a partner who values your trust and strives to exceed your expectations. We're here to light the way, one project at a time.
              </p>
              <div className="mt-6">
                <h3 className="font-bold text-xl mb-3">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ShieldCheck className="h-5 w-5 text-brand-orange mr-2" />
                    <span>Licensed and fully insured</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-brand-orange mr-2" />
                    <span>Friendly, professional service</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-5 w-5 text-brand-orange mr-2" />
                    <span>Quality workmanship guaranteed</span>
                  </li>
                  <li className="flex items-center">
                    <Home className="h-5 w-5 text-brand-orange mr-2" />
                    <span>Residential and commercial expertise</span>
                  </li>
                </ul>
              </div>
              {/* Stat Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center">
                  <span className="text-3xl font-bold text-brand-orange mb-2">10+</span>
                  <span className="text-gray-700 font-medium">Years of Experience</span>
                </div>
                <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center">
                  <span className="text-3xl font-bold text-brand-orange mb-2">3000+</span>
                  <span className="text-gray-700 font-medium">Jobs Completed</span>
                </div>
                <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center">
                  <span className="text-3xl font-bold text-brand-orange mb-2">100</span>
                  <span className="text-gray-700 font-medium">5 Star Reviews</span>
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
                  src="/lovable-uploads/qbcc.png" 
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
                  src="/lovable-uploads/qldgov.png" 
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
                  src="/lovable-uploads/ARC.jpg" 
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
                  src="/lovable-uploads/mea.png" 
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
