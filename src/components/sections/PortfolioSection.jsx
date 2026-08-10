import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'PDFora',
    category: 'SaaS Tool',
    description: 'A powerful PDF manipulation tool to merge, split, and edit PDF files effortlessly.',
    link: 'https://pdfora.nimradev.site',
    isSpecial: true,
  },
  {
    title: 'Medical Credentialing',
    category: 'Web Development',
    description: 'A professional web platform streamlining the credentialing process for healthcare professionals.',
    link: '#',
    logoText: 'MC',
  },
  {
    title: 'NimraMart',
    category: 'E-Commerce',
    description: 'A scalable, modern online marketplace with seamless product management and checkout.',
    link: '#',
    logoText: 'NM',
  },
  {
    title: 'TravelMate AI',
    category: 'AI Solutions',
    description: 'An intelligent travel assistant integrating APIs for automated itinerary planning.',
    link: '#',
    logoText: 'TM',
  },
  {
    title: 'RideFlow',
    category: 'Custom Software',
    description: 'A comprehensive transport management solution featuring real-time tracking.',
    link: '#',
    logoText: 'RF',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#F8F9FC] border border-slate-200 mb-6">
              <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
                Selected Work
              </span>
            </div>
            <h2 className="text-fluid-h2 font-sora font-bold text-[#0D0D14] mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-600 font-inter text-lg">
              A glimpse into some of the practical solutions we have built to help businesses scale.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-sora font-semibold text-sm text-[#0D0D14] bg-[#F8F9FC] border border-slate-200 hover:border-[#6C3FFC]/50 hover:bg-white transition-all duration-300"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target={project.link !== '#' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl bg-[#F8F9FC] border border-slate-200 overflow-hidden hover:border-[#6C3FFC]/30 hover:shadow-[0_8px_30px_-10px_rgba(108,63,252,0.15)] transition-all duration-300"
            >
              {/* Image Placeholder with Logo */}
              <div className={`aspect-[4/3] w-full relative overflow-hidden flex flex-col items-center justify-center ${project.isSpecial ? 'bg-gradient-to-br from-[#0D0D14] to-[#1A1A24]' : 'bg-slate-100'}`}>
                {project.isSpecial ? (
                  <>
                    {/* Dark modern background for PDFora */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="absolute top-0 w-full h-full bg-[#6C3FFC]/10 blur-[50px]"></div>
                    
                    {/* PDFora CSS Logo */}
                    <div className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#6C3FFC] to-[#8B5CF6] flex flex-col items-center justify-center shadow-[0_10px_40px_rgba(108,63,252,0.5)] mb-6 group-hover:scale-110 group-hover:shadow-[0_15px_50px_rgba(108,63,252,0.6)] transition-all duration-500 overflow-hidden border border-white/20">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                      <FileText className="w-10 h-10 text-white mb-1" strokeWidth={1.5} />
                      <span className="font-sora font-extrabold text-white text-xs tracking-wider">
                        PDFora
                      </span>
                    </div>

                    {/* Small Description Banner inside image area */}
                    <div className="relative z-10 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-sora tracking-wide lowercase shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                      pdfora.nimradev.site
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-slate-200/40 mix-blend-overlay"></div>
                    
                    {/* Logo inside the box */}
                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <span className="font-sora font-bold text-[#6C3FFC] text-lg text-center">
                        {project.logoText}
                      </span>
                    </div>
                  </>
                )}

                <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] ${project.isSpecial ? 'bg-black/20' : 'bg-[#0D0D14]/5'}`}>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg text-[#0D0D14] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                     <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-[10px] font-mono font-semibold tracking-wider text-[#6C3FFC] uppercase mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-sora font-bold text-[#0D0D14] mb-2 group-hover:text-[#6C3FFC] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 font-inter text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-[#6C3FFC] font-sora font-semibold text-xs transition-colors">
                  <span className="group-hover:underline underline-offset-4">View Project</span>
                  <div className="w-6 h-6 rounded-full bg-[#F4EFFF] flex items-center justify-center group-hover:bg-[#6C3FFC] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
