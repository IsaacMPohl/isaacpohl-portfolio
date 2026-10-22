import React, { createContext, useContext, useState, useEffect } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { SearchResultItem } from '../utils/portfolioLogic';

interface PortfolioContextType {
  data: typeof PORTFOLIO_DATA;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  isQuickFillOpen: boolean;
  setIsQuickFillOpen: (open: boolean) => void;
  isExploreOpen: boolean;
  setIsExploreOpen: (open: boolean) => void;
  // Shared expandable state for programmatic opening by Explore search
  showCoursework: boolean;
  setShowCoursework: React.Dispatch<React.SetStateAction<boolean>>;
  showAdditionalExp: boolean;
  setShowAdditionalExp: React.Dispatch<React.SetStateAction<boolean>>;
  showHonors: boolean;
  setShowHonors: React.Dispatch<React.SetStateAction<boolean>>;
  showAllQuotes: boolean;
  setShowAllQuotes: React.Dispatch<React.SetStateAction<boolean>>;
  showFullPost: boolean;
  setShowFullPost: React.Dispatch<React.SetStateAction<boolean>>;
  // Navigation helper
  navigateToItem: (item: SearchResultItem) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state: dark mode as default
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('isaac_portfolio_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  const [activeSection, setActiveSection] = useState<string>('about');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isQuickFillOpen, setIsQuickFillOpen] = useState<boolean>(false);
  const [isExploreOpen, setIsExploreOpen] = useState<boolean>(false);

  // Controlled expandable states
  const [showCoursework, setShowCoursework] = useState<boolean>(false);
  const [showAdditionalExp, setShowAdditionalExp] = useState<boolean>(false);
  const [showHonors, setShowHonors] = useState<boolean>(false);
  const [showAllQuotes, setShowAllQuotes] = useState<boolean>(false);
  const [showFullPost, setShowFullPost] = useState<boolean>(false);

  // Apply theme to document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('isaac_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navigateToItem = (item: SearchResultItem) => {
    // 1. Expand the appropriate section if needed
    if (item.expandTarget === 'coursework') setShowCoursework(true);
    if (item.expandTarget === 'additionalExp') setShowAdditionalExp(true);
    if (item.expandTarget === 'honors') setShowHonors(true);
    if (item.expandTarget === 'allQuotes') setShowAllQuotes(true);
    if (item.expandTarget === 'marathonPost') setShowFullPost(true);

    setIsExploreOpen(false);
    setActiveSection(item.sectionId);

    // 2. Allow state expansion to render, then scroll to destination
    setTimeout(() => {
      const elementId = item.targetElementId || item.sectionId;
      const el = document.getElementById(elementId) || document.getElementById(item.sectionId);
      if (el) {
        const navHeight = 72;
        const elRect = el.getBoundingClientRect();
        const absoluteTop = elRect.top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, absoluteTop - navHeight - 16),
          behavior: 'smooth'
        });

        // 3. Briefly pulse highlight the destination element
        el.classList.add('destination-highlight');
        setTimeout(() => {
          el.classList.remove('destination-highlight');
        }, 2200);
      }
    }, 150);
  };

  return (
    <PortfolioContext.Provider
      value={{
        data: PORTFOLIO_DATA,
        theme,
        toggleTheme,
        activeSection,
        setActiveSection,
        selectedProject,
        setSelectedProject,
        isQuickFillOpen,
        setIsQuickFillOpen,
        isExploreOpen,
        setIsExploreOpen,
        showCoursework,
        setShowCoursework,
        showAdditionalExp,
        setShowAdditionalExp,
        showHonors,
        setShowHonors,
        showAllQuotes,
        setShowAllQuotes,
        showFullPost,
        setShowFullPost,
        navigateToItem
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
