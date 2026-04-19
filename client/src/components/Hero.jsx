import React from 'react';
import bgImage from '../assets/landingAssests/hero.png';
import awards from '../assets/landingAssests/awards.png';

const Hero = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat w-full relative flex flex-col font-sans"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Dark gradient overlay for extreme contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/70 to-transparent z-0 pointer-events-none"></div>

            {/* Hero Content */}
            <main className="relative z-10 flex-grow flex flex-col justify-center px-5 md:px-12 lg:px-20 max-w-[80rem] mt-18 md:mt-25 pb-12">
                <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-4xl">
                    Your St<span className="text-[#da251d] italic font-normal tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>ra</span>tegic Growth<br />
                    Partner in Business
                </h1>

                <p className="text-[15px] md:text-[18px] lg:text-[20px] text-[#cccccc] mb-10 max-w-[35rem] font-normal leading-relaxed tracking-wide">
                    Marketing & Branding Solutions for<br />
                    Growth Focused Businesses
                </p>

                <button className="w-fit bg-[#cc0000] text-white rounded-full px-8 py-4 flex items-center gap-3 text-sm md:text-[16px] font-bold hover:bg-[#aa0000] transition-all shadow-lg shadow-red-900/20 group">
                    Book Strategy Call
                    <svg className="transform transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </main>

            {/* Redesigned Footer: Partners + Awards */}
            <footer className="relative z-10 px-5 md:px-12 lg:px-20 pb-10 md:pb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-10">

                {/* Left: Partners */}
                <div className="flex flex-col gap-5">
                    <span className="text-[#888888] text-[13px] font-medium tracking-wide">Partnered with</span>
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Meta */}
                        <div className="px-5 py-2.5 rounded-full border border-white/10 flex items-center justify-center bg-black/30 backdrop-blur-sm hover:border-white/30 transition-colors">
                            <span className="text-white text-[13px] font-bold tracking-tight">Meta</span>
                        </div>
                        {/* JioHotstar */}
                        <div className="px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-2 justify-center bg-black/30 backdrop-blur-sm hover:border-white/30 transition-colors">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span className="text-white text-[13px] font-bold tracking-tight">JioHotstar</span>
                        </div>
                        {/* EZIPP */}
                        <div className="px-5 py-2.5 rounded-full border border-white/10 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm hover:border-white/30 transition-colors">
                            <span className="text-white text-[10px] font-black tracking-[0.2em] leading-none">EZIPP</span>
                            <span className="text-gray-500 text-[4px] tracking-[0.2em] leading-none mt-0.5 uppercase">International</span>
                        </div>
                        {/* TOI */}
                        <div className="px-5 py-2.5 rounded-full border border-white/10 flex items-center justify-center bg-black/30 backdrop-blur-sm hover:border-white/30 transition-colors">
                            <span className="text-white text-[13px] font-serif font-black italic tracking-wider">TOI</span>
                        </div>
                    </div>
                </div>

                {/* Right: Awards Integration */}
                <div className="flex-shrink-0 lg:max-w-[45%] xl:max-w-none">
                    <img
                        src={awards}
                        alt="Awards: Best Marketing Maestro & Best Stall Design"
                        className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>

            </footer>
        </div>
    );
};

export default Hero;