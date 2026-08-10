import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Medical Credentialing Website',
    category: 'Web Development',
    description: 'A professional and secure web platform streamlining the credentialing process for healthcare professionals.',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'NimraMart',
    category: 'E-Commerce Development',
    description: 'A scalable, modern online marketplace with seamless product management, shopping carts, and secure checkout.',
    technologies: ['Next.js', 'Stripe', 'MongoDB'],
  },
  {
    title: 'TravelMate AI',
    category: 'AI Solutions & Automation',
    description: 'An intelligent travel assistant integrating OpenAI APIs for automated itinerary planning and personalized recommendations.',
    technologies: ['OpenAI API', 'Python', 'React'],
  },
  {
    title: 'RideFlow',
    category: 'Custom Software Development',
    description: 'A comprehensive transport management and ride-hailing software solution featuring real-time tracking and dispatch.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL'],
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-[2rem] bg-[#F8F9FC] border border-slate-200 overflow-hidden hover:border-[#6C3FFC]/30 hover:shadow-glass-light transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-[16/9] w-full bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-white/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0D0D14]/5 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg text-[#0D0D14]">
                     <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs font-mono font-semibold tracking-wider text-[#6C3FFC] uppercase mb-3">
                  {project.category}
                </div>
                <h3 className="text-2xl font-sora font-bold text-[#0D0D14] mb-3 group-hover:text-[#6C3FFC] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 font-inter mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-inter font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
