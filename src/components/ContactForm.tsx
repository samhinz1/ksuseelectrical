import { useState } from "react";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Function to handle hCaptcha verification
  const onHCaptchaChange = (token: string) => {
    setCaptchaToken(token);
  };

  // Function to handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if captcha is completed
    if (!captchaToken) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please complete the captcha verification.'
      });
      return;
    }

    setFormStatus({ 
      loading: true, 
      success: false, 
      error: false, 
      message: '' 
    });

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Add captcha token to form data
      formData.append('h-captcha-response', captchaToken);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Thank you! We will contact you shortly.'
        });
        form.reset();
        setCaptchaToken(null); // Reset captcha
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      });
      setCaptchaToken(null); // Reset captcha on error
    }
  };

  return (
    <>
      {formStatus.success ? (
        <div className="bg-green-100 border border-green-300 text-green-700 rounded p-4">
          <p className="text-center">{formStatus.message}</p>
        </div>
      ) : (
        <form 
          method="POST"
          onSubmit={handleFormSubmit}
          className="space-y-6"
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

          {/* hCaptcha */}
          <div>
            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              onVerify={onHCaptchaChange}
            />
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
