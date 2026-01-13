import React from 'react';
import { motion } from 'framer-motion';
import { LuChevronRight, LuCheck } from 'react-icons/lu';
import { Reveal } from '../components/motion/Reveal';
import { SignatureEffect } from '../components/effects/SignatureEffect';
import { SignatureInteraction } from '../components/effects/SignatureInteraction';

// --- Styles & Assets ---
// In a real app, these would be in index.css or tailwind.config.js
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    
    :root {
      --bg-void: #050507;
      --bg-panel: #0f1014;
      --text-primary: #ffffff;
      --text-secondary: #8892b0;
      --accent-green: #00ff9d;
      --accent-blue: #3b82f6;
      --border-glass: rgba(255, 255, 255, 0.08);
      --glass: rgba(255, 255, 255, 0.02);
    }

    body {
      background-color: var(--bg-void);
      color: var(--text-primary);
      font-family: 'Space Grotesk', sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .font-display { font-family: 'Space Grotesk', sans-serif; }
  `}</style>
);

// --- Components ---

const NavItem = ({ children, href = "#" }: { children: React.ReactNode; href?: string }) => (
  <a 
    href={href} 
    className="group flex items-center gap-4 py-2 text-[0.9rem] text-[#8892b0] hover:text-white transition-all duration-300 font-mono hover:translate-x-[5px]"
  >
    <span className="opacity-0 -ml-4 text-[#3b82f6] transition-opacity duration-300 group-hover:opacity-100 group-hover:ml-0">
      <LuChevronRight />
    </span>
    {children}
  </a>
);

const GraphBar = ({ height, index }: { height: string; index: number }) => {
  // Simulate random movement for each bar
  const randomScale = 0.3 + Math.random() * 0.7;
  
  return (
    <motion.div
      className="flex-1 bg-[#3b82f6] opacity-30 origin-bottom"
      style={{ height }}
      animate={{ 
        scaleY: [1, randomScale, 1] 
      }}
      transition={{ 
        duration: 2 + Math.random(), 
        repeat: Infinity, 
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
};

const IntegrationItem = ({ name }: { name: string }) => (
  <Reveal width="100%">
    <div className="border border-[rgba(255,255,255,0.08)] p-6 text-center font-mono text-[#8892b0] transition-all duration-300 hover:border-[#3b82f6] hover:text-white hover:bg-[#3b82f6]/5 cursor-default">
      {name}
    </div>
  </Reveal>
);

const CertItem = ({ label }: { label: string }) => (
  <Reveal>
    <div className="flex items-center gap-4 font-mono text-[1.1rem]">
      <span className="text-[#00ff9d]"><LuCheck /></span>
      {label}
    </div>
  </Reveal>
);

export default function Index() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[280px_1fr]">
      <GlobalStyles />
      
      {/* LEFT RAIL */}
      <aside className="bg-[#0f1014] border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.08)] sticky top-0 z-50 lg:h-screen p-4 lg:p-8 flex flex-row lg:flex-col justify-between items-center lg:items-stretch">
        <div className="font-mono font-bold text-xl tracking-tighter flex items-center gap-2.5">
          <SignatureEffect effect="pulse" className="w-2 h-2 bg-[#00ff9d] rounded-full" />
          NEXUS_OS
        </div>

        <nav className="hidden lg:flex flex-col gap-6">
          <NavItem>Platform Overview</NavItem>
          <NavItem>Live Monitoring</NavItem>
          <NavItem>Security Specs</NavItem>
          <NavItem>Integrations</NavItem>
          <NavItem>Documentation</NavItem>
        </nav>

        <div className="hidden lg:block font-mono text-xs text-[#8892b0] border-t border-[rgba(255,255,255,0.08)] pt-6">
          <div>SYSTEM STATUS: HEALTHY</div>
          <div className="mt-2 text-[#00ff9d]">UPTIME: 99.999%</div>
          <div className="mt-4 opacity-50"> 2024 NEXUS INC</div>
        </div>
        
        {/* Mobile Menu Placeholder (Visual only as per request) */}
        <div className="lg:hidden text-[#8892b0]">
           <div className="w-6 h-0.5 bg-current mb-1.5"></div>
           <div className="w-6 h-0.5 bg-current mb-1.5"></div>
           <div className="w-6 h-0.5 bg-current"></div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="relative overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] px-6 py-24 lg:px-16 lg:py-24 flex flex-col justify-center border-b border-[rgba(255,255,255,0.08)]">
          {/* Radial Gradient Background */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)' }}
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-[#3b82f6] text-[0.9rem] mb-6"
          >
            // ENTERPRISE INFRASTRUCTURE
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[3.5rem] lg:text-[5.5rem] leading-[0.9] font-semibold mb-8 tracking-tighter"
          >
            Total Visibility<br/>
            <span className="text-[#8892b0] font-light">Across The Stack.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-[600px] text-xl text-[#8892b0] leading-relaxed mb-12"
          >
            Ingest, visualize, and alert on real-time data from any source. 
            Designed for DevOps teams who demand clarity in chaos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6"
          >
            <SignatureInteraction type="hover">
              <button className="px-8 py-4 font-mono text-[0.9rem] uppercase bg-white text-[#050507] font-bold border border-[rgba(255,255,255,0.08)] hover:bg-[#00ff9d] hover:text-[#050507] transition-colors">
                Start Free Trial
              </button>
            </SignatureInteraction>
            
            <SignatureInteraction type="hover">
              <button className="px-8 py-4 font-mono text-[0.9rem] uppercase text-white bg-white/5 border border-[rgba(255,255,255,0.08)] hover:bg-white/10 transition-colors">
                View Live Demo
              </button>
            </SignatureInteraction>
          </motion.div>
        </section>

        {/* VISUALIZATION SECTION */}
        <section id="monitoring" className="px-6 py-24 lg:px-16 lg:py-24 min-h-[80vh] border-b border-[rgba(255,255,255,0.08)]">
          <h2 className="text-[2rem] mb-4 font-display">Real-time Telemetry</h2>
          <p className="text-[#8892b0] mb-12 max-w-[500px]">
            Observe latency, throughput, and error rates with sub-millisecond precision.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-8">
            {/* Large Card - Graph */}
            <div className="lg:col-span-8 h-[400px] bg-[rgba(255,255,255,0.02)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] p-8 relative overflow-hidden">
              <Reveal width="100%" className="h-full">
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{ 
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />
                <div className="text-[#8892b0] text-[0.9rem] uppercase tracking-wider mb-4 relative z-10">Throughput (Req/s)</div>
                
                {/* Graph Bars */}
                <div className="absolute bottom-8 left-8 right-8 h-[100px] flex items-end gap-[5px]">
                  {[40, 70, 50, 80, 60, 90, 40, 75, 60, 45, 85, 100].map((h, i) => (
                    <GraphBar key={i} height={`${h}%`} index={i} />
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Small Card 1 */}
            <div className="lg:col-span-4 flex flex-col justify-center bg-[rgba(255,255,255,0.02)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] p-8">
              <Reveal width="100%">
                <div className="text-[#8892b0] text-[0.9rem] uppercase tracking-wider">Global Latency</div>
                <div className="font-mono text-[3rem] font-medium my-4 text-[#00ff9d]">12ms</div>
                <div className="font-mono text-[0.8rem] text-[#8892b0]">p99: 18ms</div>
              </Reveal>
            </div>

            {/* Small Card 2 */}
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-center bg-[rgba(255,255,255,0.02)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] p-8">
              <Reveal width="100%">
                <div className="text-[#8892b0] text-[0.9rem] uppercase tracking-wider">Error Rate</div>
                <div className="font-mono text-[3rem] font-medium my-4">0.01%</div>
                <div className="font-mono text-[0.8rem] text-[#8892b0]">Status: Normal</div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* IMAGE BREAK */}
        <div className="relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef6109231f88?q=80&w=2000&auto=format&fit=crop" 
            alt="Server Infrastructure" 
            className="w-full h-[60vh] object-cover grayscale contrast-125 brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-110"
          />
        </div>

        {/* INTEGRATIONS */}
        <section className="px-6 py-24 lg:px-16 lg:py-24 min-h-[80vh] border-b border-[rgba(255,255,255,0.08)] bg-[#08090b]">
          <h2 className="text-[2rem] font-display">Seamless Ingestion</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {['AWS', 'Kubernetes', 'Docker', 'Prometheus', 'PostgreSQL', 'Redis', 'Terraform', 'Graphana'].map((tech) => (
              <IntegrationItem key={tech} name={tech} />
            ))}
          </div>
        </section>

        {/* SECURITY & CTA */}
        <section className="px-6 py-24 lg:px-16 lg:py-24 min-h-[80vh] border-b border-[rgba(255,255,255,0.08)]">
          <h2 className="text-[3rem] mb-8 font-display">Enterprise Grade.</h2>
          <p className="text-[#8892b0] max-w-[600px] text-[1.2rem] mb-12">
            Built for the most demanding security requirements. Your data is encrypted at rest and in transit.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24">
            <CertItem label="SOC2 Type II" />
            <CertItem label="HIPAA Compliant" />
            <CertItem label="ISO 27001" />
          </div>

          <div className="mt-24 border-t border-[rgba(255,255,255,0.08)] pt-16">
            <h3 className="text-[2rem] mb-6 font-display">Ready to deploy?</h3>
            <SignatureInteraction type="hover">
              <button className="px-8 py-4 font-mono text-[0.9rem] uppercase bg-white text-[#050507] font-bold border border-[rgba(255,255,255,0.08)] hover:bg-[#00ff9d] hover:text-[#050507] transition-colors">
                Request Access
              </button>
            </SignatureInteraction>
          </div>
        </section>

      </main>
    </div>
  );
}
