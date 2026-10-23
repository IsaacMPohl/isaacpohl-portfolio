import React from 'react';
import { ArrowDown, FileText, Linkedin, Mail, ExternalLink, GraduationCap, Briefcase, Compass } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const HeroSection: React.FC = () => {
  const { data, setIsExploreOpen } = usePortfolio();

  return (
    <section id="about" className="pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 dark:bg-emerald-500/5 light:bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Status Line */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl sm:rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/25 light:border-emerald-300 leading-snug">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>{data.profile.statusLine}</span>
            </div>

            {/* Main Page h1 */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.14]">
                {data.profile.heroTitle}
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-700 tracking-tight">
                {data.profile.heroTagline}
              </p>
            </div>

            {/* Approved Hero Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed max-w-2xl font-normal">
              {data.profile.heroBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <a
                href="#work"
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>View my work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-white hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 text-xs sm:text-sm font-semibold border border-slate-700 dark:border-slate-700 light:border-slate-300 flex items-center gap-2 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-emerald-400 light:text-emerald-600" />
                <span>Resume</span>
              </a>

              <button
                onClick={() => setIsExploreOpen(true)}
                className="px-3.5 sm:px-4 py-2.5 rounded-xl text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-100 text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
              >
                <Compass className="w-4 h-4 text-emerald-400 light:text-emerald-600" />
                <span>Explore Topics</span>
              </button>
            </div>

            {/* Direct Professional Links */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
              <span className="font-medium text-slate-500 dark:text-slate-500 light:text-slate-400">Direct Links:</span>
              <a
                href={data.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>linkedin.com/in/isaac-pohl</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href={`mailto:${data.profile.email}`}
                className="flex items-center gap-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600" />
                <span>{data.profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Informative Background Summary Card */}
          <div className="lg:col-span-5 pt-2 lg:pt-0">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 shadow-xl space-y-4">
              
              {/* Education Banner */}
              <div className="flex items-start gap-3.5 pb-3.5 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 light:text-emerald-700 light:bg-emerald-100 border border-emerald-500/20 light:border-emerald-300 shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono font-semibold text-emerald-400 light:text-emerald-700 uppercase tracking-wider block">
                    Education
                  </span>
                  <div className="font-bold text-white dark:text-white light:text-slate-900 text-base leading-snug">
                    Murray State University
                  </div>
                  <div className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-0.5 leading-snug">
                    Junior • Computer Science & Agriculture–Agriscience Technology
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                    GPA: 3.94 • Expected May 2028
                  </div>
                </div>
              </div>

              {/* Experience Highlights */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono font-medium text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider block">
                  Core Practical Experience
                </span>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-start gap-2.5">
                    <Briefcase className="w-4 h-4 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white dark:text-white light:text-slate-900 block">Pohl Ag Service</span>
                      <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-[11px]">Junior Assistant (May 2020–Present)</span>
                      <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5 leading-relaxed">
                        Soil & leaf sampling fieldwork; built Microsoft Access leaf-sample database with comparison graphs.
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-start gap-2.5">
                    <Briefcase className="w-4 h-4 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white dark:text-white light:text-slate-900 block">OneMain Financial</span>
                      <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-[11px]">Summer Technology Intern (June–August 2026)</span>
                      <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5 leading-relaxed">
                        AI-assisted metadata discovery, stakeholder reviews, and documentation for enterprise analytical planning.
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-start gap-2.5">
                    <Briefcase className="w-4 h-4 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white dark:text-white light:text-slate-900 block">Pohl's Greenhouse</span>
                      <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-[11px]">Owner (January 2020–May 2025)</span>
                      <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5 leading-relaxed">
                        Managed small greenhouse business, crop records, and grant-funded environmental controls. National FFA Finalist.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Note */}
              <div className="pt-2.5 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 flex flex-wrap items-center justify-between gap-1">
                <span>Location: Haubstadt / Princeton, IN & Murray, KY</span>
                <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-semibold">Dual Major</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
