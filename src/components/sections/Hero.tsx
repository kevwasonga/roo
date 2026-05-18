"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, Layers } from "lucide-react";

function BarChart() {
  const bars = [35, 55, 45, 70, 60, 85, 50, 75, 65, 90, 40, 30, 80, 55, 70];

  return (
    <div className="absolute top-12 right-[10%] opacity-[0.06] rotate-[10deg] pointer-events-none hidden lg:block">
      <div className="flex items-end gap-[3px]">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-[6px] bg-gold rounded-t"
            style={{ height: `${h}px`, animation: `barRise 2s ${i * 0.08}s ease-out both` }}
          />
        ))}
      </div>
      <style>{`
        @keyframes barRise {
          from { height: 0px; }
          to { height: ${bars.map((h) => `${h}px`).join(";")} }
        }
      `}</style>
    </div>
  );
}

function LineChart() {
  const points = [40, 55, 48, 62, 58, 72, 68, 78, 85, 82, 88, 92];
  const maxH = 100;
  const w = 300;
  const h = 80;
  const stepX = w / (points.length - 1);
  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * stepX} ${h - (p / maxH) * h}`)
    .join(" ");

  return (
    <div className="absolute bottom-20 left-[8%] opacity-[0.07] pointer-events-none hidden lg:block">
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
        <path d={pathD} fill="none" stroke="#C8860A" strokeWidth="2" className="animate-draw" />
        {points.map((p, i) => (
          <circle
            key={i}
            cx={i * stepX}
            cy={h - (p / maxH) * h}
            r="2.5"
            fill="#2E6B3E"
            className="animate-fadeIn"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </svg>
      <style>{`
        @keyframes draw { to { stroke-dashoffset: 0; } }
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2.5s 0.3s ease-out both;
        }
        @keyframes fadeIn { to { opacity: 1; } }
        .animate-fadeIn { opacity: 0; animation: fadeIn 0.3s ease-out both; }
      `}</style>
    </div>
  );
}

function ScatterCluster() {
  const dots = Array.from({ length: 40 }, () => ({
    x: Math.random() * 200,
    y: Math.random() * 150,
    r: Math.random() * 3 + 1.5,
  }));

  return (
    <div className="absolute top-1/3 left-[5%] opacity-[0.05] pointer-events-none hidden lg:block">
      <svg width="200" height="150" viewBox="0 0 200 150">
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.r}
            fill="#C8860A"
            className="animate-float"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
        <line x1="0" y1="130" x2="200" y2="130" stroke="#C8860A" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="0" x2="20" y2="150" stroke="#C8860A" strokeWidth="0.5" opacity="0.3" />
      </svg>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

function HeatmapGrid() {
  const rows = 6;
  const cols = 10;
  const cells = Array.from({ length: rows * cols }, () => Math.random());

  return (
    <div className="absolute bottom-32 right-[5%] opacity-[0.06] pointer-events-none hidden lg:block">
      <div className="grid grid-cols-10 gap-[2px]">
        {cells.map((v, i) => (
          <div
            key={i}
            className="w-[8px] h-[8px] rounded-sm"
            style={{
              backgroundColor: v > 0.7 ? "#C8860A" : v > 0.4 ? "#2E6B3E" : "#EDE5D5",
              transition: "background-color 0.5s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border-github bg-background min-h-[80vh] md:min-h-[90vh] flex items-center py-12 md:py-20">
      <BarChart />
      <LineChart />
      <ScatterCluster />
      <HeatmapGrid />

      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card-bg border border-border-github text-gold text-xs font-sans mb-4 sm:mb-6">
            <BarChart3 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Data Science &amp; AI Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-none font-serif mb-3 sm:mb-4">
            Turning Complex Data Into
            <br className="hidden xs:inline" />
            <span className="text-gold">Intelligent Decisions</span>
          </h1>

          <p className="text-sm sm:text-lg text-text-muted max-w-2xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
            From raw datasets to production-grade ML pipelines — architecting scalable systems that
            uncover insights, predict outcomes, and drive measurable impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-dark bg-gold hover:bg-gold-light border border-gold/50 rounded-md transition-all shadow-md"
            >
              Explore Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-foreground bg-card-bg hover:bg-card-hover border border-border-github rounded-md transition-all"
            >
              <Layers className="w-4 h-4" /> Start a Project
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-border-github/60 max-w-lg mx-auto">
            <div>
              <p className="text-xl sm:text-3xl font-bold text-foreground font-serif">5+</p>
              <p className="text-[10px] sm:text-xs text-text-muted font-sans uppercase tracking-wider">Years in Production ML</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-bold text-foreground font-serif">50M+</p>
              <p className="text-[10px] sm:text-xs text-text-muted font-sans uppercase tracking-wider">Data Points Processed</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green" />
                <p className="text-xl sm:text-3xl font-bold text-foreground font-serif">22%</p>
              </div>
              <p className="text-[10px] sm:text-xs text-text-muted font-sans uppercase tracking-wider">Avg. Performance Gain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
