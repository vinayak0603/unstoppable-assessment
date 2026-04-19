import React from 'react';
import './CommunitiesHero.css';

const CommunitiesHero = () => {
  return (
    <div className="communities-hero">
      {/* Animated red glow shades */}
      <div className="hero-shades-container w-full h-full absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="shade shade-left"></div>
        <div className="shade shade-top-right"></div>
        <div className="shade shade-bottom-right"></div>
      </div>

      {/* Hero Text */}
      <div className="communities-hero-text">
        <h1>
          Transparent Plans.<br />
          Tangible Growth.
          <span className="sub-dot">.</span>
        </h1>
      </div>
    </div>
  );
};

export default CommunitiesHero;
