import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Carousel.css';

const Carousel = ({ slides, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Function to set slide index via indicators
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Start automatic sliding
  const startSlide = useCallback(() => {
    slideInterval.current = setInterval(nextSlide, interval);
  }, [interval, nextSlide]);

  // Stop automatic sliding
  const stopSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  // Start automatic slide on component mount and cleanup on unmount
  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, [startSlide]);

  // Restart slide interval on index change
  useEffect(() => {
    stopSlide();
    startSlide();
  }, [currentIndex, startSlide]);

  return (
    <div className="carousel" onMouseEnter={stopSlide} onMouseLeave={startSlide}>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>

      {/* Left arrow */}
      <button className="carousel-control left" onClick={prevSlide}>
        &#9664;
      </button>

      {/* Right arrow */}
      <button className="carousel-control right" onClick={nextSlide}>
        &#9654;
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;