import React from 'react';
import Carousel from './Carousel';
import StudyAbroadSteps from './StudyAbroadSteps';
import ScrollToTopButton from './Totopbutton';
import Services from './Services';
import Footer from './Foooter';
import Cards from './cards';

function Home() {
  const slides = [
    "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
  ];

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