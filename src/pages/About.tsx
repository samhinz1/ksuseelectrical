
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
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About K Skuse Electrical</h1>
            <p className="text-xl text-gray-600">
              Licensed electrician with 10+ years of experience serving Brisbane and SE Queensland.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800&h=800"
                alt="Professional Electrician"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                K Skuse Electrical was established with a simple mission: to provide safe, reliable, and high-quality electrical solutions to homes and businesses throughout Brisbane and SE Queensland.
              </p>
              <p className="text-gray-700 mb-4">
                With over a decade of experience in the electrical industry, we've built a reputation for excellent workmanship, professionalism, and customer satisfaction.
              </p>
              <p className="text-gray-700 mb-4">
                We understand that electrical issues can be disruptive and sometimes dangerous, which is why we're committed to prompt service and effective solutions to keep your home or business safe and powered.
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
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission & Values</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-gray-700 mb-8">
                To provide safe, reliable, and high-quality electrical solutions that exceed customer expectations through professional service, technical expertise, and a commitment to safety.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Core Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-orange mb-2">Safety First</h4>
                  <p className="text-gray-600">
                    We prioritize safety in every project, ensuring all work meets or exceeds electrical safety standards.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-orange mb-2">Quality Workmanship</h4>
                  <p className="text-gray-600">
                    We take pride in our work and ensure every job is completed to the highest standard.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-orange mb-2">Customer Satisfaction</h4>
                  <p className="text-gray-600">
                    Your satisfaction is our priority. We're not happy until you're completely satisfied with our work.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-orange mb-2">Integrity</h4>
                  <p className="text-gray-600">
                    We operate with honesty, transparency, and fairness in all our business dealings.
                  </p>
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
            
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 w-64">
                <div className="text-brand-orange mb-3">
                  <ShieldCheck className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="font-bold mb-2">Electrical Contractor License</h3>
                <p className="text-sm text-gray-600">
                  Licensed electrical contractor in Queensland
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 w-64">
                <div className="text-brand-orange mb-3">
                  <ShieldCheck className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="font-bold mb-2">Fully Insured</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive public liability insurance
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 w-64">
                <div className="text-brand-orange mb-3">
                  <ShieldCheck className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="font-bold mb-2">Safety Certified</h3>
                <p className="text-sm text-gray-600">
                  Adherence to all electrical safety standards
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
