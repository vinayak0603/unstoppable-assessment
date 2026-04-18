import React from 'react';
import familyBusiness from '../assets/landingAssests/familyBusiness.png';
import startups from '../assets/landingAssests/startups.png';
import enterprise from '../assets/landingAssests/Enterprice.png';

const WhoWeWork = () => {
    const categories = [
        {
            title: "Startups",
            image: startups,
        },
        {
            title: "Family Businesses",
            image: familyBusiness,
        },
        {
            title: "Enterprises",
            image: enterprise,
        }
    ];

    return (
        <section className="relative w-full bg-[#000000] py-20 md:py-32 px-5 md:px-12 flex flex-col items-center overflow-hidden font-sans">
            {/* Subtle Grid Background pattern */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
                {/* Header */}
                <div className="flex flex-col items-center text-center mx-auto mb-16 md:mb-24 max-w-5xl px-4">
                    <h2 className="text-[2.2rem] sm:text-[3.2rem] md:text-5xl lg:text-[4.8rem] font-bold text-white tracking-tight leading-[1.05] mb-8">
                        Growth Is Not About Size<br />
                        It's About M<span className="text-[#da251d] italic font-normal tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>in</span>dset
                    </h2>
                    <p className="text-[14px] md:text-[18px] text-[#999999] max-w-[42rem] mx-auto font-medium leading-[1.6] tracking-wide">
                        We collaborate with brands that share our hunger for progress from startups building tomorrow, to family businesses redefining legacy, to enterprises engineering scale.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col w-full aspect-[4/5] sm:aspect-[4/5.5] md:aspect-[4/5] lg:aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/20 bg-black/40 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:border-white/60"
                        >
                            {/* Card Title (Top Left) */}
                            <div className="absolute top-0 left-0 w-full px-8 pt-8 z-20">
                                <h3 className="text-white text-[1.5rem] font-bold tracking-tight">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Images Container with Radial Reveal */}
                            <div className="w-full h-full flex items-center justify-center p-8 mt-4 overflow-hidden relative">
                                {/* Base Grayscale Image */}
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="max-w-[90%] max-h-[90%] object-contain grayscale opacity-60 transition-all duration-700 transform scale-100 group-hover:scale-105"
                                />

                                {/* Overlay Color Image with Radial Mask */}
                                <img
                                    src={category.image}
                                    alt={`${category.title} Color`}
                                    className="absolute max-w-[90%] max-h-[90%] object-contain opacity-0 group-hover:opacity-100 transition-all duration-1000 transform scale-100 group-hover:scale-105"
                                    style={{
                                        WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                                        maskImage: 'radial-gradient(circle, black 30%, transparent 70%)'
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Button */}
                <div className="flex justify-center w-full mt-16 md:mt-24">
                    <button className="bg-[#cc0000] text-white rounded-full px-10 py-4 flex items-center gap-3 text-[16px] font-bold hover:bg-[#aa0000] transition-all relative z-20 shadow-[0_10px_25px_rgba(204,0,0,0.3)] group">
                        Book Strategy Call
                        <svg
                            className="transform transition-transform group-hover:translate-x-1"
                            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhoWeWork;
