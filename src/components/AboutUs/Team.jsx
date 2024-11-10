import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const teamMembers = [
  {
    name: 'Hardik Solanki',
    course: 'Web Development',
    description: '“Creating functional and visually appealing websites is my passion.”',
    icon: '/path/to/icon1.png', // Add icons here or replace with actual icons as required
  },
  {
    name: 'Keshav Aggarwal',
    course: 'Data Science',
    description: '“Turning data into actionable insights drives business success.”',
    icon: '/path/to/icon2.png',
  },
  {
    name: 'Bhavya Munjal',
    course: 'UI/UX Design',
    description: '“Designing experiences that users love is what I strive for.”',
    icon: '/path/to/icon3.png',
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
    <div className="bg-gray-900 text-white p-10">
      <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team!</h2>
      <div className="flex justify-center space-x-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            ref={(el) => (teamRef.current[index] = el)}
            className="bg-white shadow-lg rounded-lg p-6 text-center w-72"
          >
            <img src={member.icon} alt={`${member.name} icon`} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.course}</p>
            <p className="text-gray-500 mt-2 italic">“{member.description}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;