import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 pt-8 pb-6 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">
              Connect with Edunavigator
            </h4>
            <p className="text-lg mt-2 mb-4">
              Follow us on social media for the latest updates and career tips!
            </p>
            <div className="flex space-x-3 mt-6">
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-blue-400 h-8 w-8" />
              </a>
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookSquare} className="text-blue-600 h-8 w-8" />
              </a>
              <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 h-8 w-8" />
              </a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="text-red-600 h-8 w-8" />
              </a>
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-500 h-8 w-8" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 mt-6 lg:mt-0">
            <div className="flex flex-wrap items-top">
              <div className="w-full md:w-6/12 px-4">
                <span className="block uppercase text-gray-400 text-sm font-semibold mb-2">
                  Quick Links
                </span>
                <ul className="list-none space-y-2">
                  <li>
                    <Link to="/about" className="text-gray-300 hover:text-white font-medium">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-300 hover:text-white font-medium">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-300 hover:text-white font-medium">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <span className="block uppercase text-gray-400 text-sm font-semibold mb-2">
                  Legal
                </span>
                <ul className="list-none space-y-2">
                  <li>
                    <Link to="/terms" className="text-gray-300 hover:text-white font-medium">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-gray-300 hover:text-white font-medium">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2024 Edunavigator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}