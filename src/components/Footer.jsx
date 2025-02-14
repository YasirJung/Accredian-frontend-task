import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Accredian Logo & Button */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-700">
          <div>
            <h1 className="text-2xl font-semibold">accredian</h1>
            <p className="text-gray-400 text-xs">credentials that matter</p>
          </div>
          <div>
            <button className="bg-[#1A73E8] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#1557B0]">
              Schedule 1-on-1 Call Now
            </button>
            <p className="text-gray-400 text-sm mt-1 text-right">Speak with our Learning Advisor</p>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-4 gap-10 mt-6">
          {/* Left Section - Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Business Management",
              "Project Management",
              "Strategy & Leadership",
              "Senior Management",
              "Fintech",
            ].map((program, index) => (
              <p
                key={index}
                className="text-gray-400 text-sm flex justify-between items-center cursor-pointer hover:text-white"
              >
                {program} <span className="text-lg font-semibold">+</span>
              </p>
            ))}
          </div>

          {/* Middle Section - Contact Us */}
          <div className="border border-gray-600 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">
              <span className="block">Email us (For Data Science Queries): admissions@accredian.com</span>
              <span className="block">Email us (For Product Management Queries): pm@accredian.com</span>
              <span className="block mt-2">
                Data Science Admission Helpline: <strong>+91 9079639292</strong> (9 AM - 7 PM)
              </span>
              <span className="block">
                Product Management Admission Helpline: <strong>+91 9628111095</strong>
              </span>
              <span className="block">
                Enrolled Student Helpline: <strong>+91 7969232507</strong>
              </span>
              <span className="block mt-2">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
              </span>
            </p>

            {/* Social Media Links */}
            <h3 className="text-lg font-semibold mt-6">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
              <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Right Section - Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accredian</h3>
            {[
              "About",
              "Career",
              "Blog",
              "Admission Policy",
              "Referral Policy",
              "Privacy Policy",
              "Terms Of Service",
              "Master FAQs",
            ].map((link, index) => (
              <p key={index} className="text-gray-400 text-sm cursor-pointer hover:text-white">{link}</p>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-sm mt-8">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
