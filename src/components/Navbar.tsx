import React, { useState, useEffect } from 'react';
import { Sun, Moon, Search, FileText, Menu, X } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, activeSection, setIsExploreOpen, isExploreOpen } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut '/' to trigger unified explore & search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) &&
        !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        setIsExploreOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsExploreOpen]);

  const navLinks = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'leadership', label: 'Leadership & Service', href: '#leadership' },
    { id: 'outside', label: 'Outside of Work', href: '#outside' },
    { id: 'resume', label: 'Resume', href: '#resume' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#0b0f19]/90 dark:bg-[#0b0f19]/90 light:bg-white/95 backdrop-blur-md border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-sm'
          : 'bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-[#f8fafc] border-transparent'
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('about');
          }}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          aria-label="Isaac Pohl Portfolio Home"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-600 group-hover:bg-emerald-500 text-white flex items-center justify-center font-bold text-xs tracking-tight transition-colors shadow-xs">
            IP
          </div>
          <div>
            <span className="font-bold text-white dark:text-white light:text-slate-900 text-sm tracking-tight group-hover:text-emerald-400 dark:group-hover:text-emerald-400 light:group-hover:text-emerald-700 transition-colors block">
              Isaac Pohl
            </span>
            <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 leading-none hidden sm:block">
              Murray State University
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (>= lg: 1024px) */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-emerald-400 dark:text-emerald-400 light:text-emerald-700 bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100/80 font-semibold shadow-2xs'
                  : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-200/60'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Toolbar (>= lg: 1024px): Explore & Search + Theme Toggle + Resume */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Unified Explore & Search Button */}
          <button
            onClick={() => setIsExploreOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-800/70 dark:bg-slate-800/70 light:bg-slate-200/70 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 hover:border-emerald-500/50 transition-colors cursor-pointer"
            title="Search & Explore Portfolio (Press / to open)"
          >
            <Search className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />
            <span>Explore</span>
            <kbd className="text-[10px] font-mono px-1 py-0.2 rounded bg-slate-700/80 dark:bg-slate-700/80 light:bg-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700">
              /
            </kbd>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-800/70 dark:bg-slate-800/70 light:bg-slate-200/70 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 transition-colors cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Direct Resume Link */}
          <a
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('resume');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile & Tablet Controls (< lg: 1024px): Strictly ONE Theme Toggle + ONE Unified Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Exactly ONE Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-200/80 border border-slate-700/70 dark:border-slate-700/70 light:border-slate-300 transition-colors cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Exactly ONE Unified Menu & Explore Button that does it all */}
          <button
            onClick={() => setIsExploreOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white dark:text-white light:text-slate-900 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200/90 border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-emerald-500/50 transition-colors cursor-pointer"
            aria-label="Open menu, search, and navigation"
          >
            <Search className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />
            <span>Menu</span>
          </button>
        </div>

      </div>
    </header>
  );
};
