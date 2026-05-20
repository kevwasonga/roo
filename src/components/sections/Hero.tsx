"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Layers, Activity, Database, BarChart3 } from "lucide-react";

// --- Visual Signal: Data (Streams/Matrices) ---
function DataStream() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15]">
      <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent animate-scan-fast" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green to-transparent animate-scan-slow" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-dark to-transparent animate-scan-fast" style={{ animationDelay: '1s' }} />
      <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent animate-scan-slow" style={{ animationDelay: '2s' }} />
      <style>{`
        @keyframes scan-fast {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes scan-slow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan-fast { animation: scan-fast 3s linear infinite; }
        .animate-scan-slow { animation: scan-slow 7s linear infinite; }
      `}</style>
    </div>
  );
}

// --- Visual Signal: Intelligence (Neural structures) ---
function NeuralNetwork() {
  const seed = [58, 43, 70, 7, 90, 20, 65, 50, 33, 83, 12, 45, 95, 28, 74];
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    x: ((seed[i] * 7 + i * 13) % 97) + 1.5,
    y: ((seed[i] * 3 + i * 11 + 5) % 95) + 2.5,
  }));

  return (
    <div className="absolute top-10 right-[5%] w-[250px] h-[250px] opacity-[0.5] pointer-events-none hidden lg:block">
      <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible">
        {/* Connections */}
        {nodes.map((node, i) => (
          nodes.slice(i + 1, i + 4).map((target, j) => (
            <line
              key={`${i}-${j}`}
              x1={node.x} y1={node.y}
              x2={target.x} y2={target.y}
              stroke="#C8860A"
              strokeWidth="0.3"
              className="animate-pulse-slow"
              style={{ animationDelay: `${(i+j) * 0.2}s` }}
            />
          ))
        ))}
        {/* Nodes */}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={node.x} cy={node.y}
            r="1.5"
            fill="#2E6B3E"
            className="animate-float"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

// --- Visual Signal: Engineering (Systems/Pipelines) ---
function PipelineGrid() {
  return (
    <div className="absolute bottom-10 left-10 w-[200px] h-[200px] opacity-[0.35] pointer-events-none hidden lg:block">
      <div className="w-full h-full border border-dark/20 rounded-lg relative overflow-hidden bg-white/10 backdrop-blur-sm">
        {/* Grid lines */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #0F1410 1px, transparent 1px), linear-gradient(to bottom, #0F1410 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.3 }} />
        {/* Data block moving through pipeline */}
        <div className="absolute top-[40px] left-0 w-[12px] h-[12px] bg-gold rounded-sm animate-pipeline-flow shadow-[0_0_8px_#C8860A]" />
        <div className="absolute top-[100px] left-0 w-[12px] h-[12px] bg-green rounded-sm animate-pipeline-flow shadow-[0_0_8px_#2E6B3E]" style={{ animationDelay: '1.5s' }} />
      </div>
      <style>{`
        @keyframes pipeline-flow {
          0% { transform: translateX(-20px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(220px); opacity: 0; }
        }
        .animate-pipeline-flow { animation: pipeline-flow 3s linear infinite; }
      `}</style>
    </div>
  );
}

// --- Visual Signal: Data Graphs ---
function DataGraphs() {
  const points = [40, 55, 48, 62, 58, 72, 68, 78, 85, 82, 88, 92];
  const maxH = 100;
  const w = 260;
  const h = 80;
  const stepX = w / (points.length - 1);
  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * stepX} ${h - (p / maxH) * h}`)
    .join(" ");

  return (
    <div className="absolute top-[20%] left-[5%] opacity-[0.8] pointer-events-none hidden lg:block">
      <div className="bg-white/40 backdrop-blur-md p-4 rounded-xl border border-dark/10 shadow-sm">
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C8860A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C8860A" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path 
            d={`${pathD} L ${w} ${h} L 0 ${h} Z`} 
            fill="url(#lineGrad)" 
            className="animate-fade-in" 
          />
          <path d={pathD} fill="none" stroke="#C8860A" strokeWidth="2.5" className="animate-draw" />
          {points.map((p, i) => (
            <circle
              key={i}
              cx={i * stepX}
              cy={h - (p / maxH) * h}
              r="3.5"
              fill="#2E6B3E"
              className="animate-pop-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </svg>
      </div>
      <style>{`
        @keyframes draw { to { stroke-dashoffset: 0; } }
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s ease-out both;
        }
        @keyframes pop-in { 
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-in { transform-origin: center; animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 2s ease-out both; }
      `}</style>
    </div>
  );
}

// --- Visual Signal: Analysis & Decision-making (Live Console KPI) ---
function LiveMetricCard({ title, value, trend, icon: Icon, delay, position }: any) {
  const [val, setVal] = useState(value);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prev: string) => {
        const num = parseFloat(prev);
        if (isNaN(num)) return prev;
        const change = (Math.random() - 0.5) * 0.1;
        return (num + change).toFixed(1) + (prev.includes('%') ? '%' : prev.includes('M') ? 'M' : '');
      });
    }, 2000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`absolute ${position} hidden lg:flex flex-col gap-1 p-3 bg-white/70 backdrop-blur-md border border-dark/10 rounded-xl shadow-md animate-float-slow z-0 pointer-events-none opacity-90`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-2 text-text-muted">
        <Icon className="w-3.5 h-3.5" />
        <span className="text-[10px] font-sans uppercase tracking-wider font-semibold">{title}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold font-serif text-dark">{val}</span>
        <span className="text-xs font-medium text-green">+{trend}%</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background min-h-[85vh] flex items-center py-12 md:py-20 border-b border-border-github">
      {/* Background Signals */}
      <DataStream />
      <NeuralNetwork />
      <PipelineGrid />
      <DataGraphs />

      {/* Floating Console Metrics (Analysis / Credibility) */}
      <LiveMetricCard 
        title="Models Fitted" 
        value="98.4%" 
        trend="1.2" 
        icon={Activity} 
        delay="0s" 
        position="bottom-[35%] left-[8%]" 
      />
      <LiveMetricCard 
        title="Data Points" 
        value="50K+" 
        trend="5.4" 
        icon={Database} 
        delay="1s" 
        position="bottom-[25%] right-[8%]" 
      />
      <LiveMetricCard 
        title="Analysis Time" 
        value="2.4ms" 
        trend="0.8" 
        icon={BarChart3} 
        delay="2s" 
        position="top-[30%] right-[12%]" 
      />

      {/* Subtle Glows for Depth */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-green/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content Area (Structured layout, clean typography) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-dark leading-[1.1] font-serif mb-6">
            Transforming Data Into <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="relative z-10 text-gold">Statistical Intelligence</span>
              {/* Subtle underline highlight */}
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gold/10 -z-10 rounded-full" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-sans px-4 sm:px-0">
            Applying rigorous statistical methods and analytical techniques to uncover patterns, test hypotheses, and drive evidence-based decisions across organizations.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-dark bg-gold hover:bg-gold-light rounded-lg transition-all shadow-sm hover:shadow relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">View My Work <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-dark bg-white hover:bg-cream-2 border border-dark/10 rounded-lg transition-all shadow-sm hover:shadow"
            >
              <Layers className="w-4 h-4 text-gold" /> Get In Touch
            </Link>
          </div>

          {/* Core KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 w-full max-w-4xl">
            {[
              { label: "Projects Completed", value: "10+", icon: Layers },
              { label: "Data Analyzed", value: "50K+", icon: Database },
              { label: "Model Accuracy", value: "94%", icon: Activity },
              { label: "Analysis ROI", value: "3.5x", icon: TrendingUp },
            ].map((kpi, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/60 backdrop-blur-md border border-dark/10 hover:bg-white/80 transition-colors shadow-sm">
                <kpi.icon className="w-5 h-5 text-gold mb-2 opacity-90" />
                <span className="text-2xl font-bold font-serif text-dark">{kpi.value}</span>
                <span className="text-[10px] uppercase tracking-wider text-text-muted font-semibold mt-1">{kpi.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
