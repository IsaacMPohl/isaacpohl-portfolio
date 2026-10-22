import React from 'react';
import { HeartHandshake, Users, Award, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const CommunitySection: React.FC = () => {
  const { data } = usePortfolio();

  const bibleStudyInitiative = data.serviceInitiatives.find((s) => s.id === 'serv-ato-chaplaincy');
  const otherInitiatives = data.serviceInitiatives.filter((s) => s.id !== 'serv-ato-chaplaincy');

  return (
    <section id="leadership" className="py-24 border-t border-slate-800/60 bg-[#0b0f19]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
            <span>Collegiate Leadership & Community Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership & Service
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Leading by listening, encouraging others to participate, and bringing people together for meaningful service and faith-centered fellowship.
          </p>
        </div>

        {/* 1. Official Campus Leadership Roles */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>Campus Leadership Positions</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.leadershipRoles.map((lead, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-3 shadow-sm"
              >
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold block">
                    {lead.timeline}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {lead.organization}
                  </h4>
                  <ul className="text-xs text-slate-300 font-medium space-y-0.5">
                    {lead.roles.map((r, rIdx) => (
                      <li key={rIdx} className="text-emerald-300/90">• {r}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/80">
                  {lead.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Spotlight: Bible Study Leadership & ATO Chaplaincy */}
        {bibleStudyInitiative && (
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-emerald-950/20 border border-emerald-500/30 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    Faith & Chaplaincy Spotlight
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {bibleStudyInitiative.period}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1.5">
                  {bibleStudyInitiative.title}
                </h3>
                <span className="text-xs text-emerald-400 font-medium block mt-0.5">
                  {bibleStudyInitiative.role} — {bibleStudyInitiative.organization}
                </span>
              </div>

              <div className="px-3.5 py-2 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs font-mono text-emerald-300 shrink-0">
                Weekly Study: 3 → 15+ members
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {bibleStudyInitiative.summary}
            </p>

            {/* Key Accomplishments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1.5 text-xs">
                <span className="font-semibold text-emerald-300 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Winter 2026 Chicago Retreat</span>
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Attended the Alpha Tau Omega Chicago leadership retreat in Winter 2026 to learn how to facilitate Bible studies and deepen spiritual grounding.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1.5 text-xs">
                <span className="font-semibold text-emerald-300 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Fraternity Study Growth</span>
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Led weekly chapter Bible studies, intentionally fostering an open, welcoming environment that grew active brotherhood attendance from 3 to over 15 members.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1.5 text-xs">
                <span className="font-semibold text-emerald-300 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>All-Campus Bible Study</span>
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Organized and put on an All-Campus Bible Study once a semester, bringing together students and campus ministries for collective fellowship, worship, and Scripture study.
                </p>
              </div>
            </div>

            {/* Other Chaplaincy & Service Duties */}
            <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Chaplaincy Responsibilities & Community Outreach
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Providing brotherhood pastoral care, spiritual mentorship, and chapter devotionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Coordinating Sleep in Heavenly Peace bed builds and deliveries for local youth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Organizing community food drives, highway cleanups, and local charity support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Building bridges with campus ministries to cultivate faith and service across student life</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* 3. Other Documented Service & Outreach Initiatives */}
        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            <span>Documented Service & Community Outreach Initiatives</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherInitiatives.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      {item.category}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <span className="text-xs text-emerald-400 font-medium block mt-0.5">
                      {item.role} — {item.organization}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.metrics && (
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-800 text-xs font-mono text-emerald-300">
                    {item.metrics}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Selected Honors & Recognitions */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-5">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Selected Honors & Recognitions</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Agricultural entrepreneurship, academic standing, and competitive achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.honors.map((honor, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-1.5 text-xs"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-amber-300">
                  <span>{honor.category}</span>
                  <span className="text-slate-400">{honor.year}</span>
                </div>
                <h4 className="font-bold text-white text-sm">
                  {honor.title}
                </h4>
                <div className="text-[11px] text-slate-400">
                  {honor.issuer}
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px] pt-1">
                  {honor.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
