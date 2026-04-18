import React from 'react';
import card1 from '../assets/cards/card1.png';
import card2 from '../assets/cards/card2.png';
import card3 from '../assets/cards/card3.png';

const Services = () => {
    return (
        <section className="bg-black py-10 md:py-16 flex flex-col items-center overflow-hidden justify-center relative font-sans">
            {/* SERVICES SECTION: Feature Cards with Transparent Blur Folder UI */}
            <div className="relative w-full max-w-[65rem] mx-auto flex flex-col items-center z-50">

                {/* 3-Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full px-4 md:px-8">

                    {/* Card 1 */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-[4/4] md:aspect-[4/4.2] lg:aspect-[4/4.5] xl:aspect-[4/4.2] rounded-[1.5rem] overflow-hidden bg-[#0c0c0c] group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <img src={card1} alt="Brand Strategy" className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 pointer-events-none" />

                        <div className="absolute bottom-0 left-0 right-0 h-[60%] backdrop-blur-xl bg-gradient-to-b from-[#444444]/40 via-[#262626]/80 to-[#121212]/95"
                            style={{
                                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H35 C45,0 45,35 60,35 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                                maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H35 C45,0 45,35 60,35 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                                WebkitMaskSize: '100% 100%',
                                maskSize: '100% 100%'
                            }}>
                            <div className="absolute inset-x-0 bottom-6 md:bottom-8 px-6 md:px-7">
                                <h3 className="text-[18px] md:text-[21px] font-bold text-white mb-2 leading-tight tracking-tight">Brand Strategy<br />& Identity</h3>
                                <p className="text-[#a0a0a0] text-[11.5px] md:text-[12.5px] leading-relaxed">Build brands that stand out, scale up, and stay relevant.</p>
                            </div>
                        </div>

                        <svg className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0,0 H35 C45,0 45,35 60,35 H100" fill="none" stroke="rgba(255,255,255,0.2)" vectorEffect="non-scaling-stroke" strokeWidth="1.5" />
                        </svg>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-[4/4] md:aspect-[4/4.2] lg:aspect-[4/4.5] xl:aspect-[4/4.2] rounded-[1.5rem] overflow-hidden bg-[#0c0c0c] group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <img src={card2} alt="Design & Creative" className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 pointer-events-none" />

                        <div className="absolute bottom-0 left-0 right-0 h-[60%] backdrop-blur-xl bg-gradient-to-b from-[#4a4a4a]/40 via-[#262626]/80 to-[#121212]/95"
                            style={{
                                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H35 C45,0 45,35 60,35 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                                maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H35 C45,0 45,35 60,35 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                                WebkitMaskSize: '100% 100%',
                                maskSize: '100% 100%'
                            }}>
                            <div className="absolute inset-x-0 bottom-6 md:bottom-8 px-6 md:px-7">
                                <h3 className="text-[18px] md:text-[21px] font-bold text-white mb-2 leading-tight tracking-tight">Design & Creative<br />Communication</h3>
                                <p className="text-[#a0a0a0] text-[11.5px] md:text-[12.5px] leading-relaxed">Translate strategy into powerful, scroll-stopping creativity.</p>
                            </div>
                        </div>

                        <svg className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0,0 H35 C45,0 45,35 60,35 H100" fill="none" stroke="rgba(255,255,255,0.2)" vectorEffect="non-scaling-stroke" strokeWidth="1.5" />
                        </svg>
                    </div>

                    {/* Card 3 */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-[4/4] md:aspect-[4/4.2] lg:aspect-[4/4.5] xl:aspect-[4/4.2] rounded-[1.5rem] overflow-hidden bg-[#0c0c0c] group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <img src={card3} alt="Digital Marketing" className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 pointer-events-none" />

                        <div className="absolute bottom-0 left-0 right-0 h-[60%] backdrop-blur-xl bg-gradient-to-b from-[#4a4a4a]/40 via-[#262626]/80 to-[#121212]/95"
                            style={{
                                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H35 C45,0 45,35 60,35 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                                maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H35 C45,0 45,35 60,35 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                                WebkitMaskSize: '100% 100%',
                                maskSize: '100% 100%'
                            }}>
                            <div className="absolute inset-x-0 bottom-6 md:bottom-8 px-6 md:px-7">
                                <h3 className="text-[18px] md:text-[21px] font-bold text-white mb-2 leading-tight tracking-tight">Digital & Performance<br />Marketing</h3>
                                <p className="text-[#a0a0a0] text-[11.5px] md:text-[12.5px] leading-relaxed">Turn attention into action with data-driven growth.</p>
                            </div>
                        </div>

                        <svg className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0,0 H35 C45,0 45,35 60,35 H100" fill="none" stroke="rgba(255,255,255,0.2)" vectorEffect="non-scaling-stroke" strokeWidth="1.5" />
                        </svg>
                    </div>

                </div>

                {/* View all Services Button */}
                <div className="mt-14 z-50">
                    <button className="bg-[#b30000] border border-[#ff3333]/50 text-white rounded-full px-8 py-3.5 flex items-center gap-3 text-[15px] hover:bg-[#a60000] transition-colors relative z-20 shadow-[0_0_15px_rgba(204,0,0,0.5)]">
                        View all Services
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
