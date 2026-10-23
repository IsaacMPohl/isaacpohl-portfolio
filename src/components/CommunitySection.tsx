import React from 'react';
import { HeartHandshake, Users, Award, BookOpen, Compass, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const CommunitySection: React.FC = () => {
  const { data, showHonors, setShowHonors } = usePortfolio();

  const featuredInitiatives = data.serviceInitiatives.filter((s) => s.isFeatured);
  const additionalInitiatives = data.serviceInitiatives.filter((s) => !s.isFeatured);

  return (
    <section id="leadership" className="py-16 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/25 light:border-emerald-300">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Collegiate Leadership & Community Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Leadership & Service
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            Leading by listening, encouraging others to participate, and bringing people together for meaningful service and faith-centered fellowship.
          </p>
        </div>

        {/* 1. Balanced Campus Leadership Grid: 3 Officer Roles + Compact Club Row */}
        <div id="leadership-roles" className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 flex items-start gap-2.5">
            <Users className="w-4 h-4 text-emerald-400 light:text-emerald-600 shrink-0 mt-1" />
            <span>Elected & Appointed Campus Leadership Positions</span>
          </h3>

          {/* 3 Officer Roles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.leadershipRoles.map((lead, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 flex flex-col justify-between space-y-3 shadow-sm"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-semibold text-emerald-400 dark:text-emerald-400 light:text-emerald-700 block">
                    {lead.timeline}
                  </span>
                  <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                    {lead.organization}
                  </h4>
                  <ul className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium space-y-1 pt-1">
                    {lead.roles.map((r, rIdx) => (
                      <li key={rIdx} className="text-emerald-300 dark:text-emerald-300 light:text-emerald-700 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 light:bg-emerald-600 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed pt-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
                  {lead.focus}
                </p>
              </div>
            ))}
          </div>

          {/* Compact Campus Club Row Beneath Officer Cards */}
          <div className="p-4 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="font-semibold text-slate-300 dark:text-slate-300 light:text-slate-800">
              Active Campus Club Involvement:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {data.campusClubs.map((club, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md font-mono text-[11px] bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
                >
                  {club}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Featured Service & Outreach Stories */}
        <div className="space-y-5">
          <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 flex items-start gap-2.5">
            <HeartHandshake className="w-4 h-4 text-emerald-400 light:text-emerald-600 shrink-0 mt-1" />
            <span>Featured Service & Mentorship Initiatives</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
            {featuredInitiatives.map((item) => (
              <div
                key={item.id}
                id={`item-${item.id}`}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded-full font-mono text-[10px] font-semibold bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/20 light:border-emerald-300">
                      {item.category}
                    </span>
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono text-[11px]">
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                      {item.title}
                    </h4>
                    <span className="text-xs text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-medium block mt-0.5">
                      {item.role} — {item.organization}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="space-y-1 pt-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                    {item.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mt-0.5 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.metrics && (
                  <div className="p-2.5 rounded-xl bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 text-xs font-mono text-emerald-400 dark:text-emerald-300 light:text-emerald-700">
                    {item.metrics}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3. Additional Documented Community Outreach (Stock the Trailer, Civic Relief) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {additionalInitiatives.map((item) => (
            <div
              key={item.id}
              id={`item-${item.id}`}
              className="p-5 rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700 dark:border-slate-700 light:border-slate-300 shrink-0">
                    {item.category}
                  </span>
                  <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono text-[11px]">{item.period}</span>
                </div>
                <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {item.metrics && (
                <div className="text-xs font-mono text-emerald-400 dark:text-emerald-400 light:text-emerald-700 pt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
                  {item.metrics}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 4. Honors & Recognitions (Without empty parentheses) */}
        <div id="honors-awards-section" className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 flex items-start gap-2">
                <Award className="w-4 h-4 text-amber-400 dark:text-amber-400 light:text-amber-600 shrink-0 mt-1" />
                <span>Selected Honors & Competitive Recognitions</span>
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                National FFA nursery finalist (top 4), Indiana State Star Farmer finalist, American FFA Degree, and Salutatorian.
              </p>
            </div>

            <button
              onClick={() => setShowHonors(!showHonors)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors shrink-0"
              aria-expanded={showHonors}
            >
              <span>{showHonors ? 'Hide Honors & Awards' : 'View Honors & Awards (7)'}</span>
              {showHonors ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showHonors && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 animate-in fade-in">
              {data.honors.map((honor, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 space-y-1.5 text-xs"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-amber-400 dark:text-amber-300 light:text-amber-700">
                    <span className="font-semibold">{honor.category}</span>
                    {honor.year ? <span>{honor.year}</span> : null}
                  </div>
                  <h4 className="font-bold text-white dark:text-white light:text-slate-900 text-sm">
                    {honor.title}
                  </h4>
                  <div className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
                    {honor.issuer}
                  </div>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed text-xs pt-1">
                    {honor.description}
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
