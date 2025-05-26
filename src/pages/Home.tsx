import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap, Home, Building, Plug, ShieldCheck, AlarmClock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import { useState } from "react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(3);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update reviews per page based on screen size
    const updateReviewsPerPage = () => {
      if (window.innerWidth < 768) { // mobile
        setReviewsPerPage(1);
      } else if (window.innerWidth < 1024) { // tablet
        setReviewsPerPage(2);
      } else { // desktop
        setReviewsPerPage(3);
      }
    };

    // Initial call
    updateReviewsPerPage();

    // Add event listener for window resize
    window.addEventListener('resize', updateReviewsPerPage);

    // Cleanup
    return () => window.removeEventListener('resize', updateReviewsPerPage);
  }, []);

  // Sample services data
  const services = [
    {
      title: "Residential Electrical",
      description: "Complete electrical solutions for your home, including wiring, lighting, and safety upgrades.",
      longDescription: "From new installations to repairs and upgrades, we provide comprehensive electrical services for your home. Our licensed electricians ensure your home's electrical system is safe, efficient, and up to code. Services include lighting installation, power point upgrades, switchboard upgrades, and safety inspections.",
      icon: <Home className="h-12 w-12" />,
      link: "/services/residential"
    },
    {
      title: "Commercial Services",
      description: "Professional electrical installations and maintenance for businesses of all sizes.",
      longDescription: "We deliver reliable electrical solutions for commercial properties, ensuring your business operations run smoothly. Our services include office fit-outs, retail installations, industrial electrical work, and regular maintenance programs. We work with businesses of all sizes to provide cost-effective and efficient electrical solutions.",
      icon: <Building className="h-12 w-12" />,
      link: "/services/commercial"
    },
    {
      title: "Emergency Services",
      description: "Fast response emergency electrical services when you need help most.",
      longDescription: "Available 24/7 for electrical emergencies, our team provides rapid response service to resolve urgent electrical issues. Whether it's a power outage, electrical fault, or safety concern, we're here to help. Our emergency service includes immediate response, temporary fixes, and permanent solutions to get your power back on safely.",
      icon: <AlarmClock className="h-12 w-12" />,
      link: "/services/emergency"
    },
  ];

  // Sample testimonials data
  const testimonials = [
    {
      quote: "K Skuse Electrical provided excellent service when we needed to upgrade our home's electrical system. Professional, on time, and great value.",
      author: "Sarah Johnson",
      location: "Norman Park, Brisbane",
      rating: 5,
      profilePhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&auto=format",
      source: "Google"
    },
    {
      quote: "Found K Skuse on Hipages and they were fantastic. Quick response and professional service. Will definitely use again!",
      author: "David Chen",
      location: "Coorparoo",
      rating: 5,
      profilePhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&auto=format",
      source: "Hipages"
    },
    {
      quote: "Great experience with K Skuse. They were recommended on Yellow Pages and lived up to their reputation. Very thorough and professional.",
      author: "Lisa Anderson",
      location: "Camp Hill",
      rating: 5,
      profilePhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&auto=format",
      source: "Yellow Pages"
    },
    {
      quote: "We've used K Skuse for all our business electrical needs. Always reliable and does quality work. Highly recommended!",
      author: "Mark Thompson",
      location: "South Brisbane",
      rating: 5,
      profilePhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
      source: "Google"
    },
    {
      quote: "Excellent service from start to finish. Found them on Hipages and they were the best electrician I've used in Brisbane.",
      author: "Michael Brown",
      location: "Hawthorne",
      rating: 5,
      profilePhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&auto=format",
      source: "Hipages"
    },
    {
      quote: "After a power outage, K Skuse came quickly and fixed our issues within hours. Great emergency service!",
      author: "Emma Wilson",
      location: "Bulimba",
      rating: 5,
      profilePhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&auto=format",
      source: "Google"
    },
    {
      quote: "Very impressed with their work. Found them on Yellow Pages and they were prompt, professional, and reasonably priced.",
      author: "Rachel Green",
      location: "East Brisbane",
      rating: 5,
      profilePhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&auto=format",
      source: "Yellow Pages"
    },
    {
      quote: "K Skuse did an amazing job with our office renovation. Found them on Hipages and they were the most professional team we've worked with.",
      author: "James Wilson",
      location: "Fortitude Valley",
      rating: 5,
      profilePhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format",
      source: "Hipages"
    },
    {
      quote: "Found K Skuse on Yellow Pages and they were excellent. Very knowledgeable and fixed our electrical issues quickly and efficiently.",
      author: "Sophie Taylor",
      location: "New Farm",
      rating: 5,
      profilePhoto: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&auto=format",
      source: "Yellow Pages"
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / reviewsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleTestimonials = testimonials.slice(
    currentSlide * reviewsPerPage,
    (currentSlide + 1) * reviewsPerPage
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2516657/pexels-photo-2516657.jpeg')] bg-cover bg-bottom opacity-20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="lg:w-5/12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Electrical Services in Brisbane & Surrounds
              </h1>
              <p className="text-xl mb-6">
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
            <div className="lg:w-5/12 w-full max-w-md lg:ml-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-white">Schedule a Call Back</h2>
                <form className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 rounded bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-brand-orange text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 rounded bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-brand-orange text-sm"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={2}
                      className="w-full px-3 py-2 rounded bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-brand-orange text-sm"
                      placeholder="Brief description of your needs"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-opacity-90 text-white px-4 py-2 rounded font-semibold text-base transition-colors"
                  >
                    Request Call Back
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-4">Brisbane's Trusted Electrician</h2>
              <p className="text-gray-700 mb-6">
                K Skuse Electrical is committed to providing safe, reliable, and high-quality electrical solutions for homes and businesses throughout Brisbane and SE Queensland.
              </p>
              <p className="text-gray-700 mb-6">
                With years of experience and a dedication to customer satisfaction, we handle projects of all sizes with professionalism and expertise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-brand-orange/20 hover:-translate-y-1">
                  <div className="flex items-center">
                    <div className="mr-3 text-brand-orange bg-orange-50 p-2 rounded-lg">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <span className="font-semibold">Licensed & Insured</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-brand-orange/20 hover:-translate-y-1">
                  <div className="flex items-center">
                    <div className="mr-3 text-brand-orange bg-orange-50 p-2 rounded-lg">
                      <AlarmClock className="h-6 w-6" />
                    </div>
                    <span className="font-semibold">24/7 Emergency Service</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-brand-orange/20 hover:-translate-y-1">
                  <div className="flex items-center">
                    <div className="mr-3 text-brand-orange bg-orange-50 p-2 rounded-lg">
                      <Zap className="h-6 w-6" />
                    </div>
                    <span className="font-semibold">Quality Workmanship</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-brand-orange/20 hover:-translate-y-1">
                  <div className="flex items-center">
                    <div className="mr-3 text-brand-orange bg-orange-50 p-2 rounded-lg">
                      <Building className="h-6 w-6" />
                    </div>
                    <span className="font-semibold">15+ Years Experience</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-brand-orange/20 hover:-translate-y-1">
                  <div className="flex items-center">
                    <div className="mr-3 text-brand-orange bg-orange-50 p-2 rounded-lg">
                      <Home className="h-6 w-6" />
                    </div>
                    <span className="font-semibold">Local & Reliable</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-brand-orange/20 hover:-translate-y-1">
                  <div className="flex items-center">
                    <div className="mr-3 text-brand-orange bg-orange-50 p-2 rounded-lg">
                      <Star className="h-6 w-6" />
                    </div>
                    <span className="font-semibold">5 Star Google Reviews</span>
                  </div>
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
              <div style={{ height: 400, width: '100%', overflow: 'hidden', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1ekplzd_z2OlqC-i6_rzzcQO2OVX2YzA&ehbc=2E312F"
                  width="100%"
                  height="480"
                  style={{ border: 0, marginTop: '-70px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brisbane and Gold Coast Service Area Highlighted"
                ></iframe>
              </div>
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
                longDescription={service.longDescription}
                icon={service.icon}
                link={service.link}
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
      <section className="py-16 bg-brand-orange">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Customer Reviews</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              See what our customers are saying about us across different platforms. We're proud of our 5-star ratings!
            </p>
          </div>
          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                  rating={testimonial.rating}
                  profilePhoto={testimonial.profilePhoto}
                  source={testimonial.source}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Brands We Work With</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with leading electrical brands to provide you with the highest quality products and solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            <img 
              src="/lovable-uploads/Schneider_Electric_2007.svg" 
              alt="Schneider Electric" 
              className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            />
            <img 
              src="/lovable-uploads/philips.png" 
              alt="Philips" 
              className="h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            />
            <img 
              src="/lovable-uploads/HPM-LOGO.jpg" 
              alt="HPM" 
              className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            />
            <img 
              src="/lovable-uploads/clipsal-logo.png" 
              alt="Clipsal" 
              className="h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            />
            <img 
              src="/lovable-uploads/arlec.png" 
              alt="Arlec" 
              className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default HomePage;
