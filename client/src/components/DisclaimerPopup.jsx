import React, { useState, useEffect } from 'react';

const DisclaimerPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        // Check session storage to ensure it doesn't pop up on every single reload
        const hasSeenPopup = sessionStorage.getItem('unstoppable_assessment_disclaimer');

        if (!hasSeenPopup) {
            // Slight dramatic delay upon first arrival
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            setIsMounted(false);
        }
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        sessionStorage.setItem('unstoppable_assessment_disclaimer', 'true');
        setTimeout(() => {
            setIsVisible(false);
            setIsMounted(false);
        }, 500); // Wait for CSS opacity/transform fade out
    };

    if (!isMounted) return null;

    return (
        <div
            className={`fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 transition-all duration-500 ease-in-out ${isClosing || !isVisible ? 'bg-transparent backdrop-blur-none pointer-events-none' : 'bg-black/60 backdrop-blur-xl'}`}
        >
            <div
                className={`relative w-full max-w-xl mx-auto rounded-3xl border border-white/10 bg-[#070707] p-8 md:p-12 shadow-[0_0_80px_rgba(200,0,0,0.15)] overflow-hidden transition-all duration-500 ease-out transform ${!isVisible || isClosing ? 'scale-95 opacity-0 translate-y-8' : 'scale-100 opacity-100 translate-y-0'}`}
            >
                {/* Decorative Red Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#cc0000] to-transparent opacity-80"></div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-sans tracking-tight">
                    Assessment <span className="text-[#cc0000] font-serif italic text-[1.1em] font-normal">Notice</span>
                </h3>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
                    This frontend application is developed as a technical assessment for the <strong>Unstoppable Creative Agency</strong>.
                </p>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 font-normal">
                    This website serves as a non-commercial development evaluation. There is absolutely no intent of phishing, fraud, data harvesting, or commercial exploitation. All visual assets and trademarks utilized herein belong to their respective proprietary designers and organizations.
                </p>

                <div className="flex justify-end">
                    <button
                        onClick={handleClose}
                        className="bg-white text-black font-bold uppercase tracking-widest text-[13px] md:text-sm px-8 py-3.5 rounded-full hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg outline-none"
                    >
                        I Understand
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerPopup;
