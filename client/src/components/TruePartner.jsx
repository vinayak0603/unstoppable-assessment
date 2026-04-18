import React from 'react';

const TruePartner = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center font-sans bg-[#000000]">
            {/* Subtle Grid Background pattern */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}
            ></div>

            {/* Glowing Red Spike - Sharp Needle Style */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-end pointer-events-none z-[1] h-[55%]">
                {/* Outer soft glow */}
                <div
                    className="absolute bottom-0 w-[2px] h-full bg-gradient-to-t from-[#ff000066] to-transparent blur-[8px]"
                ></div>

                {/* Inner sharp needle line - Triangular */}
                <div
                    className="absolute bottom-0 w-[12px] md:w-[16px] h-full bg-gradient-to-t from-[#ff0000] via-[#ff3333] to-transparent"
                    style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
                ></div>

                {/* Bottom base glow */}
                <div
                    className="absolute bottom-0 w-[120px] h-[100px] bg-[#ff000015] blur-[40px] rounded-full translate-y-1/2"
                ></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
                <h2 className="text-[2.2rem] sm:text-[3.2rem] md:text-5xl lg:text-[4.8rem] font-bold text-white tracking-tight leading-[1.05] mb-6">
                    Not a Service Provider,<br />
                    Your True G<span className="text-[#da251d] italic font-normal tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>ro</span>wth Partner.
                </h2>

                <p className="text-[14px] md:text-[18px] text-[#999999] max-w-[42rem] mx-auto font-medium leading-[1.6] tracking-wide">
                    Between where you are and where you're meant to be lies a GAP of<br className="hidden md:block" />
                    visibility, acquisition, and structure.
                </p>
            </div>
        </section>
    );
};

export default TruePartner;
