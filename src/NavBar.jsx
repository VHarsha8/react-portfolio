import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container flex items-center justify-between px-6 py-6 mx-auto md:px-16">
      <div className="flex items-center justify-center text-2xl tracking-wider md:text-3xl font-AmericanCaptainMdEY">
        EPISTEMICON
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <button className="focus:outline-none" onClick={toggleMenu}>
          <div className={`relative w-8 h-8 flex gap-2 flex-col justify-center items-center`}>
            {/* Line 1 */}
            <span className={`block w-8 h-1 bg-gray-800 transform transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            {/* Line 2 */}
            <span className={`block w-8 h-1 bg-gray-800 transform transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Menu for larger screens */}
      <div className="items-center justify-center hidden gap-4 md:flex">
        <h1 className="text-xl font-medium font-poppins">About</h1>
        <a href="#" className="flex items-center justify-center px-3 py-2 font-medium text-white rounded-lg font-poppins bg-oliurblue">
          Get Started
        </a>
      </div>

      {/* Dropdown Menu for small screens */}
      <div className={`absolute top-16 left-0 w-full bg-white p-6 z-10 flex flex-col space-y-4 items-center transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <h1 className="text-xl font-medium font-poppins">About</h1>
        <a href="#" className="flex items-center justify-center px-3 py-2 font-medium text-white rounded-lg font-poppins bg-oliurblue">
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
