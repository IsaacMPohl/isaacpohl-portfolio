import React from 'react';
import { ArrowDown, FileText, Linkedin, Mail, ExternalLink, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const HeroSection: React.FC = () => {
  const { data } = usePortfolio();

  return (
    <section id="about" className="pt-28 pb-16 sm:pt-36 sm:pb-24 relative overflow-hidden">
      {/* Background Subtle Ambient Tint */}
      <div 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Line */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{data.profile.statusLine}</span>
            </div>

            {/* Main Page h1 */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {data.profile.heroTitle}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-emerald-400/90 tracking-tight">
                {data.profile.heroTagline}
              </p>
            </div>

            {/* Approved Hero Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {data.profile.heroBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold flex items-center gap-2 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 active:scale-95"
              >
                <span>View my work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-slate-200 text-sm font-semibold border border-slate-700 flex items-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-850 text-sm font-medium transition-colors"
              >
                <span>Contact</span>
              </a>
            </div>

            {/* Direct Professional Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="text-slate-500 font-medium">Direct Links:</span>
              <a
                href={data.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>linkedin.com/in/isaac-pohl</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href={`mailto:${data.profile.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{data.profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Informative Background Summary Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-5">
              
              {/* Education Banner */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-medium text-emerald-400 uppercase tracking-wider block">
                    Education
                  </span>
                  <div className="font-bold text-white text-base leading-snug">
                    Murray State University
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Junior • Computer Science & Agriculture–Agriscience Technology
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    Expected May 2028
                  </div>
                </div>
              </div>

              {/* Experience Highlights */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider block">
                  Core Practical Experience
                </span>

                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-800 flex items-start gap-2.5">
                    <Briefcase className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Pohl Ag Service</span>
                      <span className="text-slate-400">Junior Assistant (May 2020–Present)</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Soil & leaf sampling fieldwork; built Microsoft Access leaf-sample database with agronomist comparison graphs.
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-800 flex items-start gap-2.5">
                    <Briefcase className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">OneMain Financial</span>
                      <span className="text-slate-400">Summer Technology Intern (June–August 2026)</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        AI-assisted metadata discovery, stakeholder reviews, and documentation for enterprise data discovery.
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-800 flex items-start gap-2.5">
                    <Briefcase className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Pohl's Greenhouse</span>
                      <span className="text-slate-400">Owner (January 2020–May 2025)</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Managed small greenhouse business, crop records, and grant-funded environmental controls. National FFA Finalist.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Note */}
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Location: Haubstadt / Princeton, IN & Murray, KY</span>
                <span className="text-emerald-400 font-medium">Dual Major</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
