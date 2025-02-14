import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question:
        "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
      answer:
        "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
    },
    {
      question: "What is the minimum system configuration required?",
      answer: "",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* FAQ Title */}
      <h2 className="text-center text-2xl font-semibold text-black mb-6">
        Frequently Asked <span className="text-[#1A73E8]">Questions</span>
      </h2>

      <div className="flex">
        {/* Sidebar Buttons */}
        <div className="flex flex-col space-y-3">
          <button className="px-6 py-2 bg-white border border-gray-300 text-black font-semibold rounded-md shadow-sm">
            Eligibility
          </button>
          <button className="px-6 py-2 bg-white border border-gray-300 text-black rounded-md shadow-sm">
            How To Use?
          </button>
          <button className="px-6 py-2 bg-white border border-gray-300 text-black rounded-md shadow-sm">
            Terms & Conditions
          </button>
        </div>

        {/* FAQ List */}
        <div className="ml-8 flex-1">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="text-[#1A73E8] font-semibold text-left w-full"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {faq.question} {openIndex === index ? "▲" : "▼"}
              </button>
              {openIndex === index && (
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-[#1A73E8] text-white rounded-lg p-6 mt-12 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/assets/headphone.svg" alt="icon" className="w-10 h-10" />
          <div>
            <h3 className="text-lg font-semibold">
              Want to delve deeper into the program?
            </h3>
            <p className="text-sm">
              Share your details to receive expert insights from our program team!
            </p>
          </div>
        </div>
        <button className="bg-white text-[#1A73E8] px-6 py-2 rounded-lg font-medium hover:bg-gray-100">
          Get in touch →
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
