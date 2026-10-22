import React from 'react';
import { BookOpen, Sprout, Database, CheckCircle2, Compass, Cpu, Layers } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const AboutSection: React.FC = () => {
  const { data } = usePortfolio();

  return (
    <section id="about-details" className="py-16 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/25 light:border-emerald-300">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Background & Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Connecting Field Realities with Practical Software
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            Hands-on agronomy fieldwork, software development, small greenhouse management, and agricultural technology coursework.
          </p>
        </div>

        {/* Narrative & Academic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          
          {/* Narrative Paragraphs */}
          <div className="space-y-4 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 shadow-sm space-y-3">
              <p>
                {data.profile.aboutIntro}
              </p>
              <p>
                {data.profile.aboutAgService}
              </p>
              <p>
                {data.profile.aboutGreenhouse}
              </p>
            </div>
          </div>

          {/* Academic & Background Context */}
          <div className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-3">
                <span className="text-xs font-mono font-semibold text-emerald-400 dark:text-emerald-400 light:text-emerald-700 uppercase tracking-wider">
                  Academic Focus
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">
                  Junior • Expected May 2028
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                  Murray State University
                </h3>
                <p className="text-sm text-emerald-300 dark:text-emerald-300 light:text-emerald-700 font-medium mt-0.5">
                  Dual-majoring in Computer Science and Agriculture–Agriscience Technology
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                Combining coursework in software engineering, database systems, and algorithms with agronomic science, crop physiology, and precision agricultural technology.
              </p>

              <div className="pt-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 space-y-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600 shrink-0" />
                  <span>Omicron Delta Kappa (ODK) National Leadership Honor Society — President 2026–2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600 shrink-0" />
                  <span>Alpha Tau Omega Fraternity — Chaplain 2026–2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600 shrink-0" />
                  <span>Murray State Agronomy Club — Treasurer 2026–2027</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Research Interests & Future Applied Concepts */}
        <div id="item-res-digital-twins" className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-5 shadow-sm">
          <div className="border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/20 mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Research & Future Interests</span>
            </div>
            <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight mt-1">
              Applied Research & Development Concepts
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
              Current university funding applications and future applied software directions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.researchInterests.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="p-5 rounded-xl bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-700/50 dark:border-slate-700/50 light:border-slate-200">
                  {item.focusAreas.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 dark:bg-slate-800 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700 dark:border-slate-700 light:border-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Tools (Natural heading, evidence-based context) */}
        <div id="skills-section" className="space-y-4 pt-2">
          <div className="border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
              Skills & Tools
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1">
              Practical languages, frameworks, and fieldwork tools connected directly to internships, projects, and agricultural operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.supportedSkills.map((group, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-3.5 shadow-sm"
              >
                <div>
                  <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 light:bg-emerald-600" />
                    <span>{group.category}</span>
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5 leading-snug">
                    {group.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="text-xs">
                      <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 block">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-[11px] leading-relaxed block mt-0.5">
                        {skill.context}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
