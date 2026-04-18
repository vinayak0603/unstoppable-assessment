import React from 'react';

const TruePartner = () => {
    return (
        <section className="relative w-full overflow-hidden flex flex-col justify-center items-center py-16 md:py-28 lg:py-36 font-sans bg-[#030303]">
            {/* Subtle Grid Background pattern */}
            <div
                className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem'
                }}
            ></div>

            {/* Background ambient radial glow in the center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[20rem] bg-black opacity-50 blur-[100px] z-[1]"></div>

            {/* Glowing Red Spike originating from Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[38%] md:h-[42%] lg:h-[45%] w-full max-w-[120px] flex justify-center items-end pointer-events-none z-[2]">
                {/* Center thin concentrated bright spike */}
                <div className="absolute bottom-0 w-[12px] md:w-[16px] lg:w-[20px] h-full bg-[#ff5e5e] opacity-100 shadow-[0_0_15px_#ff0000]" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>

                {/* Surrounding soft glow effect */}
                <div className="absolute bottom-0 w-[40px] md:w-[70px] lg:w-[100px] h-full bg-[#cc0000] opacity-15 blur-[35px]" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-5 md:px-6 max-w-4xl mx-auto">
                <h2 className="text-[1.7rem] sm:text-[2.25rem] md:text-5xl lg:text-[4rem] font-bold text-white tracking-tight leading-[1.1] mb-4 md:mb-6">
                    Not a Service Provider,<br />
                    Your True G<span className="text-[#da251d] font-serif italic font-normal tracking-tight">ro</span>wth Partner.
                </h2>

                <p className="text-[13px] md:text-[15px] lg:text-[16px] text-[#e0e0e0] max-w-[45rem] leading-[1.6] mx-auto font-medium">
                    Between where you are and where you're meant to be lies a GAP of<br className="hidden md:block" />
                    visibility, acquisition, and structure.
                </p>
            </div>


        </section>
    );
};

export default TruePartner;
