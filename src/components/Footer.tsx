import React from 'react';
import { candidateProfile } from '../data/resumeData';
import { Mail, Phone, MapPin, ArrowUp, Github, Linkedin, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-10 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-bold text-base text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-2.5">
              <span>{candidateProfile.name}</span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-mono font-bold uppercase tracking-wider">
                Senior Java & EAI Architect
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {candidateProfile.title}
            </p>
          </div>

          {/* Quick contact list */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a
              href={`mailto:${candidateProfile.email}`}
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              {candidateProfile.email}
            </a>
            <a
              href={`tel:${candidateProfile.phone}`}
              className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              {candidateProfile.phone}
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5" />
              {candidateProfile.location}
            </span>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            type="button"
            className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Sleek status bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} To {candidateProfile.name} already reserved .</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-600 dark:text-slate-300 font-semibold">Profile Status: Optimal & Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
