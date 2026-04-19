import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] bg-black/15 backdrop-blur-lg border-b border-white/5 font-sans">
            <div className="max-w-[120rem] mx-auto flex items-center justify-between px-5 md:px-12 lg:px-20 py-4 md:py-5">
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <img
                        src="/logo.png"
                        alt="Unstoppable Logo"
                        className="h-11 md:h-13 lg:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

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
                    <a href="#" className="hover:text-white transition-all duration-300 relative group">
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
                <button className="lg:hidden flex flex-col gap-1.5 p-2 z-50" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-x-0 top-0 bg-[#050505]/fb backdrop-blur-2xl transition-all duration-500 overflow-hidden ${menuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 px-10 text-center">
                    <a href="/our-solutions" className="text-2xl font-bold text-white" onClick={() => setMenuOpen(false)}>Our Solutions</a>
                    <a href="#" className="text-2xl font-bold text-white" onClick={() => setMenuOpen(false)}>Why Us</a>
                    <a href="#" className="text-2xl font-bold text-white" onClick={() => setMenuOpen(false)}>Clientele</a>
                    <a href="#" className="text-2xl font-bold text-white" onClick={() => setMenuOpen(false)}>Communities</a>
                    <div className="flex flex-col gap-4 w-full max-w-xs mt-4">
                        <button className="text-white text-lg py-4 rounded-full border border-white/20">Login</button>
                        <button className="bg-[#cc0000] text-white text-lg py-4 rounded-full font-bold">Register</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
