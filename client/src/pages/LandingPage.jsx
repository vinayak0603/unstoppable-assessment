import React from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import TruePartner from '../components/TruePartner';
import Visions from '../components/Visions';
import WhoWeWork from '../components/WhoWeWork';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div className="bg-[#050505] text-white min-h-screen">
            <Hero />
            <TrustedBy />
            <TruePartner />
            <Visions />
            <WhoWeWork />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default LandingPage;