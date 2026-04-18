import React from 'react';
import Credai from '../assets/visions/Credai.png';
import MyNirvanaClub from '../assets/visions/MyNirvanaClub.png';
import VillaExpress from '../assets/visions/VillaExpress.png';
import sundeckSolar from '../assets/visions/sundeckSolar.png';

const Visions = () => {
    return (
        <section className="bg-black py-10 md:py-16 flex flex-col items-center overflow-hidden min-h-[50vh] justify-center relative font-sans">
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
        </section>
    );
};

export default Visions;
