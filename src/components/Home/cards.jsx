import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import cimage from './cimage.webp'; // Import the image

const services = [
  {
    image: cimage, // Use the imported image here
    title: "Career Test",
    description: "Our website offers a career assessment test designed to evaluate users' interests, skills, and aptitudes, providing insights to guide personalized career recommendations.",
  },
  {
    image: cimage, // Replace with your other image paths
    title: "Career Report",
    description: "After completing the test, users receive a detailed career report that highlights potential career paths and educational options based on their individual results.",
  },
  {
    image: cimage, // Replace with your other image paths
    title: "Privacy and Security",
    description: "We prioritize user privacy by implementing strict data protection measures to ensure that personal information and test results remain confidential and secure on our platform.",
  },
];

const Cards = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-yellow-50 p-6 rounded-lg shadow-lg flex flex-col"
          >
            <div className="mb-4">
              <img
                src={service.image} // This will now correctly use the imported image
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg items-center"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">{service.title}</h3> {/* Change text color for title */}
            <p className="text-gray-700 mb-4">{service.description}</p> {/* Change text color for description */}
            <a href="#" className="text-blue-500 hover:underline">
              Learn More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
