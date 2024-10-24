import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // GSAP animation for fading in the active image
    gsap.fromTo(
      ".carousel-item",
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }
    );

    // Set up interval for automatic slide change
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    // Clear interval on component unmount or when activeIndex changes
    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-600 ease-in-out">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item w-full transition-opacity duration-600 ease-in-out ${
              index === activeIndex ? "block" : "hidden"
            }`}
          >
            <img src={image} className="block w-full" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Navigation buttons with < and > arrows */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-black text-2xl p-2 hover:text-gray-600"
        onClick={handlePrev}
      >
        <FaArrowLeft /> {/* Left arrow */}
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-black text-2xl p-2 hover:text-gray-600"
        onClick={handleNext}
      >
        <FaArrowRight /> {/* Right arrow */}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;