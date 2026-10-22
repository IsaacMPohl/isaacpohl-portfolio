import React, { createContext, useContext, useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface PortfolioContextType {
  data: typeof PORTFOLIO_DATA;
  activeSection: string;
  setActiveSection: (section: string) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  isQuickFillOpen: boolean;
  setIsQuickFillOpen: (open: boolean) => void;
  showFullCV: boolean;
  setShowFullCV: (show: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isQuickFillOpen, setIsQuickFillOpen] = useState<boolean>(false);
  const [showFullCV, setShowFullCV] = useState<boolean>(false);

  return (
    <PortfolioContext.Provider
      value={{
        data: PORTFOLIO_DATA,
        activeSection,
        setActiveSection,
        selectedProject,
        setSelectedProject,
        isQuickFillOpen,
        setIsQuickFillOpen,
        showFullCV,
        setShowFullCV
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
