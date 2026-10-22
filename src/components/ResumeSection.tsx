import React, { useState } from 'react';
import { FileText, Printer, Copy, Check, ExternalLink, Mail, Linkedin, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { generateApplicationSummary } from '../utils/portfolioLogic';

export const ResumeSection: React.FC = () => {
  const { data } = usePortfolio();
  const [copiedText, setCopiedText] = useState(false);
  const [showQuickFill, setShowQuickFill] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const appSummary = generateApplicationSummary({
    name: data.profile.name,
    major: data.profile.major,
    university: data.profile.university,
    graduationDate: data.profile.graduationDate,
    email: data.profile.email,
    linkedin: data.profile.linkedin,
    portfolioUrl: undefined,
    quickFillSummary: data.profile.quickFillSummary
  });

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const textResume = [
      `${data.profile.name.toUpperCase()}`,
      `Email: ${data.profile.email} | LinkedIn: ${data.profile.linkedin}`,
      `Location: ${data.profile.locationForResume}`,
      '',
      `EDUCATION`,
      `${data.education[0].institution} — ${data.education[0].standing}`,
      `${data.education[0].degree}`,
      `${data.education[0].period} | ${data.education[0].location}`,
      '',
      `EXPERIENCE`,
      ...data.experiences.filter(e => e.isFeatured).map(e => [
        `${e.role}${e.subtitle ? ` — ${e.subtitle}` : ''} | ${e.company} (${e.period})`,
        e.summary,
        ...e.responsibilities.map(r => `  • ${r}`),
        ''
      ].join('\n')),
      `LEADERSHIP & SERVICE`,
      ...data.leadershipRoles.map(l => `${l.organization}: ${l.roles.join(', ')} (${l.timeline})`),
      '',
      `SELECTED HONORS`,
      ...data.honors.map(h => `• ${h.title} (${h.year}) — ${h.issuer}`)
    ].join('\n');

    navigator.clipboard.writeText(textResume);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleCopyField = (fieldName: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="resume" className="py-24 border-t border-slate-800/60 bg-[#0b0f19]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 no-print">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Resume
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Accurate, single-source curriculum vitae matching all verified portfolio records.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={handleCopyPlainText}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              {copiedText ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copiedText ? 'Copied to Clipboard' : 'Copy Plain Text'}</span>
            </button>

            <button
              onClick={() => setShowQuickFill(!showQuickFill)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            >
              <span>Application Quick-Fill</span>
              {showQuickFill ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Quiet Quick-Fill Drawer */}
        {showQuickFill && (
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs space-y-3 no-print animate-in fade-in">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-semibold text-white">
                Application Form Quick-Fill (Quiet Helper)
              </span>
              <span className="text-[11px] text-slate-400">
                1-click copy verified fields for job/internship applications
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {Object.entries(appSummary.quickFields).map(([label, val]) => (
                <div key={label} className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 block">{label}</span>
                    <span className="text-xs text-white truncate block">{val}</span>
                  </div>
                  <button
                    onClick={() => handleCopyField(label, val)}
                    className="p-1.5 rounded bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white shrink-0 transition-colors"
                    title={`Copy ${label}`}
                  >
                    {copiedField === label ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ATS-Clean Printable Resume Card */}
        <div id="resume-print-card" className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-2xl space-y-8 text-xs sm:text-sm">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {data.profile.name}
            </h1>
            <p className="text-xs sm:text-sm text-emerald-400 font-medium">
              {data.profile.major} • Junior, Murray State University
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <a href={`mailto:${data.profile.email}`} className="flex items-center gap-1.5 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{data.profile.email}</span>
              </a>
              <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>linkedin.com/in/isaac-pohl</span>
              </a>
              <span className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{data.profile.locationForResume}</span>
              </span>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1.5">
              Education
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-white text-sm">
                  {data.education[0].institution}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {data.education[0].period} | {data.education[0].location}
                </span>
              </div>
              <p className="text-xs text-emerald-300/90 font-medium mt-0.5">
                {data.education[0].degree}
              </p>
              <ul className="space-y-1 text-xs text-slate-300 pt-2">
                {data.education[0].highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="space-y-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1.5">
              Professional Experience
            </h2>

            <div className="space-y-5">
              {data.experiences.filter(e => e.isFeatured).map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-bold text-white text-sm">
                      {exp.role}{exp.subtitle ? ` — ${exp.subtitle}` : ''}
                      <span className="font-normal text-slate-400"> | {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.period} | {exp.location}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1 text-xs text-slate-300 pt-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-500 mt-1">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Campus Leadership & Community Service */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1.5">
              Leadership & Community Service
            </h2>

            <div className="space-y-3">
              {data.leadershipRoles.map((lead, i) => (
                <div key={i} className="text-xs space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white">
                      {lead.organization}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {lead.timeline}
                    </span>
                  </div>
                  <span className="text-emerald-300 block">{lead.roles.join(', ')}</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">{lead.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Honors */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1.5">
              Selected Honors & Awards
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {data.honors.map((h, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="font-semibold text-white">
                    {h.title} <span className="text-slate-500 font-mono">({h.year})</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {h.issuer} — {h.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
