import React from 'react';
import CommunitiesHero from '../components/communities/CommunitiesHero';
import CommunitySections from '../components/communities/CommunitySections';

const CommunitiesPage = () => {
  return (
    <div className='bg-[#050505]'>
      <CommunitiesHero />
      <CommunitySections />
    </div>
  );
};

export default CommunitiesPage;
