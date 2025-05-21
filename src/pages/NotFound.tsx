
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold text-brand-orange mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="bg-brand-orange hover:bg-opacity-90 text-white px-8 py-3 rounded font-semibold text-lg transition-colors inline-block"
          onClick={() => window.scrollTo(0, 0)}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
