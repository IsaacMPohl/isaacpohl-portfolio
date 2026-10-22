import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail, FileText, ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Navbar: React.FC = () => {
  const { data, activeSection, setActiveSection } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#about"
          onClick={() => handleNavClick('about')}
          className="flex items-center gap-2.5 text-white group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs tracking-tight">
            IP
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-emerald-300 transition-colors block leading-tight">
              {data.profile.name}
            </span>
            <span className="text-[11px] text-slate-400 block leading-tight">
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
              className={`px-3 py-1.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                activeSection === link.id
                  ? 'text-emerald-300 bg-emerald-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action & Social */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={data.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Isaac Pohl LinkedIn Profile (opens in new tab)"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${data.profile.email}`}
            aria-label="Email Isaac Pohl"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>{data.profile.email}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1424] border-b border-slate-800 px-4 py-4 space-y-2 animate-in fade-in">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-emerald-300 bg-emerald-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <a
              href={`mailto:${data.profile.email}`}
              className="flex items-center gap-1.5 text-emerald-400 hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>{data.profile.email}</span>
            </a>
            <a
              href={data.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-300 hover:text-white"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
