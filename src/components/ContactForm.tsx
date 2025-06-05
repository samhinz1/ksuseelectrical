import { useState, useEffect, useRef } from "react";

// Update global type for hCaptcha
declare global {
  interface Window {
    hcaptcha: any;
  }
}

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });
  
  const captchaInitialized = useRef(false);

  // Function to handle form submission with inline thank you message
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setFormStatus({ 
      loading: true, 
      success: false, 
      error: false, 
      message: '' 
    });

    const form = e.currentTarget;
    
    // Create a traditional form submission using hidden iframe approach
    // This avoids CORS issues while keeping the user on the same page
    try {
      // Create a hidden iframe for the form submission
      const iframe = document.createElement('iframe');
      iframe.name = 'contact-form-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Set the form target to the iframe
      form.target = 'contact-form-iframe';
      
      // Listen for iframe load event to know when submission completes
      iframe.onload = () => {
        // Show success message
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Thank you! We will contact you shortly.'
        });
        
        // Reset the form
        form.reset();
        
        // Reset captcha
        if (window.hcaptcha) {
          window.hcaptcha.reset();
        }
        
        // Clean up the iframe after a delay
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);
      };
      
      // Submit the form
      form.submit();
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Something went wrong. Please try again.'
      });
    }
  };

  // Function to initialize hCaptcha
  const initializeCaptcha = () => {
    // Clear any existing captcha first
    const existingCaptcha = document.querySelector('.h-captcha iframe');
    if (existingCaptcha) {
      if (window.hcaptcha) {
        window.hcaptcha.reset();
      }
    }
    
    // If hCaptcha is already loaded, render it
    if (window.hcaptcha) {
      window.hcaptcha.render('captcha-container');
      captchaInitialized.current = true;
      return;
    }
    
    // Otherwise load the script
    const script = document.createElement('script');
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      captchaInitialized.current = true;
    };
    document.head.appendChild(script);
  };

  useEffect(() => {
    // Initialize captcha when component mounts
    initializeCaptcha();
    
    // Re-initialize captcha when component is shown after navigation
    return () => {
      captchaInitialized.current = false;
    };
  }, []);

  return (
    <>
      {formStatus.success ? (
        <div className="bg-green-100 border border-green-300 text-green-700 rounded p-4">
          <p className="text-center">{formStatus.message}</p>
        </div>
      ) : (
        <form 
          method="POST" 
          action="https://api.web3forms.com/submit" 
          className="space-y-6"
          onSubmit={handleFormSubmit}
        >
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
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
              placeholder="How can we help you?"
            />
          </div>

          {/* hCaptcha div */}
          <div className="flex justify-center">
            <div 
              id="captcha-container"
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
          
          {formStatus.error && (
            <div className="text-red-600 text-sm">
              <p>{formStatus.message}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={formStatus.loading}
            className={`w-full bg-brand-orange hover:bg-opacity-90 text-white py-3 px-6 rounded-md font-semibold transition-all flex justify-center items-center ${
              formStatus.loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {formStatus.loading ? "Submitting..." : "Send Message"}
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
