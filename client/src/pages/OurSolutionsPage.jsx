import React from 'react';
import Navbar from '../components/Navbar';
import OurSolutionsHero from '../components/OurSolutionsHero';
import BrandingStrategySection from '../components/BrandingStrategySection';
import Footer from '../components/Footer';

const OurSolutionsPage = () => {
    return (
        <div className="bg-[#050505] text-white min-h-screen">
            <Navbar />
            <OurSolutionsHero />
            <BrandingStrategySection />
            <Footer />
        </div>
    );
};

export default OurSolutionsPage;
