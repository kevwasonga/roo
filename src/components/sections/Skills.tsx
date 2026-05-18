"use client";

import { BarChart3, Brain, Database, FileCode, LineChart } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Analytics & Insights",
      icon: <BarChart3 className="w-6 h-6 text-gold" />,
      description: "Extracting actionable insights from complex, unstructured datasets to solve business bottlenecks and drive decisions.",
      skills: ["Statistical Modeling", "Exploratory Data Analysis (EDA)", "A/B Testing", "Time-series Forecasting", "Tableau & PowerBI", "SQL / NoSQL Query Optimization"],
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="w-6 h-6 text-green" />,
      description: "Designing, training, and optimizing predictive models and AI algorithms for advanced problem solving.",
      skills: ["Supervised/Unsupervised Learning", "Deep Learning (ANN, CNN, RNN)", "Natural Language Processing (NLP)", "Computer Vision", "Scikit-Learn / PyTorch / TensorFlow", "LLMs & Prompt Engineering"],
    },
    {
      title: "Data Engineering & Infrastructure",
      icon: <Database className="w-6 h-6 text-yellow-600" />,
      description: "Building scalable, highly available data warehouses and ETL pipelines to support massive analytics pipelines.",
      skills: ["ETL/ELT Pipeline Development", "Apache Spark / Hadoop / Kafka", "Data Warehousing (Snowflake, BigQuery)", "AWS (S3, Redshift, Glue)", "Docker & Kubernetes", "CI/CD for Machine Learning (MLOps)"],
    },
    {
      title: "Software & Web Development",
      icon: <FileCode className="w-6 h-6 text-purple-600" />,
      description: "Full-stack capabilities to build dynamic, interactive dashboards and user interfaces that present data beautifully.",
      skills: ["Python (FastAPI, Django, Flask)", "TypeScript / JavaScript", "Next.js / React 19", "Tailwind CSS 4", "REST & GraphQL APIs", "Git & Team Collaboration Workflow"],
    },
  ];

  const tools = [
    { name: "Python", category: "lang" },
    { name: "R", category: "lang" },
    { name: "SQL", category: "lang" },
    { name: "PyTorch", category: "ml" },
    { name: "TensorFlow", category: "ml" },
    { name: "Scikit-Learn", category: "ml" },
    { name: "Pandas/NumPy", category: "ml" },
    { name: "Apache Spark", category: "eng" },
    { name: "AWS", category: "eng" },
    { name: "Snowflake", category: "eng" },
    { name: "Tableau", category: "viz" },
    { name: "PowerBI", category: "viz" },
    { name: "Next.js", category: "web" },
    { name: "React", category: "web" },
    { name: "Docker", category: "ops" },
    { name: "Git", category: "ops" },
  ];

  return (
    <section id="skills" className="py-24 border-b border-border-github bg-background relative">
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
            A comprehensive overview of my capabilities in data science, predictive analytics, machine learning, and modern web integrations.
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
                  tool.category === "lang" ? "bg-gold" :
                  tool.category === "ml" ? "bg-green" :
                  tool.category === "eng" ? "bg-yellow-600" :
                  tool.category === "viz" ? "bg-red-500" :
                  tool.category === "web" ? "bg-purple-600" : "bg-text-muted"
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
