import React from 'react';

const SolutionsHero = () => {
    return (
        <section className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Corner Gloom/Shade Overlays (Reddish glow from bottom corners) */}
            <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-gradient-to-tr from-[#3a1111]/40 via-transparent to-transparent opacity-60 pointer-events-none blur-[80px]"></div>
            <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-gradient-to-tl from-[#3a1111]/40 via-transparent to-transparent opacity-60 pointer-events-none blur-[80px]"></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center px-5 max-w-5xl">
                <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-5xl lg:text-[4.8rem] font-bold text-white tracking-tight leading-[1.1] mb-8">
                    Solutions Engineered for<br />
                    Every Stage of Gr<span className="text-[#da251d] italic font-normal tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>o</span>wth
                </h1>

                <p className="text-[14px] md:text-[18px] lg:text-[20px] text-[#999999] max-w-[42rem] mx-auto font-medium leading-[1.6] tracking-wide mb-12">
                    From brand creation to scalable marketing systems - we help businesses evolve through integrated growth solutions that drive visibility, acquisition, and structure.
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-medium">Scroll to know more</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
};

export default SolutionsHero;
