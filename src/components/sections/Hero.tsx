"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Sparkles, BrainCircuit, Activity } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Data Scientist & AI Specialist";
  const [gridNodes, setGridNodes] = useState<{ active: boolean; intensity: number }[]>([]);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Neural network/data stream contribution grid effect
  useEffect(() => {
    const size = 150; // 15x10 grid
    const initialNodes = Array.from({ length: size }, () => ({
      active: Math.random() > 0.85,
      intensity: Math.floor(Math.random() * 4), // 0 to 3
    }));
    setGridNodes(initialNodes);

    const interval = setInterval(() => {
      setGridNodes((prev) =>
        prev.map((node) => {
          if (Math.random() > 0.92) {
            return {
              active: !node.active,
              intensity: Math.floor(Math.random() * 4),
            };
          }
          return node;
        })
      );
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // GitHub contribution shades of green
  const getGreenShade = (node: { active: boolean; intensity: number }) => {
    if (!node.active) return "bg-[#161b22] border border-[#30363d]/30";
    switch (node.intensity) {
      case 0:
        return "bg-[#0e4429] border border-[#0e4429]/50 shadow-[0_0_4px_rgba(14,68,41,0.5)]";
      case 1:
        return "bg-[#006d32] border border-[#006d32]/50 shadow-[0_0_6px_rgba(0,109,50,0.6)]";
      case 2:
        return "bg-[#26a641] border border-[#26a641]/50 shadow-[0_0_8px_rgba(38,166,65,0.7)]";
      case 3:
      default:
        return "bg-[#39d353] border border-[#39d353]/50 shadow-[0_0_10px_rgba(57,211,83,0.8)]";
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-border-github bg-background min-h-[90vh] flex items-center py-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card-bg border border-border-github text-accent-blue text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Consulting & Leadership Roles</span>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-sm text-text-muted">HI, MY NAME IS</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
                RODRICKS OTIENO OCHIENG
              </h1>
              <div className="h-8 flex items-center">
                <span className="font-mono text-lg md:text-xl text-accent-blue font-semibold border-r-2 border-accent-blue pr-1 animate-pulse">
                  {typedText}
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-text-muted max-w-xl font-sans">
              I am a results-driven Data Scientist specializing in architecting advanced machine learning models, deploying high-throughput data engineering pipelines, and converting complex datasets into strategic business decisions.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-accent-green hover:bg-accent-green-hover border border-border-github rounded-md transition-all shadow-md shadow-accent-green/10"
              >
                View Portfolio <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-foreground bg-card-bg hover:bg-card-hover border border-border-github rounded-md transition-all"
              >
                Let's Collaborate
              </Link>
            </div>

            {/* Quick stats / Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border-github/60 max-w-md">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono">5+</p>
                <p className="text-xs text-text-muted font-mono uppercase">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono">50M+</p>
                <p className="text-xs text-text-muted font-mono uppercase">Data Points Analyzed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono">98%</p>
                <p className="text-xs text-text-muted font-mono uppercase">Model Accuracy</p>
              </div>
            </div>
          </div>

          {/* Contribution Grid Animated Visual (GitHub Style) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[400px] sm:max-w-[450px] p-4 bg-card-bg border border-border-github rounded-xl shadow-xl">
              
              {/* Box Header */}
              <div className="flex items-center justify-between border-b border-border-github pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-accent-blue" />
                  <span className="font-mono text-xs text-text-muted">neural-network-activity.sh</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
              </div>

              {/* Box Description */}
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-4">
                <BrainCircuit className="w-4 h-4 text-accent-green" />
                <span>Simulating active weights...</span>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-15 gap-1.5 justify-center">
                {gridNodes.map((node, index) => (
                  <div
                    key={index}
                    className={`aspect-square w-full rounded-[2px] transition-all duration-700 ${getGreenShade(
                      node
                    )}`}
                  />
                ))}
              </div>

              {/* Legend & Stats */}
              <div className="flex justify-between items-center mt-5 pt-3 border-t border-border-github text-[10px] font-mono text-text-muted">
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#161b22] border border-[#30363d]/30" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#0e4429]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#006d32]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#26a641]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#39d353]" />
                  <span>More</span>
                </div>
                <div className="flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-accent-green animate-pulse" />
                  <span>GPU Active: 94.2%</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
