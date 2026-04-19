import React from 'react';
import OurSolutionsHero from '../components/OurSolutionsHero';
import BrandingStrategySection from '../components/BrandingStrategySection';
import SolutionsProjectsCarousel from '../components/Solutions/SolutionsProjectsCarousel';

const OurSolutionsPage = () => {
    return (
        <div className="bg-[#050505] text-white min-h-screen">
            <OurSolutionsHero />
            <BrandingStrategySection />
            <SolutionsProjectsCarousel />
        </div>
    );
};

export default OurSolutionsPage;
