import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Code, Layers, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0d1322] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-900/60">
          <div className="space-y-1.5 pr-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                {project.type}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.category}
              </span>
            </div>
            <h2 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-400 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project details"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                My Role
              </span>
              <span className="font-semibold text-white mt-0.5 block">
                {project.role}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Project Status
              </span>
              <span className="font-semibold text-emerald-300 mt-0.5 block">
                {project.status}
              </span>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">
              Technologies & Tools
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/80 border border-slate-700/80 text-slate-200 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem / Context */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              The Problem & Operational Need
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* My Contribution */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              My Contribution & Work Performed
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {project.contribution}
            </p>
          </div>

          {/* Practical Result */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Practical Result & Utility
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {project.practicalResult}
            </p>
          </div>

          {/* Lessons */}
          <div className="space-y-1.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              Key Lessons & Engineering Takeaway
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {project.lessons}
            </p>
          </div>

          {/* External Link if verified */}
          {project.link && (
            <div className="pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
              >
                <span>{project.linkLabel || 'View Source / Details'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/70 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
