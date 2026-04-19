import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] bg-black/15 backdrop-blur-lg border-b border-white/5 font-sans">
            <div className="max-w-[120rem] mx-auto flex items-center justify-between px-5 md:px-12 lg:px-20 py-4 md:py-5 relative z-50">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3 cursor-pointer group">
                    <img
                        src="/logo.png"
                        alt="Unstoppable Logo"
                        className="h-11 md:h-13 lg:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </a>

                {/* Nav Links - Desktop */}
                <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-gray-300">
                    <a href="/our-solutions" className="hover:text-white transition-all duration-300 relative group">
                        Our Solutions
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#da251d] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#" className="hover:text-white transition-all duration-300 relative group">
                        Why Us
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#da251d] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#" className="hover:text-white transition-all duration-300 relative group">
                        Clientele
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#da251d] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="/communities" className="hover:text-white transition-all duration-300 relative group">
                        Communities
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#da251d] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>

                {/* Auth Buttons - Desktop */}
                <div className="hidden md:flex items-center gap-5">
                    <button className="text-white text-sm font-medium px-7 py-2.5 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300">
                        Login
                    </button>
                    <button className="bg-[#cc0000] text-white text-sm font-bold px-7 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#aa0000] transition-all duration-300 shadow-lg shadow-red-900/20">
                        Register
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </button>
                </div>

                {/* Hamburger - Mobile */}
                <button className="lg:hidden flex flex-col gap-1.5 p-2 z-50 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Premium Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-x-0 top-0 bg-[#070707] transition-all duration-500 overflow-hidden z-40 flex flex-col ${menuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}>
                
                {/* Decorative Grid Background inside mobile menu */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]" style={{
                    backgroundSize: '40px 40px',
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`
                }} />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-8 pt-16">
                    <div className="w-full max-w-[280px] flex flex-col items-center">
                        <div className="w-full h-[1px] bg-white/10"></div>
                        <a href="/our-solutions" className="text-[16px] uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-white py-5 w-full text-center transition-colors" onClick={() => setMenuOpen(false)}>Our Solutions</a>
                        <div className="w-full h-[1px] bg-white/10"></div>
                        <a href="#" className="text-[16px] uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-white py-5 w-full text-center transition-colors" onClick={() => setMenuOpen(false)}>Why Us</a>
                        <div className="w-full h-[1px] bg-white/10"></div>
                        <a href="#" className="text-[16px] uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-white py-5 w-full text-center transition-colors" onClick={() => setMenuOpen(false)}>Clientele</a>
                        <div className="w-full h-[1px] bg-white/10"></div>
                        <a href="/communities" className="text-[16px] uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-white py-5 w-full text-center transition-colors" onClick={() => setMenuOpen(false)}>Communities</a>
                        <div className="w-full h-[1px] bg-white/10"></div>
                        
                        <div className="flex flex-col w-full mt-8 gap-3">
                            <button className="w-full text-white text-[14px] tracking-widest py-3.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors uppercase font-medium">Login</button>
                            <button className="w-full bg-[#cc0000] text-white text-[14px] tracking-widest py-3.5 rounded-full shadow-lg shadow-red-900/20 hover:bg-[#aa0000] transition-colors uppercase font-bold">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
