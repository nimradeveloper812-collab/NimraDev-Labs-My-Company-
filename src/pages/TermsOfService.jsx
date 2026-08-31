import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Shield, Award, Terminal, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
            <FileCheck className="w-4 h-4 text-[#6C3FFC]" />
            <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Terms & Agreements
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-extrabold text-[#0D0D14] tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-600 font-inter text-sm sm:text-base">
            Last Updated: August 2026 · NimraDev Labs (Software & AI Engineering)
          </p>
        </motion.div>

        {/* Content Card */}
        <div className="bg-white border border-[#E6E6E6] rounded-3xl p-8 sm:p-12 shadow-sm space-y-10">
          
          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">1. Agreement to Terms</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              By accessing our website (<strong>nimradevlabs.com</strong>) or engaging NimraDev Labs for software engineering, web development, AI integration, or technical consulting services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">2. Scope of Services & Engagements</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              NimraDev Labs delivers specialized digital engineering solutions including but not limited to:
            </p>
            <ul className="space-y-2 text-slate-600 text-sm sm:text-base list-disc list-inside">
              <li>High-performance web applications (React, Next.js, Node.js, Tailwind CSS)</li>
              <li>E-Commerce platforms and digital storefronts with integrated payment gateways</li>
              <li>AI solutions, automated workflows, and custom LLM integrations</li>
              <li>Custom enterprise dashboards, SaaS software architectures, and API development</li>
            </ul>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              All project deliverables, timelines, milestones, and payment terms will be clearly established in a formal Statement of Work (SOW) or Project Agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">3. Intellectual Property Rights</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Upon final milestone completion and settlement of full agreed project fees, <strong>100% full ownership of custom code, design assets, and intellectual property</strong> developed specifically for your project is transferred directly to the client.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              NimraDev Labs retains the right to use non-confidential screenshots and summaries of the completed work for portfolio demonstration purposes unless an explicit White-Label / NDA clause is executed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">4. Client Responsibilities & Approvals</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To ensure on-time delivery (typically 2-3 weeks for standard MVP/web projects), clients agree to provide required assets (branding, copy, third-party API credentials) in a timely manner and review milestone stages promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">5. Warranty & Post-Launch Support</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We stand behind our code quality. Every project includes a standard <strong>30-day bug-fix and stability warranty</strong> following official deployment at no additional cost. Ongoing SLAs and maintenance agreements are available on monthly or retainer arrangements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">6. Limitation of Liability</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In no event shall NimraDev Labs be liable for indirect, incidental, special, consequential, or punitive damages resulting from third-party server downtime, payment processor outages, or unauthorized third-party access beyond reasonable security safeguards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sora font-bold text-[#0D0D14]">7. Contact & Dispute Resolution</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We pride ourselves on transparent, collaborative communication. In case of questions or service inquiries:
            </p>
            <div className="p-5 rounded-2xl bg-[#F8F9FC] border border-[#6C3FFC]/20 text-xs sm:text-sm text-slate-700 space-y-2">
              <p><strong>Official Inquiries:</strong> <a href="mailto:hello@nimradevlabs.com" className="text-[#6C3FFC] font-semibold hover:underline">hello@nimradevlabs.com</a></p>
              <p><strong>WhatsApp Support:</strong> <a href="tel:+923249590859" className="text-[#6C3FFC] font-semibold hover:underline">+92 324 9590859</a></p>
              <p><strong>Operating Headquarters:</strong> Pakistan (PKT UTC+5) · Serving Global Startups & Local Enterprises</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
