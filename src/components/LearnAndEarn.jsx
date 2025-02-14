import React, { useState } from "react";
import axios from "axios";

const LearnAndEarn = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    referralCode: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5000/api/referrals", formData);
      setSuccess("Referral submitted successfully!");
      setFormData({ name: "", email: "", referralCode: "" });
      setShowModal(false);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="relative w-[921px] h-[468px] bg-[#F8FBFF] rounded-2xl flex flex-col md:flex-row items-center p-8">
        {/* Floating Money Graphics */}
        <img src="/assets/money.png" alt="Money graphic" className="absolute top-[-20px] left-[-20px] w-16 rotate-[-30deg]" />
        <img src="/assets/money.png" alt="Money graphic" className="absolute bottom-[-20px] left-[-20px] w-16 rotate-[30deg]" />

        {/* Left Content */}
        <div className="w-2/5 text-left space-y-4 pr-6">
          <h1 className="text-[42px] font-bold leading-[1.1] text-[#1A1A1A]">Let's Learn <br />& Earn</h1>
          <p className="text-[24px] text-[#1A1A1A]">Get a chance to win <br /> up to <span className="text-[#1A73E8] font-semibold">Rs. 15,000</span></p>
          <button
            className="bg-[#1A73E8] text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-[#1557B0] transition-colors"
            onClick={() => setShowModal(true)}
          >
            Refer Now
          </button>
        </div>

        {/* Right Content (Phone Image) */}
        <div className="w-3/5 flex justify-center items-center">
          <img src="/assets/phone.png" alt="Happy students" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Refer a Friend</h2>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="referralCode"
                placeholder="Referral Code"
                value={formData.referralCode}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded">
                Submit
              </button>
            </form>
            <button onClick={() => setShowModal(false)} className="mt-4 bg-gray-500 text-white w-full py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnAndEarn;
