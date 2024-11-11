import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import keshav from './keshav.jpg';
import hardik from './Hardik.jpg';
import bhavya from './bhavya.jpg';
const teamMembers = [
  {
    name: 'Hardik Solanki',
    course: 'Machine Learning & MERN Stack',
    description: '“Building intelligent systems and dynamic web applications with innovative solutions.”',
    icon: hardik, 
  },
  {
    name: 'Keshav Aggarwal',
    course: 'Machine Learning & MERN Stack + GSAP',
    description: '“Integrating machine learning, web development, and animations to create impactful projects.”',
    icon: keshav,
  },
  {
    name: 'Bhavya Munjal',
    course: 'Machine Learning',
    description: '“Applying ML techniques to solve complex problems and drive technological advancements.”',
    icon: bhavya,
  },  
];

const Team = () => {
  const teamRef = useRef([]);

  useEffect(() => {
    gsap.from(teamRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6 md:p-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">Meet Our Team!</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-6 md:space-y-0">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            ref={(el) => (teamRef.current[index] = el)}
            className="bg-white shadow-lg rounded-lg p-6 text-center w-64 md:w-72"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src={member.icon} 
                alt={`${member.name} icon`} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.course}</p>
            <p className="text-gray-500 mt-2 italic">“{member.description}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
