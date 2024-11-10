import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import image from './desk2.png';

const StudyAbroadSteps = () => {
  useEffect(() => {
    // Use `gsap.to` for better control over visibility during animation
    gsap.to(".step", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2,
    });
  }, []);

  const steps = [
    { title: "What is EduNavigator?", link: "/what-is-edunavigator" },
    { title: "Why should I use EduNavigator?", link: "/why-use-edunavigator" },
    { title: "What kind of recommendations does EduNavigator provide?", link: "/types-of-recommendations" },
    { title: "How does EduNavigator personalize recommendations?", link: "/personalize-recommendations" },
    { title: "Is my data secure on EduNavigator?", link: "/data-security" },
    { title: "Can EduNavigator help with competitive exams?", link: "/competitive-exams-help" },
    { title: "Does it provide real-time information?", link: "/real-time-information" }
];

  return (
    <div className="bg-gray-900 text-white p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">
      {/* Left Section - Image */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Background shapes */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-orange-500 rounded-full opacity-70"></div>
        <div className="absolute top-20 left-20 w-24 h-24 bg-blue-500 rounded-full opacity-70"></div>
        <div className="absolute bottom-0 left-10 w-24 h-24 bg-green-500 rounded-full opacity-70"></div>
        
        {/* Main image */}
        <img 
          src= {image} 
          alt="Student" 
          className="relative z-10 w-48 h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section - Steps */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">
          Your study abroad steps
        </h2>
        
        {steps.map((step, index) => (
          <a 
            key={index}
            href={step.link}
            className="step opacity-0 transform translate-y-5 flex justify-between items-center p-4 bg-yellow-50 shadow-lg rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50"
          >
            <span className="text-lg text-gray-700">{step.title}</span>
            <span className="text-gray-600">→</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default StudyAbroadSteps;
