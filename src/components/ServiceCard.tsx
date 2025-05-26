import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  longDescription: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, icon, link }: ServiceCardProps) => {
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
    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-orange">
      <Link to={link} onClick={() => window.scrollTo(0, 0)}>
        <div className="mb-4 text-brand-orange">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {getServicePoints(title).map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default ServiceCard;
