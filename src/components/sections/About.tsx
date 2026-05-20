import { User, MapPin, Calendar, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-border-github bg-background relative">
      <div className="absolute top-1/3 right-1/4 w-[20rem] md:w-[25rem] h-[20rem] md:h-[25rem] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card-bg border border-border-github text-gold text-xs font-sans">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-serif">
            The Person Behind the Data
          </h2>
          <p className="text-base text-text-muted">
            A quick introduction to who I am, what I do, and what drives my passion for statistical analysis and data-driven research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border-github group-hover:border-gold transition-colors duration-300 shadow-xl">
                <img
                  src="https://i.pravatar.cc/400?img=11"
                  alt="Rodricks Otieno Ochieng"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green/10 border border-green/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-green font-mono font-bold text-sm text-center">BSc<br/>Stats</span>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground font-serif">
                Rodricks Otieno Ochieng
              </h3>
              <p className="text-text-muted leading-relaxed">
                A meticulous and analytical Data Analyst with a Bachelor of Science in Statistics
                (Second Class Honours - Upper Division) from Mount Kenya University. I possess proven
                expertise in statistical modeling, data collection, and financial analysis using R,
                SPSS, Advanced Excel, STATA, and GIS tools.
              </p>
              <p className="text-text-muted leading-relaxed">
                My experience includes an industrial attachment at the Kiambu County Department of
                Finance, where I contributed to financial reporting, economic trend monitoring, and
                database development. As a Research Assistant and Volunteer Tutor at Mount Kenya
                University, I have strengthened my skills in statistical research, data analysis,
                and academic mentorship. I hold certifications in Advanced Excel and Data Analytics
                & SPSS.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-4">
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card-bg border border-border-github rounded-xl">
                <div className="p-1.5 sm:p-2.5 bg-background border border-border-github rounded-lg text-gold">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-[10px] text-text-muted font-mono uppercase">Location</p>
                  <p className="text-xs sm:text-sm text-foreground font-medium truncate">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card-bg border border-border-github rounded-xl">
                <div className="p-1.5 sm:p-2.5 bg-background border border-border-github rounded-lg text-green">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-[10px] text-text-muted font-mono uppercase">Role</p>
                  <p className="text-xs sm:text-sm text-foreground font-medium truncate">Data Analyst</p>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card-bg border border-border-github rounded-xl">
                <div className="p-1.5 sm:p-2.5 bg-background border border-border-github rounded-lg text-yellow-600">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-[10px] text-text-muted font-mono uppercase">Experience</p>
                  <p className="text-xs sm:text-sm text-foreground font-medium">BSc Statistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
