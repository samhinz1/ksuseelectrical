import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Home, Building, Plug, ShieldCheck, AlarmClock, Power, House, Cable, Lightbulb, Settings, Bell, ChevronDown } from "lucide-react";
import CallToAction from "@/components/CallToAction";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const ServiceItem = ({ icon, title, description, benefits }: ServiceItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-md border-t-4 border-brand-orange overflow-hidden transition-all duration-300"
      style={{ maxHeight: isOpen ? '1000px' : '80px' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="text-brand-orange">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <ChevronDown 
          className={`h-6 w-6 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`px-6 pb-6 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-gray-600 mb-4">{description}</p>
        <h4 className="font-semibold mb-2">Benefits:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-brand-orange mr-2">•</span>
              <span className="text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'specialized', name: 'Specialized' }
  ];

  const services = [
    {
      icon: <Home className="h-10 w-10" />,
      title: "Residential Electrical Services",
      description: "Complete electrical solutions for your home, from minor repairs to full installations.",
      category: "residential",
      benefits: [
        "Increased home safety with up-to-code electrical systems",
        "Energy-efficient solutions to reduce power bills",
        "Enhanced home functionality and convenience",
        "Expert advice on electrical improvements"
      ]
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "Commercial Electrical Services",
      description: "Professional electrical solutions for businesses of all sizes.",
      category: "commercial",
      benefits: [
        "Minimize business downtime with efficient service",
        "Custom solutions designed for your business needs",
        "Regular maintenance to prevent costly emergencies",
        "Code-compliant installations and upgrades"
      ]
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Lighting Installation",
      description: "Expert installation of indoor and outdoor lighting systems to enhance your space.",
      benefits: [
        "Enhanced aesthetics and ambiance",
        "Energy-efficient lighting options",
        "Improved visibility and safety",
        "Smart lighting solutions available"
      ]
    },
    {
      icon: <Plug className="h-10 w-10" />,
      title: "Power Points & Switches",
      description: "Installation of new power points, switches and circuit upgrades for your property.",
      benefits: [
        "Increased convenience with strategically placed outlets",
        "Modern USB-integrated power points available",
        "Safer, updated electrical components",
        "Custom solutions based on your needs"
      ]
    },
    {
      icon: <Power className="h-10 w-10" />,
      title: "Mains & Underground Mains",
      description: "Professional installation and upgrades of main power connections and underground electrical systems.",
      benefits: [
        "Safe and compliant main power installations",
        "Expert underground cable laying",
        "Proper trenching and conduit installation",
        "Compliance with all local regulations"
      ]
    },
    {
      icon: <House className="h-10 w-10" />,
      title: "Renovations",
      description: "Complete electrical solutions for home and commercial renovations.",
      benefits: [
        "Full rewiring services for renovations",
        "Modern electrical system integration",
        "Code-compliant upgrades",
        "Minimal disruption during renovation"
      ]
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Generators",
      description: "Installation and maintenance of backup power systems and generators.",
      benefits: [
        "Reliable backup power solutions",
        "Automatic transfer switch installation",
        "Regular maintenance services",
        "Emergency power system design"
      ]
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Maintenance",
      description: "Comprehensive electrical maintenance services to keep your systems running smoothly.",
      benefits: [
        "Preventive maintenance programs",
        "Regular safety inspections",
        "System performance optimization",
        "Extended equipment lifespan"
      ]
    },
    {
      icon: <Bell className="h-10 w-10" />,
      title: "Smoke Detectors",
      description: "Installation and maintenance of smoke alarms to comply with safety regulations.",
      benefits: [
        "Compliance with Queensland smoke alarm legislation",
        "Enhanced home safety for your family",
        "Regular testing and maintenance",
        "Expert advice on optimal placement"
      ]
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Fault Finding",
      description: "Professional diagnosis and repair of electrical issues and faults.",
      benefits: [
        "Accurate identification of complex electrical problems",
        "Efficient solutions to minimize disruption",
        "Prevent recurrence of issues",
        "Comprehensive repairs, not just symptom treatment"
      ]
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "CCTV Installation",
      description: "Professional installation of security camera systems for homes and businesses.",
      benefits: [
        "Custom security system design",
        "High-quality camera installation",
        "Remote monitoring setup",
        "Integration with existing systems"
      ]
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Air Conditioning Installation",
      description: "Expert installation of air conditioning systems with electrical integration.",
      benefits: [
        "Professional AC unit installation",
        "Electrical system integration",
        "Energy-efficient solutions",
        "Compliance with safety standards"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/lovable-uploads/electrician1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
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
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              At K SKUSE Electrical, we pride ourselves on delivering comprehensive electrical solutions that combine technical expertise with exceptional customer service. Our team of licensed electricians brings years of experience to every project, ensuring that your electrical needs are met with the highest standards of safety, quality, and efficiency.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're looking to upgrade your home's electrical system, need emergency repairs, or require commercial electrical services, we offer a full range of solutions tailored to your specific requirements. From new installations to maintenance and repairs, our commitment to excellence and attention to detail ensures that every job is completed to your complete satisfaction.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
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
