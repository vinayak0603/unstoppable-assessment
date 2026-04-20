import React from 'react';
import CareerHero from '../components/career/CareerHero';
import CareerLife from '../components/career/CareerLife';
import CareerCTA from '../components/career/CareerCTA';

const CareerPage = () => {
    return (
        <div className="career-page">
            <CareerHero />
            <CareerLife />
            <CareerCTA />
        </div>
    );
};

export default CareerPage;

