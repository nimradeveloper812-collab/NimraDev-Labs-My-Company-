import React, { useEffect } from 'react';
import ContactForm from '../components/sections/ContactForm';
import FAQ from '../components/sections/FAQ';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <ContactForm />
      <FAQ />
    </div>
  );
}
