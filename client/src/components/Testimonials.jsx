import React, { useState, useEffect, useRef } from 'react';
import testimonal1 from '../assets/testimonals/testimonal1.png';
import testimonal2 from '../assets/testimonals/testimonal2.png';

const testimonials = [
  {
    id: 1,
    name: "Ronin Mehta",
    designation: "Co-Founder, MD & CEO, Tedx Speaker",
    image: testimonal1,
    text: "Their team understood our vision better than we could articulate it. The branding not only elevated our image but gave our startup the confidence to scale. Their team understood our vision better than we could articulate it. The branding not only elevated our image but gave our startup the confidence to scale",
    metric1: { value: "64%", label: "YoY Sales Growth" },
    metric2: { value: "86%", label: "Customer Retention" },
  },
  {
    id: 2,
    name: "Ananya Sharma",
    designation: "Founder & CEO, Bloom Startups",
    image: testimonal2,
    text: "They don't just provide services — they act as a true growth partner. From strategy to execution, everything was seamless. Our brand identity now perfectly captures our vision and has been praised by every investor we've met.",
    metric1: { value: "3x", label: "Revenue Growth" },
    metric2: { value: "92%", label: "Client Satisfaction" },
  },
  {
    id: 3,
    name: "Sarah Chen",
    designation: "Operations Lead, EZIPP International",
    image: "https://i.pravatar.cc/600?u=sarah",
    text: "The team at Unstoppable truly understands market dynamics. They helped us bridge the gap between our current visibility and our true potential. Highly recommended for any business looking to grow seriously and fast.",
    metric1: { value: "5x", label: "Lead Generation" },
    metric2: { value: "78%", label: "Brand Recall Rate" },
  },
  {
    id: 4,
    name: "Rajesh Malhotra",
    designation: "Managing Director, Nirvana Realty",
    image: "https://i.pravatar.cc/600?u=rajesh",
    text: "Exceptional creativity combined with strategic thinking. They helped us redefine our legacy brand for the modern digital era without losing our core values. A truly professional and dedicated team.",
    metric1: { value: "48%", label: "Inquiry Growth" },
    metric2: { value: "2.4x", label: "Digital Presence" },
  },
  {
    id: 5,
    name: "Michael Ross",
    designation: "Tech Lead, Meta Solutions",
    image: "https://i.pravatar.cc/600?u=michael",
    text: "Their execution is flawless. We've worked with many agencies, but the transparency and results with Unstoppable are on another level. They really know how to make a brand stand out in a crowded market.",
    metric1: { value: "120%", label: "Engagement Uplift" },
    metric2: { value: "91%", label: "Campaign ROI" },
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goNext, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  const goNext = () => {
    setCurrentIndex((p) => (p + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (i) => {
    setCurrentIndex(i);
    resetInterval();
  };

  return (
    <section className="bg-black py-12 md:py-20 w-full flex flex-col items-center font-sans overflow-hidden">

      {/* Header */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center mb-10 md:mb-14 px-5">
        <h2 className="text-[1.8rem] sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.15]">
          Words for the Un<span className="text-[#da251d] font-serif italic font-normal tracking-tight">stop</span>pable
        </h2>
        <p className="text-[#c4c4c4] text-sm md:text-base mt-4 max-w-lg mx-auto font-normal leading-relaxed">
          Growth isn't claimed, it's proven.<br />
          Here's what our partners say about working with us.
        </p>
      </div>

      {/* ── PEEK CAROUSEL ── */}
      {/*
        Strategy: overflow:hidden is on the parent <section>.
        The inner wrapper has horizontal padding (px-[9%] or px-24).
        Each card is min-w-full (= 100% of the inner padded width).
        The sliding track translateX(-index * 100%) shifts cards.
        Cards escaping into the padding zone are visible as "peeks"
        because the section clips overflow, not this wrapper.
      */}
      <div className="w-full px-[9%] sm:px-[10%] md:px-[12%]">
        {/* Sliding track */}
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="flex-shrink-0 w-full px-2 md:px-3">
              {/* ── CARD ── */}
              <div
                className="w-full rounded-2xl overflow-hidden flex flex-col md:flex-row"
                style={{ background: '#111111', minHeight: '420px' }}
              >

                {/* LEFT: Photo + frosted name tag with folder-tab shape */}
                <div className="relative w-full md:w-[32%] flex-shrink-0 min-h-[260px] md:min-h-0 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  
                  {/* Folder Tab Name Tag */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-[100px] backdrop-blur-xl bg-gradient-to-t from-[#111111] via-[#111111]/90 to-transparent z-20"
                    style={{
                      WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 V30 C0,10 15,10 25,10 H45 C55,10 55,0 65,0 H100 V100 Z' fill='black'/%3E%3C/svg%3E")`,
                      maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 V30 C0,10 15,10 25,10 H45 C55,10 55,0 65,0 H100 V100 Z' fill='black'/%3E%3C/svg%3E")`,
                      WebkitMaskSize: '100% 100%',
                      maskSize: '100% 100%'
                    }}
                  >
                    {/* Subtle Golden Glow Line */}
                    <div className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-orange-400/30 to-transparent blur-[1px]"></div>
                    
                    <div className="absolute bottom-6 left-6">
                      <p className="text-white font-bold text-[18px] leading-tight">{t.name}</p>
                      <p className="text-[#888888] text-[13px] mt-1 pr-4">{t.designation}</p>
                    </div>
                  </div>

                  {/* SVG Border Line for the Tab */}
                  <svg className="absolute bottom-0 left-0 w-full h-[100px] pointer-events-none z-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 V30 C0,10 15,10 25,10 H45 C55,10 55,0 65,0 H100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
                  </svg>
                </div>

                {/* RIGHT: Quote + Metrics + Nav */}
                <div
                  className="flex-1 flex flex-col justify-between p-6 md:p-10 lg:p-12"
                  style={{ background: '#181818' }}
                >
                  {/* Quote */}
                  <p className="text-[#cccccc] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] font-normal">
                    {t.text}
                  </p>

                  {/* Metrics */}
                  <div className="flex items-stretch mt-8 md:mt-10">
                    <div className="flex flex-col pr-7 md:pr-10 lg:pr-14">
                      <span className="text-white font-bold text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] leading-none tracking-tight">
                        {t.metric1.value}
                      </span>
                      <span className="text-[#777777] text-[11px] md:text-[12.5px] mt-1.5 font-normal">
                        {t.metric1.label}
                      </span>
                    </div>

                    {/* Vertical divider */}
                    <div className="w-px self-stretch bg-[#2a2a2a]" />

                    <div className="flex flex-col pl-7 md:pl-10 lg:pl-14">
                      <span className="text-white font-bold text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] leading-none tracking-tight">
                        {t.metric2.value}
                      </span>
                      <span className="text-[#777777] text-[11px] md:text-[12.5px] mt-1.5 font-normal">
                        {t.metric2.label}
                      </span>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8 md:mt-10">
                    {/* Dots */}
                    <div className="flex gap-2 items-center">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => goTo(i)}
                          className="rounded-full transition-all duration-300"
                          style={{
                            width: i === currentIndex ? '26px' : '8px',
                            height: '8px',
                            background: i === currentIndex ? '#cc0000' : '#2e2e2e',
                          }}
                        />
                      ))}
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => { goPrev(); resetInterval(); }}
                        className="w-9 h-9 rounded-full border border-[#2e2e2e] flex items-center justify-center hover:border-white/20 hover:bg-white/5 transition-all"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="19" y1="12" x2="5" y2="12" />
                          <polyline points="12 19 5 12 12 5" />
                        </svg>
                      </button>
                      <button
                        onClick={() => { goNext(); resetInterval(); }}
                        className="w-9 h-9 rounded-full bg-[#cc0000] flex items-center justify-center hover:bg-[#aa0000] transition-all shadow-lg shadow-red-900/30"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
              {/* ── END CARD ── */}
            </div>
          ))}
        </div>
        {/* End track */}
      </div>
      {/* End carousel */}

    </section>
  );
};

export default Testimonials;
