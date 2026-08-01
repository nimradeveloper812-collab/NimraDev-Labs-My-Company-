import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter, FiArrowRight } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow ambient element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-sky-400 flex items-center justify-center text-white shadow-glow-sm">
                <FiCode className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                NimraDev<span className="text-brand-400">.Labs</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              NimraDev Labs is a premier software engineering agency. We design, engineer, and deploy high-impact web applications and autonomous AI solutions for businesses in Pakistan and globally.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/50 transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/50 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/50 transition-all"
                aria-label="Twitter"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-base">Navigation</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-400 transition-colors">Portfolio & Work</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-base">Our Capabilities</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Business Websites</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Custom Web Apps (SaaS)</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">AI Automation & Agents</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Website Redesign</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Performance Tuning</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-base">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <FiMail className="w-4 h-4 text-brand-400 mt-1 shrink-0" />
                <span>hello@nimradevlabs.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="w-4 h-4 text-brand-400 mt-1 shrink-0" />
                <span>+92 (300) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-brand-400 mt-1 shrink-0" />
                <span>Lahore / Islamabad, Pakistan (Global Remote)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NimraDev Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
