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
    const loadWeb3FormsScript = () => {
      if (!document.querySelector('script[src*="web3forms"]')) {
        console.log("Loading web3forms script for ContactForm...");
        const script = document.createElement('script');
        script.src = "https://web3forms.com/client/script.js";
        script.async = true;
        script.defer = true;
        script.onload = () => {
          console.log("web3forms script loaded successfully in ContactForm");
        };
        script.onerror = () => {
          console.error("Failed to load web3forms script in ContactForm");
          // Fallback to direct hCaptcha loading
          loadHCaptchaScript();
        };
        document.head.appendChild(script);
      }
    };
    
    // Direct hCaptcha script loading as a fallback
    const loadHCaptchaScript = () => {
      if (!document.querySelector('script[src*="hcaptcha.com"]')) {
        console.log("Loading hCaptcha script directly in ContactForm...");
        const script = document.createElement('script');
        script.src = "https://js.hcaptcha.com/1/api.js";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    };
    
    // Make sure we load the script
    loadWeb3FormsScript();
    
    // Also try to load hCaptcha directly after a short delay
    // in case web3forms script doesn't handle it
    setTimeout(loadHCaptchaScript, 1000);
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
    
    // Create URL for request with API key
    const API_KEY = '0b0782de-2ca8-445e-bc1d-e42741921ec3';
    const url = `https://api.web3forms.com/submit?access_key=${API_KEY}`;
    
    try {
      const formElement = e.target as HTMLFormElement;
      const formDataObj = new FormData(formElement);
      
      // Log form data for debugging
      console.log("Form data being submitted from ContactForm:");
      for (const pair of formDataObj.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
      
      console.log("Submitting form to web3forms from ContactForm with direct approach...");
      
      const response = await fetch(url, {
        method: 'POST',
        body: formDataObj
      });
      
      const responseText = await response.text();
      console.log("Raw response from ContactForm:", responseText);
      
      let data;
      try {
        data = JSON.parse(responseText);
        console.log("Parsed response data from ContactForm:", data);
      } catch (e) {
        console.error("Failed to parse response as JSON in ContactForm:", e);
        throw new Error(`Server responded with non-JSON response: ${responseText.substring(0, 100)}...`);
      }
      
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
      console.error('Form submission error details from ContactForm:', error);
      
      let errorMessage = "Failed to submit form. ";
      errorMessage += error instanceof Error ? error.message : "Please try again.";
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" method="POST" action="https://api.web3forms.com/submit">
      <input type="hidden" name="access_key" value="0b0782de-2ca8-445e-bc1d-e42741921ec3" />
      <input type="hidden" name="subject" value="New Contact Form Submission" />
      <input type="hidden" name="from_name" value="K Skuse Electrical Website" />
      <input type="hidden" name="botcheck" value="" />

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
        <div 
          className="h-captcha" 
          data-captcha="true"
          data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          data-size="normal"
          data-theme="light"
        ></div>
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
