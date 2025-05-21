
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
}

const ServiceCard = ({ title, description, icon, link = "/services" }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-orange transition-transform hover:translate-y-[-5px]">
      <div className="mb-4 text-brand-orange">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="text-brand-orange font-semibold hover:underline inline-block"
        onClick={() => window.scrollTo(0, 0)}
      >
        Learn More →
      </Link>
    </div>
  );
};

export default ServiceCard;
