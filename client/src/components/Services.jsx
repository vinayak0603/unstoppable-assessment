import React from 'react';
import card1 from '../assets/cards/card1.png';
import card2 from '../assets/cards/card2.png';
import card3 from '../assets/cards/card3.png';

const SERVICES_DATA = [
    {
        id: 'brand-strategy',
        title: "Brand Strategy\n& Identity",
        image: card1,
        description: "Build brands that stand out, scale up, and stay relevant.",
        tags: ["Brand Audits", "Visual Identity", "Brand Guidelines", "Positioning & Messaging", "Verbal Identity"]
    },
    {
        id: 'design-creative',
        title: "Design & Creative\nCommunication",
        image: card2,
        description: "Translate strategy into powerful, scroll-stopping creativity.",
        tags: ["Logo Design", "Web Design", "UI/UX", "Graphic Design", "Motion Graphics"]
    },
    {
        id: 'digital-marketing',
        title: "Digital & Performance\nMarketing",
        image: card3,
        description: "Turn attention into action with data-driven growth.",
        tags: [
            "Social Media & Influencer Marketing",
            "Digital Campaigns",
            "Media Buying",
            "SEO / SEM / Display Ads",
            "CRM, Automation & Lead Generation"
        ]
    }
];

const Services = () => {
    return (
        <section className="bg-black py-10 md:py-20 flex flex-col items-center overflow-hidden justify-center relative font-sans">
            {/* SERVICES SECTION: Glassmorphism Folder UI */}
            <div className="relative w-full max-w-[68rem] mx-auto flex flex-col items-center z-50">

                {/* 3-Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full px-4 md:px-8">
                    {SERVICES_DATA.map((service) => (
                        <div
                            key={service.id}
                            className="relative w-full aspect-[4/4.5] sm:aspect-[4/5] md:aspect-[4/5.2] rounded-[2.8rem] overflow-hidden bg-[#0c0c0c] group shadow-[0_25px_60px_rgba(0,0,0,0.4)] cursor-pointer"
                        >
                            {/* Sliding Cream Background */}
                            <div className="absolute inset-0 bg-[#e6d7c3] transform translate-y-full group-hover:translate-y-0 transition-transform duration-450 ease-out z-0"></div>

                            {/* Inner Image Container */}
                            <div className="absolute top-0 left-0 w-full h-[80%] p-3 md:p-5 overflow-hidden z-10 transition-transform duration-500 group-hover:rotate-2">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover rounded-[1.8rem] transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-[1.03] pointer-events-none"
                                />
                            </div>

                            {/* Folder Layer UI - Glassmorphism Transition (Transparent & Blur) */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-[80%] backdrop-blur-2xl bg-white/5 border-t border-white/10 transition-transform duration-[450ms] ease-out translate-y-[45%] group-hover:translate-y-0 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] z-20"
                                style={{
                                    WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H42 C52,0 48,15 58,15 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                                    maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H42 C52,0 48,15 58,15 H100 V100 H0 Z' fill='black'/%3E%3C/svg%3E")`,
                                    WebkitMaskSize: '100% 100%',
                                    maskSize: '100% 100%'
                                }}
                            >
                                {/* Folder Inner Content */}
                                <div className="absolute inset-0 pt-[16%] md:pt-[20%] px-6 md:px-8 flex flex-col items-start text-left">
                                    <h3 className="text-[19px] md:text-[22px] font-bold text-white mb-2 leading-[1.2] tracking-tight whitespace-pre-line group-hover:scale-[1.02] transition-transform duration-500 origin-left">
                                        {service.title}
                                    </h3>
                                    <p className="text-white text-[12px] md:text-[13px] leading-relaxed mb-6 max-w-[90%] font-normal">
                                        {service.description}
                                    </p>

                                    {/* Revealable Tags */}
                                    <div className="flex flex-wrap gap-2 transition-all duration-500 delay-100 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                                        {service.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-[9.5px] md:text-[10.5px] font-medium text-white/90 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/20 hover:border-white/40 transition-colors whitespace-nowrap"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Border Stroke */}
                            <svg
                                className="absolute bottom-0 left-0 w-full h-[80%] pointer-events-none transition-transform duration-[450ms] ease-out translate-y-[45%] group-hover:translate-y-0 z-20"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,0 H42 C52,0 48,15 58,15 H100"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.25)"
                                    vectorEffect="non-scaling-stroke"
                                    strokeWidth="1.2"
                                />
                            </svg>
                        </div>
                    ))}
                </div>

                {/* View all Services */}
                <div className="mt-16 z-50">
                    <button className="bg-[#b30000] border border-[#ff3333]/40 text-white rounded-full px-10 py-4 flex items-center gap-3 text-[14.5px] font-semibold hover:bg-[#a60000] transition-all hover:scale-[1.03] active:scale-[0.97] shadow-[0_5px_25px_rgba(204,0,0,0.5)]">
                        View all Services
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
