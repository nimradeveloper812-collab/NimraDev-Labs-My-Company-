import React from 'react';
import { Mail, MapPin, Phone, Clock, MessageSquare, ShieldCheck, Lock } from 'lucide-react';
import ContactForm from '../components/widgets/ContactForm';
import FAQAccordion from '../components/widgets/FAQAccordion';

export default function Contact() {
  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-inter bg-[#F8F9FC] text-[#0D0D14]">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
          <Lock className="w-3.5 h-3.5" />
          <span>Direct Enterprise Inquiries</span>
        </div>
        <h1 className="font-sora text-4xl sm:text-6xl font-extrabold text-[#0D0D14] tracking-tight">
          Let’s Build Something <span className="brand-text-gradient">Exceptional Together</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Whether you require Web Development, E-Commerce Development, AI Solutions & Automation, or Custom Software, our principal architects are ready to review your brief.
        </p>
      </section>

      {/* Main Grid: Form + Info Sidebar */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-[#6C3FFC]/20 space-y-6 shadow-purple-glow text-[#0D0D14]">
            <h3 className="font-sora font-bold text-2xl text-[#0D0D14]">Direct Communication</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-inter">
              We respond to all technical specifications and project briefs within 12 business hours.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F9FC] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-purple-gradient flex items-center justify-center text-white shrink-0 shadow-purple-glow">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase font-semibold">Email Us</p>
                  <p className="font-sora font-semibold text-[#0D0D14] text-sm">hello@nimradevlabs.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F9FC] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#6C3FFC] shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase font-semibold">Phone & WhatsApp</p>
                  <p className="font-sora font-semibold text-[#0D0D14] text-sm">+92 (300) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F9FC] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#6C3FFC] shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase font-semibold">Global HQ & Remote Delivery</p>
                  <p className="font-sora font-semibold text-[#0D0D14] text-sm">Lahore / Islamabad · Pakistan</p>
                  <p className="text-[11px] font-mono text-[#6C3FFC]">Serving Fortune 500 & Startups Globally</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F9FC] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#6C3FFC] shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase font-semibold">Operating Hours</p>
                  <p className="font-sora font-semibold text-[#0D0D14] text-sm">Mon - Sat: 9:00 AM - 9:00 PM PKT (Global Coverage)</p>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Callout */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-semibold text-emerald-900">Need Instant Chat Response?</span>
              </div>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sora font-bold text-xs transition-colors shrink-0 shadow-sm"
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
          <h2 className="font-sora text-3xl font-bold text-[#0D0D14]">Project Inquiry FAQs</h2>
          <p className="text-slate-600 text-sm font-inter">Instant answers to common client questions.</p>
        </div>
        <FAQAccordion />
      </section>

    </div>
  );
}
