import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactForm = () => {
  useEffect(() => {
    gsap.from('.contact-info-card, .form', {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400 p-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        
        {/* Contact Information Section */}
        <div className="p-6 space-y-6">
          <div className="contact-info-card bg-white rounded-lg shadow-md p-4 flex items-center space-x-2">
            <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
            <div>
              <div className="text-gray-700 font-medium">Location</div>
              <div className="text-gray-500">[Insert Location]</div>
            </div>
          </div>
          <div className="contact-info-card bg-white rounded-lg shadow-md p-4 flex items-center space-x-2">
            <FaPhoneAlt className="w-6 h-6 text-blue-600" />
            <div>
              <div className="text-gray-700 font-medium">Phone</div>
              <div className="text-gray-500">[Insert Phone Number]</div>
            </div>
          </div>
          <div className="contact-info-card bg-white rounded-lg shadow-md p-4 flex items-center space-x-2">
            <FaClock className="w-6 h-6 text-blue-600" />
            <div>
              <div className="text-gray-700 font-medium">Hours</div>
              <div className="text-gray-500">[Insert Hours]</div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6 form">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Form</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-600">Comment or message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 shadow-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;