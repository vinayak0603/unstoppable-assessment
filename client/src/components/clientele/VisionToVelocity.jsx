import React from 'react';
import './VisionToVelocity.css';

import card1 from '../../assets/VisionToVelocity/card1.png';
import card2 from '../../assets/VisionToVelocity/card2.png';
import card3 from '../../assets/VisionToVelocity/card3.png';
import card4 from '../../assets/VisionToVelocity/card4.png';
import card5 from '../../assets/VisionToVelocity/card5.png';
import card6 from '../../assets/VisionToVelocity/card6.png';

const cardsData = [
  {
    id: 1,
    image: card1,
    challenge: "Buyers dropped off due to 3+ hour site visits and low engagement.",
    strategy: "Train-themed showcase bringing all villa projects under one roof — 15-minute immersive previews.",
    outcome: "Higher-quality leads, strong buyer intent, and major uplift in conversions during the fest."
  },
  {
    id: 2,
    image: card2,
    challenge: "Buyers dropped off due to 3+ hour site visits and low engagement.",
    strategy: "Train-themed showcase bringing all villa projects under one roof — 15-minute immersive previews.",
    outcome: "Higher-quality leads, strong buyer intent, and major uplift in conversions during the fest."
  },
  {
    id: 3,
    image: card3,
    challenge: "Buyers dropped off due to 3+ hour site visits and low engagement.",
    strategy: "Train-themed showcase bringing all villa projects under one roof — 15-minute immersive previews.",
    outcome: "Higher-quality leads, strong buyer intent, and major uplift in conversions during the fest."
  },
  {
    id: 4,
    image: card4,
    challenge: "Buyers dropped off due to 3+ hour site visits and low engagement.",
    strategy: "Train-themed showcase bringing all villa projects under one roof — 15-minute immersive previews.",
    outcome: "Higher-quality leads, strong buyer intent, and major uplift in conversions during the fest."
  },
  {
    id: 5,
    image: card5,
    challenge: "Buyers dropped off due to 3+ hour site visits and low engagement.",
    strategy: "Train-themed showcase bringing all villa projects under one roof — 15-minute immersive previews.",
    outcome: "Higher-quality leads, strong buyer intent, and major uplift in conversions during the fest."
  },
  {
    id: 6,
    image: card6,
    challenge: "Buyers dropped off due to 3+ hour site visits and low engagement.",
    strategy: "Train-themed showcase bringing all villa projects under one roof — 15-minute immersive previews.",
    outcome: "Higher-quality leads, strong buyer intent, and major uplift in conversions during the fest."
  }
];

const VisionToVelocity = () => {
  return (
    <div className="v2v-section-container">
      <div className="v2v-header">
        <h1 className="v2v-title">
          From V<span className="v2v-cursive-is">is</span>ion to Velocity
        </h1>
        <p className="v2v-subtitle">
          Our results speak louder than words.<br />
          Each project starts with a challenge — and ends with measurable growth.
        </p>
      </div>

      <div className="v2v-cards-grid">
        {cardsData.map((card) => (
          <div key={card.id} className="v2v-card">
            <div 
              className="v2v-card-image"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="v2v-card-content">
              <div className="v2v-text-group">
                <h3>Challenge:</h3>
                <p>{card.challenge}</p>
              </div>
              <div className="v2v-text-group">
                <h3>Strategy:</h3>
                <p>{card.strategy}</p>
              </div>
              <div className="v2v-text-group">
                <h3>Outcome:</h3>
                <p>{card.outcome}</p>
              </div>
            </div>
            {/* Anchored bottom capsule button */}
            <button className="v2v-read-more">Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionToVelocity;
