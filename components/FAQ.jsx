"use client";

import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  const [activeIndexRight, setActiveIndexRight] = useState(null);

  const toggleAccordion = (index, side) => {
    if (side === "left") {
      setActiveIndexLeft(activeIndexLeft === index ? null : index);
    } else {
      setActiveIndexRight(activeIndexRight === index ? null : index);
    }
  };

  const faqData = [
    {
      question: "What services does AMF-SA provide?",
      answer:
        "AMF-SA offers comprehensive services including manufacturing LV switchgear panels, installation and commissioning of panels, predictive and preventive maintenance, as well as after-sales support.",
    },
    {
      question: "What certifications does AMF-SA hold?",
      answer:
        "AMF-SA is certified in ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health and Safety), ensuring high standards across all operations.",
    },
    {
      question: "How can I contact AMF-SA for support?",
      answer:
        "You can contact AMF-SA via email at info@amf-sa.com or call +966 56 910 5617. The office is located in Jeddah, Saudi Arabia.",
    },
    {
      question: "What products does AMF-SA specialize in?",
      answer:
        "AMF-SA specializes in manufacturing products like low voltage switchgear, motor control centers, HVAC control panels, power factor improvement panels, and building management systems.",
    },
    {
      question: "How does AMF-SA ensure quality control?",
      answer:
        "AMF-SA focuses on rigorous quality control, adhering to international IEC and ISO standards to ensure that all products meet high-quality benchmarks.",
    },
    {
      question: "What is AMF-SA's role in energy solutions?",
      answer:
        "AMF-SA provides energy solutions through advanced synchronization panels for genset operations, automatic transfer switch panels, and various control systems for managing electrical energy efficiently.",
    },
    {
      question: "What maintenance services are offered by AMF-SA?",
      answer:
        "AMF-SA provides predictive and preventive maintenance services, including regular inspections, troubleshooting, and optimizing equipment performance throughout its lifecycle.",
    },
    {
      question: "What industries does AMF-SA serve?",
      answer:
        "AMF-SA serves a variety of industries, offering customized electrical panel solutions for commercial buildings, industrial sites, and energy management systems.",
    },
  ];

  return (
    <section className="py-12 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h6 className="text-lg text-indigo-500 font-semibold mb-3">FAQs</h6>
          <h2 className="text-4xl font-bold leading-snug">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-6">
            {faqData.slice(0, 4).map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-700 rounded-lg p-6 transition-all duration-500 ${
                  activeIndexLeft === index
                    ? "bg-gradient-to-br from-slate-700 to-slate-800 transition-colors duration-300"
                    : "bg-gray-800 transition-colors duration-300"
                }`}
              >
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => toggleAccordion(index, "left")}
                >
                  <h5 className="text-lg font-medium">{faq.question}</h5>
                  <svg
                    className={`w-6 h-6 transition-transform duration-500 ${
                      activeIndexLeft === index ? "transform rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ${
                    activeIndexLeft === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="mt-4 text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {faqData.slice(4).map((faq, index) => (
              <div
                key={index + 4} // Adjusted index for the right side
                className={`border border-gray-700 rounded-lg p-6 transition-all duration-500 ${
                  activeIndexRight === index + 4 // Adjusted for overall index
                    ? "bg-gradient-to-br from-slate-700 to-slate-800 transition-colors duration-300"
                    : "bg-gray-800 transition-colors duration-300"
                }`}
              >
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => toggleAccordion(index + 4, "right")} // Adjusted index for the right side
                >
                  <h5 className="text-lg font-medium">{faq.question}</h5>
                  <svg
                    className={`w-6 h-6 transition-transform duration-500 ${
                      activeIndexRight === index + 4
                        ? "transform rotate-180"
                        : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ${
                    activeIndexRight === index + 4 ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="mt-4 text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
