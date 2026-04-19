import React, { useState } from 'react';
import sol1 from '../assets/ourSolution/sol1.jpg';
import sol2 from '../assets/ourSolution/sol2.jpg';
import sol3 from '../assets/ourSolution/sol3.png';
import sol4 from '../assets/ourSolution/sol4.jpg';
import sol5 from '../assets/ourSolution/sol5.jpg';
import sol6 from '../assets/ourSolution/sol6.jpg';
import sol7 from '../assets/ourSolution/sol7.png';
import sol8 from '../assets/ourSolution/sol8.png';
import sol9 from '../assets/ourSolution/sol9.png';
import sol10 from '../assets/ourSolution/sol10.png';
import sol11 from '../assets/ourSolution/sol11.jpg';


const solutionsData = [
    {
        id: "01",
        titleLines: [
            [
                { text: "Brand" },
                { text: "ing", isCursive: true },
                { text: ", Strategy & Identity" }
            ]
        ],
        description: "Define the brand's foundation — its story, voice, positioning, and identity",
        points: [
            { title: "Brand Discovery & Audit", text: "– Market analysis, competitor mapping, consumer insights" },
            { title: "Brand Strategy", text: "– Positioning, differentiation, value proposition, and archetype alignment" },
            { title: "Brand Naming & Nomenclature", text: "– Name creation, trademark check, and rationale" }
        ],
        morePoints: [
            { title: "Visual Identity Systems", text: "– Logo design, typography, color palettes, and brand guidelines" },
            { title: "Brand Messaging", text: "– Tone of voice, core messaging pillars, taglines, and brand story" },
            { title: "Brand Application", text: "– Stationery, digital assets, print collateral, and signage mockups" },
            { title: "Digital Strategy", text: "– Omnichannel integration, campaign planning, and execution" }
        ],
        image: sol1
    },
    {
        id: "02",
        titleLines: [
            [
                { text: "Communicat" },
                { text: "ion", isCursive: true }
            ],
            [
                { text: "Development" }
            ]
        ],
        description: "Build the brand's voice and narrative across every touchpoint.",
        points: [
            { title: "Communication Strategy", text: "– Defining core messaging frameworks for campaigns" },
            { title: "Creative Conceptualization", text: "– Campaign ideas, narrative themes, and visual hooks" },
            { title: "Messaging Architecture", text: "– Key messages by audience, product, and platform" }
        ],
        morePoints: [],
        image: sol2
    },
    {
        id: "03",
        titleLines: [
            [
                { text: "Creative & Des" },
                { text: "ign", isCursive: true }
            ],
            [
                { text: "Communication" }
            ]
        ],
        description: "Translate brand essence into visual storytelling that sticks.",
        points: [
            { title: "Campaign Design", text: "– ATL/BTL visual identity and campaign look" },
            { title: "Marketing Collateral Design", text: "– Brochures, pitch decks, sales kits, print ads" },
            { title: "Packaging Design", text: "– Structure, branding, material, and mockups" }
        ],
        morePoints: [],
        image: sol3
    },
    {
        id: "04",
        titleLines: [
            [
                { text: "Digital & Performance" }
            ],
            [
                { text: "Market" },
                { text: "ing", isCursive: true }
            ]
        ],
        description: "Drive measurable visibility, traffic, and conversions.",
        points: [
            { title: "Performance Strategy & Media Planning", text: "– Platform mix, funnel strategy, audience targeting" },
            { title: "Paid Media Execution", text: "– Meta Ads, Google Ads, LinkedIn, YouTube, Display & Retargeting" },
            { title: "Conversion Optimization", text: "– Landing page strategy, CRO analysis, heatmaps" }
        ],
        morePoints: [],
        image: sol4
    },
    {
        id: "05",
        titleLines: [
            [
                { text: "Content, Social Media" }
            ],
            [
                { text: "& Influencer Market" },
                { text: "ing", isCursive: true }
            ]
        ],
        description: "Build engagement, consistency, and community",
        points: [
            { title: "Social Media Strategy & Calendar Planning", text: "– Brand tonality, content buckets, KPI definition" },
            { title: "Content Creation", text: "– Static posts, reels, carousels, blogs, infographics" },
            { title: "Community Management", text: "– Response handling, ORM, engagement tracking" }
        ],
        morePoints: [],
        image: sol5
    },
    {
        id: "06",
        titleLines: [
            [
                { text: "Website, App &" }
            ],
            [
                { text: "Technology Develop" },
                { text: "ment", isCursive: true }
            ]
        ],
        description: "Build digital products that convert brand engagement into experience.",
        points: [
            { title: "UI/UX Design", text: "– Wireframes, user flow, interface design" },
            { title: "Website Design & Development", text: "– Corporate sites, product sites, microsites" },
            { title: "E-commerce Development", text: "– Shopify, WooCommerce, Magento, custom builds" }
        ],
        morePoints: [],
        image: sol6
    },
    {
        id: "07",
        titleLines: [
            [
                { text: "Video Product" },
                { text: "ion", isCursive: true }
            ],
            [
                { text: "& Motion Design" }
            ]
        ],
        description: "Turn brand ideas into cinematic storytelling",
        points: [
            { title: "Brand Films & Ad Films", text: "– Concept, script, shoot & edit" },
            { title: "Explainer & Product Videos", text: "– Storyboarding and animation" },
            { title: "Logo Revealer & Motion Graphics", text: "– Animated intros and transitions" }
        ],
        morePoints: [],
        image: sol7
    },
    {
        id: "08",
        titleLines: [
            [
                { text: "Experiential &" }
            ],
            [
                { text: "Event Market" },
                { text: "ing", isCursive: true }
            ]
        ],
        description: "Transform brand stories into immersive real-world experiences.",
        points: [
            { title: "Brand Launches & Events", text: "– Concept, design, planning, execution" },
            { title: "Retail Activation & Pop-Ups", text: "– On-ground engagement strategies" },
            { title: "Exhibition Design & Stall Fabrication", text: "– Creative theme, layout, branding" }
        ],
        morePoints: [],
        image: sol8
    },
    {
        id: "09",
        titleLines: [
            [
                { text: "CRM, Automat" },
                { text: "ion", isCursive: true },
                { text: " & Lead" }
            ],
            [
                { text: "Generation" }
            ]
        ],
        description: "Build scalable systems that automate engagement and growth.",
        points: [
            { title: "Lead Funnel Design", text: "– Awareness to conversion journey mapping" },
            { title: "Email, SMS & WhatsApp Flows", text: "– Trigger-based communication" },
            { title: "Marketing Automation Setup", text: "– HubSpot, Zoho, Mailchimp, etc." }
        ],
        morePoints: [],
        image: sol9
    },
    {
        id: "10",
        titleLines: [
            [
                { text: "Strategy Consult" },
                { text: "ing", isCursive: true }
            ],
            [
                { text: "& Growth Advisory" }
            ]
        ],
        description: "Help founders and CMOs align business growth with brand direction.",
        points: [
            { title: "Brand Discovery & Audit", text: "– Market analysis, competitor mapping, consumer insights" },
            { title: "Category Entry Strategy", text: "– Launch plans for new markets or verticals" },
            { title: "Media & Budget Strategy", text: "– Allocation across brand + performance + retention" }
        ],
        morePoints: [],
        image: sol10
    },
    {
        id: "11",
        titleLines: [
            [
                { text: "PR & Media Relat" },
                { text: "ions", isCursive: true }
            ]
        ],
        description: "Build brand credibility, visibility, and influence across traditional and digital media.",
        points: [
            { 
                title: "Media Strategy & Planning", 
                subPoints: [
                    "Target journalist/media mapping by industry, region, and beat",
                    "PR campaign calendar aligned with brand launches, events, or product cycles"
                ] 
            },
            { 
                title: "Press Relations & Outreach", 
                subPoints: [
                    "Press release drafting, distribution, and follow-ups",
                    "Building and maintaining journalist/media relationships"
                ] 
            }
        ],
        morePoints: [],
        image: sol11
    }
];

const SolutionCard = ({ data }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="max-w-[96rem] w-full mx-auto rounded-[2.5rem] border border-white/20 bg-[#080808] relative flex flex-col lg:flex-row overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">

            {/* Left Content Column */}
            <div className="w-full lg:w-[65%] p-6 sm:p-12 lg:p-[4.5rem] xl:p-[5.5rem] relative flex flex-col justify-center overflow-hidden lg:overflow-visible">

                {/* SVG Huge Number - Key Feature */}
                <svg
                    className="absolute top-[-1rem] left-0 sm:top-2 sm:left-4 lg:top-[-5rem] lg:left-[2rem] w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] pointer-events-none select-none z-0"
                    viewBox="0 0 350 250"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <linearGradient id={`strokeGrad-${data.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
                            <stop offset="60%" stopColor="rgba(255, 255, 255, 0)" />
                        </linearGradient>
                        <linearGradient id={`fillGrad-${data.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.06)" />
                            <stop offset="80%" stopColor="rgba(0, 0, 0, 0)" />
                        </linearGradient>
                    </defs>
                    <text
                        x="20"
                        y="180"
                        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
                        fontSize="210"
                        fontWeight="600"
                        letterSpacing="-0.04em"
                        fill={`url(#fillGrad-${data.id})`}
                        stroke={`url(#strokeGrad-${data.id})`}
                        strokeWidth="1.5"
                    >
                        {data.id}
                    </text>
                </svg>

                <div className="relative z-10 w-full mt-24 sm:mt-32 lg:mt-20 xl:mt-24">
                    <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[3.4rem] font-bold text-white tracking-tight leading-[1] mb-6 flex flex-col items-start lg:gap-1">
                        {data.titleLines.map((line, lineIndex) => (
                            <div key={lineIndex} className="flex flex-wrap lg:flex-nowrap items-baseline whitespace-normal lg:whitespace-nowrap">
                                {line.map((segment, segIndex) => (
                                    segment.isCursive ? (
                                        <span key={segIndex} className="text-[#da0000] italic font-medium whitespace-pre-wrap lg:whitespace-pre" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            {segment.text}
                                        </span>
                                    ) : (
                                        <span key={segIndex} className="font-bold text-white whitespace-pre-wrap lg:whitespace-pre">
                                            {segment.text}
                                        </span>
                                    )
                                ))}
                            </div>
                        ))}
                    </h2>

                    <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.5rem] text-[#dedede] font-medium leading-[1.4] mb-12 max-w-[95%] tracking-wide">
                        {data.description}
                    </p>

                    {/* Mobile Image (Visible only on < lg) */}
                    <div className="lg:hidden w-[95%] sm:w-[90%] h-[250px] sm:h-[400px] rounded-[1.5rem] overflow-hidden relative shadow-2xl mb-12">
                        <img
                            src={data.image}
                            alt={`${data.id} Visual Mobile`}
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>

                    <div className="w-[90%] h-[1px] bg-white/[0.08] mb-10"></div>

                    <ul className="flex flex-col gap-7 w-full max-w-[95%]">
                        {data.points.map((point, index) => (
                            <li key={index} className="flex flex-col gap-2">
                                <div className="flex items-start gap-4">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#da0000] mt-[0.6rem] shrink-0"></div>
                                    <p className="text-[16px] sm:text-[18px] text-[#a8a8a8] leading-[1.6] font-normal tracking-wide">
                                        <span className="text-[#dbdbdb]">{point.title}</span>
                                        {point.text && ` ${point.text}`}
                                    </p>
                                </div>
                                {point.subPoints && point.subPoints.length > 0 && (
                                    <ul className="flex flex-col gap-2 ml-[1.75rem] mt-1 list-disc text-[#a8a8a8] marker:text-[#a8a8a8]">
                                        {point.subPoints.map((sub, subIdx) => (
                                            <li key={subIdx} className="text-[15px] sm:text-[16px] leading-[1.5] font-light tracking-wide pl-1">
                                                {sub}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}

                        {showMore && data.morePoints.map((point, index) => (
                            <li key={`more-${index}`} className="flex flex-col gap-2">
                                <div className="flex items-start gap-4">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#da0000] mt-[0.6rem] shrink-0"></div>
                                    <p className="text-[16px] sm:text-[18px] text-[#a8a8a8] leading-[1.6] font-normal tracking-wide">
                                        <span className="text-[#dbdbdb]">{point.title}</span>
                                        {point.text && ` ${point.text}`}
                                    </p>
                                </div>
                                {point.subPoints && point.subPoints.length > 0 && (
                                    <ul className="flex flex-col gap-2 ml-[1.75rem] mt-1 list-disc text-[#a8a8a8] marker:text-[#a8a8a8]">
                                        {point.subPoints.map((sub, subIdx) => (
                                            <li key={subIdx} className="text-[15px] sm:text-[16px] leading-[1.5] font-light tracking-wide pl-1">
                                                {sub}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {data.morePoints.length > 0 && (
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="mt-12 inline-block text-white text-[16px] font-bold underline underline-offset-[8px] decoration-white/90 hover:text-gray-300 transition-colors tracking-wide bg-transparent border-none cursor-pointer outline-none text-left"
                        >
                            {showMore ? 'see less' : 'see more'}
                        </button>
                    )}
                </div>
            </div>

            {/* Right Image Column */}
            <div className="hidden lg:flex w-full lg:w-[35%] p-6 sm:p-10 lg:py-12 lg:pr-8 xl:pr-10 lg:pl-0 flex-col justify-start">
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-[1.5rem] overflow-hidden relative shadow-2xl translate-x-2 shrink-0">
                    <img
                        src={data.image}
                        alt={`${data.id} Visual`}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                </div>
            </div>

        </div>
    );
};

const BrandingStrategySection = () => {
    return (
        <section className="px-4 md:px-10 lg:px-9 xl:px-16 py-20 bg-[#000000] font-sans flex flex-col gap-24 lg:gap-32">
            {solutionsData.map((data) => (
                <SolutionCard key={data.id} data={data} />
            ))}
        </section>
    );
};

export default BrandingStrategySection;
