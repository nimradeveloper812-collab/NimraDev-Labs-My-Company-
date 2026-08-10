import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is your website development process?',
    answer: 'We follow a structured process: Discovery, Planning, Design, Development, Testing, and Launch. This ensures a transparent, efficient, and high-quality delivery tailored to your specific business needs.',
  },
  {
    question: 'Do you offer e-commerce development?',
    answer: 'Yes, we build modern, scalable e-commerce solutions with complete product management, secure shopping carts, and seamless payment gateway integrations like Stripe.',
  },
  {
    question: 'How do your AI solutions work?',
    answer: 'We integrate powerful AI like OpenAI APIs to build intelligent chatbots, workflow automation, and custom assistants that reduce manual work and scale your business operations.',
  },
  {
    question: 'Can you build custom software for my business?',
    answer: 'Absolutely. We specialize in custom dashboards, CRM systems, ERP solutions, and booking systems designed to perfectly match your operational requirements.',
  },
  {
    question: 'What are your pricing structures?',
    answer: 'Our pricing is project-based and depends on the scope, complexity, and technologies required. We provide a detailed and transparent proposal after our initial discovery phase.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer: 'Yes, we offer ongoing maintenance, support, and scaling services to ensure your software remains secure, up-to-date, and aligned with your growing business.',
  },
  {
    question: 'How do we get started?',
    answer: 'Simply fill out our contact form or reach out via WhatsApp. We will schedule a brief consultation to understand your project and outline the next steps.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F8F9FC] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Common Questions
            </span>
          </div>
          <h2 className="text-fluid-h2 font-sora font-bold text-[#0D0D14] mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:border-[#6C3FFC]/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-sora font-semibold text-[#0D0D14] pr-8">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-[#6C3FFC] text-white' : 'bg-[#F8F9FC] text-[#0D0D14]'}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 font-inter leading-relaxed">
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
