import React, { useState, useEffect } from 'react';
import testimonal1 from '../assets/testimonals/testimonal1.png';
import testimonal2 from '../assets/testimonals/testimonal2.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sandeep Gupta",
      designation: "Marketing Director, Sundeck Solar",
      image: testimonal1,
      rating: 5,
      text: "Working with Unstoppable Creative Agency has been a game-changer for our brand. Their strategic approach to our digital identity helped us scale our reach by 3x within 6 months. The attention to detail and creative vision is unmatched."
    },
    {
      id: 2,
      name: "Ananya Sharma",
      designation: "Founder, Bloom Startups",
      image: testimonal2,
      rating: 5,
      text: "They don't just provide services; they act as a growth partner. From strategy to execution, everything was seamless. Our new brand identity perfectly captures our vision and has been highly praised by our investors."
    },
    {
      id: 3,
      name: "Sarah Chen",
      designation: "Operations Lead, EZIPP",
      image: "https://i.pravatar.cc/300?u=sarah",
      rating: 5,
      text: "The team at Unstoppable truly understands the market dynamics. They helped us bridge the gap between our current visibility and our potential. Highly recommended for any business looking to grow seriously."
    },
    {
      id: 4,
      name: "Rajesh Malhotra",
      designation: "MD, Nirvana Realty",
      image: "https://i.pravatar.cc/300?u=rajesh",
      rating: 5,
      text: "Exceptional creativity combined with strategic thinking. They helped us redefine our legacy for the modern digital era without losing our core values. A truly professional team."
    },
    {
      id: 5,
      name: "Michael Ross",
      designation: "Tech Lead, Meta Solutions",
      image: "https://i.pravatar.cc/300?u=michael",
      rating: 5,
      text: "Their execution is flawless. We've worked with many agencies, but the transparency and results with Unstoppable are on another level. They really know how to make a brand stand out."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-black py-12 md:py-20 w-full overflow-hidden flex flex-col items-center relative">
      <div className="max-w-6xl w-full flex flex-col items-center text-center mb-16 px-6 relative z-50">
        <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.15]">
          Words for the Un<span className="text-[#da251d] font-serif italic font-normal tracking-tight">stop</span>pable
        </h2>
        <p className="text-[#c4c4c4] text-sm md:text-base mt-4 text-center max-w-lg mx-auto font-normal leading-relaxed">
          Growth isn't claimed, it's proven.<br />
          Here's what our partners say about working with us.
        </p>
      </div>

      {/* 3D Carousel Container */}
      <div className="relative w-full h-[520px] sm:h-[480px] md:h-[450px] lg:h-[400px] flex justify-center items-center">
        {testimonials.map((testimonial, index) => {
          let diff = index - currentIndex;
          const total = testimonials.length;
          
          if (diff > Math.floor(total / 2)) diff -= total;
          if (diff < -Math.floor(total / 2)) diff += total;

          const isCenter = diff === 0;
          const isPrev = diff === -1;
          const isNext = diff === 1;
          const isVisible = Math.abs(diff) <= 1;

          // Shift horizontally by 85% of their own width
          const translateX = diff * 80;

          return (
            <div 
              key={testimonial.id}
              className="absolute w-[92%] sm:w-[88%] md:w-[78%] lg:w-[65%] max-w-5xl transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(${translateX}%) scale(${isCenter ? 1 : 0.85})`,
                opacity: isCenter ? 1 : isVisible ? 0.35 : 0,
                zIndex: isCenter ? 30 : isVisible ? 20 : 10,
                pointerEvents: isCenter ? 'auto' : 'none'
              }}
            >
              <div className="relative w-full h-full bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="flex flex-col md:flex-row items-center p-8 md:p-12 lg:p-16 gap-8 md:gap-12 h-full">
                  
                  {/* Left: Image */}
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-[#cc0000]/30 shadow-[0_0_20px_rgba(204,0,0,0.15)]">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 md:mb-6 justify-center md:justify-start">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 md:w-6 md:h-6 text-[#cc0000]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg md:text-xl lg:text-2xl text-white font-medium leading-[1.6] mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    {/* User Info */}
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1">{testimonial.name}</h4>
                      <p className="text-sm md:text-base text-[#cc0000] font-medium">{testimonial.designation}</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-4 transition-opacity duration-300" style={{ opacity: isCenter ? 1 : 0 }}>
                  <button 
                    onClick={handlePrev}
                    className="p-2 md:p-3 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all group"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-white">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-2 md:p-3 rounded-full bg-[#cc0000] hover:bg-[#aa0000] transition-all group shadow-lg shadow-[#cc0000]/20"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-8 z-50">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#cc0000] w-8' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
