import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ExperienceTimeline: React.FC = () => {
  const { data } = usePortfolio();
  const [showAdditional, setShowAdditional] = useState(false);

  const featuredExperiences = data.experiences.filter((e) => e.isFeatured);
  const additionalExperiences = data.experiences.filter((e) => !e.isFeatured);

  return (
    <section id="experience" className="py-24 border-t border-slate-800/60 bg-[#090d16]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            <span>Work & Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Hands-on software development, AI-assisted data discovery, youth program facilitation, agronomy fieldwork, and small business ownership.
          </p>
        </div>

        {/* 5 Core Featured Experience Cards */}
        <div className="space-y-6">
          {featuredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all space-y-4 shadow-sm"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    {exp.subtitle && (
                      <span className="text-xs text-emerald-400 font-medium">
                        — {exp.subtitle}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-emerald-400/90 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Key Responsibilities & Contribution
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Tools Used */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/70 text-slate-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Background & Employment Toggle */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="text-base font-bold text-white">
                Additional Employment & Agricultural Background
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Campus employment, earlier multi-acre pumpkin production, row-crop farmhand duties, and conservation field assessments.
              </p>
            </div>

            <button
              onClick={() => setShowAdditional(!showAdditional)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              aria-expanded={showAdditional}
            >
              <span>{showAdditional ? 'Hide Additional Roles' : 'View Additional Work History (5)'}</span>
              {showAdditional ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showAdditional && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-800/80 animate-in fade-in">
              {additionalExperiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white block">
                      {exp.role}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  <span className="text-emerald-400 font-medium block">
                    {exp.company} — {exp.location}
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
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
