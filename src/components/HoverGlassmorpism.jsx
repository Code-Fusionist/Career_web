import React, { useState } from 'react';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import {CiSettings} from 'react-icons/ci'
import {RiEditBoxLine} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'

function HoverGlassmorphism() {
  const [activeIndex, setActiveIndex] = useState(0);

  function moveIndicator(e) {
    const marker = document.getElementById('marker');
    const links = document.querySelectorAll('ul li');
    const activeLink = links[activeIndex];

    marker.style.left = activeLink.offsetLeft + 'px';
    marker.style.width = activeLink.offsetWidth + 'px';
  }

  function handleMouseover(index) {
    setActiveIndex(index);
  }

  return (
    <div>
      <ul>
        <li className={activeIndex === 0 ? 'active' : ''} onMouseMove={moveIndicator} onMouseOver={() => handleMouseover(0)}>
          <a href="#"><span className="ion-icon"><CgProfile/></span></a>
        </li>
        <li className={activeIndex === 1 ? 'active' : ''} onMouseMove={moveIndicator} onMouseOver={() => handleMouseover(1)}>
          <a href="#"><span className="ion-icon"><RiEditBoxLine/></span></a>
        </li>
        <li className={activeIndex === 2 ? 'active' : ''} onMouseMove={moveIndicator} onMouseOver={() => handleMouseover(2)}>
          <a href="#"><span className="ion-icon"><CiSettings/></span></a>
        </li>
        <li className={activeIndex === 3 ? 'active' : ''} onMouseMove={moveIndicator} onMouseOver={() => handleMouseover(3)}>
          <a href="#"><span className="ion-icon"><CiLogout/></span></a>
        </li>
        <li className={activeIndex === 4 ? 'active' : ''} onMouseMove={moveIndicator} onMouseOver={() => handleMouseover(4)}>
          <a href="#"><span className="ion-icon"><IoIosHelpCircleOutline/></span></a>
        </li>
        <div id="marker"></div>
      </ul>
    </div>
  );
}

export default HoverGlassmorphism;
