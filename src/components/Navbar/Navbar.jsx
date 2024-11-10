// src/components/navbar/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600 p-4 shadow-lg relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2 rounded-full border-2 border-white" />
          <span className="text-white font-semibold text-2xl tracking-wider">EDUNAVIGATOR</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none z-20"
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
        <div
          className={`fixed top-0 left-0 h-full w-3/4 bg-gray-900 text-white transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0 md:w-auto md:bg-transparent transition-transform duration-300 ease-in-out z-40`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-8 pt-16 px-6 md:pt-0 md:px-0">
            <li className="my-4 md:my-0">
              <Link
                to="/"
                className="hover:text-gray-400 transition duration-300 ease-in-out text-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="my-4 md:my-0">
              <Link
                to="/test"
                className="hover:text-gray-400 transition duration-300 ease-in-out text-lg"
                onClick={() => setIsOpen(false)}
              >
                Test
              </Link>
            </li>
            <li className="my-4 md:my-0">
              <Link
                to="/Model"
                className="hover:text-gray-400 transition duration-300 ease-in-out text-lg"
                onClick={() => setIsOpen(false)}
              >
                Model
              </Link>
            </li>
            <li className="my-4 md:my-0">
              <Link
                to="/report"
                className="hover:text-gray-400 transition duration-300 ease-in-out text-lg"
                onClick={() => setIsOpen(false)}
              >
                Report
              </Link>
            </li>
            <li className="my-4 md:my-0">
              <Link
                to="/About"
                className="hover:text-gray-400 transition duration-300 ease-in-out text-lg"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="my-4 md:my-0">
              <Link
                to="/ContactForm"
                className="hover:text-gray-400 transition duration-300 ease-in-out text-lg"
                onClick={() => setIsOpen(false)}
              >
                ContactUs
              </Link>
            </li>
            {/* Login/Signup Link */}
            <li className="mt-8 md:mt-0">
              <Link
                to="/LoginForm" // Replace with actual login route
                className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-lg"
                onClick={() => setIsOpen(false)}
              >
                Login / Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Overlay for when the menu is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
