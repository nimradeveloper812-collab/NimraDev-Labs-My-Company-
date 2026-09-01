import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-[#F8F9FC] min-h-screen text-[#0D0D14] font-inter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-sora font-semibold text-[#6C3FFC] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-[#E6E6E6] mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#6C3FFC]" />
            <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Legal & Compliance
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-extrabold text-[#0D0D14] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600 font-inter text-sm sm:text-base">
            Last Updated: August 2026 · NimraDev Labs (Software & AI Engineering)
          </p>
        </motion.div>

        {/* Content Card */}
        <div className="bg-white border border-[#E6E6E6] rounded-3xl p-8 sm:p-12 shadow-sm space-y-10">
          
          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">1. Introduction & Overview</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              NimraDev Labs ("we", "our", or "us") is dedicated to protecting the privacy, data security, and confidentiality of our clients, website visitors, and partners. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website (<strong>nimradevlabs.com</strong>) or use our digital engineering, AI, and software services.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate with full transparency whether working with local Pakistani enterprises or international organizations, strictly following international privacy and data protection standards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">2. Information We Collect</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We only collect information necessary to provide our high-standard development and consulting services:
            </p>
            <ul className="space-y-2 text-slate-600 text-sm sm:text-base list-disc list-inside">
              <li><strong>Contact Data:</strong> Name, business email (<code className="text-[#6C3FFC] font-mono text-xs">nimra.developer.8122005@gmail.com</code>), phone / WhatsApp number, company name.</li>
              <li><strong>Project Inquiries:</strong> Technical specifications, project budget estimates, timeline preferences, and software architecture requirements.</li>
              <li><strong>Technical Metadata:</strong> Browser type, operating system, IP address, referral sources, and anonymized interaction analytics.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">3. How We Use Your Information</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The information we gather is strictly utilized to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Deliver custom web, mobile, and AI software solutions',
                'Provide accurate project discovery quotes and estimates',
                'Communicate milestone updates and project progress',
                'Ensure system security, uptime, and fraud prevention',
                'Comply with applicable local and international legal obligations',
                'Provide ongoing technical support and maintenance'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-[#F8F9FC] border border-[#E6E6E6] p-3 rounded-xl text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#6C3FFC] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">4. Confidentiality & Non-Disclosure (NDA)</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We treat your proprietary codebase, intellectual property, business logic, and customer data with the highest degree of confidentiality. We routinely sign bilateral Non-Disclosure Agreements (NDAs) prior to project kick-off for enterprise and startup clients.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">5. Data Security & Storage</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              All data transmitted through our website is secured using industry-standard TLS/SSL encryption. We implement role-based access controls, encrypted databases, and rigorous code security practices to prevent unauthorized access or data breaches.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">6. Third-Party Services</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We do not sell, rent, or trade your personal data. We may use verified third-party cloud infrastructure (e.g. AWS, Vercel, Resend, Supabase) strictly to host and deliver our web services under strict confidentiality agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">7. Your Rights & Contact</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              You have the right to request access to, correction of, or complete deletion of any personal information held by NimraDev Labs.
            </p>
            <div className="p-5 rounded-2xl bg-[#F8F9FC] border border-[#6C3FFC]/20 text-xs sm:text-sm text-slate-700 space-y-2">
              <p><strong>Direct Inquiries:</strong> <a href="mailto:nimra.developer.8122005@gmail.com" className="text-[#6C3FFC] font-semibold hover:underline">nimra.developer.8122005@gmail.com</a></p>
              <p><strong>WhatsApp / Phone:</strong> <a href="tel:+923249590859" className="text-[#6C3FFC] font-semibold hover:underline">+92 324 9590859</a></p>
              <p><strong>Timezone / Location:</strong> Pakistan Standard Time (PKT / UTC+5) · Serving Global & Local Clients</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
