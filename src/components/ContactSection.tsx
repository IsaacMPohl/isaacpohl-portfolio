import React, { useState } from 'react';
import { Mail, Linkedin, Copy, Check, ExternalLink, ArrowRight, MapPin } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ContactSection: React.FC = () => {
  const { data } = usePortfolio();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-slate-50/70 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/25 light:border-emerald-300">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries & Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            Interested in discussing 2027 agricultural technology opportunities, applied research, or collegiate initiatives.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Direct Action Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-slate-700 dark:hover:border-slate-700 light:hover:border-slate-400 transition-all space-y-5 flex flex-col justify-between shadow-sm">
            <div className="space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/20 light:border-emerald-300 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                  Email Isaac
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5 leading-snug">
                  Direct professional email for inquiries, applications, and research discussions.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold select-all truncate">
                  {data.profile.email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 dark:bg-slate-800 light:bg-white hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 transition-colors shrink-0 shadow-xs"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${data.profile.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Send Direct Email</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-slate-700 dark:hover:border-slate-700 light:hover:border-slate-400 transition-all space-y-5 flex flex-col justify-between shadow-sm">
            <div className="space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/20 light:border-emerald-300 flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                  LinkedIn Profile
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5 leading-snug">
                  Connect on LinkedIn for professional background, recommendations, and network updates.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold truncate">
                  linkedin.com/in/isaac-pohl
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 light:text-slate-500 font-mono shrink-0">
                  Profile
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={data.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-white dark:text-white light:text-slate-900 border border-slate-700 dark:border-slate-700 light:border-slate-300 font-semibold text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-xs"
              >
                <span>Open LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-400 light:text-slate-600" />
              </a>
            </div>
          </div>

        </div>

        {/* Location & Status Note */}
        <div className="text-center text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 space-y-1.5 pt-2">
          <p className="flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Based in Murray, Kentucky (Murray State University); from southwestern Indiana</span>
          </p>
          <p className="text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-semibold">
            {data.profile.statusLine}
          </p>
        </div>

      </div>
    </section>
  );
};
