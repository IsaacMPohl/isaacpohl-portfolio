import React, { useState } from 'react';
import { BookOpen, Sprout, Database, CheckCircle2, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const AboutSection: React.FC = () => {
  const { data } = usePortfolio();
  const [showFullBackground, setShowFullBackground] = useState(false);

  return (
    <section id="about-details" className="py-20 border-t border-slate-800/60 bg-[#090d16]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Background & Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connecting Field Realities with Practical Software
          </h2>
        </div>

        {/* Core Perspective Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Approved Narrative Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-sm">
              {data.profile.aboutAgService}
            </p>

            <p className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-sm">
              {data.profile.aboutGreenhouse}
            </p>
          </div>

          {/* Academic & Background Context */}
          <div className="space-y-5">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                  Academic Focus
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Junior • Expected May 2028
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  Murray State University
                </h3>
                <p className="text-sm text-emerald-300/90 font-medium mt-0.5">
                  Dual-majoring in Computer Science and Agriculture–Agriscience Technology
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Combining coursework in software engineering, database architecture, and algorithms with agronomic science, crop physiology, and precision agricultural technology.
              </p>

              <div className="pt-2 text-xs text-slate-400 space-y-1.5 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Omicron Delta Kappa (ODK) National Leadership Honor Society — President 2026–2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Alpha Tau Omega Fraternity — Chaplain 2026–2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Murray State Agronomy Club — Treasurer 2026–2027</span>
                </div>
              </div>
            </div>

            {/* Expandable Earlier Farm & Entrepreneurship Background */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <button
                onClick={() => setShowFullBackground(!showFullBackground)}
                className="w-full flex items-center justify-between text-left text-xs font-semibold text-slate-200 hover:text-emerald-300 transition-colors"
                aria-expanded={showFullBackground}
              >
                <span>Earlier Agricultural Work & Enterprise Experience</span>
                {showFullBackground ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showFullBackground && (
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-3 text-xs text-slate-300 leading-relaxed animate-in fade-in">
                  <p>
                    <strong>Steve Pohl Farms / Pohl's Farms (2019–2023):</strong> Farmhand assisting with wheat and corn harvests, tractor and grain-cart operation, tillage, and grain-bin maintenance. Gained hands-on familiarity with commercial equipment and row-crop operations.
                  </p>
                  <p>
                    <strong>Pohl's Pumpkin Stand / Patch (2015–2022):</strong> Partnered with a cousin to grow and sell pumpkins, Indian corn, and gourds across 3 total acres and 3 retail sales locations in Gibson County, managing direct marketing and a customer website.
                  </p>
                  <p>
                    <strong>Conservation Fieldwork (Spring 2025 & Spring 2026):</strong> Conducted independent field observations, photo documentation, and residue/cover-crop/no-till assessments uploaded to a government conservation database.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Supported Skills Categorized by Context */}
        <div className="space-y-6 pt-6">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Supported Skills & Technical Areas
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Evidence-based skills connected directly to professional internships, production tools, and coursework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.supportedSkills.map((group, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-colors space-y-3.5"
              >
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>{group.category}</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {group.description}
                  </p>
                </div>

                <div className="space-y-2 pt-1 border-t border-slate-800/60">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="text-xs">
                      <span className="font-semibold text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 block text-[11px] leading-relaxed">
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
