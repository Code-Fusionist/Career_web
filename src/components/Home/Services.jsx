import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const links = [
  {
    title: "NIRF",
    url: "https://www.nirfindia.org/",
    description: "Check national rankings for universities and institutions across India."
  },
  {
    title: "CUET",
    url: "https://exams.nta.ac.in/CUET-UG/",
    description: "Common University Entrance Test information for undergraduate admissions."
  },
  {
    title: "JEE Mains",
    url: "https://jeemain.nta.nic.in/",
    description: "Official portal for Joint Entrance Examination (Main) details and updates."
  },
  {
    title: "JEE Advance",
    url: "https://jeeadv.ac.in/",
    description: "Access resources and information for the JEE Advanced exam here."
  },
  {
    title: "NEET",
    url: "https://neet.nta.nic.in/",
    description: "Find information on the National Eligibility cum Entrance Test for medical courses."
  },
  {
    title: "UPSC",
    url: "https://upsc.gov.in/",
    description: "Explore updates, exams, and resources for the Union Public Service Commission."
  },
  {
    title: "SSC",
    url: "https://ssc.gov.in/",
    description: "Get the latest notifications and updates from the Staff Selection Commission."
  },
  {
    title: "IPU Website",
    url: "http://www.ipu.ac.in/",
    description: "Official website for Guru Gobind Singh Indraprastha University, Delhi."
  },
  {
    title: "DU Website",
    url: "https://www.du.ac.in/",
    description: "Delhi University’s portal for news, admissions, and academic resources."
  },
  {
    title: "ICAI",
    url: "https://www.icai.org/",
    description: "Institute of Chartered Accountants of India - find resources and announcements."
  },
  {
    title: "AICTE",
    url: "https://www.aicte-india.org/",
    description: "All India Council for Technical Education - information on technical education standards."
  },
  {
    title: "NAAC",
    url: "http://www.naac.gov.in/",
    description: "National Assessment and Accreditation Council - assess and accredit higher education institutions."
  }
];

const ImportantLinks = () => {
  const linkRefs = useRef([]);

  useEffect(() => {
    gsap.from(linkRefs.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-yellow-300">Important Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
        {links.map((link, index) => (
          <div
            key={index}
            ref={(el) => (linkRefs.current[index] = el)}
            className="bg-yellow-50 p-6 rounded-lg shadow-lg flex flex-col items-start"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-900">{link.title}</h3>
            <p className="text-gray-700 mb-4">{link.description}</p>
            <a href={link.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Visit &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantLinks;