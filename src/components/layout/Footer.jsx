import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ArrowRight, CheckCircle2, ShieldCheck, Radio, MessageSquare } from 'lucide-react';
import LogoMark from '../common/LogoMark';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    setErrorMsg(null);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    } catch (error) {
      console.error(error);
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-[#F8F9FC] border-t border-slate-200/80 pt-16 pb-12 relative overflow-hidden text-[#0D0D14] font-inter">
      {/* Background glow ambient element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-[#6C3FFC]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Col (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <LogoMark className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-sora font-extrabold text-xl text-[#0D0D14] tracking-tight">
                  NimraDev<span className="text-[#6C3FFC]"> Labs</span>
                </span>
                <span className="text-[10px] font-mono text-[#6C3FFC] tracking-widest uppercase font-semibold">
                  Software & AI Engineering
                </span>
              </div>
            </Link>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm font-inter">
              We engineer modern websites, turnkey enterprise ERP/POS software, mobile applications, and intelligent AI automations to help businesses scale with speed and efficiency.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C3FFC] mb-2">
                Subscribe to Tech & Software Updates
              </p>
              {subscribed ? (
                <div className="flex items-center space-x-2 text-xs text-emerald-600 font-mono py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed to NimraDev Labs Briefing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center max-w-sm">
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-l-xl text-xs text-[#0D0D14] placeholder-slate-400 focus:outline-none focus:border-[#6C3FFC] shadow-sm"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="px-4 py-2.5 bg-[#6C3FFC] hover:bg-[#8B5CF6] text-white rounded-r-xl text-xs font-sora font-semibold transition-colors shadow-purple-glow disabled:opacity-70 disabled:cursor-not-allowed w-28 text-center"
                  >
                    {isSubscribing ? 'Wait...' : 'Subscribe'}
                  </button>
                </form>
              )}
              {errorMsg && (
                <p className="text-red-500 text-[10px] font-inter mt-1">{errorMsg}</p>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#6C3FFC] hover:border-[#6C3FFC]/50 transition-all shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#6C3FFC] hover:border-[#6C3FFC]/50 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#6C3FFC] hover:border-[#6C3FFC]/50 transition-all shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sora font-bold text-[#0D0D14] text-sm">Quick Links</h3>
            <ul className="space-y-2 text-xs text-slate-600 font-inter">
              <li><Link to="/" className="hover:text-[#6C3FFC] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#6C3FFC] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">Services</Link></li>
              <li><a href="/#products" className="hover:text-[#6C3FFC] transition-colors">Software Products</a></li>
              <li><Link to="/portfolio" className="hover:text-[#6C3FFC] transition-colors">Portfolio & Work</Link></li>
              <li><a href="/#process" className="hover:text-[#6C3FFC] transition-colors">Our Process</a></li>
              <li><Link to="/contact" className="hover:text-[#6C3FFC] transition-colors">Contact & Quote</Link></li>
            </ul>
          </div>

          {/* Core Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sora font-bold text-[#0D0D14] text-sm">Our Services</h3>
            <ul className="space-y-2 text-xs text-slate-600 font-inter">
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">Web Design & Development</Link></li>
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">E-Commerce Storefronts</Link></li>
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">AI Solutions & Automation</Link></li>
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">Custom Software & CRM</Link></li>
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">UI/UX & Graphic Design</Link></li>
            </ul>
          </div>

          {/* Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sora font-bold text-[#0D0D14] text-sm">Direct Contact</h3>
            <ul className="space-y-2.5 text-xs text-slate-600 font-inter">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6C3FFC] mt-0.5 shrink-0" />
                <span>Pakistan · Global Software Engineering</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#6C3FFC] mt-0.5 shrink-0" />
                <a href="mailto:nimra.developer.8122005@gmail.com" className="hover:text-[#6C3FFC] font-semibold break-all">
                  nimra.developer.8122005@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#6C3FFC] mt-0.5 shrink-0" />
                <a href="tel:+923249590859" className="hover:text-[#6C3FFC] font-medium">+92 324 9590859</a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/923249590859?text=Hello%20NimraDev%20Labs%2C%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono hover:bg-emerald-100 transition-colors shadow-sm"
                >
                  <Radio className="w-3 h-3 animate-pulse text-emerald-500" />
                  <span>WhatsApp: Direct Chat ↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} NimraDev Labs. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-[#6C3FFC] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#6C3FFC] transition-colors">Terms of Service</Link>
            <Link to="/social-preview" className="hover:text-[#6C3FFC] text-[#6C3FFC] font-semibold transition-colors">Social Share Preview</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
