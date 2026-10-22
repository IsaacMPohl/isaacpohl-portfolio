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
    <section id="contact" className="py-24 border-t border-slate-800/60 bg-[#090d16]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Interested in discussing 2027 internship opportunities, applied agricultural technology research, or collaborative projects.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Direct Action Card */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-5 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Email Isaac
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Direct professional email for inquiries, applications, and research discussions.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm text-white select-all">
                  {data.profile.email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${data.profile.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <span>Send Direct Email</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-5 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  LinkedIn Profile
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Connect on LinkedIn for professional background, endorsements, and collegiate network.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-slate-300 truncate">
                  linkedin.com/in/isaac-pohl
                </span>
                <span className="text-[11px] text-slate-400 font-mono shrink-0">
                  Verified
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={data.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>Open LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Location & Status Note */}
        <div className="text-center text-xs text-slate-400 space-y-1">
          <p>
            Current Location: Haubstadt / Princeton, Indiana & Murray, Kentucky (Murray State University)
          </p>
          <p className="text-emerald-400/90 font-medium">
            {data.profile.statusLine}
          </p>
        </div>

      </div>
    </section>
  );
};
