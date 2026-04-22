import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Html } from '@react-three/drei';
import { ParticleSphere } from './ParticleSphere';
import { AnimatePresence, motion } from 'framer-motion';
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
    company: "THE VILLA EXPRESS",
    tags: ["Branding", "Event Experience", "Spatial Design"],
    challenge: "Buyers dropped off due to 3+ hour site visits and low engagement.",
    strategy: "Train-themed showcase bringing all villa projects under one roof — 15-minute immersive previews.",
    outcome: "Higher-quality leads, strong buyer intent, and major uplift in conversions during the fest."
  },
  {
    id: 2,
    image: card2,
    company: "ROOTED",
    tags: ["Product Strategy", "UX Design", "Content Creation"],
    challenge: "Buyers dropped off due to 3+ hour site visits and low engagement.",
    strategy: "Train-themed showcase bringing all villa projects under one roof — 15-minute immersive previews.",
    outcome: "Higher-quality leads, strong buyer intent, and major uplift in conversions during the fest."
  },
  {
    id: 3,
    image: card3,
    company: "MY NIRVANA CLUB",
    tags: ["Branding", "Strategy Consulting", "Design & Communication"],
    challenge: "Buyers dropped off due to 3+ hour site visits and low engagement.",
    strategy: "Train-themed showcase bringing all villa projects under one roof — 15-minute immersive previews.",
    outcome: "Higher-quality leads, strong buyer intent, and major uplift in conversions during the fest."
  },
  {
    id: 4,
    image: card4,
    company: "SUNDECK SOLAR",
    tags: ["Identity Design", "Digital Strategy", "Marketing"],
    challenge: "Buyers dropped off due to 3+ hour site visits and low engagement.",
    strategy: "Train-themed showcase bringing all villa projects under one roof — 15-minute immersive previews.",
    outcome: "Higher-quality leads, strong buyer intent, and major uplift in conversions during the fest."
  },
  {
    id: 5,
    image: card5,
    company: "CREDAI MCHI",
    tags: ["Campaign Design", "Lead Gen", "Media Planning"],
    challenge: "Buyers dropped off due to 3+ hour site visits and low engagement.",
    strategy: "Train-themed showcase bringing all villa projects under one roof — 15-minute immersive previews.",
    outcome: "Higher-quality leads, strong buyer intent, and major uplift in conversions during the fest."
  },
  {
    id: 6,
    image: card6,
    company: "LAND & LEISURE",
    tags: ["Brand Story", "Visual Design", "Advertising"],
    challenge: "Buyers dropped off due to 3+ hour site visits and low engagement.",
    strategy: "Train-themed showcase bringing all villa projects under one roof — 15-minute immersive previews.",
    outcome: "Higher-quality leads, strong buyer intent, and major uplift in conversions during the fest."
  }
];

const VisionToVelocity = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  
  // Responsive detection
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamic Camera Settings
  const cameraSettings = isMobile 
    ? { position: [-16, 0, 16], fov: 45 } 
    : { position: [-12, 0, 12], fov: 35 };

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

      <div className="v2v-canvas-container">
        <Canvas camera={cameraSettings}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={<Html center><div className="text-white">Loading Experience...</div></Html>}>
            <ParticleSphere
              cards={cardsData}
              isMobile={isMobile}
              onImageClick={(id) => setSelectedCard(cardsData[id])}
            />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>

        {/* Floating Instructions */}
        <div className="v2v-instructions">
          Drag to rotate • Click an image for details
        </div>
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="v2v-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="v2v-detail-modal"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="v2v-modal-close" onClick={() => setSelectedCard(null)}>×</button>

              <div className="v2v-modal-layout">
                <div
                  className="v2v-modal-image"
                  style={{ backgroundImage: `url(${selectedCard.image})` }}
                ></div>
                <div className="v2v-modal-info">
                  <div className="v2v-text-group">
                    <h3>Challenge:</h3>
                    <p>{selectedCard.challenge}</p>
                  </div>
                  <div className="v2v-text-group">
                    <h3>Strategy:</h3>
                    <p>{selectedCard.strategy}</p>
                  </div>
                  <div className="v2v-text-group">
                    <h3>Outcome:</h3>
                    <p>{selectedCard.outcome}</p>
                  </div>
                  <button className="v2v-read-more-modal">Read full article</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VisionToVelocity;
