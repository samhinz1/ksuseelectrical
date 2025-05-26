import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  rating?: number;
  profilePhoto?: string;
  source?: string;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  location, 
  rating = 5,
  profilePhoto = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&auto=format",
  source = "Google"
}: TestimonialCardProps) => {
  const getSourceIcon = () => {
    switch (source) {
      case "Google":
        return "/lovable-uploads/google-2015-seeklogo.png";
      case "Hipages":
        return "/lovable-uploads/hi-pages-seeklogo.svg";
      case "Yellow Pages":
        return "/lovable-uploads/yellow-pages-turkey-seeklogo.png";
      default:
        return "/lovable-uploads/google-2015-seeklogo.png";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <img 
          src={getSourceIcon()}
          alt={source}
          className="h-6 w-auto object-contain"
        />
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <img 
          src={profilePhoto}
          alt={author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          {location && <div className="text-sm text-gray-500">{location}</div>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
