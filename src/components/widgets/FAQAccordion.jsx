import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Why should businesses choose NimraDev Labs for software development?',
    a: 'We build clean, maintainable software with focus on reliability and clear communication. We combine modern web engineering with custom AI automation and software development to help your business operate smoothly.'
  },
  {
    q: 'Can NimraDev Labs integrate custom AI tools into our existing software?',
    a: 'Yes! Our development team builds and deploys practical AI solutions—including OpenAI integrations, AI chatbots, automated workflows, and data processing directly into your web app, CRM, or software platform.'
  },
  {
    q: 'What is your typical project delivery timeline?',
    a: 'Business websites are delivered in 10 to 14 days. E-Commerce stores, AI solutions, and custom software systems take 3 to 6 weeks depending on requirements. We work in clear milestones with regular client updates.'
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Yes. Every project includes complimentary post-launch support, followed by optional maintenance plans for updates, security checks, and ongoing feature enhancements.'
  },
  {
    q: 'How do we get started on a project with NimraDev Labs?',
    a: 'Simply click "DM Here" on WhatsApp or submit your project details via our contact form. Our team will review your requirements and respond promptly.'
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

