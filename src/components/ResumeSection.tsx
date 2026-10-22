import React, { useState } from 'react';
import { FileText, Download, Printer, Copy, Check, Mail, Linkedin, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { generateApplicationSummary } from '../utils/portfolioLogic';

export const ResumeSection: React.FC = () => {
  const { data, isQuickFillOpen, setIsQuickFillOpen } = usePortfolio();
  const [copiedText, setCopiedText] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const pdfUrl = `${import.meta.env.BASE_URL}assets/aistudio/Isaac_Pohl_-_Resume_5fa38e69.pdf`;

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
      ...data.honors.map(h => `• ${h.title}${h.year ? ` (${h.year})` : ''} — ${h.issuer}`)
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
    <section id="resume" className="py-16 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-5 no-print">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/25 light:border-emerald-300">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mt-1">
              Resume
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
              Curriculum vitae, education, technical experience, and community leadership.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Real PDF Download */}
            <a
              href={pdfUrl}
              download="Isaac_Pohl_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            {/* Print / Save as PDF */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 dark:bg-slate-800 light:bg-white hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4 text-emerald-400 light:text-emerald-600" />
              <span>Print / Save as PDF</span>
            </button>

            {/* Copy Plain Text */}
            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800/80 dark:bg-slate-800/80 light:bg-white hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 transition-colors"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText ? 'Copied' : 'Copy Text'}</span>
            </button>

            {/* Quick-Fill Toggle */}
            <button
              onClick={() => setIsQuickFillOpen(!isQuickFillOpen)}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 transition-colors"
              aria-expanded={isQuickFillOpen}
            >
              <span>Application Quick-Fill</span>
              {isQuickFillOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Quiet Quick-Fill Drawer */}
        {isQuickFillOpen && (
          <div id="quick-fill-drawer" className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs space-y-3 no-print animate-in fade-in shadow-md">
            <div className="flex items-center justify-between border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-2">
              <span className="font-bold text-white dark:text-white light:text-slate-900">
                Application Form Quick-Fill (Predefined Profile Data)
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
                1-click copy verified fields for job/internship applications
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {Object.entries(appSummary.quickFields).map(([label, val]) => (
                <div key={label} className="p-2.5 rounded-lg bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 block">{label}</span>
                    <span className="text-xs text-white dark:text-white light:text-slate-900 font-medium truncate block">{val}</span>
                  </div>
                  <button
                    onClick={() => handleCopyField(label, val)}
                    className="p-1.5 rounded bg-slate-700 dark:bg-slate-700 light:bg-slate-200 hover:bg-slate-600 dark:hover:bg-slate-600 light:hover:bg-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 shrink-0 transition-colors"
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
        <div id="resume-print-card" className="p-6 sm:p-10 rounded-3xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 shadow-xl space-y-7 text-xs sm:text-sm">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-5 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              {data.profile.name}
            </h1>
            <p className="text-xs sm:text-sm text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-semibold">
              {data.profile.major} • Junior, Murray State University
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 pt-1">
              <a href={`mailto:${data.profile.email}`} className="flex items-center gap-1.5 hover:text-white light:hover:text-slate-900">
                <Mail className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600" />
                <span>{data.profile.email}</span>
              </a>
              <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white light:hover:text-slate-900">
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>linkedin.com/in/isaac-pohl</span>
              </a>
              <span className="flex items-center gap-1.5 text-slate-400 dark:text-slate-400 light:text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-500 light:text-slate-400" />
                <span>{data.profile.locationForResume}</span>
              </span>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-1.5">
              Education
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-white dark:text-white light:text-slate-900 text-sm">
                  {data.education[0].institution}
                </span>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                  {data.education[0].period} | {data.education[0].location}
                </span>
              </div>
              <p className="text-xs text-emerald-300 dark:text-emerald-300 light:text-emerald-700 font-medium mt-0.5">
                {data.education[0].degree}
              </p>
              <ul className="space-y-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 pt-2">
                {data.education[0].highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="space-y-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-1.5">
              Professional Experience
            </h2>

            <div className="space-y-4">
              {data.experiences.filter(e => e.isFeatured).map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-bold text-white dark:text-white light:text-slate-900 text-sm">
                      {exp.role}{exp.subtitle ? ` — ${exp.subtitle}` : ''}
                      <span className="font-normal text-slate-400 dark:text-slate-400 light:text-slate-500"> | {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                      {exp.period} | {exp.location}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed italic">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 pt-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-500 dark:text-slate-500 light:text-slate-400 mt-1">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Campus Leadership & Community Service */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-1.5">
              Leadership & Community Service
            </h2>

            <div className="space-y-2.5">
              {data.leadershipRoles.map((lead, i) => (
                <div key={i} className="text-xs space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white dark:text-white light:text-slate-900">
                      {lead.organization}
                    </span>
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono text-[11px]">
                      {lead.timeline}
                    </span>
                  </div>
                  <span className="text-emerald-300 dark:text-emerald-300 light:text-emerald-700 block">{lead.roles.join(', ')}</span>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-[11px] leading-relaxed">{lead.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Honors (Clean without empty parentheses) */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-1.5">
              Selected Honors & Awards
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {data.honors.map((h, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="font-semibold text-white dark:text-white light:text-slate-900">
                    {h.title} {h.year ? <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">({h.year})</span> : null}
                  </div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
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
