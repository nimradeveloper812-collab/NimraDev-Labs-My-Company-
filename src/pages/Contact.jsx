import React from 'react';
import { FiMail, FiMapPin, FiPhone, FiClock, FiMessageCircle, FiGlobe } from 'react-icons/fi';
import ContactForm from '../components/widgets/ContactForm';
import FAQAccordion from '../components/widgets/FAQAccordion';

export default function Contact() {
  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/30">
          Direct Technical Inquiries
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Let’s Build Something <span className="brand-gradient-text">Exceptional Together</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Whether you need a full web application build, custom AI automation, or website redesign, our lead engineers are ready to assist.
        </p>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6">
            <h3 className="font-heading font-bold text-2xl text-white">Direct Communication</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We respond to all technical and commercial inquiries within 12 hours.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Email Us</p>
                  <p className="font-heading font-medium text-white text-sm">hello@nimradevlabs.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Phone & WhatsApp</p>
                  <p className="font-heading font-medium text-white text-sm">+92 (300) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Location</p>
                  <p className="font-heading font-medium text-white text-sm">Lahore / Islamabad, Pakistan</p>
                  <p className="text-[11px] text-slate-400">Serving Clients Globally</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <FiClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Operating Hours</p>
                  <p className="font-heading font-medium text-white text-sm">Mon - Sat: 9:00 AM - 9:00 PM PKT</p>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Callout */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FiMessageCircle className="w-6 h-6 text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-300">Need Instant Chat Response?</span>
              </div>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-heading font-bold text-xs transition-colors shrink-0"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Component */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </section>

      {/* FAQ Section */}
      <section className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-white">Project Inquiry FAQs</h2>
          <p className="text-slate-400 text-sm">Common questions answered for instant clarity.</p>
        </div>
        <FAQAccordion />
      </section>

    </div>
  );
}
