"use client";

import { BarChart3, Sigma, Database, FileCode, LineChart, PieChart } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Statistical Analysis & Modeling",
      icon: <Sigma className="w-6 h-6 text-gold" />,
      description: "Applying rigorous statistical methods to uncover patterns, test hypotheses, and drive evidence-based decision making.",
      skills: ["Logistic Regression", "Time Series Analysis", "Exploratory Data Analysis (EDA)", "Hypothesis Testing", "Descriptive & Inferential Statistics", "Survey Design & Analysis"],
    },
    {
      title: "Data Analytics & Insights",
      icon: <BarChart3 className="w-6 h-6 text-green" />,
      description: "Extracting actionable insights from complex datasets to solve business bottlenecks and drive strategic decisions.",
      skills: ["Statistical Modeling", "Financial Reporting & Analysis", "A/B Testing", "Data Visualization", "GIS & Spatial Data Management", "Economic Trend Monitoring"],
    },
    {
      title: "Data Collection & Management",
      icon: <Database className="w-6 h-6 text-yellow-600" />,
      description: "Designing robust data collection systems and managing databases to ensure data integrity and accessibility.",
      skills: ["KOBO Toolbox", "ODK Collect & Survey CTO", "GIS Database Development", "Data Cleaning & Validation", "Excel Spreadsheet Management", "Cash Book & Financial Records"],
    },
    {
      title: "Software & Research Tools",
      icon: <FileCode className="w-6 h-6 text-purple-600" />,
      description: "Leveraging programming and specialized software for statistical computing, research, and reporting.",
      skills: ["R for Statistical Computing", "SPSS", "STATA & JASP", "Advanced Excel", "Python", "LaTeX & Report Writing"],
    },
  ];

  const tools = [
    { name: "R", category: "stats" },
    { name: "SPSS", category: "stats" },
    { name: "STATA", category: "stats" },
    { name: "JASP", category: "stats" },
    { name: "Advanced Excel", category: "lang" },
    { name: "Python", category: "lang" },
    { name: "SQL", category: "lang" },
    { name: "KOBO Toolbox", category: "data" },
    { name: "ODK Collect", category: "data" },
    { name: "Survey CTO", category: "data" },
    { name: "GIS", category: "viz" },
    { name: "Tableau", category: "viz" },
    { name: "PowerBI", category: "viz" },
    { name: "LaTeX", category: "prod" },
    { name: "Git", category: "prod" },
    { name: "Docker", category: "prod" },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-border-github bg-background relative">
      <div className="absolute top-1/2 right-10 w-[20rem] h-[20rem] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card-bg border border-border-github text-gold text-xs font-sans">
            <LineChart className="w-3.5 h-3.5" />
            <span>Expertise Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-serif">
            Core Professional Competencies
          </h2>
          <p className="text-base text-text-muted">
            A comprehensive overview of my capabilities in statistical analysis, data collection, financial reporting, and research.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-card-bg border border-border-github hover:border-gold/40 rounded-xl transition-all duration-300 group hover:shadow-lg"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3 bg-background rounded-lg border border-border-github group-hover:border-gold/30 transition-colors shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors">
                  {category.title}
                </h3>
              </div>
              <p className="text-sm text-text-muted mb-6 leading-relaxed">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-xs font-mono text-foreground bg-cream-2/60 border border-border-github hover:border-gold hover:bg-cream-2 rounded transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tool Belt Section */}
        <div className="p-6 bg-card-bg border border-border-github rounded-xl">
          <h3 className="text-sm font-bold font-mono text-text-muted mb-6 uppercase tracking-wider text-center">
            My Professional Toolbelt
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-4 py-2 bg-background border border-border-github hover:border-gold/60 hover:text-foreground rounded-lg transition-all font-mono text-sm text-text-muted shadow-sm"
              >
                <div className={`w-2 h-2 rounded-full ${
                  tool.category === "stats" ? "bg-gold" :
                  tool.category === "lang" ? "bg-green" :
                  tool.category === "data" ? "bg-yellow-600" :
                  tool.category === "viz" ? "bg-red-500" :
                  tool.category === "prod" ? "bg-purple-600" : "bg-text-muted"
                }`} />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
