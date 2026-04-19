import React from 'react';
import './OurSolutionsHero.css';


const OurSolutionsHero = () => {
    return (
        <div className="relative min-h-screen bg-[#000000] flex flex-col font-sans overflow-hidden">
            {/* 3-Column Background Structure */}
            <div className="absolute inset-0 z-[1] flex pointer-events-none">
                {/* 1st Part - Left (33.33%) */}
                <div className="w-1/3 h-full relative" style={{ WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)', maskImage: 'linear-gradient(to right, black 70%, transparent 100%)' }}>
                    <div
                        className="absolute inset-0 opacity-[0.8]"
                        style={{
                            backgroundSize: '50px 50px',
                            backgroundImage: `
                                linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
                            `
                        }}
                    />
                </div>
                {/* 2nd Part - Middle (33.33%) - No Grid */}
                <div className="w-1/3 h-full relative"></div>
                {/* 3rd Part - Right (33.33%) */}
                <div className="w-1/3 h-full relative" style={{ WebkitMaskImage: 'linear-gradient(to left, black 70%, transparent 100%)', maskImage: 'linear-gradient(to left, black 70%, transparent 100%)' }}>
                    <div
                        className="absolute inset-0 opacity-[0.8]"
                        style={{
                            backgroundSize: '50px 50px',
                            backgroundImage: `
                                linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
                            `
                        }}
                    />
                </div>
            </div>

            {/* Left Halogen Beam */}
            <div
                className="absolute inset-0 z-[2] pointer-events-none opacity-90 mix-blend-screen halogen-blink-anim"
                style={{
                    background: 'conic-gradient(from 0deg at 0% 100%, transparent 15deg, rgba(180, 20, 20, 0.8) 35deg, rgba(180, 20, 20, 0.8) 55deg, transparent 80deg)',
                    WebkitMaskImage: 'radial-gradient(100% 100% at 0% 100%, black 10%, transparent 80%)',
                    maskImage: 'radial-gradient(100% 100% at 0% 100%, black 10%, transparent 80%)',
                    filter: 'blur(35px)'
                }}
            />

            {/* Right Halogen Beam */}
            <div
                className="absolute inset-0 z-[2] pointer-events-none opacity-90 mix-blend-screen halogen-blink-anim"
                style={{
                    background: 'conic-gradient(from 270deg at 100% 100%, transparent 10deg, rgba(180, 20, 20, 0.8) 35deg, rgba(180, 20, 20, 0.8) 55deg, transparent 75deg)',
                    WebkitMaskImage: 'radial-gradient(100% 100% at 100% 100%, black 10%, transparent 80%)',
                    maskImage: 'radial-gradient(100% 100% at 100% 100%, black 10%, transparent 80%)',
                    filter: 'blur(35px)'
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
                    <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default OurSolutionsHero;
