"use client";

import { Calendar, Building2, MapPin, Briefcase, ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Volunteer Tutor (Statistics & Data Science)",
      company: "Mount Kenya University",
      location: "Thika, Kenya",
      period: "Jan 2025 - Present",
      description: "Providing tutoring services to university students in data science and statistics, improving their understanding of complex concepts.",
      bullets: [
        "Develop tailored research plans and study materials to aid students in their academic projects and exam preparation.",
        "Assist students in enhancing their academic performance and building confidence in statistical applications.",
        "Tutor in statistical software including R and SPSS for hands-on data analysis coursework."
      ]
    },
    {
      role: "Data & Finance Assistant (Attachment)",
      company: "Kiambu County Government, Finance Department",
      location: "Juja Sub-County, Kenya",
      period: "Aug 2024 - Dec 2024",
      description: "Performed financial analysis and reporting to support the department's monthly fiscal reviews and policy evaluations at the County Government of Kiambu.",
      bullets: [
        "Prepared and balanced cash book accounts, ensuring 100% accuracy in transaction recording and financial reconciliation.",
        "Issued billing invoices for business permits and construction permits through the county revenue collection system.",
        "Monitored and evaluated county economic trends to provide data-driven insights for policy review initiatives.",
        "Played a key role in developing a Geographic Information System (GIS) and Land Information System (LIS) database for effective spatial data management."
      ]
    },
    {
      role: "Research Assistant",
      company: "Mount Kenya University",
      location: "Thika, Kenya",
      period: "Feb 2024 - Jun 2024",
      description: "Conducted a comprehensive research project analyzing factors influencing physical class attendance in universities in Kenya using Logistic Regression.",
      bullets: [
        "Collected, cleaned, and analyzed datasets using R and SPSS to identify key trends and statistical significance.",
        "Prepared and presented detailed reports and findings to academic staff, demonstrating strong analytical and communication skills.",
        "Applied logistic regression modeling to identify statistically significant predictors of student attendance behavior."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-border-github bg-background relative">
      <div className="absolute bottom-10 right-10 w-[25rem] h-[25rem] bg-gold/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card-bg border border-border-github text-gold text-xs font-sans">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-serif">
            Professional Experience
          </h2>
          <p className="text-base text-text-muted">
            A chronicle of my professional career, showcasing growth in statistical research, data analysis, and finance.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-border-github pl-5 sm:pl-6 ml-3 sm:ml-8 space-y-10 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline dot */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-card-bg border-2 border-border-github group-hover:border-gold flex items-center justify-center transition-colors">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-border-github group-hover:bg-gold transition-colors" />
              </div>

              {/* Box */}
              <div className="p-4 sm:p-6 bg-card-bg border border-border-github hover:border-gold rounded-xl transition-all duration-300">
                
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted mt-1 font-mono">
                      <span className="flex items-center gap-1 text-gold">
                        <Building2 className="w-3.5 h-3.5" /> {exp.company}
                      </span>
                      <span className="hidden sm:inline text-border-github">|</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 self-start sm:self-center px-2.5 py-1 text-xs font-mono font-bold text-green bg-green/5 border border-green/15 rounded-full">
                    <Calendar className="w-3.5 h-3.5" /> {exp.period}
                  </span>
                </div>

                <p className="text-sm text-text-muted mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-text-muted border-t border-border-github/50 pt-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
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
