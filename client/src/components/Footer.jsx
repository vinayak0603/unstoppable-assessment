import React from 'react';
import footerBg from '../assets/landingAssests/footer.png';

const Footer = () => {
    return (
        <footer 
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat font-sans overflow-hidden flex flex-col justify-between pt-12 md:pt-24"
            style={{ backgroundImage: `url(${footerBg})` }}
        >
            {/* Background Overlays for readability over the background image */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/90 z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0 pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-[85rem] mx-auto px-5 md:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 mb-12 md:mb-20">
                
                {/* Column 1: Logo and Info */}
                <div className="lg:col-span-4 flex flex-col">
                    {/* Logo */}
                    <div className="flex flex-col cursor-pointer mb-8">
                        <div className="text-[1.75rem] md:text-3xl lg:text-[2rem] font-semibold tracking-tight flex items-center">
                            <span className="text-[#da251d]">U</span>
                            <span className="text-white">nstoppable</span>
                        </div>
                        <div className="text-[9px] lg:text-[10px] tracking-[0.25em] text-gray-300 mt-1 pl-1">
                            CREATIVE AGENCY
                        </div>
                    </div>

                    <p className="text-[#e0e0e0] text-[13px] leading-relaxed mb-6 max-w-[16rem] font-medium">
                        B/50, 5th Floor, Off New Link Rd,<br />
                        Andheri West, Mumbai, Maharashtra<br />
                        400053
                    </p>

                    <div className="flex flex-col gap-4 mb-8 text-[13px] text-[#e0e0e0] font-medium">
                        <div className="flex items-center gap-3">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                            <span>+91 9833022443</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            <span>connect@getunstoppable.in</span>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-5 text-white">
                        <a href="#" className="hover:text-gray-300 transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="lg:col-span-2 flex flex-col">
                    <h3 className="text-2xl font-medium text-white mb-6">Quick Links</h3>
                    <div className="flex flex-col gap-3 text-[14px] text-[#cccccc]">
                        <a href="#" className="hover:text-white transition-colors">About us</a>
                        <a href="#" className="hover:text-white transition-colors">Our Work</a>
                        <a href="#" className="hover:text-white transition-colors">Experience</a>
                        <a href="#" className="hover:text-white transition-colors">Expertise</a>
                        <a href="/career" className="hover:text-white transition-colors">Career</a>
                        <a href="#" className="hover:text-white transition-colors">Blogs</a>
                    </div>
                </div>

                {/* Column 3: Accessibility */}
                <div className="lg:col-span-2 flex flex-col">
                    <h3 className="text-2xl font-medium text-white mb-6">Accessibility</h3>
                    <div className="flex flex-col gap-4 text-[13px] text-[#cccccc]">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    </div>
                </div>

                {/* Column 4: Form */}
                <div className="lg:col-span-4 flex flex-col md:col-span-2 lg:pl-6 lg:-mt-2">
                    <h2 className="text-[2rem] sm:text-[2.75rem] font-bold text-white leading-[1.05] mb-3 tracking-tight">
                        Let's B<span className="font-serif italic font-normal tracking-tight">ui</span>ld<br />
                        What's Next
                    </h2>
                    <p className="text-[15px] text-[#e0e0e0] leading-[1.4] mb-8 font-light max-w-[18rem]">
                        Tell us your biggest challenge and we'll help you close the GAP.
                    </p>

                    <form className="flex flex-col gap-3 w-full max-w-[22rem]">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="w-full bg-white text-black text-[13px] px-4 py-[11px] rounded-[6px] outline-none placeholder:text-gray-900 font-medium border-0"
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full bg-white text-black text-[13px] px-4 py-[11px] rounded-[6px] outline-none placeholder:text-gray-900 font-medium border-0"
                        />
                        <input 
                            type="tel" 
                            placeholder="Phone Number" 
                            className="w-full bg-white text-black text-[13px] px-4 py-[11px] rounded-[6px] outline-none placeholder:text-gray-900 font-medium border-0"
                        />
                        <div className="relative w-full">
                            <select defaultValue="" className="w-full bg-white text-black text-[13px] px-4 py-[11px] rounded-[6px] outline-none appearance-none placeholder:text-gray-900 font-medium border-0 cursor-pointer">
                                <option value="" disabled className="text-gray-900">Services</option>
                                <option value="1">Service 1</option>
                                <option value="2">Service 2</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <textarea 
                            placeholder="Message" 
                            rows="3"
                            className="w-full bg-white text-black text-[13px] px-4 py-[11px] rounded-[6px] outline-none resize-none placeholder:text-gray-900 font-medium border-0"
                        ></textarea>
                        
                        <button 
                            type="submit" 
                            className="w-full bg-[#cc0000] hover:bg-[#aa0000] text-white text-[15px] font-medium py-3 rounded-full mt-2 transition-colors border border-red-500 shadow-xl"
                        >
                            Start A Project
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="relative z-10 w-full max-w-[85rem] mx-auto px-6 md:px-12 xl:px-20 pb-8 text-[11px] text-[#909090] mt-auto font-medium">
                © 2025 Unstoppable Creative Agency. All Rights Reserved.
            </div>
            
        </footer>
    );
};

export default Footer;
