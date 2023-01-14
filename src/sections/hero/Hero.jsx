import React from 'react'
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import './Hero.css';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Application Developer","Computer Vision Developer","Python Developer","Computer Science Engineer","Data Scientist"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
    }, []);

  return (
    <div>

      <div id="hero" className="hero route bg-image my-image">
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
        <div className="table-cell">
            <div className="container">
            <h1 className="hero-title mb-4">Karthik Krishnan</h1>
            </div>

      <p class="hero-subtitle">I'm a <span ref={el}></span></p>

                    
        </div>
        </div>
    </div>

    </div>
  )
}

export default Hero
