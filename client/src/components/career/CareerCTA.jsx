import React from 'react';

const TICKER_TEXT =
  'YOUR POTENTIAL IS LIMITLESS.        YOUR JOURNEY IS YOURS.        AND TOGETHER — WE BECOME UNSTOPPABLE.        ';

const CareerCTA = () => {
  return (
    <section
      className="relative w-full bg-black overflow-hidden pt-24"
      style={{
        // Subtle grid lines matching the image
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    >
      {/* ── Main Content ── */}
      <div className="relative z-10 px-12 pb-20 max-w-2xl">
        {/* Heading */}
        <h2
          className="text-white font-extrabold leading-[1.08] tracking-tight mb-5"
          style={{
            fontFamily: "'Barlow Condensed', 'Inter', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3.4rem)',
          }}
        >
          Ready to Build Something <br />
          Po
          <em
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontStyle: 'italic',
              color: '#d0200c',
              fontWeight: 700,
            }}
          >
            owe
          </em>
          rful?
        </h2>

        {/* Subtext */}
        <p
          className="mb-9 leading-relaxed"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.62)',
          }}
        >
          If you&apos;re someone who dreams big, works smart, and wants to create
          <br />
          work that leaves a mark — we&apos;d love to meet you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3.5">
          {/* Email button */}
          <a
            href="mailto:connect@getunstoppable.in"
            id="career-email-btn"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl w-fit transition-all duration-200 hover:bg-white/5 hover:border-white/50"
            style={{
              border: '1.5px solid rgba(255,255,255,0.26)',
              color: 'rgba(255,255,255,0.82)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            {/* Mail icon */}
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" style={{ opacity: 0.72, flexShrink: 0 }}>
              <rect x="1" y="1" width="16" height="12" rx="1" stroke="white" strokeWidth="1.5" />
              <path d="M1 2L9 8L17 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Send your CV &amp; portfolio : connect@getunstoppable.in
          </a>

          {/* Phone button */}
          <a
            href="tel:9833022443"
            id="career-phone-btn"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl w-fit transition-all duration-200 hover:bg-white/5 hover:border-white/50"
            style={{
              border: '1.5px solid rgba(255,255,255,0.26)',
              color: 'rgba(255,255,255,0.82)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            {/* Phone icon */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.72, flexShrink: 0 }}>
              <path
                d="M2.5 1.5C2.5 1.5 4.5 1.5 5.5 3.5C6.5 5.5 5 6.5 5 6.5C5 6.5 7 10 10 11.5C10 11.5 11 10 13 11C15 12 14.5 14.5 14.5 14.5C14.5 14.5 12.5 16 10.5 14.5C4.5 10.5 0.5 5 1.5 2.5C1.5 2.5 2.5 1.5 2.5 1.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            Reach out : 9833022443
          </a>
        </div>
      </div>

      {/* ── Marquee Ticker ── */}
      <div className="relative w-full overflow-hidden pb-8">
        {/* Left fade */}
        <div
          className="absolute top-0 left-0 h-full z-10 pointer-events-none"
          style={{
            width: '220px',
            background: 'linear-gradient(to right, #000000 0%, transparent 100%)',
          }}
        />

        {/* Right fade */}
        <div
          className="absolute top-0 right-0 h-full z-10 pointer-events-none"
          style={{
            width: '220px',
            background: 'linear-gradient(to left, #000000 0%, transparent 100%)',
          }}
        />

        {/* Scrolling track */}
        <div
          className="flex w-max"
          style={{
            animation: 'ticker-scroll 22s linear infinite',
            willChange: 'transform',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              aria-hidden={i !== 0}
              className="inline-block whitespace-nowrap select-none uppercase leading-none"
              style={{
                fontFamily: "'Barlow Condensed', 'Arial Black', sans-serif",
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 900,
                letterSpacing: '0.06em',
                // Vertical gradient: bright at top → fades out at bottom
                background:
                  'linear-gradient(to bottom, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {TICKER_TEXT}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;
