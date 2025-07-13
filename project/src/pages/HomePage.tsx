import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import ArtistSpotlight from '../components/ArtistSpotlight';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
};

export default HomePage;