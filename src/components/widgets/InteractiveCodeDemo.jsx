import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Zap, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';

const SNIPPETS = {
  ai: {
    title: 'ai_agent.ts',
    icon: Sparkles,
    code: `import { NimraAI, EnterpriseAgent } from '@nimradev/ai';

export const agent = new EnterpriseAgent({
  model: 'gpt-4o-enterprise',
  temperature: 0.2,
  capabilities: ['rag', 'workflow_automation', 'erp_sync'],
});

export async function processCustomerWorkflow(event: WorkflowEvent) {
  const insight = await agent.analyze(event.payload);
  if (insight.confidence > 0.98) {
    return await agent.executeAction(insight.nextBestAction);
  }
  return { status: 'OPTIMIZED', latencyMs: 14 };
}`
  },
  web: {
    title: 'WebEngine.tsx',
    icon: Zap,
    code: `import { Motion, GlassCard } from '@nimradev/ui';

export function HighPerformanceHero() {
  return (
    <GlassCard variant="futuristic" glowColor="#6C3FFC">
      <Motion.h1 animate={{ opacity: 1, y: 0 }}>
        Next-Gen Digital Experience
      </Motion.h1>
      <PerformanceBadge score={99.8} uptime="99.99%" />
    </GlassCard>
  );
}`
  },
  api: {
    title: 'gateway_core.rs',
    icon: Cpu,
    code: `use nimradev_core::prelude::*;

#[get("/v1/enterprise/telemetry")]
async fn stream_telemetry(req: HttpRequest) -> Result<HttpResponse> {
    let session = SecurityContext::verify(&req)?;
    let metrics = TelemetryEngine::fetch_realtime_node_stats().await?;
    
    Ok(HttpResponse::Ok().json(metrics))
}`
  }
};

export default function InteractiveCodeDemo() {
  const [activeTab, setActiveTab] = useState('ai');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SNIPPETS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-[#0D0D14] border border-[#6C3FFC]/30 shadow-purple-glow-lg transition-all duration-300">
      {/* Code Editor Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#12121D] border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#8B5CF6]" />
            NimraDev Engine v4.2
          </span>
        </div>

        {/* Tab Switches */}
        <div className="flex items-center space-x-1 bg-[#08080C] p-1 rounded-lg border border-white/5">
          {Object.keys(SNIPPETS).map((key) => {
            const Icon = SNIPPETS[key].icon;
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-1.5 px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  isActive
                    ? 'bg-[#6C3FFC] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{SNIPPETS[key].title}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white p-1.5 rounded-md hover:bg-white/5 transition-colors"
          title="Copy snippet"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Code Body */}
      <div className="relative p-5 bg-[#0D0D14]/90 font-mono text-xs leading-relaxed text-slate-200 overflow-x-auto min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="text-slate-300 font-mono"
          >
            <code>
              {SNIPPETS[activeTab].code.split('\n').map((line, idx) => (
                <div key={idx} className="table-row">
                  <span className="table-cell text-right pr-4 text-slate-600 select-none">{idx + 1}</span>
                  <span className="table-cell">
                    {line.replace(/import|export|function|const|async|return|await|new|pub|fn|async|let|struct|use|Ok|Result/g, (m) => `\x1b[38;2;139;92;246m${m}`)
                      /* React syntax highlighting simulation using standard styling */
                    }
                    <span dangerouslySetInnerHTML={{
                      __html: line
                        .replace(/(import|export|function|const|async|return|await|new|pub|fn|let|struct|use)/g, '<span class="text-[#8B5CF6] font-semibold">$1</span>')
                        .replace(/('@nimradev\/[a-z]+'|'gpt-4o-enterprise'|'rag'|'workflow_automation'|'erp_sync'|'OPTIMIZED'|'futuristic'|'#6C3FFC'|'\/v1\/enterprise\/telemetry')/g, '<span class="text-emerald-400">$1</span>')
                        .replace(/(EnterpriseAgent|NimraAI|GlassCard|Motion|TelemetryEngine|SecurityContext)/g, '<span class="text-[#6C3FFC] font-semibold">$1</span>')
                    }} />
                  </span>
                </div>
              ))}
            </code>
          </motion.pre>
        </AnimatePresence>

        {/* Live Build Status Floating Indicator */}
        <div className="absolute bottom-3 right-4 flex items-center space-x-2 px-3 py-1 rounded-full bg-[#12121D]/90 border border-green-500/30 text-[11px] text-green-400">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="font-semibold">BUILD PASSED · LATENCY 14ms</span>
        </div>
      </div>
    </div>
  );
}
