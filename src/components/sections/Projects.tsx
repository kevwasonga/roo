"use client";

import { useState } from "react";
import { FolderGit2, Star, GitFork, ExternalLink, Filter, CheckCircle } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Research & Analytics", "Machine Learning", "Data Engineering", "Finance & Reporting"];

  const projects = [
    {
      title: "factors-influencing-class-attendance-logistic-regression",
      category: "Research & Analytics",
      description: "Conducted a comprehensive research project analyzing factors influencing physical class attendance in Kenyan universities using Logistic Regression in R and SPSS.",
      longDescription: "Collected, cleaned, and analyzed primary survey data using R and SPSS. Applied logistic regression modeling to identify statistically significant predictors of student attendance behavior. Presented detailed findings and reports to academic staff.",
      tech: ["R", "SPSS", "LaTeX", "Excel", "Survey Design"],
      stars: 0,
      forks: 0,
      github: "#",
      demo: "#",
      metrics: "Significant Predictors Identified",
      color: "bg-gold"
    },
    {
      title: "kiambu-county-financial-revenue-analysis",
      category: "Finance & Reporting",
      description: "Performed financial analysis, reporting, and developed GIS/LIS database systems during industrial attachment at Kiambu County Government Finance Department.",
      longDescription: "Prepared and balanced cash book accounts with 100% accuracy, issued billing invoices for permits, monitored county economic trends, and contributed to developing a GIS and Land Information System database for spatial data management.",
      tech: ["Excel", "GIS", "SQL", "KOBO", "Financial Reporting"],
      stars: 0,
      forks: 0,
      github: "#",
      demo: "#",
      metrics: "100% Reconciliation Accuracy",
      color: "bg-green"
    },
    {
      title: "predictive-customer-churn-model",
      category: "Machine Learning",
      description: "Designed and implemented an end-to-end customer churn prediction engine using XGBoost and LightGBM with SHAP for model interpretability.",
      longDescription: "Achieved an AUC-ROC of 0.94 with FastAPI endpoints serving predictions at under 20ms latency. The solution reduced active client churn by 14% over a six-month trial period.",
      tech: ["Python", "XGBoost", "FastAPI", "Docker", "Pandas", "Scikit-Learn"],
      stars: 48,
      forks: 12,
      github: "https://github.com/rodricks-ochieng/churn-predictor",
      demo: "https://example.com/churn",
      metrics: "14% Churn Reduction",
      color: "bg-gold"
    },
    {
      title: "marketing-mix-attribution-analysis",
      category: "Research & Analytics",
      description: "Built an advanced marketing mix modeling (MMM) and multi-touch attribution analysis using Bayesian regression to optimize marketing spend allocation.",
      longDescription: "Analyzed over $10M of ad spend data across 6 channels using Bayesian regression methods. The analysis provided actionable insights that boosted marketing ROI by 22% in Q3.",
      tech: ["Python", "PyMC3", "R", "SQL", "Pandas", "Tableau"],
      stars: 32,
      forks: 8,
      github: "https://github.com/rodricks-ochieng/marketing-mmm",
      demo: "#",
      metrics: "22% ROI Increase",
      color: "bg-purple-600"
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-border-github bg-background relative">
      <div className="absolute top-10 left-10 w-[20rem] h-[20rem] bg-green/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card-bg border border-border-github text-gold text-xs font-sans">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Repositories & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-serif">
              Featured Projects & Research
            </h2>
            <p className="text-text-muted text-sm sm:text-base">
              A curated collection of statistical research, data analysis projects, and analytical systems built with rigor and precision.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-all ${
                  activeFilter === category
                    ? "bg-gold/10 border-gold text-gold font-bold"
                    : "bg-card-bg border-border-github text-text-muted hover:text-foreground hover:border-gold/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-card-bg border border-border-github hover:border-gold/40 rounded-xl p-6 transition-all duration-300 group hover:shadow-lg"
            >
              {/* Card Header (GitHub Repo Style) */}
              <div className="flex items-start justify-between mb-3 gap-2">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <FolderGit2 className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors flex-shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold font-mono text-foreground group-hover:text-gold transition-colors truncate">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="px-2 py-0.5 text-[10px] font-mono text-text-muted bg-cream-2 border border-border-github rounded-full">
                    Public
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-text-muted mb-4 font-sans leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Case Study Deep Dive / Results highlight */}
              <div className="mb-5 p-3.5 bg-background border border-border-github/70 rounded-lg">
                <div className="flex items-start gap-2 text-xs font-sans text-foreground">
                  <CheckCircle className="w-4 h-4 text-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-green">Impact: {project.metrics}</span>
                    <p className="text-[11px] text-text-muted mt-1 leading-normal">{project.longDescription}</p>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[10px] font-mono text-gold bg-gold/5 border border-gold/15 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Card Footer (GitHub Repo Stats Style) */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border-github/60 pt-4 mt-auto">
                <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono text-text-muted">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${project.color}`} />
                    <span className="hidden xs:inline">{project.category}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-foreground transition-colors cursor-default">
                    <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-foreground transition-colors cursor-default">
                    <GitFork className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    <span>{project.forks}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-text-muted hover:text-foreground border border-border-github hover:border-gold rounded bg-background transition-colors"
                    aria-label="View Source Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-text-muted hover:text-foreground border border-border-github hover:border-gold rounded bg-background transition-colors"
                      aria-label="View Live Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
