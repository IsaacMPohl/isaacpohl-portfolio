import React, { useState } from 'react';
import { Heart, Quote, ChevronDown, ChevronUp, ExternalLink, Compass } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const BeyondCodeSection: React.FC = () => {
  const { data } = usePortfolio();
  const [showFullPost, setShowFullPost] = useState(false);

  const marathon = data.personalSection.stJudeMarathon;
  const quotes = data.personalSection.guidingQuotes;

  return (
    <section id="outside" className="py-24 border-t border-slate-800/60 bg-[#090d16]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/25">
            <Heart className="w-3.5 h-3.5 text-indigo-400" />
            <span>Outside of Work & Core Motivations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Personal Pursuits & Guiding Convictions
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            What drives me to challenge limits, invest time in others, and step outside the safe harbor.
          </p>
        </div>

        {/* 1. Winter 2026 Marathon Training Spotlight */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-8">
          
          {/* Header Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Winter 2026 Marathon • December 5, 2026
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Memphis, Tennessee • 26.2 Miles
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1.5">
                {marathon.title}
              </h3>
            </div>

            <a
              href={marathon.officialEventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <span>Official Event Information</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Artwork & Motivation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Artwork Image with Accurate Credit */}
            <div className="md:col-span-5 space-y-3">
              <div className="rounded-2xl overflow-hidden border border-slate-700 bg-black/60 shadow-lg group">
                <img
                  src={marathon.artworkSrc}
                  alt="Artwork by St. Jude Patient Kane: Don't tell me the sky is the limit when there are footprints on the moon"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800 text-[11px] text-slate-400 leading-relaxed italic text-center">
                {marathon.artworkCredit}
              </div>
            </div>

            {/* Why I Chose the Winter 2026 Marathon & What Motivates Me */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                  Why I Chose This Race & What Motivates Me
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  Testing Limits & Being Part of Something Bigger
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                I decided to train for the <strong>Winter 2026 St. Jude Memphis Marathon</strong> (26.2 miles) because I want those miles to challenge me and give me a way to be part of something bigger than myself.
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Patient Kane’s artwork says: <em>“Don’t tell me the sky is the limit when there are footprints on the moon.”</em> That makes me think about the limits we put on ourselves. I have goals for this race, and I may not reach every one, but I don’t want to decide what I’m capable of before giving myself a chance to try. I want to approach more of life that way, and I hope this encourages others to do the same.
              </p>

              {/* Collaborative Effort & Virtual 5K */}
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>Doing Our Part Together — St. Jude Virtual 5K</span>
                </div>
                <p className="leading-relaxed">
                  Those footprints on the moon took many people working toward what they believed was possible. In Helen Keller's words, <em>“Alone we can do so little; together we can do so much.”</em> I am putting together a team and inviting friends to walk or run a 3.1-mile virtual 5K in their neighborhoods or parks during the race window. Maybe my part is 26.2 miles and someone else's is 3.1, but we are supporting the same cause and giving each other something to work toward.
                </p>
              </div>

              {/* Expandable Saved Post */}
              <div className="pt-1">
                <button
                  onClick={() => setShowFullPost(!showFullPost)}
                  className="flex items-center justify-between w-full p-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-semibold text-slate-200 transition-colors border border-slate-700/60"
                  aria-expanded={showFullPost}
                >
                  <span className="flex items-center gap-2">
                    <Quote className="w-4 h-4 text-emerald-400" />
                    <span>{showFullPost ? 'Hide Full Post' : "Read Isaac's Full St. Jude Announcement Post"}</span>
                  </span>
                  {showFullPost ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>

                {showFullPost && (
                  <div className="mt-3 p-5 rounded-xl bg-[#0b0f19] border border-slate-800 text-xs text-slate-300 whitespace-pre-line leading-relaxed font-sans animate-in fade-in">
                    {marathon.postText}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* 2. All 6 Personally Meaningful & Motivating Quotes */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Quotes That Define Me & Motivate Me
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Core philosophies that shape how I approach challenges, evaluate effort, and invest time in people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {quotes.map((q) => (
              <div
                key={q.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                    <Quote className="w-4 h-4" />
                  </div>
                  
                  <blockquote className="text-sm font-semibold text-white leading-snug">
                    "{q.quote}"
                  </blockquote>
                  
                  <div className="text-xs text-emerald-400 font-medium">
                    — {q.author}
                    <span className="text-[11px] text-slate-500 font-normal block mt-0.5">
                      {q.sourceCredit}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    How it relates to me:
                  </span>
                  {q.contextNote}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Personal Interests Outside of Work */}
        <div className="space-y-4 pt-4">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Personal Interests & Life Outside Work
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Activities that keep me grounded, curious, active, and disciplined.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.personalSection.hobbies.map((hobby, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2 text-xs"
              >
                <h4 className="font-bold text-white text-sm">
                  {hobby.title}
                </h4>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
