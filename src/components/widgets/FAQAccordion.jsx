import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: 'Why should we choose NimraDev Labs over standard agencies?',
    a: 'We combine Silicon Valley-grade code quality with deep AI engineering expertise. Unlike traditional agencies using template builders, we build bespoke high-performance React & Python microservices tuned for speed, SEO, and bulletproof security.'
  },
  {
    q: 'Can NimraDev Labs integrate custom AI agents into our existing workflow?',
    a: 'Yes! We specialize in custom AI automation—integrating LLM APIs, autonomous document parsers, automated customer support agents, and custom machine learning pipelines directly into your SaaS or enterprise web application.'
  },
  {
    q: 'Do you work with startups in Pakistan as well as international clients?',
    a: 'Absolutely. We provide world-class software development tailored for Pakistans growing tech ecosystem while delivering international code standard for global clients across the US, UK, Middle East, and Europe.'
  },
  {
    q: 'What is your standard project delivery timeline?',
    a: 'Business websites typically ship within 7 to 10 days. Complex web applications (SaaS) and AI integrations take between 3 to 6 weeks depending on feature scope. We operate in agile 1-week sprint iterations with full staging environment access.'
  },
  {
    q: 'What post-launch support and maintenance do you offer?',
    a: 'We offer dedicated SLAs including 24/7 uptime monitoring, security updates, server backups, feature scaling, and continuous performance optimization.'
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden transition-colors hover:border-slate-700"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-semibold text-slate-100 text-sm sm:text-base focus:outline-none"
            >
              <span>{faq.q}</span>
              <FiChevronDown
                className={`w-5 h-5 text-brand-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
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
                  className="px-5 sm:px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/40 pt-3"
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
