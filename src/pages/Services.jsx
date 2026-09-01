import React, { useEffect } from 'react';
import ServicesSection from '../components/sections/ServicesSection';
import SoftwareProducts from '../components/widgets/SoftwareProducts';
import Technologies from '../components/sections/Technologies';
import Process from '../components/sections/Process';
import ContactForm from '../components/sections/ContactForm';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <ServicesSection />
      <SoftwareProducts />
      <Technologies />
      <Process />
      <ContactForm />
    </div>
  );
}
