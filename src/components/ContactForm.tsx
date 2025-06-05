import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

// Update global type for hCaptcha
declare global {
  interface Window {
    hcaptcha: any;
  }
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load the web3forms script for hCaptcha if not already loaded
    if (!document.querySelector('script[src*="web3forms"]')) {
      const script = document.createElement('script');
      script.src = "https://web3forms.com/client/script.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    
    try {
      const formElement = e.target as HTMLFormElement;
      const formDataObj = new FormData(formElement);
      
      // hCaptcha validation is handled by web3forms
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Form submitted successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="access_key" value="0b0782de-2ca8-445e-bc1d-e42741921ec3" />
      <input type="hidden" name="subject" value="New Contact Form Submission" />
      <input type="hidden" name="from_name" value="K Skuse Electrical Website" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      <div className="hidden" style={{ display: 'none' }}>
        <input type="text" name="honey" />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
          placeholder="Your Phone Number"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
          placeholder="How can we help you?"
        />
      </div>

      {/* hCaptcha div */}
      <div className="flex justify-center">
        <div className="h-captcha" data-captcha="true"></div>
      </div>

      <div className="text-xs text-gray-500">
        By submitting this form, you agree to our 
        <a href="https://policies.google.com/privacy" className="text-brand-orange hover:underline"> Privacy Policy</a> and
        <a href="https://policies.google.com/terms" className="text-brand-orange hover:underline"> Terms of Service</a>.
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-brand-orange hover:bg-opacity-90 text-white py-3 px-6 rounded-md font-semibold transition-all flex justify-center items-center ${
          loading ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {loading ? "Submitting..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
