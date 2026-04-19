import React, { useRef } from 'react';

const carouselData = [
    {
        id: 1,
        title: "Credai Mchi",
        badges: ["Branding Elevated", "Future Ready", "Designing Spaces that Sell"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Coffee Table Book Designs",
        badges: ["Pages with Presence", "Art You Can Hold", "Stories That Live on Paper"],
        image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2062&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Casa de Flores",
        badges: ["Designing Delight", "Every Detail Blooms", "Luxury Rooted in Style"],
        image: "https://images.unsplash.com/photo-1627663242045-8f654b9d07fb?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Sundeck Solar",
        badges: ["Powering Progress", "Brighter Brand Identity", "Energy Meets Innovation"],
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Unstoppable Expo",
        badges: ["Global Scale", "Platform Growth", "Visibility Boost"],
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
    }
];

const SolutionsProjectsCarousel = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current && scrollRef.current.children.length > 0) {
            const itemWidth = scrollRef.current.children[0].offsetWidth;
            scrollRef.current.scrollBy({ left: -(itemWidth + 24), behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current && scrollRef.current.children.length > 0) {
            const itemWidth = scrollRef.current.children[0].offsetWidth;
            scrollRef.current.scrollBy({ left: (itemWidth + 24), behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 lg:py-32 px-2 md:px-4 lg:px-6 xl:px-8 bg-[#080808] relative font-sans">
            <div className="max-w-[120rem] mx-auto relative group flex items-center justify-center gap-3 sm:gap-6 lg:gap-10">
                
                {/* Left Button */}
                <button 
                    onClick={scrollLeft}
                    className="shrink-0 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#da0000] flex items-center justify-center shadow-[0_0_20px_rgba(218,0,0,0.5)] hover:bg-[#b50000] transition-all hover:scale-105 active:scale-95 border-none outline-none cursor-pointer"
                >
                    <svg width="12" height="18" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-0.5 w-2 sm:w-3">
                        <path d="M7 1L1 7L7 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                {/* Carousel Container */}
                <div 
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 w-full pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {carouselData.map((item) => (
                        <div 
                            key={item.id} 
                            className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] rounded-2xl border border-white/[0.15] bg-transparent p-[1.125rem] flex flex-col hover:border-white/40 transition-colors duration-300 shadow-lg"
                        >
                            {/* Image Thumbnail */}
                            <div className="w-full aspect-square rounded-xl overflow-hidden relative bg-[#111] shrink-0">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="mt-5 flex flex-col flex-grow">
                                <h3 className="text-white text-[16px] md:text-[18px] font-medium tracking-wide mb-3.5">
                                    {item.title}
                                </h3>

                                <div className="grid grid-cols-2 gap-2 mt-auto">
                                    {item.badges.map((badge, index) => (
                                        <span 
                                            key={index} 
                                            title={badge}
                                            className="px-2 py-1.5 rounded-full border border-white/30 text-[#dedede] text-[9px] min-[1400px]:text-[10px] font-light tracking-wide whitespace-nowrap overflow-hidden text-ellipsis text-center"
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Button */}
                <button 
                    onClick={scrollRight}
                    className="shrink-0 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#da0000] flex items-center justify-center shadow-[0_0_20px_rgba(218,0,0,0.5)] hover:bg-[#b50000] transition-all hover:scale-105 active:scale-95 border-none outline-none cursor-pointer"
                >
                    <svg width="12" height="18" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-0.5 w-2 sm:w-3">
                        <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

            </div>
        </section>
    );
};

export default SolutionsProjectsCarousel;
