import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Home, Building, Plug, ShieldCheck, AlarmClock, Power, House, Cable, Lightbulb, Settings, Bell, ChevronDown, Anchor, Stethoscope, Store } from "lucide-react";
import CallToAction from "@/components/CallToAction";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
  photo?: string;
}

const ServiceCard = ({ icon, title, description, examples, photo }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-brand-orange/20 hover:-translate-y-1 h-full flex flex-col">
      {photo && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={photo} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-start mb-4">
          <div className="text-brand-orange shrink-0 mr-3 p-2 rounded-lg bg-orange-50">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="mt-auto">
          <h4 className="font-semibold mb-2 text-sm">Examples:</h4>
          <ul className="space-y-1">
            {examples.map((example, index) => (
              <li key={index} className="flex items-start">
                <span className="text-brand-orange mr-2 shrink-0">•</span>
                <span className="text-gray-600 text-xs">{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Residential Services",
      description: "Complete electrical solutions for your home, from minor repairs to full installations.",
      category: "residential",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/residential.webp`,
      examples: [
        "Kitchen & bathroom electrical installations",
        "Living space lighting & power upgrades",
        "Home office electrical setups",
        "Ceiling fan & air conditioning wiring"
      ]
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Industrial Fitouts",
      description: "Professional electrical solutions for businesses of all sizes.",
      category: "commercial",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/commercial.webp`,
      examples: [
        "Factory & warehouse electrical systems",
        "Industrial machinery connections",
        "3-phase power installations",
        "Machine shop wiring"
      ]
    },
    {
      icon: <Store className="h-6 w-6" />,
      title: "Commercial Fitouts",
      description: "Specialized electrical solutions for retail, office, and commercial spaces.",
      category: "commercial",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/servicecards/commercialfitout.webp`,
      examples: [
        "Restaurant & café electrical installations",
        "Retail shop lighting & power systems",
        "Office fitouts & workstation wiring",
        "Bar & entertainment venue setups"
      ]
    },
    {
      icon: <Anchor className="h-6 w-6" />,
      title: "Marine Electrical",
      description: "Specialized electrical services for boats, yachts, and marine environments.",
      category: "specialized",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/servicecards/boat.webp`,
      examples: [
        "Boat & yacht electrical system installation",
        "Marina power connection setups",
        "Navigation lighting & instrumentation",
        "Marine battery & inverter systems"
      ]
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Medical Facilities",
      description: "Specialized electrical solutions for medical offices, clinics, and healthcare facilities.",
      category: "specialized",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/servicecards/medical.webp`,
      examples: [
        "Dental clinic electrical installations",
        "Medical office power & lighting",
        "X-ray room electrical setups",
        "Medical equipment power supply"
      ]
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Lighting Installation",
      description: "Expert installation of indoor and outdoor lighting systems to enhance your space.",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/servicecards/lights.webp`,
      examples: [
        "Recessed downlight installation",
        "LED strip & feature lighting",
        "Outdoor & garden lighting setups",
        "Smart lighting system installation"
      ]
    },
    {
      icon: <Plug className="h-6 w-6" />,
      title: "Power Points & Switches",
      description: "Installation of new power points, switches and circuit upgrades for your property.",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/servicecards/powerpoint2.webp`,
      examples: [
        "USB power point installation",
        "Kitchen & bathroom GPOs",
        "Outdoor weather-protected outlets",
        "Smart switch & dimmer installation"
      ]
    },
    {
      icon: <Power className="h-6 w-6" />,
      title: "Mains & Underground Mains",
      description: "Professional installation and upgrades of main power connections and underground electrical systems.",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/servicecards/breakers.webp`,
      examples: [
        "Mains power upgrades & replacements",
        "Underground cable installation",
        "Switchboard upgrades & installations",
        "Property power supply connections"
      ]
    },
    {
      icon: <House className="h-6 w-6" />,
      title: "Renovations",
      description: "Complete electrical solutions for home and commercial renovations.",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/servicecards/renovation.webp`,
      examples: [
        "Kitchen & bathroom renovations",
        "Home extension electrical work",
        "Commercial space refurbishments",
        "Historic building electrical updates"
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Generators",
      description: "Installation and maintenance of backup power systems and generators.",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/servicecards/generator.webp`,
      examples: [
        "Home backup generator installation",
        "Commercial emergency power systems",
        "Rural property power solutions",
        "Portable generator setups"
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Maintenance",
      description: "Comprehensive electrical maintenance services to keep your systems running smoothly.",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/servicecards/powerpoint (1).webp`,
      examples: [
        "Regular electrical system inspections",
        "Switchboard maintenance & testing",
        "Commercial property maintenance",
        "Safety switch testing & maintenance"
      ]
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Smoke Detectors",
      description: "Installation and maintenance of smoke alarms to comply with safety regulations.",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/servicecards/smokealarm.webp`,
      examples: [
        "Hardwired smoke alarm installation",
        "Interconnected smoke detector systems",
        "Rental property compliance upgrades",
        "Smoke alarm replacement & testing"
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fault Finding",
      description: "Professional diagnosis and repair of electrical issues and faults.",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/emergency.webp`,
      examples: [
        "Circuit overload troubleshooting",
        "Power outage investigation",
        "Electrical appliance fault finding",
        "Intermittent power issue diagnosis"
      ]
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "CCTV Installation",
      description: "Professional installation of security camera systems for homes and businesses.",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/servicecards/cctv.webp`,
      examples: [
        "Home security camera installation",
        "Business surveillance systems",
        "Remote viewing camera setups",
        "Wired & wireless CCTV systems"
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Air Conditioning Installation",
      description: "Expert installation of air conditioning systems with electrical integration.",
      photo: `${import.meta.env.BASE_URL}lovable-uploads/servicecards/aircon.webp`,
      examples: [
        "Split system A/C installation",
        "Ducted air conditioning wiring",
        "Multi-head system electrical setup",
        "Commercial HVAC electrical work"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}lovable-uploads/electrician1.webp')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Electrical Services</h1>
            <p className="text-xl text-white">
              Comprehensive electrical solutions for residential and commercial properties across Brisbane.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">No Job Too Big or Small</h2>
            <p className="text-lg text-gray-700 mb-4">
              At K SKUSE Electrical, we pride ourselves on delivering comprehensive electrical solutions that combine technical expertise with exceptional customer service. Our team of licensed electricians brings years of experience to every project, ensuring that your electrical needs are met with the highest standards of safety, quality, and efficiency.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're looking to upgrade your home's electrical system, need emergency repairs, or require commercial electrical services, we offer a full range of solutions tailored to your specific requirements. From new installations to maintenance and repairs, our commitment to excellence and attention to detail ensures that every job is completed to your complete satisfaction.
            </p>
          </div>
          

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                examples={service.examples}
                photo={service.photo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Service Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-orange rounded-full text-white font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="font-bold text-xl mb-3">Consultation</h3>
                <p className="text-gray-600">
                  We discuss your electrical needs, assess your requirements, and provide expert advice.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-orange rounded-full text-white font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="font-bold text-xl mb-3">Quote & Planning</h3>
                <p className="text-gray-600">
                  We provide a transparent, detailed quote and develop a plan for your electrical project.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-orange rounded-full text-white font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="font-bold text-xl mb-3">Expert Execution</h3>
                <p className="text-gray-600">
                  Our licensed electricians complete the work safely, efficiently, and to the highest standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Need electrical services?"
        subtitle="Contact us today for a free quote or to discuss your electrical needs."
      />
    </>
  );
};

export default ServicesPage;
