import React, { useEffect } from 'react';
import ServicesSection from '../components/sections/ServicesSection';
import Technologies from '../components/sections/Technologies';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <ServicesSection />
      <Technologies />
    </div>
  );
}
