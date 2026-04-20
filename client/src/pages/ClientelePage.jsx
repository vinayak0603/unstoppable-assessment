import React from 'react';
import ClienteleHero from '../components/clientele/ClienteleHero';
import ClienteleCategories from '../components/clientele/ClienteleCategories';
import TrustedBy from '../components/TrustedBy';
import VisionToVelocity from '../components/clientele/VisionToVelocity';

const ClientelePage = () => {
  return (
    <div className='bg-[#050505]'>
      <ClienteleHero />
      <ClienteleCategories />
      <TrustedBy />
      <VisionToVelocity />
    </div>
  );
};

export default ClientelePage;
