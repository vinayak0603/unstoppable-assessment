import React, { useState } from 'react';
import bgImage from '../assets/landingAssests/hero.png';

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat w-full relative flex flex-col font-sans"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Dark gradient overlay to ensure text visibility against the background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent z-0 pointer-events-none"></div>

            {/* Navbar */}
            <header className="relative z-20 flex items-center justify-between px-5 md:px-12 lg:px-20 py-5 md:py-6">
                {/* Logo */}
                <div className="flex flex-col cursor-pointer">
                    <div className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight flex items-center">
                        <span className="text-[#da251d]">U</span>
                        <span className="text-white">nstoppable</span>
                    </div>
                    <div className="text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.25em] text-gray-300 mt-1 pl-1">
                        CREATIVE AGENCY
                    </div>
                </div>

                {/* Nav Links - Desktop */}
                <nav className="hidden lg:flex items-center gap-10 text-[15px] text-gray-300">
                    <a href="#" className="hover:text-white transition-colors">Our Solutions</a>
                    <a href="#" className="hover:text-white transition-colors">Why Us</a>
                    <a href="#" className="hover:text-white transition-colors">Clientele</a>
                    <a href="#" className="hover:text-white transition-colors">Communities</a>
                </nav>

                {/* Auth Buttons - Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="text-white text-sm px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                        Login
                    </button>
                    <button className="bg-[#3a1111] text-white text-sm px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#4d1616] transition-colors border border-transparent">
                        Register
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </button>
                </div>

                {/* Hamburger - Mobile */}
                <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </header>

            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <div className="md:hidden absolute top-[72px] left-0 right-0 z-30 bg-[#030303]/95 backdrop-blur-md border-b border-white/10 px-5 py-6 flex flex-col gap-4">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-base">Our Solutions</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-base">Why Us</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-base">Clientele</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-base">Communities</a>
                    <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
                        <button className="text-white text-sm px-6 py-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors w-full">Login</button>
                        <button className="bg-[#3a1111] text-white text-sm px-5 py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-[#4d1616] transition-colors w-full">Register</button>
                    </div>
                </div>
            )}

            {/* Hero Content */}
            <main className="relative z-10 flex-grow flex flex-col justify-center px-5 md:px-12 lg:px-20 max-w-[65rem] mt-5 pb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.2rem] font-bold text-white leading-[1.1] tracking-tight mb-4 md:mb-6">
                    Your St<span className="text-[#da251d] font-serif italic font-normal tracking-tight -ml-1 pr-1">ra</span>tegic Growth<br />
                    Partner in Business
                </h1>

                <p className="text-base md:text-lg lg:text-xl text-[#c4c4c4] mb-7 md:mb-10 max-w-[32rem] font-light leading-relaxed">
                    Marketing & Branding Solutions for<br />
                    Growth Focused Businesses
                </p>

                <button className="w-fit bg-[#da251d]/10 border border-[#da251d] text-white rounded-full px-6 md:px-8 py-3 md:py-3.5 flex items-center gap-3 text-sm md:text-[15px] hover:bg-[#da251d]/20 transition-colors">
                    Book Strategy Call
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </main>

            {/* Partnered With Section */}
            <footer className="relative z-10 px-5 md:px-12 lg:px-20 pb-8 md:pb-12 mt-4 md:mt-10">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                    <span className="text-[#a0a0a0] text-xs md:text-sm">Partnered with</span>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4">
                        {/* Meta Logo */}
                        <div className="px-5 py-2 rounded-[2rem] border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                            <span className="text-white text-sm font-semibold tracking-wide">Meta</span>
                        </div>
                        {/* JioHotstar Logo */}
                        <div className="px-5 py-2 rounded-[2rem] border border-white/20 flex items-center gap-1.5 justify-center bg-black/20 backdrop-blur-sm">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span className="text-white text-sm font-bold tracking-tight">
                                JioHotstar
                            </span>
                        </div>
                        {/* EZIPP Logo */}
                        <div className="px-5 py-2 rounded-[2rem] border border-white/20 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm">
                            <span className="text-white text-[11px] font-bold tracking-[0.15em] leading-tight">EZIPP</span>
                            <span className="text-gray-400 text-[5px] tracking-[0.15em] leading-tight mt-0.5">INTERNATIONAL</span>
                        </div>
                        {/* TOI Logo */}
                        <div className="px-5 py-2 rounded-[2rem] border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                            <span className="text-white text-sm font-serif font-bold tracking-wider">TOI</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Hero;