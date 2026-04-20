import React from 'react';
import './ClienteleHero.css';

const ClienteleHero = () => {
  return (
    <div className="clientele-hero">
      {/* Animated red glow shades */}
      <div className="clientele-shades-container w-full h-full absolute inset-0 pointer-events-none z-0">
        <div className="clientele-shade clientele-shade-top-left"></div>
        <div className="clientele-shade clientele-shade-bottom-right"></div>
      </div>

      {/* Hero Text */}
      <div className="clientele-hero-text">
        <h1>
          Trusted by Businesses<br />
          That Mean Business
        </h1>
        <p>
          We collaborate with brands that share our hunger for progress —<br />
          from startups building tomorrow to enterprises scaling their legacy.
        </p>
      </div>
    </div>
  );
};

export default ClienteleHero;
