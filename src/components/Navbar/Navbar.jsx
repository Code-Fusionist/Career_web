// src/components/navbar/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2 rounded-full border-2 border-white" />
          <span className="text-white font-semibold text-2xl tracking-wider">EDUNAVIGATOR</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`w-full ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto`}>
          <ul className="flex flex-col md:flex-row items-center md:space-x-8 mt-4 md:mt-0 text-white">
            <li>
              <Link to="/" className="hover:text-gray-200 transition duration-300 ease-in-out">Home</Link>
            </li>
            <li>
              <Link to="/test" className="hover:text-gray-200 transition duration-300 ease-in-out">Test</Link>
            </li>
            <li>
              <Link to="/Model" className="hover:text-gray-200 transition duration-300 ease-in-out">Model</Link>
            </li>
            <li>
              <Link to="/report" className="hover:text-gray-200 transition duration-300 ease-in-out">Report</Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-gray-200 transition duration-300 ease-in-out">About</Link>
            </li>
            <li>
              <Link to="/ContactForm" className="hover:text-gray-200 transition duration-300 ease-in-out">ContacUs</Link>
            </li>
            {/* Login/Signup Link */}
            <li className="mt-4 md:mt-0">
              <Link
                to="/LoginForm" // Replace with actual login route
                className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Login / Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;