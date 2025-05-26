import { useEffect, useState } from "react";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "Do you offer emergency electrical services?",
      answer: "Yes, we provide 24/7 emergency electrical services throughout Brisbane and SE Queensland. If you have an electrical emergency, please call us immediately at 0432 351 721."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, K Skuse Electrical is fully licensed and insured. We hold all necessary electrical licenses and comprehensive insurance coverage to ensure peace of mind for our clients."
    },
    {
      question: "What areas do you service?",
      answer: "We provide electrical services throughout Brisbane and South East Queensland, including the surrounding suburbs and regions."
    },
    {
      question: "How much will my electrical job cost?",
      answer: "Each electrical job is unique, and prices depend on various factors including the scope of work, materials required, and time needed. We provide free quotes and transparent pricing before beginning any work."
    },
    {
      question: "Do you provide warranties on your work?",
      answer: "Yes, we stand behind our workmanship and offer warranties on all our electrical services. Specific warranty periods depend on the type of work performed."
    },
    {
      question: "How quickly can you respond to service requests?",
      answer: "We prioritize prompt service. For emergency calls, we aim to respond immediately. For non-emergency service requests, we typically schedule appointments within 24-48 hours, depending on our current workload."
    },
    {
      question: "Do I need to be home during the electrical work?",
      answer: "It's preferable for someone to be present during the initial consultation and when the work is completed. However, arrangements can be made if you cannot be present, provided safe access is available."
    },
    {
      question: "Can you help with electrical renovations and upgrades?",
      answer: "Absolutely! We specialize in electrical renovations and upgrades for both residential and commercial properties. From rewiring older homes to installing modern electrical systems, we can handle projects of all sizes."
    },
    {
      question: "Do you provide energy-efficient electrical solutions?",
      answer: "Yes, we offer a range of energy-efficient electrical solutions including LED lighting upgrades, smart home systems, and energy-efficient appliance installations to help reduce your power consumption and utility bills."
    },
    {
      question: "How do I schedule an appointment or request a quote?",
      answer: "You can schedule an appointment or request a quote by calling us at 0432 351 721, emailing kskuseelectrical@gmail.com, or using the contact form on our website. We'll respond promptly to discuss your electrical needs."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/lovable-uploads/wiring.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Frequently Asked Questions</h1>
            <p className="text-xl text-white">
              Find answers to common questions about our electrical services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* FAQ Cards */}
            <div className="lg:w-1/2">
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-lg overflow-hidden mb-3"
                  >
                    <button
                      className={`w-full text-left p-3 flex justify-between items-center ${
                        activeIndex === index ? "bg-gray-50" : "bg-white"
                      }`}
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={activeIndex === index}
                    >
                      <span className="font-semibold text-base">{faq.question}</span>
                      <span className="ml-2 text-brand-orange">
                        {activeIndex === index ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        )}
                      </span>
                    </button>
                    {activeIndex === index && (
                      <div className="p-3 border-t border-gray-200 bg-white">
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Still have questions?</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready for professional electrical service?"
        subtitle="Contact K Skuse Electrical today for all your electrical needs in Brisbane."
      />
    </>
  );
};

export default FAQPage;
