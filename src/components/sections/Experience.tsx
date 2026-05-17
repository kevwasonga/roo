"use client";

import { Calendar, Building2, MapPin, Briefcase, ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Lead Data Scientist",
      company: "Tech Insights AI",
      location: "Nairobi, Kenya (Hybrid)",
      period: "2023 - Present",
      description: "Spearheading the data science division, designing enterprise-grade predictive analytics products, and leading a high-performing team of data scientists and machine learning engineers.",
      bullets: [
        "Architected and deployed a predictive retention model that lowered user churn by 14%, directly increasing monthly recurring revenue.",
        "Oversee the transition of legacy monolithic data systems into a modern Spark & AWS Big Data pipeline, improving query times by 65%.",
        "Lead the implementation of domain-specific Generative AI agents (RAG) that automated client report drafts, saving the operations team 15+ hours weekly.",
        "Collaborate directly with C-suite executives to translate analytical insights into product roadmaps and strategic business growth."
      ]
    },
    {
      role: "Senior Machine Learning Engineer",
      company: "StatBricks",
      location: "Nairobi, Kenya",
      period: "2021 - 2023",
      description: "Focused on training, fine-tuning, and putting into production deep learning models and highly scalable ETL workflows for fintech clients.",
      bullets: [
        "Designed and maintained automated MLOps pipelines using Kubeflow and Docker, streamlining model training, validation, and deployment phases.",
        "Optimized deep learning training clusters on AWS EC2, reducing hardware runtime expenditures by 35% without model degradation.",
        "Collaborated with product teams to build real-time REST and gRPC API endpoints for instantaneous transactions scoring and fraud prevention."
      ]
    },
    {
      role: "Data & Business Analyst",
      company: "Zealtech Data Solutions",
      location: "Mombasa, Kenya",
      period: "2019 - 2021",
      description: "Analyzed consumer behavior datasets and built business intelligence reporting dashboards for leading e-commerce platforms in East Africa.",
      bullets: [
        "Constructed complex SQL queries and ETL pipelines, automating manual reporting operations to cut compilation workflows from days to minutes.",
        "Designed interactive corporate dashboards in Tableau and Streamlit, providing real-time sales performance metrics for over 50,000 active SKUs.",
        "Designed and evaluated statistical A/B tests on landing pages, improving overall user registration conversion rate by 4.2%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 border-b border-border-github bg-background relative">
      <div className="absolute bottom-10 right-10 w-[25rem] h-[25rem] bg-accent-blue/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card-bg border border-border-github text-accent-blue text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="text-base text-text-muted font-sans">
            A chronicle of my professional career, showcasing growth, projects led, and engineering milestones achieved.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-border-github pl-6 ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline dot */}
              <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-card-bg border-2 border-border-github group-hover:border-accent-blue flex items-center justify-center transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-border-github group-hover:bg-accent-blue transition-colors" />
              </div>

              {/* Box */}
              <div className="p-6 bg-card-bg border border-border-github hover:border-border-hover rounded-xl transition-all duration-300">
                
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted mt-1 font-mono">
                      <span className="flex items-center gap-1 text-accent-blue">
                        <Building2 className="w-3.5 h-3.5" /> {exp.company}
                      </span>
                      <span className="hidden sm:inline text-border-github">|</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 self-start sm:self-center px-2.5 py-1 text-xs font-mono font-bold text-accent-green bg-accent-green/5 border border-accent-green/15 rounded-full">
                    <Calendar className="w-3.5 h-3.5" /> {exp.period}
                  </span>
                </div>

                <p className="text-sm text-text-muted mb-4 font-sans leading-relaxed">
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-text-muted font-sans border-t border-border-github/50 pt-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-accent-blue mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
