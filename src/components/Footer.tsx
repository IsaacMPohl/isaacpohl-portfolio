import React from 'react';
import { ArrowUp, Linkedin, Mail, Sprout } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { data } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 py-10 text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs transition-colors">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pb-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs tracking-tight shadow-xs">
              IP
            </div>
            <div>
              <span className="font-bold text-white dark:text-white light:text-slate-900 text-sm">
                {data.profile.name}
              </span>
              <p className="text-[11px] text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-medium mt-0.5 flex items-center gap-1">
                <Sprout className="w-3.5 h-3.5" />
                <span>Murray State University • Computer Science & Agriculture–Agriscience Technology</span>
              </p>
            </div>
          </div>

          {/* Direct Professional Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={data.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 transition-colors border border-slate-800 dark:border-slate-800 light:border-slate-300 shadow-2xs"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />
            </a>

            <a
              href={`mailto:${data.profile.email}`}
              className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 transition-colors border border-slate-800 dark:border-slate-800 light:border-slate-300 shadow-2xs"
              title="Send Direct Email"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4 text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 dark:text-slate-400 light:text-slate-600 text-[11px]">
          <p>
            © {new Date().getFullYear()} {data.profile.name} • Junior at Murray State University. Seeking 2027 agricultural technology opportunities.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-semibold text-emerald-400 dark:text-emerald-400 light:text-emerald-700 hover:text-emerald-300 dark:hover:text-emerald-300 light:hover:text-emerald-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1.5 py-0.5"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
