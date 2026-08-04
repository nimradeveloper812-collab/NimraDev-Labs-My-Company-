import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, ArrowRight, ShieldCheck, Layers, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0D0D14]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white border border-[#6C3FFC]/20 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-[#0D0D14]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-[#F8F9FC]">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#6C3FFC]/10 text-[#6C3FFC] border border-[#6C3FFC]/20">
                {project.category}
              </span>
              <span className="text-xs text-slate-500 font-mono">ID: NDL-{project.id.toString().padStart(3, '0')}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-500 hover:text-[#0D0D14] hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto space-y-8">
            {/* Title & Tagline */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-sora text-[#0D0D14] mb-2">
                {project.title}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-inter">
                {project.description}
              </p>
            </div>

            {/* Visual Header / Banner Mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-[#6C3FFC]/15 bg-[#F8F9FC] p-8 text-center bg-gradient-to-br from-[#6C3FFC]/5 via-[#F8F9FC] to-[#8B5CF6]/10">
              <div className="text-6xl font-bold text-[#0D0D14]/5 font-sora select-none uppercase tracking-widest">
                {project.client}
              </div>
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Enterprise Deployment Validated</span>
                </div>
                <div className="text-[#6C3FFC] font-mono text-xl font-bold">
                  {project.metric}
                </div>
              </div>
            </div>

            {/* Key Deliverables & Tech Stack Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Deliverables */}
              <div className="p-5 rounded-2xl bg-[#F8F9FC] border border-slate-200 space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 flex items-center space-x-2 font-mono">
                  <Layers className="w-4 h-4 text-[#6C3FFC]" />
                  <span>Key Solutions Delivered</span>
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 font-inter">
                  {project.deliverables?.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6C3FFC] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  )) || (
                    <>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[#6C3FFC]" />
                        <span>High-Throughput Microservice Architecture</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[#6C3FFC]" />
                        <span>Real-time Analytics Dashboard & AI Insights</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[#6C3FFC]" />
                        <span>Seamless Payment & ERP Integration</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div className="p-5 rounded-2xl bg-[#F8F9FC] border border-slate-200 space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 flex items-center space-x-2 font-mono">
                  <Cpu className="w-4 h-4 text-[#6C3FFC]" />
                  <span>Architecture & Stack</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white text-slate-700 border border-slate-200 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#F8F9FC] border-t border-slate-100">
            <span className="text-xs text-slate-500 font-mono">NimraDev Labs Case Study</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-sm font-semibold bg-[#6C3FFC] text-white hover:bg-[#8B5CF6] transition-colors shadow-purple-glow"
            >
              Close Overview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
