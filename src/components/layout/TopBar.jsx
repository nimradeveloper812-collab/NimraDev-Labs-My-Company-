import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#0D0D14] text-white text-[11px] font-inter border-b border-[#6C3FFC]/20 py-1.5 px-3 sm:px-6 lg:px-8 relative z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Contact Info & Location */}
        <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
          <div className="flex items-center space-x-1.5 text-slate-300">
            <MapPin className="w-3 h-3 text-[#6C3FFC] shrink-0" />
            <span className="font-mono text-[10px] sm:text-[11px] text-slate-300">Software & AI Development · Pakistan</span>
          </div>

          <a href="tel:+923249590859" className="flex items-center space-x-1 text-slate-300 hover:text-[#6C3FFC] transition-colors">
            <Phone className="w-3 h-3 text-[#6C3FFC] shrink-0" />
            <span className="text-[10px] sm:text-[11px]">+92 3249590859</span>
          </a>

          <a href="mailto:nimra.developer.8122005@gmail.com" className="hidden md:flex items-center space-x-1 text-slate-300 hover:text-[#6C3FFC] transition-colors">
            <Mail className="w-3 h-3 text-[#6C3FFC] shrink-0" />
            <span className="text-[10px] sm:text-[11px]">nimra.developer.8122005@gmail.com</span>
          </a>
        </div>

        {/* Right: Operating Hours & Direct WhatsApp CTA */}
        <div className="flex items-center space-x-3">
          <div className="hidden xs:flex items-center space-x-1 text-slate-400 font-mono text-[10px] sm:text-[11px]">
            <Clock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>24/7 SLA Support</span>
          </div>

          <a
            href="https://wa.me/923249590859?text=Hello%20NimraDev%20Labs%2C%20I%20would%20like%20to%20inquire%20about%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-sora font-semibold text-[10px] sm:text-[11px] transition-all shadow-sm shrink-0"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
