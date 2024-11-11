import React from 'react';
import Carousel from './Carousel';
import StudyAbroadSteps from './StudyAbroadSteps';
import ScrollToTopButton from './Totopbutton';
import Services from './Services';
import Footer from './Foooter';
import Cards from './cards';

// Import images from the local assets directory
import slide1 from './career.jpg';
import slide2 from './Equal.jpg';
import slide3 from './Success.jpg';

function Home() {
  const slides = [slide1, slide2, slide3];

  return (
    <div className="App bg-black text-white">
      <Carousel slides={slides} interval={4000} />
      <Cards />
      <StudyAbroadSteps />
      <Services />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Home;
