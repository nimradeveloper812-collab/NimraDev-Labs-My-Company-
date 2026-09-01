import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: 'What is your software development process?',
    answer: 'We follow a 6-step agile process: Discovery, UI/UX Architecture, Sprint Coding, QA & Security Testing, Cloud Deployment, and 24/7 SLA Support.',
  },
  {
    question: 'Do you offer e-commerce & local payment integration?',
    answer: 'Yes, we build fast e-commerce stores with product catalogs, shopping carts, and local/global payment gateways (Stripe, JazzCash, EasyPaisa, Bank Transfer).',
  },
  {
    question: 'How do your AI solutions work?',
    answer: 'We integrate OpenAI & custom LLM APIs for intelligent chatbots, PDF data extraction, and automated business workflows that reduce manual labor.',
  },
  {
    question: 'Can you build custom ERP or POS software for my company?',
    answer: 'Absolutely. We specialize in custom dashboards, retail POS, school management ERP, and healthcare management portals with custom branding.',
  },
  {
    question: 'What are your pricing & milestone structures?',
    answer: 'We offer transparent, milestone-based pricing with zero hidden fees. Invoices are split across sprint milestones after demo signoffs.',
  },
  {
    question: 'Do you provide ongoing support & maintenance?',
    answer: 'Yes, all our deliveries include a dedicated 30-day warranty, with 24/7 ongoing SLA maintenance plans available.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-14 bg-white relative overflow-hidden font-inter text-[#0D0D14] border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Compact) */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F8F9FC] border border-slate-200 mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6C3FFC]" />
            <span className="text-[10px] font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Common Questions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sora font-bold text-[#0D0D14] mb-1">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Clear answers about our development, pricing, and timelines.
          </p>
        </div>

        {/* Compact Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F8F9FC] border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-[#6C3FFC]/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left focus:outline-none"
              >
                <span className="font-sora font-semibold text-xs sm:text-sm text-[#0D0D14] pr-4">
                  {faq.question}
                </span>
                <div className={`w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center transition-colors duration-200 ${openIndex === index ? 'bg-[#6C3FFC] text-white' : 'bg-white text-[#0D0D14] border border-slate-200'}`}>
                  {openIndex === index ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-3.5 sm:px-4 pb-3.5 text-slate-600 font-inter text-xs leading-relaxed border-t border-slate-200/50 pt-2.5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
