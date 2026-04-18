import React from 'react';

const IntegratedGrowth = () => {
    return (
        <section className="bg-black py-10 md:py-16 flex flex-col items-center overflow-hidden justify-center relative font-sans">
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
        </section>
    );
};

export default IntegratedGrowth;
