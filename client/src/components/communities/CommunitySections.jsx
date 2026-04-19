import React from 'react';
import './CommunitySections.css';


const communitiesData = [
  {
    id: 'influencer',
    title: 'Influencer Community',
    description: (
      <>
        A creator network built for brands that need authentic influence - fast and at scale.<br className="hidden sm:block" />
        Creators who join get first access to brand collaborations, content opportunities,<br className="hidden sm:block" />
        and paid campaigns across industries.
      </>
    ),
    howItWorks: [
      '- Join the WhatsApp community using the link below',
      '- Get alerts for brand briefs, campaigns, and content requirements',
      '- Apply directly through quick forms',
      '- Work with brands that match your niche and audience'
    ],
    buttonText: 'Join Our Community',
    circlePosition: 'left'
  },
  {
    id: 'freelancer',
    title: 'Freelancer Community',
    description: (
      <>
        A curated WhatsApp group for designers, writers, strategists, video editors, motion<br className="hidden sm:block" />
        artists, and other creative specialists.<br className="hidden sm:block" />
        Perfect for freelancers who want consistent opportunities and brands who need<br className="hidden sm:block" />
        reliable on-demand talent.
      </>
    ),
    howItWorks: [
      '- Join the community via the link below',
      '- Receive real-time project requirements and briefs',
      '- Pick tasks that match your skillset',
      '- Collaborate seamlessly with our team and deliver high-quality work'
    ],
    buttonText: 'Join Our Community',
    circlePosition: 'right'
  },
  {
    id: 'focus-group',
    title: 'Focus-Group Community',
    description: (
      <>
        A WhatsApp community of real consumers who help brands make smarter<br className="hidden sm:block" />
        decisions through honest, fast, and actionable feedback.<br className="hidden sm:block" />
        Ideal for validating ideas before launching.
      </>
    ),
    howItWorks: [
      '- Join the WhatsApp group using the link below',
      '- Participate in quick polls, discussions, product tests, and feedback forms',
      '- Share your opinions and get early access to concepts in development'
    ],
    buttonText: 'Join Our Community',
    circlePosition: 'left'
  }
];

const CommunitySections = () => {
  return (
    <div className="bg-[#000000] text-white font-sans flex flex-col w-full relative overflow-hidden">
      {communitiesData.map((community, index) => (
        <div key={community.id} className="relative w-full py-24 sm:py-32 flex flex-col items-center">

          <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none z-0 ${community.circlePosition === 'left' ? 'left-0 -translate-x-[45%]' : 'right-0 translate-x-[45%]'}`}>
            <div
              className="bg-[#d40000] blur-[20px] uneven-circle-spin w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] lg:w-[750px] lg:h-[750px]"
              style={{ opacity: 0.9 }}
            ></div>
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full max-w-[1000px] px-6 flex flex-col items-center">

            {/* Header Text */}
            <div className="text-center mb-12">
              <h2 className="text-[36px] sm:text-[44px] md:text-[50px] font-bold tracking-tight mb-4">
                {community.title}
              </h2>
              <p className="text-[17px] sm:text-[19px] text-[#cccccc] leading-[1.4] font-normal mx-auto">
                {community.description}
              </p>
            </div>

            {/* Glassmorphism Card */}
            <div className="w-full bg-[#111111]/40 backdrop-blur-xl border border-white/10 p-8 sm:p-12 md:p-16 rounded-[1.5rem] mb-12 shadow-2xl">
              <h3 className="text-[26px] sm:text-[30px] font-bold text-white mb-6">
                How it works:
              </h3>
              <ul className="flex flex-col gap-4">
                {community.howItWorks.map((item, idx) => (
                  <li key={idx} className="text-[18px] sm:text-[21px] text-[#e0e0e0] font-light tracking-wide">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            {community.buttonText && (
              <button className="flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-white text-white text-[16px] sm:text-[18px] btn-sweep group">
                {community.buttonText}
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}

          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunitySections;
