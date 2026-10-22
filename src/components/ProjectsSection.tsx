import React, { useState } from 'react';
import { Layers, ArrowRight, Sparkles, BookOpen, ExternalLink, Code2, Check, BarChart2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { LeafSampleDemo } from './LeafSampleDemo';

export const ProjectsSection: React.FC = () => {
  const { data, selectedProject, setSelectedProject } = usePortfolio();
  const [showDemo, setShowDemo] = useState(false);
  const [showCoursework, setShowCoursework] = useState(false);

  const featuredProjects = data.projects.filter((p) => p.isFeatured);
  const courseworkProjects = data.projects.filter((p) => p.type === 'Coursework');
  const conceptProjects = data.projects.filter((p) => p.type === 'Concept & Planning');

  return (
    <section id="work" className="py-24 border-t border-slate-800/60 bg-[#0b0f19]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Built Software & Engineering Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Work & Projects
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Real projects built for agronomists, software teams, and customers, showing practical problem-solving and clean execution.
            </p>
          </div>

          {/* Interactive Demo Toggle */}
          <button
            onClick={() => setShowDemo(!showDemo)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 transition-colors shrink-0 shadow-sm"
          >
            <BarChart2 className="w-4 h-4 text-emerald-400" />
            <span>{showDemo ? 'Hide Leaf Sample Demo' : 'Explore Interactive Leaf Sample Demo'}</span>
          </button>
        </div>

        {/* Optional Interactive Demonstration */}
        {showDemo && (
          <div className="animate-in fade-in duration-300">
            <LeafSampleDemo />
          </div>
        )}

        {/* 4 Core Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between space-y-5 shadow-lg group"
            >
              <div className="space-y-4">
                {/* Badges */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    {project.type}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Role Callout */}
                <div className="text-xs text-slate-400">
                  <span className="text-slate-500 font-mono">Role:</span>{' '}
                  <span className="font-semibold text-slate-200">{project.role}</span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] text-slate-500 font-mono">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Single Clear Action */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors focus:outline-none focus:underline"
                >
                  <span>Read Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Coursework & Research Presentations */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">
                Academic Coursework & Technical Analyses
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Classroom computer science projects and agricultural technology research presentations.
              </p>
            </div>

            <button
              onClick={() => setShowCoursework(!showCoursework)}
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              {showCoursework ? 'Hide Coursework' : 'View Coursework Projects (3)'}
            </button>
          </div>

          {showCoursework && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 animate-in fade-in">
              {courseworkProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {project.status}
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 pt-2 border-t border-slate-800/80"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Future Concepts & Applied Interests */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Concept Planning & Future Applied Interests</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Clearly distinguished as future concepts and research directions, not completed products or client deployments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            {conceptProjects.map((p) => (
              <div key={p.id} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 block">
                  {p.type}
                </span>
                <h4 className="text-xs font-bold text-white">{p.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{p.summary}</p>
                <button
                  onClick={() => setSelectedProject(p)}
                  className="text-[11px] font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <span>View Concept Overview</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}

            {data.futureInterests.slice(0, 2).map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-800/30 border border-slate-800 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Research Area
                </span>
                <h4 className="text-xs font-bold text-white">{item.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
