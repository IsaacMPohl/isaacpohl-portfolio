/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { ExploreMenu } from './components/ExploreMenu';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CommunitySection } from './components/CommunitySection';
import { BeyondCodeSection } from './components/BeyondCodeSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-white text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 shadow-lg hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}

function PortfolioAppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-[#f8fafc] text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-200">
      {/* Skip to Content for Keyboard and Screen Reader Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top sticky navigation */}
      <Navbar />

      {/* Global Explore Menu Modal with Keyboard ESC / Live Search */}
      <ExploreMenu />

      {/* Main Content Flow */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero & Introduction */}
        <HeroSection />

        {/* 2. Background, Academic Focus, Research Interests & Skills */}
        <AboutSection />

        {/* 3. Featured Projects & Technical Coursework */}
        <ProjectsSection />

        {/* 4. Professional Experience & Agronomy Fieldwork */}
        <ExperienceTimeline />

        {/* 5. Collegiate Leadership, Outreach & Honors */}
        <CommunitySection />

        {/* 6. Life Outside Work (St. Jude Marathon, Patient Kane Artwork, Quotes, Hobbies) */}
        <BeyondCodeSection />

        {/* 7. Résumé, PDF Download, Quick-Fill Helper */}
        <ResumeSection />

        {/* 8. Direct Contact & Professional Links */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back-to-Top Button */}
      <BackToTopButton />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioAppContent />
    </PortfolioProvider>
  );
}
