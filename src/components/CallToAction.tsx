
import { Link } from "react-router-dom";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const CallToAction = ({
  title = "Need a professional electrician today?",
  subtitle = "Contact us today for a free quote or consultation",
  buttonText = "Get a Quote",
  buttonLink = "/contact",
  className = "",
}: CTAProps) => {
  return (
    <div className={`bg-brand-black py-16 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-white">
          {title}
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={buttonLink}
            className="bg-brand-orange hover:bg-opacity-90 text-white px-8 py-3 rounded font-semibold text-lg transition-colors inline-block"
            onClick={() => window.scrollTo(0, 0)}
          >
            {buttonText}
          </Link>
          <a
            href="tel:0432351721"
            className="border-2 border-white hover:border-brand-orange text-white hover:text-brand-orange px-8 py-3 rounded font-semibold text-lg transition-colors inline-block"
          >
            Call: 0432 351 721
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
