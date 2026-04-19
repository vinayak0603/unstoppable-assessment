import React from 'react';

const OurSolutionsHero = () => {
    return (
        <div className="relative min-h-screen bg-[#000000] flex flex-col font-sans overflow-hidden">
            {/* Grid Background */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-50"
                style={{
                    backgroundSize: '40px 40px',
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                    `
                }}
            />

            {/* Subtle red shades from bottom corners */}
            <div 
                className="absolute bottom-0 left-0 w-full md:w-2/3 h-2/3 z-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at bottom left, rgba(140, 20, 20, 0.3) 0%, rgba(0, 0, 0, 0) 60%)'
                }}
            />
            <div 
                className="absolute bottom-0 right-0 w-full md:w-2/3 h-2/3 z-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at bottom right, rgba(140, 20, 20, 0.3) 0%, rgba(0, 0, 0, 0) 60%)'
                }}
            />

            {/* Content Container */}
            <main className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-5 max-w-[65rem] mx-auto w-full mt-20">
                <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-medium text-white leading-[1.1] md:leading-[1.15] tracking-tight mb-8">
                    Solutions Engineered for <br />
                    Every Stage of Gr<span className="text-[#cc0000] italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>o</span>wth
                </h1>

                <p className="text-[15px] md:text-[18px] lg:text-[20px] text-[#cccccc] max-w-[50rem] font-light leading-relaxed tracking-wide">
                    From brand creation to scalable marketing systems - we help businesses evolve through integrated growth solutions that drive visibility, acquisition, and structure.
                </p>
            </main>

            {/* Scroll Indicator */}
            <div className="relative z-10 pb-8 flex flex-col items-center gap-2">
                <span className="text-white text-sm font-light tracking-wide opacity-90">
                    Scroll to know more
                </span>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                    <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
};

export default OurSolutionsHero;
