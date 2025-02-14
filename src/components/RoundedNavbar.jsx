import React, { useState } from "react";

const RoundedNavbar = () => {
  const [active, setActive] = useState("Refer");

  return (
    <div className="flex justify-center mt-6">
      <div className="bg-blue-100 rounded-full px-16 py-3 flex space-x-40 shadow-lg">
        {["Refer", "Benefits", "FAQs", "Support"].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`text-gray-600 hover:text-blue-600 transition font-medium ${
              active === item ? "text-blue-600 font-semibold underline" : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoundedNavbar;
