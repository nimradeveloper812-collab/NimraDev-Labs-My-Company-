import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import ServicesSection from '../components/sections/ServicesSection';
import SoftwareProducts from '../components/widgets/SoftwareProducts';
import PortfolioSection from '../components/sections/PortfolioSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import Technologies from '../components/sections/Technologies';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import ContactForm from '../components/sections/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <SoftwareProducts />
      <PortfolioSection />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </>
  );
}
