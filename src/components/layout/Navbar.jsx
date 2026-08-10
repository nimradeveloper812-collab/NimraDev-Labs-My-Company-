import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoMark from '../common/LogoMark';
import TopBar from './TopBar';

const navLinks = [
  { name: 'Home', path: '/', sectionId: 'home' },
  { name: 'About', path: '/about', sectionId: 'about' },
  { name: 'Services', path: '/services', sectionId: 'services' },
  { name: 'Portfolio', path: '/portfolio', sectionId: 'portfolio' },
  { name: 'Process', path: '/#process', sectionId: 'process' },
  { name: 'Contact', path: '/contact', sectionId: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy logic for smooth section highlighting on scroll
      if (location.pathname === '/') {
        const sectionIds = ['home', 'about', 'services', 'portfolio', 'process', 'contact'];
        const scrollPosition = window.scrollY + 220;

        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const section = document.getElementById(sectionIds[i]);
          if (section) {
            const sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop) {
              setActiveSection(sectionIds[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, link) => {
    if (location.pathname === '/') {
      const targetElement = document.getElementById(link.sectionId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(link.sectionId);
      }
    }
  };

  const getIsActive = (link) => {
    if (location.pathname === '/') {
      return activeSection === link.sectionId;
    }
    return location.pathname === link.path;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <TopBar />
      <header
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-[#6C3FFC]/15'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-200/60'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <LogoMark className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-sora font-extrabold text-xl text-[#0D0D14] tracking-tight leading-tight">
                NimraDev<span className="text-[#6C3FFC]"> Labs</span>
              </span>
              <span className="text-[10px] font-mono text-[#6C3FFC] tracking-widest uppercase font-semibold -mt-0.5">
                Software & AI Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Animated Purple Scroll Spy Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-[#6C3FFC]/15 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = getIsActive(link);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative font-inter ${
                    isActive
                      ? 'text-[#6C3FFC] font-semibold'
                      : 'text-slate-600 hover:text-[#6C3FFC]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 rounded-full"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-sora font-semibold text-xs uppercase tracking-wider text-white bg-[#6C3FFC] hover:bg-[#8B5CF6] shadow-sm transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-[#6C3FFC]/20 text-[#0D0D14] hover:text-[#6C3FFC] focus:outline-none shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-[#6C3FFC]/15 overflow-hidden shadow-lg"
          >
            <div className="px-6 py-6 space-y-3 font-inter">
              {navLinks.map((link) => {
                const isActive = getIsActive(link);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#6C3FFC]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-sora font-semibold text-center text-white bg-[#6C3FFC] hover:bg-[#8B5CF6] shadow-sm"
                >
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </div>
  );
}
