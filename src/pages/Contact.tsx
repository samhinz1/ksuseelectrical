import { useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}lovable-uploads/board.webp')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for better text visibility */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-xl text-gray-100">
              Get in touch with K Skuse Electrical for all your electrical needs in Brisbane, Gold Coast & Surrounding Areas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-brand-orange p-3 rounded-full text-white mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <a href="tel:0432351721" className="text-brand-orange hover:underline font-semibold">
                      0432 351 721
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-orange p-3 rounded-full text-white mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <a href="mailto:kskuseelectrical@gmail.com" className="text-brand-orange hover:underline font-semibold">
                      kskuseelectrical@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-orange p-3 rounded-full text-white mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Service Area</h3>
                    <ul className="text-gray-600 list-disc pl-4 space-y-1">
                      <li>Brisbane</li>
                      <li>Gold Coast</li>
                      <li>Ipswich</li>
                      <li>Beenleigh</li>
                      <li>Bay Area</li>
                      <li>Logan</li>
                      <li>Beaudesert</li>
                      <li>Redland</li>
                      <li>Scenic Rim</li>
                      <li>Moreton Bay</li>
                      <li>Somerset</li>
                      <li>Gold Coast Hinterland</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-bold text-lg mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>7:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday & Sunday:</span>
                    <span>By appointment</span>
                  </p>
                  <p className="mt-4 text-sm italic">
                    * 24/7 emergency services available
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default ContactPage;
