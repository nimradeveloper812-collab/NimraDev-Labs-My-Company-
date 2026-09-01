import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = '923249590859';
  const defaultMessage = 'Hello NimraDev Labs! I would like to discuss a project and get a free consultation.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Interactive Tooltip Card */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-3 bg-white text-[#0D0D14] p-3.5 rounded-2xl shadow-xl border border-slate-200/90 max-w-[260px] relative font-inter"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-sora font-bold text-xs text-[#0D0D14]">
                NimraDev Labs Support
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              Need a quick quote or project consultation? Chat with our lead engineer on WhatsApp!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white rounded-full shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.6)] transform hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Continuous soft pulse ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-30 group-hover:animate-ping pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 fill-white/10 stroke-[2]" />
      </a>
    </div>
  );
}
