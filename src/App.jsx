import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SocialPreviewPage from './pages/SocialPreviewPage';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FC] text-[#0D0D14] font-inter selection:bg-[#6C3FFC] selection:text-white relative">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/social-preview" element={<SocialPreviewPage />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
