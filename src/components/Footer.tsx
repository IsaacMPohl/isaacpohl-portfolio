import React from 'react';
import { ArrowUp, Linkedin, Mail, Sprout } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { data } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#090d16] py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs tracking-tight">
              IP
            </div>
            <div>
              <span className="font-bold text-slate-100 text-sm">
                {data.profile.name}
              </span>
              <p className="text-[11px] text-emerald-400 font-mono mt-0.5 flex items-center gap-1">
                <Sprout className="w-3 h-3 text-emerald-400" />
                <span>Murray State University • Agriculture & Computer Science</span>
              </p>
            </div>
          </div>

          {/* Direct Professional Links */}
          <div className="flex items-center gap-3">
            <a
              href={data.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
            </a>

            <a
              href={`mailto:${data.profile.email}`}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
              title="Send Direct Email"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>
            © {new Date().getFullYear()} {data.profile.name} • Junior at Murray State University. Seeking 2027 agricultural technology opportunities.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-mono text-slate-400 hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1"
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
