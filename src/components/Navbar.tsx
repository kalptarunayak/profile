import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { candidateProfile } from '../data/resumeData';
import {
  Sun,
  Moon,
  Briefcase,
  Layers,
  Award,
  BookOpen,
  Presentation,
  Printer,
  Menu,
  X,
  Mail,
  Phone,
  HelpCircle,
} from 'lucide-react';

interface NavbarProps {
  onOpenPitchMode: () => void;
  onOpenDeployModal?: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPitchMode,
  onOpenDeployModal,
  activeSection,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Summary', href: '#summary', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Layers },
    { name: 'Projects', href: '#projects', icon: BookOpen },
    { name: 'Experience', href: '#experience', icon: Award },
    { name: 'Interview Q&A', href: '#interview-prep', icon: HelpCircle },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/40 border-b border-slate-200 dark:border-slate-800'
          : 'bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo / Candidate Brand */}
          <a
            href="#summary"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              KN
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                  {candidateProfile.name}
                </h1>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Interview
                </div>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium tracking-widest uppercase">
                Senior Java & EAI Architect • 8+ Year Exp
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-all py-1 cursor-pointer ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Utilities & Presentation Mode */}
          <div className="flex items-center gap-2.5">
            {/* Interview Pitch Mode Trigger Button */}
            <button
              id="interview-mode-btn"
              onClick={onOpenPitchMode}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform active:scale-95 cursor-pointer"
              title="Open Interview Pitch & Presentation Cheatsheet"
            >
              <Presentation className="w-4 h-4" />
              <span className="hidden sm:inline">Presenter View</span>
              <span className="sm:hidden">Pitch</span>
            </button>

            {/* Print Resume Action */}
            <button
              id="print-resume-btn"
              onClick={handlePrint}
              type="button"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/60 transition-colors cursor-pointer hidden md:flex"
              title="Print or Save Resume as PDF"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              type="button"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/60 transition-colors cursor-pointer"
              aria-label="Toggle color theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                >
                  <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrint();
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 w-full cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF Resume
            </button>
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 pt-2">
              <a href={`mailto:${candidateProfile.email}`} className="flex items-center gap-1 hover:underline">
                <Mail className="w-3.5 h-3.5" /> {candidateProfile.email}
              </a>
              <a href={`tel:${candidateProfile.phone}`} className="flex items-center gap-1 hover:underline">
                <Phone className="w-3.5 h-3.5" /> {candidateProfile.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
