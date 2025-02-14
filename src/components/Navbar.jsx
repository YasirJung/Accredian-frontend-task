import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 w-10/12 mx-auto">
        {/* Left Side - Logo and Courses */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            <span className="text-blue-600 font-bold text-xl">accredian</span>
            <span className="text-gray-500 text-xs">credentials that matter</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-lg">
            Courses ▼
          </button>
        </div>

        {/* Right Side - Navigation Links and Buttons */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-700">Refer & Earn</a>
          <a href="#" className="text-gray-700">Resources</a>
          <a href="#" className="text-gray-700">About Us</a>
          <button className="bg-gray-200 px-4 py-1 rounded">Login</button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded">
            Try for free
          </button>
        </div>
      </nav>
  );
};

export default Navbar;
