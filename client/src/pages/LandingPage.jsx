import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import TruePartner from '../components/TruePartner';
import IntegratedGrowth from '../components/IntegratedGrowth';
import Visions from '../components/Visions';
import Services from '../components/Services';
import WhoWeWork from '../components/WhoWeWork';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div className="bg-[#050505] text-white min-h-screen">
            <Navbar />
            <Hero />
            <TrustedBy />
            <TruePartner />
            <IntegratedGrowth />
            <Visions />
            <Services />
            <WhoWeWork />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default LandingPage;