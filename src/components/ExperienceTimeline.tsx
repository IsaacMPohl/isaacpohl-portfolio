import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ExperienceTimeline: React.FC = () => {
  const { data, showAdditionalExp, setShowAdditionalExp } = usePortfolio();

  const featuredExperiences = data.experiences.filter((e) => e.isFeatured);
  const additionalExperiences = data.experiences.filter((e) => !e.isFeatured);

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/25 light:border-emerald-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work & Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            Hands-on software development, enterprise data discovery, youth program facilitation, agronomy fieldwork, and small business ownership.
          </p>
        </div>

        {/* 5 Core Featured Experience Cards */}
        <div className="space-y-5">
          {featuredExperiences.map((exp) => (
            <div
              key={exp.id}
              id={`item-${exp.id}`}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-slate-700 dark:hover:border-slate-700 light:hover:border-slate-400 transition-all space-y-3.5 shadow-sm"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>
                    {exp.subtitle && (
                      <span className="text-xs sm:text-sm text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-medium">
                        — {exp.subtitle}
                      </span>
                    )}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-emerald-400 dark:text-emerald-400 light:text-emerald-700 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">
                  <span className="flex items-center gap-1 bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 px-2.5 py-1 rounded-md border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-400 light:text-slate-500" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1 bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 px-2.5 py-1 rounded-md border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-400 light:text-slate-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider block">
                  Key Responsibilities & Contribution
                </span>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Tools Used */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Background & Employment Drawer */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900">
                Additional Employment & Agricultural Background
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                Campus customer service, 3-acre pumpkin enterprise, commercial farmhand duties, and conservation assessments.
              </p>
            </div>

            <button
              onClick={() => setShowAdditionalExp(!showAdditionalExp)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors shrink-0"
              aria-expanded={showAdditionalExp}
            >
              <span>{showAdditionalExp ? 'Hide Additional Roles' : 'View Full Work History (5 Roles)'}</span>
              {showAdditionalExp ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showAdditionalExp && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 animate-in fade-in">
              {additionalExperiences.map((exp) => (
                <div
                  key={exp.id}
                  id={`item-${exp.id}`}
                  className="p-4 rounded-xl bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 space-y-2 text-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white dark:text-white light:text-slate-900 text-sm">
                      {exp.role}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-semibold block text-xs">
                    {exp.company} — {exp.location}
                  </span>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed text-xs">
                    {exp.summary}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
