import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Compass, Search, FileText, Linkedin, Mail } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Navbar: React.FC = () => {
  const { data, activeSection, setActiveSection, theme, toggleTheme, setIsExploreOpen } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll listener for sticky styling and section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['about', 'work', 'experience', 'leadership', 'outside', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Leadership & Service', href: '#leadership', id: 'leadership' },
    { label: 'Outside of Work', href: '#outside', id: 'outside' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0b0f19]/95 dark:bg-[#0b0f19]/95 light:bg-white/95 backdrop-blur-md border-b border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-md py-3'
          : 'bg-[#0b0f19]/85 dark:bg-[#0b0f19]/85 light:bg-slate-50/90 backdrop-blur-xs py-3.5 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#about"
          onClick={() => handleNavClick('about')}
          className="flex items-center gap-2.5 text-white light:text-slate-900 group rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 light:text-emerald-700 light:bg-emerald-100 border border-emerald-500/30 flex items-center justify-center font-bold text-xs tracking-tight">
            IP
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-white light:text-slate-900 group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors block leading-tight">
              {data.profile.name}
            </span>
            <span className="text-[11px] text-slate-400 light:text-slate-500 block leading-tight">
              Murray State University
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleNavClick(link.id)}
              className={`px-3 py-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                activeSection === link.id
                  ? 'text-emerald-300 light:text-emerald-700 bg-emerald-500/15 light:bg-emerald-100 font-semibold'
                  : 'text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 light:hover:bg-slate-200/60'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Toolbar: Explore Search + Theme Toggle + Resume */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Explore Button */}
          <button
            onClick={() => setIsExploreOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 bg-slate-800/70 light:bg-slate-200/70 border border-slate-700/80 light:border-slate-300 hover:border-emerald-500/50 transition-colors"
            title="Search & Explore Portfolio (Press / or click)"
          >
            <Compass className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600" />
            <span>Explore</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 bg-slate-800/70 light:bg-slate-200/70 border border-slate-700/80 light:border-slate-300 transition-colors"
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
            onClick={() => handleNavClick('resume')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex lg:hidden items-center gap-1.5">
          <button
            onClick={() => setIsExploreOpen(true)}
            className="p-2 rounded-lg text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 bg-slate-800/60 light:bg-slate-200"
            aria-label="Open Explore & Search menu"
          >
            <Search className="w-4 h-4 text-emerald-400 light:text-emerald-600" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 bg-slate-800/60 light:bg-slate-200"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="p-2 rounded-lg text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 bg-slate-800/60 light:bg-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 dark:bg-slate-900 light:bg-white border-b border-slate-800 dark:border-slate-800 light:border-slate-200 px-4 py-4 space-y-3 animate-in fade-in shadow-xl">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-emerald-400 light:text-emerald-700 bg-emerald-500/15 light:bg-emerald-100 font-semibold'
                    : 'text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 hover:bg-slate-800 light:hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between text-xs text-slate-400 light:text-slate-600">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsExploreOpen(true);
              }}
              className="flex items-center gap-1.5 text-emerald-400 light:text-emerald-700 font-semibold"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Topics</span>
            </button>
            <div className="flex items-center gap-3">
              <a href={`mailto:${data.profile.email}`} className="text-slate-300 light:text-slate-700 hover:text-emerald-400">
                <Mail className="w-4 h-4" />
              </a>
              <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 light:text-slate-700 hover:text-emerald-400">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
