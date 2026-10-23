import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Printer, Copy, Check, Mail, Phone, MapPin, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { generateApplicationSummary } from '../utils/portfolioLogic';

export const ResumeSection: React.FC = () => {
  const { data, isQuickFillOpen, setIsQuickFillOpen } = usePortfolio();
  const [copiedText, setCopiedText] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // Reliable PDF URLs (root and relative paths)
  const pdfUrl = `${import.meta.env.BASE_URL}Isaac_Pohl_Resume.pdf`;
  const fallbackPdfUrl = `${import.meta.env.BASE_URL}assets/aistudio/Isaac_Pohl_-_Resume_5fa38e69.pdf`;

  const resume = data.resumeData;

  const appSummary = generateApplicationSummary({
    name: data.profile.name,
    major: data.profile.major,
    university: data.profile.university,
    graduationDate: data.profile.graduationDate,
    email: data.profile.email,
    linkedin: data.profile.linkedin,
    phone: data.profile.phone,
    address: data.profile.address,
    gpa: data.profile.gpa,
    portfolioUrl: undefined,
    quickFillSummary: data.profile.quickFillSummary
  });

  const handlePrint = () => {
    window.print();
  };

  /**
   * Robust PDF download handler:
   * Fetches the binary PDF file as a blob and triggers a browser file download.
   * Works reliably across desktop, mobile, and sandboxed iframe previews.
   */
  const handleDownloadPdf = async () => {
    try {
      setIsDownloading(true);
      // Try primary path first, then fallback path
      let response = await fetch(pdfUrl);
      if (!response.ok) {
        response = await fetch(fallbackPdfUrl);
      }
      if (!response.ok) throw new Error('Could not fetch PDF file');

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const tempLink = document.createElement('a');
      tempLink.href = blobUrl;
      tempLink.setAttribute('download', 'Isaac_Pohl_Resume.pdf');
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);

      // Clean up blob URL after download initiates
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1500);
    } catch (error) {
      console.warn('Direct blob download failed, falling back to window.open', error);
      // Fallback: Open in new window/tab so user can save directly
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopyPlainText = () => {
    const textResume = [
      resume.fullName,
      resume.address,
      `${resume.email} | ${resume.phone}`,
      resume.linkedinDisplay,
      '',
      'Education',
      ...resume.education.map(edu => {
        const header = `${edu.institution}  ${edu.period}`;
        const details = [
          edu.gpa ? `GPA - ${edu.gpa}` : null,
          edu.degree || null
        ].filter(Boolean).join('\n');
        return details ? `${header}\n${details}` : header;
      }),
      '',
      'Work Experience',
      ...resume.experience.map(exp => [
        `${exp.company}  ${exp.period}`,
        exp.role,
        ...exp.bullets.map(b => `● ${b}`)
      ].join('\n')),
      '',
      'Extracurriculars',
      ...resume.extracurriculars.map(extra => `${extra.organization}\n${extra.roleAndTimeline}`),
      '',
      'Technical Skills',
      `Languages: ${resume.technicalSkills.languages}`,
      `AI & Data: ${resume.technicalSkills.aiAndData}`,
      `Frameworks & Web: ${resume.technicalSkills.frameworksAndWeb}`,
      `Databases: ${resume.technicalSkills.databases}`,
      `Tools: ${resume.technicalSkills.tools}`
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
    <section id="resume" className="py-16 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-[#f8fafc] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header & Action Toolbar */}
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
              Official one-page resume matching the verified PDF document.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {/* Primary Download Button with Blob fetch fallback */}
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xs cursor-pointer disabled:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shrink-0"
              title="Download official PDF copy directly"
            >
              {isDownloading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
              <span>{isDownloading ? 'Downloading...' : 'Download PDF'}</span>
            </button>

            {/* Direct Open in New Tab for iframe / sandbox environments */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 dark:bg-slate-800 light:bg-white hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors shadow-2xs shrink-0"
              title="Open PDF directly in a new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600" />
              <span>View PDF</span>
            </a>

            {/* Print / Save as PDF */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 dark:bg-slate-800 light:bg-white hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors shadow-2xs cursor-pointer shrink-0"
              title="Open browser print dialog to save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600" />
              <span>Print</span>
            </button>

            {/* Copy Plain Text */}
            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 dark:bg-slate-800/80 light:bg-white hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 transition-colors cursor-pointer shrink-0"
              title="Copy plain text formatted for text editors"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText ? 'Copied' : 'Copy Text'}</span>
            </button>

            {/* Quick-Fill Toggle */}
            <button
              onClick={() => setIsQuickFillOpen(!isQuickFillOpen)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 transition-colors cursor-pointer shrink-0"
              aria-expanded={isQuickFillOpen}
            >
              <span>Quick-Fill</span>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
              {Object.entries(appSummary.quickFields).map(([label, val]) => (
                <div key={label} className="p-2.5 rounded-lg bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 block">{label}</span>
                    <span className="text-xs text-white dark:text-white light:text-slate-900 font-medium truncate block">{val}</span>
                  </div>
                  <button
                    onClick={() => handleCopyField(label, val)}
                    className="p-1.5 rounded bg-slate-700 dark:bg-slate-700 light:bg-slate-200 hover:bg-slate-600 dark:hover:bg-slate-600 light:hover:bg-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 shrink-0 transition-colors cursor-pointer"
                    title={`Copy ${label}`}
                  >
                    {copiedField === label ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ATS-Clean Printable Resume Card - Exact 1-to-1 match with the authentic PDF */}
        <div id="resume-print-card" className="p-6 sm:p-10 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 shadow-xl space-y-6 text-xs sm:text-sm">
          
          {/* Resume Header - Centered as in PDF */}
          <div className="text-center border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-4 space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight font-serif">
              {resume.fullName}
            </h1>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              {resume.address}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
              <a href={`mailto:${resume.email}`} className="hover:text-emerald-400 light:hover:text-emerald-700 transition-colors">
                {resume.email}
              </a>
              <span className="text-slate-500">|</span>
              <a href={`tel:${resume.phone.replace(/[^0-9]/g, '')}`} className="hover:text-emerald-400 light:hover:text-emerald-700 transition-colors">
                {resume.phone}
              </a>
              <span className="text-slate-500">|</span>
              <a href={resume.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 light:hover:text-emerald-700 transition-colors">
                {resume.linkedinDisplay}
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white dark:text-white light:text-slate-900 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-1 font-serif">
              Education
            </h2>
            <div className="space-y-2">
              {resume.education.map((edu, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-semibold text-white dark:text-white light:text-slate-900">
                      {edu.institution}
                    </span>
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono text-xs shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  {edu.gpa && (
                    <div className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs">
                      GPA - {edu.gpa}
                    </div>
                  )}
                  {edu.degree && (
                    <div className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs">
                      {edu.degree}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white dark:text-white light:text-slate-900 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-1 font-serif">
              Work Experience
            </h2>

            <div className="space-y-4">
              {resume.experience.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-bold text-white dark:text-white light:text-slate-900 text-xs sm:text-sm">
                      {exp.company}
                    </span>
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono text-xs shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <div className="font-medium text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs italic">
                    {exp.role}
                  </div>
                  <ul className="space-y-1 pt-0.5">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                        <span className="text-slate-500 dark:text-slate-500 light:text-slate-400 mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Two-Column Split: Extracurriculars & Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
            
            {/* Extracurriculars */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white dark:text-white light:text-slate-900 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-1 font-serif">
                Extracurriculars
              </h2>
              <div className="space-y-2.5">
                {resume.extracurriculars.map((extra, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-bold text-white dark:text-white light:text-slate-900 text-xs">
                      {extra.organization}
                    </div>
                    <div className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-[11px] leading-snug">
                      {extra.roleAndTimeline}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white dark:text-white light:text-slate-900 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-1 font-serif">
                Technical Skills
              </h2>
              <div className="space-y-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                <div>
                  <span className="font-bold text-white dark:text-white light:text-slate-900">Languages: </span>
                  <span>{resume.technicalSkills.languages}</span>
                </div>
                <div>
                  <span className="font-bold text-white dark:text-white light:text-slate-900">AI & Data: </span>
                  <span>{resume.technicalSkills.aiAndData}</span>
                </div>
                <div>
                  <span className="font-bold text-white dark:text-white light:text-slate-900">Frameworks & Web: </span>
                  <span>{resume.technicalSkills.frameworksAndWeb}</span>
                </div>
                <div>
                  <span className="font-bold text-white dark:text-white light:text-slate-900">Databases: </span>
                  <span>{resume.technicalSkills.databases}</span>
                </div>
                <div>
                  <span className="font-bold text-white dark:text-white light:text-slate-900">Tools: </span>
                  <span>{resume.technicalSkills.tools}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
