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
        <section className="w-full bg-[#000000] pt-12 md:pt-16 pb-16 md:pb-24 px-5 md:px-12 xl:px-20 relative font-sans">
            <div className="max-w-[85rem] mx-auto w-full flex flex-col">
                {/* Header */}
                <div className="flex flex-col items-center text-center mx-auto mb-12 md:mb-20 max-w-4xl">
                    <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.15] tracking-tight mb-4 md:mb-6">
                        Growth Is Not About Size<br />
                        It's About M<span className="text-[#cc0000] font-serif italic font-normal">in</span>dset
                    </h2>
                    <p className="text-[14px] md:text-[16px] text-[#e0e0e0] max-w-[45rem] leading-[1.6] mx-auto font-medium">
                        We collaborate with brands that share our hunger for progress from startups building tomorrow, to family businesses redefining legacy, to enterprises engineering scale.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3.5] lg:aspect-[4/4.5] overflow-hidden rounded-2xl border border-white/10 bg-transparent cursor-pointer transition-colors hover:border-white/50 border-white/40"
                        >
                            {/* Card Title (Top Left) */}
                            <div className="absolute top-0 left-0 w-full px-6 pt-6 z-20">
                                <h3 className="text-white text-[1.35rem] font-bold tracking-wide text-left">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Image (Centered) */}
                            <div className="w-full h-full flex items-center justify-center p-8 mt-10">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="max-w-[85%] max-h-[85%] object-contain grayscale opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Button */}
                <div className="flex justify-center w-full mt-14">
                    <button className="bg-[#b30000] border border-gray-300 text-white rounded-full px-8 py-3.5 flex items-center gap-3 text-[15px] hover:bg-[#990000] transition-colors relative z-20 shadow-md">
                        Book Strategy Call
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
