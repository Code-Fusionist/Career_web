import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import contactImage from './cimage.webp'; // Replace with the path to your image

const ContactUs = () => {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP animations for each section
    gsap.from(headerRef.current, { opacity: 0, y: -50, duration: 1 });
    gsap.from(imageRef.current, { opacity: 0, x: 50, duration: 1, delay: 0.5 });
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, { opacity: 0, y: 50, duration: 0.8, delay: 0.6 + index * 0.2 });
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
      {/* Header Section */}
      <div ref={headerRef} className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
        <p className="text-lg mb-8">
          Got a question? You might find the answer in our <a href="#" className="text-orange-500 underline">Help Centre</a>.
          Otherwise, see all the ways you can speak to our team below.
        </p>
      </div>

      {/* Image and Shape Decorations */}
      <div className="relative max-w-6xl mx-auto mb-12 flex justify-center items-center">
        <div ref={imageRef} className="relative z-10 w-full md:w-1/2">
          <img src={contactImage} alt="Contact Support" className="rounded-lg shadow-lg" />
        </div>
        {/* Decorative Shapes */}
        <div className="absolute top-10 left-0 w-32 h-32 bg-orange-500 rounded-br-full"></div>
        <div className="absolute bottom-5 right-5 w-16 h-16 bg-blue-700 rounded-full"></div>
        <div className="absolute top-5 right-20 w-8 h-8 bg-red-500 rounded-full"></div>
      </div>

      {/* Contact Cards Section */}
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            title: 'Existing customers',
            description: 'Already bank with Allica? Our customer support team will be able to answer your questions.',
            linkText: 'Contact us'
          },
          {
            title: 'New savings customers',
            description: 'Looking to open a business or personal savings account? Speak to our new accounts team.',
            linkText: 'Contact us'
          },
          {
            title: 'New business finance customers',
            description: 'Are you a business interested in a commercial mortgage or asset finance? We’ll connect you with a relationship manager.',
            linkText: 'Contact us'
          }
        ].map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{card.title}</h3>
            <p className="text-gray-700 mb-4">{card.description}</p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">{card.linkText} →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;