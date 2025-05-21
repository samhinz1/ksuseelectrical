
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap, Home, Building, Plug, ShieldCheck, AlarmClock } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample services data
  const services = [
    {
      title: "Residential Electrical",
      description: "Complete electrical solutions for your home, including wiring, lighting, and safety upgrades.",
      icon: <Home className="h-12 w-12" />,
    },
    {
      title: "Commercial Services",
      description: "Professional electrical installations and maintenance for businesses of all sizes.",
      icon: <Building className="h-12 w-12" />,
    },
    {
      title: "Lighting Installation",
      description: "Expert installation of indoor and outdoor lighting systems to enhance your space.",
      icon: <Zap className="h-12 w-12" />,
    },
    {
      title: "Power Points & Switches",
      description: "Installation of new power points, switches and circuit upgrades for your property.",
      icon: <Plug className="h-12 w-12" />,
    },
    {
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to ensure your property meets all standards.",
      icon: <ShieldCheck className="h-12 w-12" />,
    },
    {
      title: "Emergency Services",
      description: "Fast response emergency electrical services when you need help most.",
      icon: <AlarmClock className="h-12 w-12" />,
    },
  ];

  // Sample testimonials data
  const testimonials = [
    {
      quote: "K Skuse Electrical provided excellent service when we needed to upgrade our home's electrical system. Professional, on time, and great value.",
      author: "Sarah Johnson",
      location: "Norman Park, Brisbane",
    },
    {
      quote: "We've used K Skuse for all our business electrical needs. Always reliable and does quality work. Highly recommended!",
      author: "Mark Thompson",
      location: "South Brisbane",
    },
    {
      quote: "After a power outage, K Skuse came quickly and fixed our issues within hours. Great emergency service!",
      author: "Emma Wilson",
      location: "Bulimba",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&q=80&auto=format&crop=entropy')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Electrical Services in Brisbane
            </h1>
            <p className="text-xl mb-8">
              Licensed, insured, and experienced electrician providing quality residential and commercial electrical services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-orange hover:bg-opacity-90 text-white px-8 py-3 rounded font-semibold text-lg transition-colors inline-block"
                onClick={() => window.scrollTo(0, 0)}
              >
                Get a Free Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white hover:border-brand-orange text-white hover:text-brand-orange px-8 py-3 rounded font-semibold text-lg transition-colors inline-block"
                onClick={() => window.scrollTo(0, 0)}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Brisbane's Trusted Electrician</h2>
              <p className="text-gray-700 mb-6">
                K Skuse Electrical is committed to providing safe, reliable, and high-quality electrical solutions for homes and businesses throughout Brisbane and SE Queensland.
              </p>
              <p className="text-gray-700 mb-6">
                With years of experience and a dedication to customer satisfaction, we handle projects of all sizes with professionalism and expertise.
              </p>
              <div className="flex gap-6 mb-4">
                <div className="flex items-center">
                  <div className="mr-2 text-brand-orange">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-brand-orange">
                    <AlarmClock className="h-6 w-6" />
                  </div>
                  <span className="font-semibold">24/7 Emergency Service</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-block mt-2 text-brand-orange font-semibold hover:underline"
                onClick={() => window.scrollTo(0, 0)}
              >
                Learn more about us →
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800&h=600"
                alt="Electrician working"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Electrical Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From residential repairs to commercial installations, we provide a comprehensive range of electrical services to meet your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="bg-brand-orange hover:bg-opacity-90 text-white px-8 py-3 rounded font-semibold text-lg transition-colors inline-block"
              onClick={() => window.scrollTo(0, 0)}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about our electrical services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default HomePage;
