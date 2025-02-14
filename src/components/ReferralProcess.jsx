import React from "react";

const ReferralProcess = () => {
  return (
    <div className="flex flex-col items-center py-16 px-4 relative bg-[#EEF5FF]">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-black mb-8 relative z-10">
        How Do I <span className="text-[#1A73E8]">Refer?</span>
      </h2>

      {/* Middle Image */}
      <img
        src="/assets/middle.png"
        alt="Middle Section"
        className="w-full max-w-6xl h-auto"
      />

      {/* Refer Now Button */}
      <button className="mt-8 bg-[#1A73E8] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#1557B0] transition relative z-10">
        Refer Now
      </button>
    </div>
  );
};

export default ReferralProcess;
