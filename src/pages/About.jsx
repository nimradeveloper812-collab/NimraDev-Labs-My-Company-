import React, { useEffect } from 'react';
import AboutSection from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import ContactForm from '../components/sections/ContactForm';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <AboutSection />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
