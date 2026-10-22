import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles, Sprout, Code2, Compass, HeartHandshake, User, FileText, ChevronRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { searchExploreIndex, SearchResultItem, EXPLORE_INDEX } from '../utils/portfolioLogic';

export const ExploreMenu: React.FC = () => {
  const { isExploreOpen, setIsExploreOpen, navigateToItem } = usePortfolio();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const searchResults = query.trim() ? searchExploreIndex(query) : [];

  useEffect(() => {
    if (isExploreOpen) {
      setQuery('');
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsExploreOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isExploreOpen, setIsExploreOpen]);

  if (!isExploreOpen) return null;

  const categories = [
    { name: 'Software & AI Work', icon: Code2, cat: 'Projects' as const },
    { name: 'Agriculture & Fieldwork', icon: Sprout, cat: 'Experience' as const },
    { name: 'Research Interests', icon: Compass, cat: 'Research' as const },
    { name: 'Leadership & Service', icon: HeartHandshake, cat: 'Leadership' as const },
    { name: 'Personal Interests', icon: User, cat: 'Personal' as const },
    { name: 'Résumé & Contact', icon: FileText, cat: 'Resume & Contact' as const }
  ];

  return (
    <div
      id="explore-modal"
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 pb-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="explore-title"
      onClick={() => setIsExploreOpen(false)}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-slate-900 dark:bg-[#0f172a] light:bg-white text-slate-100 light:text-slate-900 rounded-2xl border border-slate-700/80 light:border-slate-300 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 light:border-slate-200 flex items-center gap-3 bg-slate-950/60 light:bg-slate-50">
          <Search className="w-5 h-5 text-emerald-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by topic, employer, or keyword (e.g., OneMain, digital twins, 4-H, greenhouse, running)..."
            className="flex-1 bg-transparent text-sm sm:text-base text-white light:text-slate-900 placeholder-slate-400 light:placeholder-slate-500 focus:outline-none"
            aria-label="Search portfolio"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-white light:hover:text-slate-900"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsExploreOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white light:hover:text-slate-900 hover:bg-slate-800 light:hover:bg-slate-200 transition-colors"
            aria-label="Close explore menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {query.trim() ? (
            /* Search Results */
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 light:text-slate-500">
                <span>Search Results for "{query}"</span>
                <span>{searchResults.length} {searchResults.length === 1 ? 'match' : 'matches'}</span>
              </div>

              {searchResults.length > 0 ? (
                <div className="space-y-2">
                  {searchResults.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigateToItem(item)}
                      className="w-full text-left p-3.5 rounded-xl bg-slate-800/60 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-700/60 light:border-slate-300 transition-all flex items-start justify-between gap-3 group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 light:bg-emerald-100 light:text-emerald-800 border border-emerald-500/20 light:border-emerald-300">
                            {item.category}
                          </span>
                          <span className="font-bold text-white light:text-slate-900 text-sm group-hover:text-emerald-400 light:group-hover:text-emerald-700 transition-colors">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 light:text-slate-600">
                          {item.subtitle}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-slate-400 light:text-slate-500 space-y-2">
                  <p>No exact matches found for "{query}".</p>
                  <p className="text-xs text-slate-500 light:text-slate-400">
                    Try searching for "OneMain", "Access", "Greenhouse", "ATO", "4-H", "Marathon", or "Resume".
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Categorized Shortcuts */
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 id="explore-title" className="text-sm font-bold text-white light:text-slate-900 uppercase tracking-wider font-mono text-emerald-400 light:text-emerald-700">
                  Explore by Topic
                </h3>
                <p className="text-xs text-slate-400 light:text-slate-500">
                  Select a section or specific topic to jump directly to that part of the portfolio.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((catGroup, idx) => {
                  const Icon = catGroup.icon;
                  const groupItems = EXPLORE_INDEX.filter((item) => item.category === catGroup.cat);

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-800/40 light:bg-slate-100 border border-slate-700/60 light:border-slate-300 space-y-3"
                    >
                      <div className="flex items-center gap-2 font-bold text-sm text-white light:text-slate-900">
                        <Icon className="w-4 h-4 text-emerald-400 light:text-emerald-600" />
                        <span>{catGroup.name}</span>
                      </div>

                      <div className="space-y-1.5">
                        {groupItems.slice(0, 3).map((item) => (
                          <button
                            key={item.id}
                            onClick={() => navigateToItem(item)}
                            className="w-full text-left text-xs text-slate-300 light:text-slate-700 hover:text-emerald-300 light:hover:text-emerald-800 flex items-center justify-between py-1 px-1.5 rounded hover:bg-slate-700/40 light:hover:bg-slate-200 transition-colors"
                          >
                            <span className="truncate pr-2">{item.title}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-slate-800 light:border-slate-200 bg-slate-950/40 light:bg-slate-50 text-[11px] text-slate-400 light:text-slate-500 flex items-center justify-between">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-700 font-mono text-[10px]">ESC</kbd> to exit</span>
          <span className="text-emerald-400 light:text-emerald-700 font-medium">Navigates directly & highlights content</span>
        </div>
      </div>
    </div>
  );
};
