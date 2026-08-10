import React, { useEffect } from 'react';
import PortfolioSection from '../components/sections/PortfolioSection';
import Testimonials from '../components/sections/Testimonials';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <PortfolioSection />
      <Testimonials />
    </div>
  );
}
