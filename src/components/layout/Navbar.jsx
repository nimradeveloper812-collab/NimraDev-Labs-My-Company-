import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md py-3.5 shadow-sm border-b border-[#6C3FFC]/15'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-purple-gradient flex items-center justify-center text-white shadow-purple-glow group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-sora font-extrabold text-xl text-[#0D0D14] tracking-tight leading-tight">
                NimraDev<span className="text-[#6C3FFC]"> Labs</span>
              </span>
              <span className="text-[10px] font-mono text-[#6C3FFC] tracking-widest uppercase font-semibold -mt-0.5">
                Software & AI Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-[#6C3FFC]/15 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
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

          {/* Header Action Button (No Theme Toggle) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-sora font-semibold text-xs uppercase tracking-wider text-white bg-purple-gradient hover:opacity-90 shadow-purple-glow transition-all duration-300 overflow-hidden"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
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
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-sora font-semibold text-center text-white bg-purple-gradient shadow-purple-glow"
                >
                  <span>Book Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
