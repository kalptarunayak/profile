import React, { useState } from 'react';
import { interviewQAList, projectsData } from '../data/resumeData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, CheckCircle2, MessageSquare, BookOpen } from 'lucide-react';

export const InterviewQASection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getProjectNameById = (id: string) => {
    const p = projectsData.find((proj) => proj.id === id);
    return p ? `${p.client} (${p.title.split('—')[0].trim()})` : id;
  };

  return (
    <section id="interview-prep" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono">
              <MessageSquare className="w-4 h-4" />
              Live Interview Cheatsheet
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Technical & Architectural Q&A Notes
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Concrete answers and real project examples for common high-level system design and Java architecture interview questions.
            </p>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Backed by real production architectures
          </div>
        </div>

        {/* Q&A Accordion */}
        <div className="space-y-4">
          {interviewQAList.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all hover:border-blue-500/40"
              >
                {/* Accordion Question Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      Q{idx + 1}: {item.question}
                    </h3>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0 mt-1 border border-slate-200 dark:border-slate-700">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Accordion Body */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 border-t border-slate-100 dark:border-slate-800 pt-4 space-y-4 bg-slate-50/50 dark:bg-slate-950/40 animate-in fade-in duration-150">
                    {/* Executive Answer */}
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1 font-mono">
                        Executive Answer Summary:
                      </div>
                      <p>{item.answerSummary}</p>
                    </div>

                    {/* Key Talking Points */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono">
                        Interview Talking Points & Proof Points:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.talkingPoints.map((tp, tpIdx) => (
                          <div
                            key={tpIdx}
                            className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <span>{tp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Relevant Projects Badge Links */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
                      <span className="text-slate-400 font-semibold">
                        Relevant Projects to Cite:
                      </span>
                      {item.relevantProjects.map((pId) => (
                        <a
                          key={pId}
                          href={`#project-${pId}`}
                          className="px-3 py-1 rounded-md bg-blue-500/10 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:underline border border-blue-500/20"
                        >
                          {getProjectNameById(pId)}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
