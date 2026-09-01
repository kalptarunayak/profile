import React from 'react';
import { workExperienceList, projectsData } from '../data/resumeData';
import { Award, Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const getProjectNameById = (id: string) => {
    const p = projectsData.find((proj) => proj.id === id);
    return p ? `${p.client} — ${p.title.split('—')[0].trim()}` : id;
  };

  return (
    <section id="experience" className="py-16 bg-slate-50/50 dark:bg-slate-950/80 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono">
            <Award className="w-4 h-4" />
            Career History & Progression
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Track Record
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            8+ continuous years delivering robust enterprise Java systems, integration backbones, and production-grade microservices for tier-1 global accounts.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-10">
          {workExperienceList.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-950 shadow-md shadow-blue-500/20 group-hover:scale-125 transition-transform" />

              <div className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 hover:border-blue-500/40 transition-colors shadow-sm">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Responsibilities */}
                <div className="mt-4 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                    Core Responsibilities & Impact:
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {exp.keyResponsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Associated Projects & Tech Stack */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold text-slate-400 mb-1.5">
                      Client Projects Delivered:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.projectsInvolved.map((pId) => (
                        <a
                          key={pId}
                          href={`#project-${pId}`}
                          className="px-3 py-1 rounded-md text-xs font-medium bg-blue-500/10 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:underline border border-blue-500/20 flex items-center gap-1"
                        >
                          <span>{getProjectNameById(pId)}</span>
                          <ChevronRight className="w-3 h-3 opacity-60" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-slate-400 mb-1.5 sm:text-right">
                      Primary Technologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:justify-end">
                      {exp.coreTech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
