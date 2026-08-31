import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Linkedin, MessageCircle, Copy, Check, Sparkles, Globe, Shield, ExternalLink } from 'lucide-react';
import LogoMark from '../common/LogoMark';

export default function OGSocialPreview() {
  const [activePlatform, setActivePlatform] = useState('linkedin');
  const [copied, setCopied] = useState(false);

  const ogData = {
    title: 'NimraDev Labs | Enterprise Web, AI Solutions & Custom Software',
    description: 'We build high-performance websites, AI solutions, and custom software that help businesses scale with confidence. International engineering standard for Pakistani & global enterprises.',
    url: 'https://nimradevlabs.com',
    siteName: 'NimraDev Labs',
    author: 'NimraDev Labs',
    imageText: 'Modern Web · AI Automation · Scalable Software',
  };

  const metaTagsCode = `<!-- Open Graph / LinkedIn / WhatsApp Sharing Metadata -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://nimradevlabs.com" />
<meta property="og:title" content="${ogData.title}" />
<meta property="og:description" content="${ogData.description}" />
<meta property="og:image" content="https://nimradevlabs.com/og-image.png" />
<meta property="og:site_name" content="NimraDev Labs" />

<!-- Twitter / X Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${ogData.title}" />
<meta name="twitter:description" content="${ogData.description}" />
<meta name="twitter:image" content="https://nimradevlabs.com/og-image.png" />`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(metaTagsCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-16 bg-[#F8F9FC] relative overflow-hidden font-inter">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-[#E6E6E6] mb-4 shadow-sm">
            <Share2 className="w-4 h-4 text-[#6C3FFC]" />
            <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Social Sharing Setup
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sora font-bold text-[#0D0D14] mb-3">
            Open Graph (OG) Social Card Preview
          </h2>
          <p className="text-slate-600 text-sm">
            Realistic mockups of how the NimraDev Labs website link renders when shared across LinkedIn, WhatsApp, and social media platforms.
          </p>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#E6E6E6] shadow-sm gap-2">
            <button
              onClick={() => setActivePlatform('linkedin')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-sora font-semibold transition-all ${
                activePlatform === 'linkedin'
                  ? 'bg-[#0077B5] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#0077B5] hover:bg-slate-50'
              }`}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Preview</span>
            </button>
            
            <button
              onClick={() => setActivePlatform('whatsapp')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-sora font-semibold transition-all ${
                activePlatform === 'whatsapp'
                  ? 'bg-[#25D366] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#25D366] hover:bg-slate-50'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Preview</span>
            </button>
          </div>
        </div>

        {/* Preview Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card Mockup View (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            {activePlatform === 'linkedin' ? (
              /* LinkedIn Card Mockup */
              <motion.div
                key="linkedin-card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-lg bg-white rounded-2xl border border-slate-300 shadow-lg overflow-hidden"
              >
                {/* LinkedIn Mock Post Header */}
                <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#6C3FFC] text-white flex items-center justify-center font-sora font-bold text-sm">
                    NL
                  </div>
                  <div>
                    <h4 className="text-xs font-sora font-bold text-[#0D0D14]">NimraDev Labs</h4>
                    <p className="text-[10px] text-slate-500 font-inter">Software & AI Engineering Company · 1d • 🌐</p>
                  </div>
                </div>

                <div className="px-4 py-2.5 text-xs text-slate-800 leading-relaxed font-inter">
                  Excited to share our newly refreshed engineering hub! Check out our enterprise web, custom AI automation, and scalable software solutions built for business growth. 🚀
                </div>

                {/* OG Image Graphic Container */}
                <div className="relative w-full aspect-[1.91/1] bg-gradient-to-br from-[#0D0D14] via-[#151226] to-[#0D0D14] p-6 flex flex-col justify-between overflow-hidden border-y border-slate-200">
                  {/* Glowing background circles */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C3FFC]/30 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8B5CF6]/20 rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Top Header of OG Image */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <LogoMark className="w-8 h-8" />
                      <span className="font-sora font-extrabold text-white text-base tracking-tight">
                        NimraDev<span className="text-[#8B5CF6]"> Labs</span>
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[10px] font-mono text-purple-200">
                      Software & AI
                    </div>
                  </div>

                  {/* Center Content of OG Image */}
                  <div className="relative z-10 my-auto py-2">
                    <h3 className="text-lg sm:text-xl font-sora font-extrabold text-white leading-tight mb-2">
                      Modern Websites, AI Solutions & Custom Software
                    </h3>
                    <p className="text-xs text-purple-200/90 font-inter">
                      Enterprise-Grade Digital Engineering Built for Scalability & Growth
                    </p>
                  </div>

                  {/* Bottom Brand Bar of OG Image */}
                  <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-300 font-mono">
                    <span className="text-[#8B5CF6] font-semibold">nimradevlabs.com</span>
                    <span>PKT (UTC+5) · Serving Global</span>
                  </div>
                </div>

                {/* LinkedIn Link Metadata Bar */}
                <div className="p-3.5 bg-slate-50 border-t border-slate-200 space-y-1">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">nimradevlabs.com</p>
                  <h4 className="text-xs font-sora font-bold text-[#0D0D14] line-clamp-1">{ogData.title}</h4>
                  <p className="text-[11px] text-slate-600 font-inter line-clamp-2 leading-tight">{ogData.description}</p>
                </div>
              </motion.div>
            ) : (
              /* WhatsApp Card Mockup */
              <motion.div
                key="whatsapp-card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-sm bg-[#EFEAE2] p-4 rounded-3xl shadow-lg border border-slate-300"
              >
                {/* Chat Bubble */}
                <div className="bg-white rounded-2xl rounded-tr-none p-2 shadow-sm border border-slate-200 space-y-2">
                  
                  {/* WhatsApp Rich Link Preview Card */}
                  <div className="bg-[#F0F2F5] rounded-xl overflow-hidden border border-slate-200">
                    {/* Small Image */}
                    <div className="relative w-full aspect-[16/9] bg-[#0D0D14] p-4 flex flex-col justify-between">
                      <div className="flex items-center gap-2">
                        <LogoMark className="w-6 h-6" />
                        <span className="font-sora font-bold text-white text-xs">NimraDev Labs</span>
                      </div>
                      <p className="text-xs font-sora font-extrabold text-white leading-tight">
                        Web · AI · Custom Software
                      </p>
                      <span className="text-[9px] font-mono text-[#8B5CF6]">nimradevlabs.com</span>
                    </div>

                    {/* Metadata Content */}
                    <div className="p-2.5 space-y-1">
                      <h4 className="text-xs font-sora font-bold text-[#0D0D14] leading-tight line-clamp-2">
                        {ogData.title}
                      </h4>
                      <p className="text-[10px] text-slate-600 font-inter line-clamp-2 leading-relaxed">
                        {ogData.description}
                      </p>
                      <p className="text-[9px] text-slate-400 font-mono">nimradevlabs.com</p>
                    </div>
                  </div>

                  {/* Message text with URL */}
                  <div className="px-2 pt-1 pb-2 text-xs text-slate-800 font-inter">
                    <p>Salam! Please review the NimraDev Labs portfolio and capabilities deck here:</p>
                    <a href="https://nimradevlabs.com" className="text-[#00A884] font-medium underline">https://nimradevlabs.com</a>
                    <div className="text-right text-[9px] text-slate-400 mt-1 font-mono">11:42 AM ✓✓</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Metadata Inspector (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white border border-[#E6E6E6] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6C3FFC]" />
                  <h3 className="font-sora font-bold text-sm text-[#0D0D14]">Active Open Graph Tags</h3>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8F9FC] border border-[#E6E6E6] text-xs font-sora font-semibold text-[#6C3FFC] hover:bg-[#6C3FFC] hover:text-white transition-all shadow-sm"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Tags'}</span>
                </button>
              </div>

              <pre className="p-3.5 bg-[#0D0D14] text-slate-300 rounded-xl text-[11px] font-mono leading-relaxed overflow-x-auto border border-slate-800">
                {metaTagsCode}
              </pre>

              <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3 font-inter">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-800">Card Aspect Ratio:</span>
                  <span className="font-mono text-slate-500">1200 × 630 px (1.91:1)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-800">Target Timezone:</span>
                  <span className="font-mono text-slate-500">PKT (UTC+5) / Global</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-800">Favicon Format:</span>
                  <span className="font-mono text-slate-500">SVG Vector Mark</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
