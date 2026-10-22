/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CommunitySection } from './components/CommunitySection';
import { BeyondCodeSection } from './components/BeyondCodeSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function PortfolioAppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 selection:bg-emerald-500 selection:text-white">
      {/* Top sticky navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Introduction */}
        <HeroSection />

        {/* 2. Background & Perspective + Supported Skills */}
        <AboutSection />

        {/* 3. Featured Work & Built Projects */}
        <ProjectsSection />

        {/* 4. Professional Experience & Internships */}
        <ExperienceTimeline />

        {/* 5. Collegiate Leadership, Bible Study Leadership & Community Outreach */}
        <CommunitySection />

        {/* 6. Outside of Work (Winter 2026 Marathon, Patient Kane Artwork, Motivating Quotes, Interests) */}
        <BeyondCodeSection />

        {/* 7. Curriculum Vitae & Resume */}
        <ResumeSection />

        {/* 8. Direct Contact & Professional Links */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
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
