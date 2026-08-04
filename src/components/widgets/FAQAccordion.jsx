import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Why should Fortune 500 companies & startups choose NimraDev Labs?',
    a: 'We eliminate technical debt by building software with enterprise precision. Unlike typical dev shops, we combine Silicon Valley architectural standards with specialized AI solutions, delivering bulletproof security, 99.99% uptime SLAs, and sub-second response times.'
  },
  {
    q: 'Can NimraDev Labs integrate custom AI agents into our existing software stack?',
    a: 'Yes! Our AI team builds and deploys production-ready AI solutions—including OpenAI models, autonomous agent workflows, enterprise RAG search engines, and business process automation directly integrated into your existing CRM, ERP, or web platform.'
  },
  {
    q: 'What is your typical software engineering timeline?',
    a: 'High-converting business websites deliver within 10 to 14 days. Comprehensive E-Commerce engines, AI Solutions, and enterprise Custom Software take 3 to 8 weeks depending on scope. We work in weekly sprints with full staging environments and live client demos.'
  },
  {
    q: 'Do you provide full post-launch support and SLA management?',
    a: 'Yes. Every project includes 30 days of complimentary hyper-care support, followed by optional enterprise retainer plans for 24/7 uptime monitoring, security patching, API maintenance, and feature scaling.'
  },
  {
    q: 'How do we get started on a project with NimraDev Labs?',
    a: 'Simply click "Book a Discovery Call" or submit your project details via our contact form. Our senior engineering architect will review your technical requirements and respond within 12 business hours with an actionable roadmap.'
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-2xl bg-white border border-[#6C3FFC]/15 shadow-sm overflow-hidden transition-all duration-300 hover:border-[#6C3FFC]/40"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-sora font-semibold text-[#0D0D14] text-sm sm:text-base focus:outline-none"
            >
              <span className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#6C3FFC] shrink-0" />
                {faq.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#6C3FFC] shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#6C3FFC]' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-5 sm:px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 font-inter"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

