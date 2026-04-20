import React from 'react';

const bullets = [
  'An environment that values creativity over hierarchy',
  'Honest communication and a culture built on respect',
  'High ownership, high trust — zero micromanagement',
  'Projects across real estate, lifestyle, tech, hospitality, fashion, and beyond',
  'Feedback-driven growth that helps you evolve faster',
  'A team that supports you, challenges you, and celebrates your wins',
];

const CareerLife = () => {
  return (
    <section className="w-full bg-black py-20 px-6 flex flex-col items-center">

      {/* ── Title ── */}
      <h2
        className="text-center text-white font-bold leading-tight mb-12"
        style={{
          fontFamily: "'Barlow Condensed', 'Inter', sans-serif",
          fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
          letterSpacing: '-0.01em',
        }}
      >
        Life at Un
        <em
          style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontStyle: 'italic',
            color: '#c8191a',
            fontWeight: 700,
          }}
        >
          stop
        </em>
        pable
      </h2>

      {/* ── Card — glow on all 4 sides ── */}
      <div
        style={{
          maxWidth: '760px',
          width: '100%',
          borderRadius: '18px',
          border: '1px solid rgba(255,255,255,0.1)',
          background: '#111111',
          padding: '44px 48px 36px 48px',
          animation: 'card-border-glow 7s ease-in-out infinite',
        }}
      >
        {/* ── Bullet list ── */}
        <ul className="flex flex-col gap-5 mb-7">
          {bullets.map((text, i) => (
            <li
              key={i}
              className="flex items-start gap-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.88)',
                lineHeight: '1.5',
              }}
            >
              {/* Bullet dot */}
              <span
                className="flex-shrink-0"
                style={{
                  marginTop: '7px',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.75)',
                  display: 'inline-block',
                }}
              />
              {text}
            </li>
          ))}
        </ul>

        {/* ── Footer line ── */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: '1.5',
          }}
        >
          Here, you&apos;re not just part of the company — you&apos;re part of the mindset.
        </p>
      </div>
    </section>
  );
};

export default CareerLife;
