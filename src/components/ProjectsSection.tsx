import React, { useState } from 'react';
import { Layers, BookOpen, ChevronDown, ChevronUp, Code2, Database, Wrench } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { Project } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const { data, showCoursework, setShowCoursework } = usePortfolio();
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const featuredProjects = data.projects.filter((p) => p.isFeatured);
  const courseworkProjects = data.projects.filter((p) => p.type === 'Coursework');

  const toggleProjectExpansion = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="py-16 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/25 light:border-emerald-300">
            <Layers className="w-3.5 h-3.5" />
            <span>Practical Software & Technical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Featured Projects & Systems
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            Real systems built for agronomy operations, enterprise data discovery, point-of-sale workflows, and client application monitoring.
          </p>
        </div>

        {/* 4 Core Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {featuredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                id={`item-${project.id}`}
                className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-slate-700 dark:hover:border-slate-700 light:hover:border-slate-400 transition-all flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  {/* Category and Status Badge */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/25 light:border-emerald-300">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* What it was & Purpose */}
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Role and Contribution */}
                  <div className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 space-y-1 bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 p-3 rounded-xl border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200">
                    <div>
                      <span className="font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">My Role:</span>{' '}
                      <span className="font-semibold text-white dark:text-white light:text-slate-900">{project.role}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed pt-0.5">
                      {project.contribution}
                    </p>
                  </div>

                  {/* Optional More Information Expansion */}
                  {isExpanded && (
                    <div className="space-y-2.5 pt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 animate-in fade-in">
                      <div>
                        <span className="font-mono font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-700 uppercase tracking-wider text-[10px] block">
                          Operational Need & Problem:
                        </span>
                        <p className="text-[11px] leading-relaxed mt-0.5">{project.problem}</p>
                      </div>
                      <div>
                        <span className="font-mono font-bold text-cyan-400 dark:text-cyan-400 light:text-cyan-700 uppercase tracking-wider text-[10px] block">
                          Practical Result:
                        </span>
                        <p className="text-[11px] leading-relaxed mt-0.5">{project.practicalResult}</p>
                      </div>
                      {project.lessons && (
                        <div className="p-2.5 rounded-lg bg-slate-850/60 dark:bg-slate-850/60 light:bg-slate-100 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200">
                          <span className="font-mono font-bold text-amber-400 dark:text-amber-400 light:text-amber-700 uppercase tracking-wider text-[10px] block">
                            Key Takeaway:
                          </span>
                          <p className="text-[11px] leading-relaxed mt-0.5">{project.lessons}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/70 dark:border-slate-700/70 light:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expansion Action Toggle */}
                <div className="pt-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => toggleProjectExpansion(project.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 dark:text-emerald-400 light:text-emerald-700 hover:text-emerald-300 dark:hover:text-emerald-300 light:hover:text-emerald-800 transition-colors"
                  >
                    <span>{isExpanded ? 'Show less' : 'More about this project'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Coursework & Technical Analyses */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400 light:text-emerald-600" />
                <span>Academic Coursework & Technical Analyses</span>
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                Classroom software engineering, database modeling, and agricultural drone systems.
              </p>
            </div>

            <button
              onClick={() => setShowCoursework(!showCoursework)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors shrink-0"
              aria-expanded={showCoursework}
            >
              <span>{showCoursework ? 'Hide Coursework' : 'Explore Coursework (4 Projects)'}</span>
              {showCoursework ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {showCoursework && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 animate-in fade-in">
              {courseworkProjects.map((project) => (
                <div
                  key={project.id}
                  id={`item-${project.id}`}
                  className="p-4 rounded-xl bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white dark:text-white light:text-slate-900 text-sm">
                      {project.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 dark:bg-slate-800 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700 dark:border-slate-700 light:border-slate-300">
                      {project.subtitle}
                    </span>
                  </div>

                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed text-xs">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.technologies.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 dark:bg-slate-900 light:bg-slate-200/70 text-slate-400 dark:text-slate-400 light:text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
