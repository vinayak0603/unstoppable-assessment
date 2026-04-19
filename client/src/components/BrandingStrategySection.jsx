import React, { useState } from 'react';

const BrandingStrategySection = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="px-4 md:px-10 lg:px-9 xl:px-16 py-20 bg-[#000000] font-sans">
            <div className="max-w-[92rem] mx-auto rounded-[2.5rem] border border-white/20 bg-[#080808] relative flex flex-col lg:flex-row overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">

                {/* Left Content Column */}
                <div className="w-full lg:w-[62%] p-6 sm:p-12 lg:p-[4.5rem] xl:p-[5.5rem] relative flex flex-col justify-center overflow-hidden lg:overflow-visible">

                    {/* SVG Huge Number '01' with Fading Gradient Stroke - The Key Feature */}
                    <svg
                        className="absolute top-[-1rem] left-0 sm:top-2 sm:left-4 lg:top-[-5rem] lg:left-[2rem] w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] pointer-events-none select-none z-0"
                        viewBox="0 0 350 250"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
                                <stop offset="60%" stopColor="rgba(255, 255, 255, 0)" />
                            </linearGradient>
                            <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.06)" />
                                <stop offset="80%" stopColor="rgba(0, 0, 0, 0)" />
                            </linearGradient>
                        </defs>
                        <text
                            x="20"
                            y="180"
                            fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
                            fontSize="210"
                            fontWeight="600"
                            letterSpacing="-0.04em"
                            fill="url(#fillGrad)"
                            stroke="url(#strokeGrad)"
                            strokeWidth="1.5"
                        >
                            01
                        </text>
                    </svg>

                    <div className="relative z-10 w-full mt-24 sm:mt-32 lg:mt-12">
                        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[3.4rem] font-bold text-white tracking-tight leading-[1] mb-6 flex flex-wrap lg:flex-nowrap items-baseline whitespace-normal lg:whitespace-nowrap">
                            <div className="flex items-baseline whitespace-nowrap">
                                <span>Brand</span>
                                <span className="text-[#da0000] italic font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>ing</span>
                                <span className="font-bold text-white">,</span>
                            </div>
                            <span className="font-bold text-white whitespace-nowrap ml-2 lg:ml-0">&nbsp;Strategy & Identity</span>
                        </h2>

                        <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.5rem] text-[#dedede] font-medium leading-[1.4] mb-12 max-w-[95%] tracking-wide">
                            Define the brand's foundation — its story, voice, positioning, and identity
                        </p>

                        {/* Mobile Image (Visible only on < lg) */}
                        <div className="lg:hidden w-[95%] sm:w-[90%] h-[250px] sm:h-[400px] rounded-[1.5rem] overflow-hidden relative shadow-2xl mb-12">
                            <img
                                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
                                alt="Brand Identity Mockups Mobile"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </div>

                        <div className="w-[90%] h-[1px] bg-white/[0.08] mb-10"></div>

                        <ul className="flex flex-col gap-7 w-full max-w-[95%]">
                            <li className="flex items-start gap-4">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#da0000] mt-[0.6rem] shrink-0"></div>
                                <p className="text-[16px] sm:text-[18px] text-[#a8a8a8] leading-[1.6] font-normal tracking-wide">
                                    <span className="text-[#dbdbdb]">Brand Discovery & Audit</span> – Market analysis, competitor mapping, consumer insights
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#da0000] mt-[0.6rem] shrink-0"></div>
                                <p className="text-[16px] sm:text-[18px] text-[#a8a8a8] leading-[1.6] font-normal tracking-wide">
                                    <span className="text-[#dbdbdb]">Brand Strategy</span> – Positioning, differentiation, value proposition, and archetype alignment
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#da0000] mt-[0.6rem] shrink-0"></div>
                                <p className="text-[16px] sm:text-[18px] text-[#a8a8a8] leading-[1.6] font-normal tracking-wide">
                                    <span className="text-[#dbdbdb]">Brand Naming & Nomenclature</span> – Name creation, trademark check, and rationale
                                </p>
                            </li>
                            {showMore && (
                                <>
                                    <li className="flex items-start gap-4">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#da0000] mt-[0.6rem] shrink-0"></div>
                                        <p className="text-[16px] sm:text-[18px] text-[#a8a8a8] leading-[1.6] font-normal tracking-wide">
                                            <span className="text-[#dbdbdb]">Visual Identity Systems</span> – Logo design, typography, color palettes, and brand guidelines
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#da0000] mt-[0.6rem] shrink-0"></div>
                                        <p className="text-[16px] sm:text-[18px] text-[#a8a8a8] leading-[1.6] font-normal tracking-wide">
                                            <span className="text-[#dbdbdb]">Brand Messaging</span> – Tone of voice, core messaging pillars, taglines, and brand story
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#da0000] mt-[0.6rem] shrink-0"></div>
                                        <p className="text-[16px] sm:text-[18px] text-[#a8a8a8] leading-[1.6] font-normal tracking-wide">
                                            <span className="text-[#dbdbdb]">Brand Application</span> – Stationery, digital assets, print collateral, and signage mockups
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#da0000] mt-[0.6rem] shrink-0"></div>
                                        <p className="text-[16px] sm:text-[18px] text-[#a8a8a8] leading-[1.6] font-normal tracking-wide">
                                            <span className="text-[#dbdbdb]">Digital Strategy</span> – Omnichannel integration, campaign planning, and execution
                                        </p>
                                    </li>
                                </>
                            )}
                        </ul>

                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="mt-12 inline-block text-white text-[16px] font-bold underline underline-offset-[8px] decoration-white/90 hover:text-gray-300 transition-colors tracking-wide bg-transparent border-none cursor-pointer outline-none text-left"
                        >
                            {showMore ? 'see less' : 'see more'}
                        </button>
                    </div>
                </div>

                {/* Right Image Column */}
                <div className="hidden lg:flex w-full lg:w-[40%] p-6 sm:p-10 lg:py-12 lg:pr-8 xl:pr-10 lg:pl-0 flex-col justify-stretch">
                    <div className="w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[600px] rounded-[1.5rem] overflow-hidden relative shadow-2xl translate-x-2">
                        <img
                            src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
                            alt="Brand Identity Mockups"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BrandingStrategySection;
