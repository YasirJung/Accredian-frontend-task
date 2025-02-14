import React, { useState } from "react";


const ReferralBenefits = () => {
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="bg-[#EEF5FF] min-h-screen flex flex-col items-center py-12 px-4">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-black mb-8 text-center">
        What Are The{" "}
        <span className="text-[#1A73E8] font-semibold">Referral Benefits?</span>
      </h2>

      {/* Enrolled Toggle (Now Positioned Above Table on the Right) */}
      <div className="w-full max-w-6xl flex justify-end mb-2 pr-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Enrolled</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enrolled}
              onChange={() => setEnrolled(!enrolled)}
            />
            <div className="w-9 h-5 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#1A73E8]"></div>
          </label>
        </div>
      </div>

      <div className="flex w-full max-w-6xl">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md rounded-lg p-2">
      {/* All Programs Button */}
      <button className="w-full text-white bg-[#1A73E8] py-3 rounded-md text-left font-semibold px-4">
        ALL PROGRAMS
      </button>

      {/* Sidebar Categories */}
      <div className="mt-2">
        {[
          "PRODUCT MANAGEMENT",
          "STRATEGY & LEADERSHIP",
          "BUSINESS MANAGEMENT",
          "FINTECH",
          "SENIOR MANAGEMENT",
          "DATA SCIENCE",
          "DIGITAL TRANSFORMATION",
          "BUSINESS ANALYTICS",
        ].map((category, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-gray-700 text-sm py-3 px-4 hover:bg-gray-100 cursor-pointer rounded-md"
          >
            <span>{category}</span>
            <img src="/assets/rightarrow.svg" alt="arrow icon" className="w-4 h-4 text-gray-500" />
          </div>
        ))}
      </div>
    </div>

        {/* Referral Benefits Table */}
        <div className="flex-1 ml-6 bg-white shadow-lg rounded-lg p-6">
          {/* Table Header Row */}
          <div className="flex justify-between items-center bg-[#DCE8FF] py-3 px-4 rounded-md font-semibold text-[#1A73E8] border-b border-gray-300">
  <span className="w-1/2">Programs</span>
  <span className="w-1/4 text-center border-l border-gray-300">
    Referrer Bonus
  </span>
  <span className="w-1/4 text-center border-l border-gray-300">
    Referee Bonus
  </span>
</div>


          {/* Program List */}
          {[
            {
              name: "Professional Certificate Program in Product Management",
              referrer: "₹ 7,000",
              referee: "₹ 9,000",
            },
            {
              name: "PG Certificate Program in Strategic Product Management",
              referrer: "₹ 9,000",
              referee: "₹ 11,000",
            },
            {
              name: "Executive Program in Data Driven Product Management",
              referrer: "₹ 10,000",
              referee: "₹ 10,000",
            },
            {
              name: "Executive Program in Product Management and Digital Transformation",
              referrer: "₹ 10,000",
              referee: "₹ 10,000",
            },
            {
              name: "Executive Program in Product Management",
              referrer: "₹ 10,000",
              referee: "₹ 10,000",
            },
            {
              name: "Advanced Certification in Product Management",
              referrer: "₹ 10,000",
              referee: "₹ 10,000",
            },
            {
              name: "Executive Program in Product Management and Project Management",
              referrer: "₹ 10,000",
              referee: "₹ 10,000",
            },
          ].map((program, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 px-4 border-b border-gray-300"
            >
              <div className="flex items-center space-x-3 w-1/2">
                <img src="/assets/cap.svg" alt="icon" className="w-5 h-5" />
                <span className="text-gray-700 text-sm">{program.name}</span>
              </div>
              <span className="w-1/4 text-center text-gray-700 border-l border-gray-300">
                {program.referrer}
              </span>
              <span className="w-1/4 text-center text-gray-700 border-l border-gray-300">
                {program.referee}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-6xl mt-6">
        <div className="flex justify-between items-center">
          {/* Show More Button (Right-Aligned) */}
          <button className="px-6 py-2 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-100 transition">
            Show More <span className="ml-2">▼</span>
          </button>
        </div>

        {/* Centered Refer Now Button */}
        <div className="flex justify-center mt-4">
          <button className="bg-[#1A73E8] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#1557B0] transition">
            Refer Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralBenefits;
