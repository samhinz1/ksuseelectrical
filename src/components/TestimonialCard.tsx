
interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
}

const TestimonialCard = ({ quote, author, location }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="text-brand-orange text-4xl mb-4">"</div>
      <p className="text-gray-700 italic mb-4">
        {quote}
      </p>
      <div className="font-semibold">{author}</div>
      {location && <div className="text-sm text-gray-500">{location}</div>}
    </div>
  );
};

export default TestimonialCard;
