import React, { useState } from 'react';
import { projectsData } from '../data/resumeData';
import { Project } from '../types';
import {
  Briefcase,
  Building,
  CheckCircle2,
  Workflow,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  Tag,
} from 'lucide-react';

interface ProjectsSectionProps {
  onOpenArchitecture: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenArchitecture }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [activeCardTab, setActiveCardTab] = useState<{ [projectId: string]: 'overview' | 'star' | 'challenges' | 'talkingPoints' }>({});

  const domains = [
    'All',
    'Energy & Trading',
    'Insurance',
    'Publishing & Enterprise ERP',
    'Warehouse & Logistics',
    'Government & e-Governance',
  ];

  const filteredProjects = projectsData.filter((p) =>
    selectedDomain === 'All' ? true : p.domain === selectedDomain
  );

  const getCardTab = (projectId: string) => {
    return activeCardTab[projectId] || 'overview';
  };

  const setCardTab = (projectId: string, tab: 'overview' | 'star' | 'challenges' | 'talkingPoints') => {
    setActiveCardTab((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono">
              <Workflow className="w-4 h-4" />
              Verified Enterprise Experience
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Enterprise Projects
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Deep architectural case studies across trading, insurance, enterprise ERP, supply chain automation, and national policing.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Showing {filteredProjects.length} of {projectsData.length} items
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-8">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedDomain === dom
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {dom}
            </button>
          ))}
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const currentTab = getCardTab(project.id);
            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="group relative bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col gap-3 hover:border-blue-500/50 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden"
              >
                {/* Top Details Bar */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        {project.domain}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
                        <Building className="w-3 h-3 text-slate-400" />
                        Client: {project.client}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                        Role: {project.role}
                      </span>
                      {project.period && (
                        <span className="text-xs text-slate-400 font-mono">
                          {project.period}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pt-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Architecture Diagram Button */}
                  {project.architectureFlow && (
                    <button
                      onClick={() => onOpenArchitecture(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800/90 hover:bg-blue-500/10 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 hover:border-blue-500/30 transition-all cursor-pointer shrink-0"
                    >
                      <Workflow className="w-4 h-4 text-blue-500" />
                      <span>View System Topology</span>
                    </button>
                  )}
                </div>

                {/* Project Summary */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-5xl">
                  {project.summary}
                </p>

                {/* Tech Stack Chips with Indicators */}
                <div className="flex flex-wrap gap-2 items-center pt-1">
                  <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
                    <Tag className="w-3 h-3" /> Stack:
                  </span>
                  {project.environment.map((tech, tIdx) => {
                    const dotColors = ['bg-blue-500', 'bg-indigo-500', 'bg-emerald-500', 'bg-amber-500', 'bg-purple-500', 'bg-cyan-500'];
                    const dotColor = dotColors[tIdx % dotColors.length];
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800/80 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Interactive Card Section Tabs */}
                <div className="mt-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 mb-4 overflow-x-auto">
                    <button
                      onClick={() => setCardTab(project.id, 'overview')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                        currentTab === 'overview'
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <Briefcase className="w-3.5 h-3.5" />
                      Key Responsibilities & Deliverables
                    </button>

                    <button
                      onClick={() => setCardTab(project.id, 'star')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                        currentTab === 'star'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      STAR Model Interview Response
                    </button>

                    <button
                      onClick={() => setCardTab(project.id, 'challenges')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                        currentTab === 'challenges'
                          ? 'bg-amber-600 text-white'
                          : 'text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400'
                      }`}
                    >
                      <Zap className="w-3.5 h-3.5" />
                      Challenges & Solutions
                    </button>

                    <button
                      onClick={() => setCardTab(project.id, 'talkingPoints')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                        currentTab === 'talkingPoints'
                          ? 'bg-indigo-600 text-white'
                          : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                      }`}
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      Interviewer Talking Points
                    </button>
                  </div>

                  {/* Tab Content Panels */}
                  {currentTab === 'overview' && (
                    <div className="space-y-2 animate-in fade-in duration-150">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.keyHighlights.map((hl, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentTab === 'star' && (
                    <div className="p-4 rounded-2xl bg-blue-50/30 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/40 space-y-4 animate-in fade-in duration-150 text-xs sm:text-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                          <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
                            Situation (The Context)
                          </span>
                          <p className="text-slate-700 dark:text-slate-300">
                            {project.starBreakdown.situation}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                          <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-1">
                            Task (My Ownership)
                          </span>
                          <p className="text-slate-700 dark:text-slate-300">
                            {project.starBreakdown.task}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                        <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-1">
                          Actions Taken (Engineering Implementation)
                        </span>
                        <ul className="space-y-1.5 mt-2 text-slate-700 dark:text-slate-300">
                          {project.starBreakdown.action.map((act, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold">•</span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                        <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest block mb-1">
                          Measurable Results
                        </span>
                        <ul className="space-y-1.5 mt-2 text-slate-700 dark:text-slate-300">
                          {project.starBreakdown.result.map((res, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-purple-500 font-bold">✓</span>
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {currentTab === 'challenges' && (
                    <div className="space-y-2.5 animate-in fade-in duration-150">
                      {project.technicalChallengesSolved.map((chal, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3"
                        >
                          <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-amber-900 dark:text-amber-300 block mb-0.5">
                              Challenge #{idx + 1}:
                            </span>
                            <span>{chal}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {currentTab === 'talkingPoints' && (
                    <div className="p-4 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40 space-y-2.5 animate-in fade-in duration-150 text-xs sm:text-sm">
                      <div className="font-bold text-xs uppercase tracking-widest text-indigo-900 dark:text-indigo-300 flex items-center gap-2 mb-2">
                        <HelpCircle className="w-4 h-4" />
                        What Interviewers Frequently Ask & Key Answers
                      </div>
                      {project.interviewTalkingPoints.map((tp, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                        >
                          <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{tp}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
