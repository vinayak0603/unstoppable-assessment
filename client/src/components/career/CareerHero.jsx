import React from 'react';
import careerHeroBg from '../../assets/Career/CareerHero.png';

const CareerHero = () => {
    return (
        <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-start overflow-hidden bg-black">
            {/* Background Image - Fixed with bg-cover for proper responsiveness */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${careerHeroBg})` }}
            >
                {/* Overlay - Matching the previous design */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 px-[5%] md:px-[8%] max-w-[95%] md:max-w-[70%] -mt-5 md:mt-0">
                <h1 
                    className="text-white leading-[1.1] mb-6 tracking-tight font-extrabold"
                    style={{ 
                        fontFamily: "'Barlow Condensed', 'Inter', sans-serif",
                        fontSize: 'clamp(2.2rem, 8vw, 4.5rem)' 
                    }}
                >
                    Why Build Your Career <br />
                    With Us
                </h1>
                <p 
                    className="text-white/85 leading-relaxed max-w-[600px] font-medium"
                    style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(1rem, 3vw, 1.25rem)' 
                    }}
                >
                    At Unstoppable, learning isn't an occasional <br className="hidden md:block" />
                    workshop — it's a mindset.
                </p>
            </div>
        </section>
    );
};

export default CareerHero;
