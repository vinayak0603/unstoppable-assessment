import React from 'react';
import Credai from '../assets/visions/Credai.png';
import MyNirvanaClub from '../assets/visions/MyNirvanaClub.png';
import VillaExpress from '../assets/visions/VillaExpress.png';
import sundeckSolar from '../assets/visions/sundeckSolar.png';
import card1 from '../assets/cards/card1.png';
import card2 from '../assets/cards/card2.png';
import card3 from '../assets/cards/card3.png';

const Visions = () => {
  const images = [
    { src: sundeckSolar, tilt: "rotateY(20deg) scale(0.95)", zIndex: 10 },
    { src: VillaExpress, tilt: "rotateY(10deg) scale(1.05)", zIndex: 20 },
    { src: MyNirvanaClub, tilt: "rotateY(0deg) scale(1.1)", zIndex: 30 },
    { src: Credai, tilt: "rotateY(-10deg) scale(1.05)", zIndex: 20 },
    { src: sundeckSolar, tilt: "rotateY(-20deg) scale(0.95)", zIndex: 10 }, // Reusing one for symmetry if needed, or just 4
  ];

  return (
    <section className="bg-black py-10 md:py-16 flex flex-col items-center overflow-hidden min-h-[50vh] justify-center relative font-sans">

      {/* NEW Top Section: Integrated Growth Solutions */}
      <div className="relative flex flex-col items-center mb-12 md:mb-24 lg:mb-32 z-50 w-full mt-4 md:mt-8 px-5">
        <div className="relative mb-4 flex flex-col items-center text-center">
          <div className="relative">
            <h2 className="text-[1.7rem] sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.15] text-center">
              Integrated Growth Solutions<br />
              for Every Stage of B<span className="text-[#da251d] font-serif italic font-normal tracking-tight">us</span>iness
            </h2>
            {/* Badge */}
            <div className="absolute -top-3 -right-2 md:-right-8 bg-[#cc0000] text-white text-[9px] md:text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest transform rotate-[15deg] shadow-lg">
              OUR SERVICES
            </div>
          </div>
          <p className="text-[#c4c4c4] text-sm md:text-[15px] mt-6 text-center max-w-xl px-4 font-normal leading-relaxed">
            Our ecosystem of services bridges every critical GAP<br className="hidden md:block" />
            from visibility to acquisition to scale.
          </p>
        </div>

        {/* Button */}
        <div className="mt-4 text-center">
          <button className="bg-[#cc0000] border border-white/30 text-white text-[14px] md:text-[15px] font-medium py-3 px-7 rounded-full flex items-center justify-center gap-2 hover:bg-[#aa0000] transition-colors shadow-lg mx-auto">
            See Our Solutions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Header section - Reduced gap */}
      <div className="relative mb-2 flex flex-col items-center z-50 mt-10">
        <div className="relative">
          <h2 className="text-[1.6rem] sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight text-center px-4">
            From Vi<span className="text-[#da251d] font-serif italic font-normal tracking-tight">si</span>on to Velocity
          </h2>
          {/* Badge */}
          <div className="absolute -top-3 -right-8 md:-right-14 bg-[#cc0000] text-white text-[9px] md:text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest transform rotate-[15deg] shadow-lg">
            Case Studies
          </div>
        </div>
        <p className="text-[#c4c4c4] text-sm md:text-base mt-3 text-center max-w-lg px-4 font-normal">
          Real stories of businesses that closed their GAP and<br className="hidden md:block" />
          became unstoppable.
        </p>
      </div>

      {/* Circular/Curved Display Container - hidden on mobile, show scroll */}
      <div className="relative w-full max-w-[100rem] mx-auto flex justify-center items-center h-[200px] sm:h-[240px] md:h-[280px] lg:h-[350px] perspective-[1500px] mt-4 mb-0">

        {/* Far Left */}
        <div className="absolute left-[-5%] sm:left-[2%] md:left-[5%] w-[25%] md:w-[22%] transition-all duration-500 ease-out hover:z-50 cursor-pointer"
          style={{ transform: "rotateY(30deg) translateZ(-200px) translateX(20%)", zIndex: 10 }}>
          <img src={sundeckSolar} alt="Sundeck" className="rounded-xl md:rounded-[1rem] w-full h-auto shadow-2xl opacity-50 hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Mid Left */}
        <div className="absolute left-[12%] sm:left-[18%] md:left-[22%] w-[33%] md:w-[28%] transition-all duration-500 ease-out hover:z-50 cursor-pointer"
          style={{ transform: "rotateY(20deg) translateZ(-80px) translateX(10%)", zIndex: 20 }}>
          <img src={VillaExpress} alt="Villa Express" className="rounded-xl md:rounded-[1.2rem] w-full h-auto shadow-[0_10px_30px_rgba(0,0,0,0.8)] opacity-80 hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Center - Focal Point */}
        <div className="absolute left-1/2 w-[42%] md:w-[36%] transition-all duration-500 ease-out hover:scale-105 hover:z-50 cursor-pointer"
          style={{ transform: "translateX(-50%) translateZ(40px)", zIndex: 40 }}>
          <img src={MyNirvanaClub} alt="My Nirvana Club" className="rounded-xl md:rounded-[1.5rem] w-full h-auto shadow-[0_15px_50px_rgba(0,0,0,0.9)] opacity-100" />
        </div>

        {/* Mid Right */}
        <div className="absolute right-[12%] sm:right-[18%] md:right-[22%] w-[33%] md:w-[28%] transition-all duration-500 ease-out hover:z-50 cursor-pointer"
          style={{ transform: "rotateY(-20deg) translateZ(-80px) translateX(-10%)", zIndex: 20 }}>
          <img src={Credai} alt="Credai" className="rounded-xl md:rounded-[1.2rem] w-full h-auto shadow-[0_10px_30px_rgba(0,0,0,0.8)] opacity-80 hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Far Right */}
        <div className="absolute right-[-5%] sm:right-[2%] md:right-[5%] w-[25%] md:w-[22%] transition-all duration-500 ease-out hover:z-50 cursor-pointer"
          style={{ transform: "rotateY(-30deg) translateZ(-200px) translateX(-20%)", zIndex: 10 }}>
          <img src={sundeckSolar} alt="Sundeck" className="rounded-xl md:rounded-[1rem] w-full h-auto shadow-2xl opacity-50 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Footer button */}
      <div className="z-40 -mt-4 md:-mt-5 relative">
        <button className="bg-[#b30000] border border-gray-300 text-white rounded-full px-8 py-3.5 flex items-center gap-3 text-[15px] hover:bg-[#990000] transition-colors shadow-md mx-auto">
          View Case Studies
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      {/* NEW SECTION: Services Feature Cards with Transparent Blur Folder UI */}
      {/* Reduced the max-w to squeeze the cards together and leave lots of visual space left/right */}
      <div className="relative w-full max-w-[65rem] mx-auto flex flex-col items-center mt-12 md:mt-24 lg:mt-32 pb-12 md:pb-16 z-50">

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full px-4 md:px-8">

          {/* Card 1 */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[4/4] md:aspect-[4/4.2] lg:aspect-[4/4.5] xl:aspect-[4/4.2] rounded-[1.5rem] overflow-hidden bg-[#0c0c0c] group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img src={card1} alt="Brand Strategy" className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 h-[60%] backdrop-blur-xl bg-gradient-to-b from-[#444444]/40 via-[#262626]/80 to-[#121212]/95"
              style={{
                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H35 C45,0 45,35 60,35 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H35 C45,0 45,35 60,35 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%'
              }}>
              <div className="absolute inset-x-0 bottom-6 md:bottom-8 px-6 md:px-7">
                <h3 className="text-[18px] md:text-[21px] font-bold text-white mb-2 leading-tight tracking-tight">Brand Strategy<br />& Identity</h3>
                <p className="text-[#a0a0a0] text-[11.5px] md:text-[12.5px] leading-relaxed">Build brands that stand out, scale up, and stay relevant.</p>
              </div>
            </div>

            <svg className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 H35 C45,0 45,35 60,35 H100" fill="none" stroke="rgba(255,255,255,0.2)" vectorEffect="non-scaling-stroke" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Card 2 */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[4/4] md:aspect-[4/4.2] lg:aspect-[4/4.5] xl:aspect-[4/4.2] rounded-[1.5rem] overflow-hidden bg-[#0c0c0c] group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img src={card2} alt="Design & Creative" className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 h-[60%] backdrop-blur-xl bg-gradient-to-b from-[#4a4a4a]/40 via-[#262626]/80 to-[#121212]/95"
              style={{
                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H35 C45,0 45,35 60,35 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H35 C45,0 45,35 60,35 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%'
              }}>
              <div className="absolute inset-x-0 bottom-6 md:bottom-8 px-6 md:px-7">
                <h3 className="text-[18px] md:text-[21px] font-bold text-white mb-2 leading-tight tracking-tight">Design & Creative<br />Communication</h3>
                <p className="text-[#a0a0a0] text-[11.5px] md:text-[12.5px] leading-relaxed">Translate strategy into powerful, scroll-stopping creativity.</p>
              </div>
            </div>

            <svg className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 H35 C45,0 45,35 60,35 H100" fill="none" stroke="rgba(255,255,255,0.2)" vectorEffect="non-scaling-stroke" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Card 3 */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[4/4] md:aspect-[4/4.2] lg:aspect-[4/4.5] xl:aspect-[4/4.2] rounded-[1.5rem] overflow-hidden bg-[#0c0c0c] group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img src={card3} alt="Digital Marketing" className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 h-[60%] backdrop-blur-xl bg-gradient-to-b from-[#4a4a4a]/40 via-[#262626]/80 to-[#121212]/95"
              style={{
                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H35 C45,0 45,35 60,35 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H35 C45,0 45,35 60,35 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%'
              }}>
              <div className="absolute inset-x-0 bottom-6 md:bottom-8 px-6 md:px-7">
                <h3 className="text-[18px] md:text-[21px] font-bold text-white mb-2 leading-tight tracking-tight">Digital & Performance<br />Marketing</h3>
                <p className="text-[#a0a0a0] text-[11.5px] md:text-[12.5px] leading-relaxed">Turn attention into action with data-driven growth.</p>
              </div>
            </div>

            <svg className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 H35 C45,0 45,35 60,35 H100" fill="none" stroke="rgba(255,255,255,0.2)" vectorEffect="non-scaling-stroke" strokeWidth="1.5" />
            </svg>
          </div>

        </div>

        {/* View all Services Button */}
        <div className="mt-14 z-50">
          <button className="bg-[#b30000] border border-[#ff3333]/50 text-white rounded-full px-8 py-3.5 flex items-center gap-3 text-[15px] hover:bg-[#a60000] transition-colors relative z-20 shadow-[0_0_15px_rgba(204,0,0,0.5)]">
            View all Services
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Visions;
