
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap, Home, Building, Plug, ShieldCheck, AlarmClock, Power, House, Cable, Lightbulb, Settings, Bell } from "lucide-react";
import CallToAction from "@/components/CallToAction";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const ServiceItem = ({ icon, title, description, benefits }: ServiceItemProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-orange">
    <div className="text-brand-orange mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
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
);

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Home className="h-10 w-10" />,
      title: "Residential Electrical Services",
      description: "Complete electrical solutions for your home, from minor repairs to full installations.",
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
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Safety Inspections & Testing",
      description: "Comprehensive electrical safety inspections to ensure your property meets all standards.",
      benefits: [
        "Peace of mind knowing your electrical system is safe",
        "Identification of potential hazards before they cause problems",
        "Compliance with insurance requirements",
        "Detailed reports and recommendations"
      ]
    },
    {
      icon: <AlarmClock className="h-10 w-10" />,
      title: "Emergency Electrical Services",
      description: "Fast response emergency electrical services when you need help most.",
      benefits: [
        "Quick response to minimize damage and risk",
        "Available outside regular business hours",
        "Expert troubleshooting to identify issues fast",
        "Permanent solutions, not just quick fixes"
      ]
    },
    {
      icon: <House className="h-10 w-10" />,
      title: "New Home Wiring",
      description: "Complete electrical wiring solutions for new homes and renovations.",
      benefits: [
        "Future-proof electrical systems",
        "Compliance with all current building codes",
        "Energy-efficient design options",
        "Customized to your specific needs"
      ]
    },
    {
      icon: <Power className="h-10 w-10" />,
      title: "Electrical Panel Upgrades",
      description: "Upgrade your electrical panel to improve capacity and safety.",
      benefits: [
        "Increased electrical capacity for modern appliances",
        "Enhanced safety features",
        "Reduced risk of electrical fires",
        "Support for future home additions"
      ]
    },
    {
      icon: <Cable className="h-10 w-10" />,
      title: "Rewiring Services",
      description: "Replace old, damaged, or outdated wiring for improved safety and functionality.",
      benefits: [
        "Eliminate hazardous outdated wiring",
        "Reduce risk of electrical fires",
        "Improve electrical efficiency",
        "Support modern electrical demands"
      ]
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Electrical Repairs & Maintenance",
      description: "Repair and maintain electrical systems to prevent issues and ensure safety.",
      benefits: [
        "Prevent electrical emergencies before they happen",
        "Extend the life of electrical components",
        "Ensure continuous safe operation",
        "Regular inspection schedules available"
      ]
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Electrical Fault Finding",
      description: "Professional diagnosis and repair of electrical issues and faults.",
      benefits: [
        "Accurate identification of complex electrical problems",
        "Efficient solutions to minimize disruption",
        "Prevent recurrence of issues",
        "Comprehensive repairs, not just symptom treatment"
      ]
    },
    {
      icon: <Bell className="h-10 w-10" />,
      title: "Smoke Alarm Installation",
      description: "Installation and maintenance of smoke alarms to comply with safety regulations.",
      benefits: [
        "Compliance with Queensland smoke alarm legislation",
        "Enhanced home safety for your family",
        "Regular testing and maintenance available",
        "Expert advice on optimal placement"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Electrical Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive electrical solutions for residential and commercial properties across Brisbane.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="container mx-auto px-4">
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
