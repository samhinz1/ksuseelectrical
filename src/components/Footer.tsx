import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <img 
              src={`${import.meta.env.BASE_URL}lovable-uploads/4f914164-4f5c-48d4-944a-98e072a479e8.png`} 
              alt="K Skuse Electrical Logo" 
              className="h-16 mb-4" 
            />
            <p className="my-4 text-gray-300">
              Professional electrical services for residential and commercial properties in Brisbane and SE Queensland.
            </p>
            <p className="text-gray-300">
              Licensed and insured for your peace of mind.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="font-heading font-bold text-xl mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-brand-orange" />
                <a href="tel:0432351721" className="hover:text-brand-orange transition-colors">
                  0432 351 721
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-brand-orange" />
                <a href="mailto:kskuseelectrical@gmail.com" className="hover:text-brand-orange transition-colors">
                  kskuseelectrical@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-orange" />
                <span>Brisbane, Queensland</span>
              </p>
              <p className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61574765588435#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange transition-colors flex items-center gap-2"
                >
                  <Facebook size={18} className="text-brand-orange" />
                  <span>Find us on Facebook</span>
                </a>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-heading font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="hover:text-brand-orange transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="hover:text-brand-orange transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  className="hover:text-brand-orange transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/areas-we-service"
                  className="hover:text-brand-orange transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Areas We Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq"
                  className="hover:text-brand-orange transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="hover:text-brand-orange transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="md:col-span-1">
            <h3 className="font-heading font-bold text-xl mb-6">Payment Methods</h3>
            <div className="flex flex-col gap-y-4 items-start">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/visa-svgrepo-com.svg`} 
                alt="Visa" 
                className="h-16 w-auto"
              />
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/mastercard-2-logo-svgrepo-com.svg`} 
                alt="Mastercard" 
                className="h-16 w-auto"
              />
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/paypal-svgrepo-com.svg`} 
                alt="PayPal" 
                className="h-32 w-auto -mt-12 -ml-2"
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} K Skuse Electrical. All rights reserved.</p>
            <p>
              QLD Qualified Electrician License #1503362
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
