import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { InterviewQASection } from './components/InterviewQASection';
import { ArchitectureModal } from './components/ArchitectureModal';
import { InterviewPitchMode } from './components/InterviewPitchMode';
import { GithubDeployModal } from './components/GithubDeployModal';
import { PrintResumeView } from './components/PrintResumeView';
import { Footer } from './components/Footer';
import { Project } from './types';

export function AppContent() {
  const [activeSection, setActiveSection] = useState('summary');
  const [selectedArchitectureProject, setSelectedArchitectureProject] = useState<Project | null>(null);
  const [isPitchModeOpen, setIsPitchModeOpen] = useState(false);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['summary', 'skills', 'projects', 'experience', 'interview-prep'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-200">
      {/* Screen Display Content */}
      <div className="print:hidden">
        {/* Navigation Bar */}
        <Navbar
          activeSection={activeSection}
          onOpenPitchMode={() => setIsPitchModeOpen(true)}
          onOpenDeployModal={() => setIsDeployModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main>
          <HeroSection onOpenPitchMode={() => setIsPitchModeOpen(true)} />
          <SkillsSection />
          <ProjectsSection
            onOpenArchitecture={(project) => setSelectedArchitectureProject(project)}
          />
          <ExperienceSection />
          <InterviewQASection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Modals and Drawers */}
        <ArchitectureModal
          project={selectedArchitectureProject}
          onClose={() => setSelectedArchitectureProject(null)}
        />

        <InterviewPitchMode
          isOpen={isPitchModeOpen}
          onClose={() => setIsPitchModeOpen(false)}
        />

        <GithubDeployModal
          isOpen={isDeployModalOpen}
          onClose={() => setIsDeployModalOpen(false)}
        />
      </div>

      {/* Print Resume Format */}
      <PrintResumeView />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
