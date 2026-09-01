import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, CheckCircle2, Radio } from 'lucide-react';
import LogoMark from '../common/LogoMark';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribing(true);

    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    } catch (error) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-[#F8F9FC] border-t border-slate-200/80 pt-10 pb-6 relative overflow-hidden text-[#0D0D14] font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-8 border-b border-slate-200">
          
          {/* Brand Col (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <Link to="/" className="flex items-center gap-2.5">
              <LogoMark className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="font-sora font-extrabold text-base text-[#0D0D14] tracking-tight">
                  NimraDev<span className="text-[#6C3FFC]"> Labs</span>
                </span>
                <span className="text-[9px] font-mono text-[#6C3FFC] tracking-widest uppercase font-semibold">
                  Software & AI Engineering
                </span>
              </div>
            </Link>
            
            <p className="text-slate-600 text-xs leading-relaxed max-w-xs font-inter">
              We engineer modern websites, turnkey ERP/POS software, mobile apps, and intelligent AI automations to help businesses scale.
            </p>

            {/* Newsletter */}
            <div className="pt-1">
              {subscribed ? (
                <div className="flex items-center space-x-1.5 text-[11px] text-emerald-600 font-mono py-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed to NimraDev Labs!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center max-w-xs">
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-l-lg text-xs text-[#0D0D14] placeholder-slate-400 focus:outline-none focus:border-[#6C3FFC]"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="px-3 py-1.5 bg-[#6C3FFC] hover:bg-[#8B5CF6] text-white rounded-r-lg text-xs font-sora font-semibold transition-colors disabled:opacity-70 text-center"
                  >
                    {isSubscribing ? '...' : 'Join'}
                  </button>
                </form>
              )}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#6C3FFC] hover:border-[#6C3FFC]/50 transition-all shadow-xs"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#6C3FFC] hover:border-[#6C3FFC]/50 transition-all shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#6C3FFC] hover:border-[#6C3FFC]/50 transition-all shadow-xs"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h3 className="font-sora font-bold text-[#0D0D14] text-xs">Navigation</h3>
            <ul className="space-y-1.5 text-[11px] text-slate-600 font-inter">
              <li><Link to="/" className="hover:text-[#6C3FFC] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#6C3FFC] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">Services</Link></li>
              <li><a href="/#products" className="hover:text-[#6C3FFC] transition-colors">Products</a></li>
              <li><Link to="/portfolio" className="hover:text-[#6C3FFC] transition-colors">Portfolio</Link></li>
              <li><a href="/#process" className="hover:text-[#6C3FFC] transition-colors">Process</a></li>
              <li><Link to="/contact" className="hover:text-[#6C3FFC] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Core Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h3 className="font-sora font-bold text-[#0D0D14] text-xs">Our Services</h3>
            <ul className="space-y-1.5 text-[11px] text-slate-600 font-inter">
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">Web Design & Development</Link></li>
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">E-Commerce Storefronts</Link></li>
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">AI Solutions & Automation</Link></li>
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">Custom Software & CRM</Link></li>
              <li><Link to="/services" className="hover:text-[#6C3FFC] transition-colors">Mobile App Development</Link></li>
            </ul>
          </div>

          {/* Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h3 className="font-sora font-bold text-[#0D0D14] text-xs">Direct Contact</h3>
            <ul className="space-y-2 text-[11px] text-slate-600 font-inter">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#6C3FFC] mt-0.5 shrink-0" />
                <span>Pakistan · Global Software Engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#6C3FFC] mt-0.5 shrink-0" />
                <a href="mailto:nimra.developer.8122005@gmail.com" className="hover:text-[#6C3FFC] font-semibold break-all">
                  nimra.developer.8122005@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#6C3FFC] mt-0.5 shrink-0" />
                <a href="tel:+923249590859" className="hover:text-[#6C3FFC] font-medium">+92 324 9590859</a>
              </li>
              <li className="pt-1">
                <a
                  href="https://wa.me/923249590859?text=Hello%20NimraDev%20Labs%2C%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono hover:bg-emerald-100 transition-colors shadow-xs"
                >
                  <Radio className="w-2.5 h-2.5 animate-pulse text-emerald-500" />
                  <span>WhatsApp: Direct Chat ↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} NimraDev Labs. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy" className="hover:text-[#6C3FFC] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#6C3FFC] transition-colors">Terms of Service</Link>
            <Link to="/social-preview" className="hover:text-[#6C3FFC] text-[#6C3FFC] font-semibold transition-colors">Social Share</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
