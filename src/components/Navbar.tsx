
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
          <img 
            src="/lovable-uploads/4f914164-4f5c-48d4-944a-98e072a479e8.png" 
            alt="K Skuse Electrical Logo" 
            className="h-12 md:h-16" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-semibold transition-colors hover:text-brand-orange ${
                location.pathname === link.path ? "text-brand-orange" : "text-brand-black"
              }`}
              onClick={() => window.scrollTo(0, 0)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:0432351721"
            className="bg-brand-orange text-white px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-all"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-brand-black hover:text-brand-orange"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-3 font-semibold transition-colors hover:bg-gray-100 ${
                  location.pathname === link.path ? "text-brand-orange" : "text-brand-black"
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:0432351721"
              className="mx-4 mt-3 bg-brand-orange text-white px-4 py-3 rounded text-center font-semibold hover:bg-opacity-90 transition-all"
            >
              Call Now: 0432 351 721
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
