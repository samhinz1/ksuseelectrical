import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCenterHover } from "@/hooks/useCenterHover";

interface ServiceCardProps {
  title: string;
  description: string;
  longDescription: string;
  icon: ReactNode;
  link: string;
  photo?: string;
}

const ServiceCard = ({ title, description, longDescription, icon, link, photo }: ServiceCardProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const { elementRef, isInCenter } = useCenterHover();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getServicePoints = (serviceTitle: string) => {
    switch (serviceTitle) {
      case "Residential Electrical":
        return [
          "Airconditioning",
          "Appliances",
          "Indoor & Outdoor Lighting",
          "Power Points",
          "Generators",
          "CCTV",
          "Fault Finding"
        ];
      case "Commercial Services":
        return [
          "New builds & Subdivisions",
          "Appliances and equipment",
          "Mains & Underground Mains",
          "CCTV",
          "Maintenance"
        ];
      case "Emergency Services":
        return [
          "Natural disaster",
          "Power outages",
          "Smoke alarms",
          "Fallen power poles & lines",
          "Sparking power outlets",
          "Faulty wiring"
        ];
      default:
        return [];
    }
  };

  return (
    <div 
      ref={isMobile ? elementRef : undefined}
      className="group bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-brand-orange/20 hover:-translate-y-1"
    >
      <Link to={link} className="block" onClick={() => window.scrollTo(0, 0)}>
        {photo && (
          <div className="h-48 w-full overflow-hidden rounded-t-lg">
            <img 
              src={photo} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`transform transition-all duration-300 ${
                  isMobile && isInCenter ? 'scale-110 text-brand-orange' : 'text-gray-600 group-hover:text-brand-orange group-hover:scale-110'
                }`}>
                  {icon}
                </div>
              </div>
            </div>
            <h3 className={`ml-4 text-xl font-semibold transition-colors duration-300 ${
              isMobile && isInCenter ? 'text-brand-orange' : 'text-brand-black group-hover:text-brand-orange'
            }`}>
              {title}
            </h3>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-y-2">
            {title === "Residential Electrical" && (
              <>
                <p className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  Lighting Installation
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  Power Point Upgrades
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  Safety Inspections
                </p>
              </>
            )}
            {title === "Commercial Services" && (
              <>
                <p className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  Office Fit-outs
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  Retail Installations
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  Industrial Electrical
                </p>
              </>
            )}
            {title === "Emergency Services" && (
              <>
                <p className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  24/7 Availability
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  Rapid Response
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  Safety First
                </p>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
