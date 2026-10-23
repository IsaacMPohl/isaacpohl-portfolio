import React from 'react';
import { Heart, Quote, ChevronDown, ChevronUp, ExternalLink, Compass, Wrench } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const BeyondCodeSection: React.FC = () => {
  const { data, showAllQuotes, setShowAllQuotes, showFullPost, setShowFullPost } = usePortfolio();

  const marathon = data.personalSection.stJudeMarathon;
  const quotes = data.personalSection.guidingQuotes;
  const featuredQuotes = quotes.filter((q) => q.isFeaturedOnLanding);

  return (
    <section id="outside" className="py-16 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/25 light:border-emerald-300">
            <Heart className="w-3.5 h-3.5" />
            <span>Outside of Work & Core Motivations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Personal Pursuits & Guiding Convictions
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            What drives me to challenge limits, invest time in others, and step outside the safe harbor.
          </p>
        </div>

        {/* 1. Winter 2026 Marathon Training Spotlight */}
        <div id="marathon-spotlight" className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 shadow-xl space-y-6">
          
          {/* Header Strip */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 text-emerald-400 dark:text-emerald-300 light:text-emerald-800 border border-emerald-500/30 light:border-emerald-300">
                  Winter 2026 Marathon • December 5, 2026
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">
                  Memphis, Tennessee • 26.2 Miles
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight mt-1.5">
                {marathon.title}
              </h3>
            </div>

            <a
              href={marathon.officialEventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-emerald-400 dark:text-emerald-300 light:text-emerald-700 hover:text-emerald-300 dark:hover:text-emerald-200 font-semibold bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors shrink-0 self-start sm:self-auto shadow-2xs"
            >
              <span>Official Event Information</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Artwork & Motivation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Artwork Image with Accurate Credit */}
            <div className="md:col-span-5 space-y-3">
              <div className="rounded-2xl overflow-hidden border border-slate-700 dark:border-slate-700 light:border-slate-300 bg-black/40 light:bg-slate-100 shadow-md">
                <img
                  src={marathon.artworkSrc}
                  alt="Artwork by St. Jude Patient Kane: Don't tell me the sky is the limit when there are footprints on the moon"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3 rounded-xl bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed italic text-center">
                {marathon.artworkCredit}
              </div>
            </div>

            {/* Why I Chose the Winter 2026 Marathon */}
            <div className="md:col-span-7 space-y-3.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-700 block">
                  Why I Chose This Race & What Motivates Me
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 mt-1">
                  Testing Limits & Being Part of Something Bigger
                </h4>
              </div>

              <p>
                I decided to train for the <strong>Winter 2026 St. Jude Memphis Marathon</strong> (26.2 miles) because I want those miles to challenge me and give me a way to be part of something bigger than myself.
              </p>

              <p>
                Patient Kane’s artwork says: <em>“Don’t tell me the sky is the limit when there are footprints on the moon.”</em> That quote makes me think about the limits we put on ourselves. I have goals for this race, and I may not reach every one, but I don’t want to decide what I’m capable of before giving myself a chance to try. I want to approach more of life that way, and I hope this encourages someone else to do the same.
              </p>

              {/* Collaborative Effort & Virtual 5K */}
              <div className="p-4 rounded-xl bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 dark:text-emerald-300 light:text-emerald-700 font-semibold text-sm">
                  <Compass className="w-4 h-4" />
                  <span>Doing Our Part Together — St. Jude Virtual 5K</span>
                </div>
                <p className="leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
                  Those footprints on the moon took many people working toward what they believed was possible. In Helen Keller's words, <em>“Alone we can do so little; together we can do so much.”</em> I’m putting together a team and inviting friends to walk or run a 3.1-mile virtual 5K in their neighborhoods or parks during the race window. Maybe my part is 26.2 miles and someone else's is 3.1, but we are supporting the same cause and giving each other something to work toward.
                </p>
              </div>

              {/* Expandable Full Post */}
              <div className="pt-1">
                <button
                  onClick={() => setShowFullPost(!showFullPost)}
                  className="flex items-center justify-between w-full p-3 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 transition-colors border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
                  aria-expanded={showFullPost}
                >
                  <span className="flex items-center gap-2">
                    <Quote className="w-4 h-4 text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />
                    <span>{showFullPost ? 'Hide Full Announcement' : "Read Isaac's Full St. Jude Announcement Post"}</span>
                  </span>
                  {showFullPost ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>

                {showFullPost && (
                  <div className="mt-3 p-5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 whitespace-pre-line leading-relaxed font-sans animate-in fade-in">
                    {marathon.postText}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* 2. Personally Meaningful Quotes */}
        <div id="quotes-section" className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                Quotes That Define Me & Motivate Me
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                Core philosophies that shape how I approach challenges, evaluate effort, and invest time in people.
              </p>
            </div>

            <button
              onClick={() => setShowAllQuotes(!showAllQuotes)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors shrink-0"
              aria-expanded={showAllQuotes}
            >
              <span>{showAllQuotes ? 'Show Featured Quotes (2)' : 'View All 6 Quotes'}</span>
              {showAllQuotes ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(showAllQuotes ? quotes : featuredQuotes).map((q) => (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-600 flex items-center justify-center border border-emerald-500/20">
                    <Quote className="w-4 h-4" />
                  </div>
                  
                  <blockquote className="text-sm font-semibold text-white dark:text-white light:text-slate-900 leading-snug">
                    "{q.quote}"
                  </blockquote>
                  
                  <div className="text-xs text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-medium">
                    — {q.author}
                    <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 font-normal block mt-0.5">
                      {q.sourceCredit}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 block mb-1">
                    How it relates to me:
                  </span>
                  {q.contextNote}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Personal Interests Outside of Work */}
        <div id="hobbies-section" className="space-y-4">
          <div className="border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
              Personal Interests & Life Outside Work
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
              Activities that keep me grounded, curious, active, and disciplined.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.personalSection.hobbies.map((hobby, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-1.5 text-xs shadow-sm"
              >
                <h4 className="font-bold text-white dark:text-white light:text-slate-900 text-sm">
                  {hobby.title}
                </h4>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed text-[11px]">
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
