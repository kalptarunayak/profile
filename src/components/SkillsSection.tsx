import React, { useState, useMemo } from 'react';
import { skillCategories, projectsData } from '../data/resumeData';
import {
  Search,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  Workflow,
  Database,
  ShieldCheck,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface SkillsSectionProps {
  onSelectProjectFilter?: (projectId: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectProjectFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => (selectedCategory === 'All' ? true : cat.category === selectedCategory))
      .map((cat) => {
        const filteredSkills = cat.skills.filter((skill) => {
          const matchesSearch =
            skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cat.category.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesSearch;
        });
        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [searchQuery, selectedCategory]);

  const totalSkillsCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes('Languages')) return Code2;
    if (categoryName.includes('Microservices')) return Workflow;
    if (categoryName.includes('Messaging')) return Cpu;
    if (categoryName.includes('Cloud')) return Layers;
    if (categoryName.includes('Databases')) return Database;
    return ShieldCheck;
  };

  const getProjectNameById = (id: string) => {
    const p = projectsData.find((proj) => proj.id === id);
    return p ? p.client + ' (' + p.title.split('—')[0].trim() + ')' : id;
  };

  return (
    <section id="skills" className="py-16 bg-slate-50/50 dark:bg-slate-950/80 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono">
              <Sparkles className="w-4 h-4" />
              Technical Competencies & Matrix
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Core Technical Stack
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Specialized across 12+ years in enterprise-grade Java backends, asynchronous messaging, EAI enterprise integration patterns, and cloud containerization.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills (e.g. Kafka, Camel)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories & Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup) => {
            const Icon = getCategoryIcon(catGroup.category);
            return (
              <div
                key={catGroup.category}
                className="rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 p-6 shadow-sm hover:border-slate-300 dark:hover:border-slate-700/80 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-3.5 border-b border-slate-100 dark:border-slate-800/80">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                        {catGroup.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {catGroup.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag List */}
                  <div className="pt-4 flex flex-wrap gap-2">
                    {catGroup.skills.map((skill) => {
                      const isSelected = selectedSkill === skill.name;
                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                          className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all text-left cursor-pointer ${
                            skill.highlight
                              ? 'bg-blue-500/10 text-blue-900 dark:text-blue-200 border border-blue-500/30 hover:border-blue-500'
                              : 'bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600'
                          } ${isSelected ? 'ring-2 ring-blue-500 font-bold' : ''}`}
                        >
                          <span>{skill.name}</span>
                          <span
                            className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                              skill.level === 'Expert'
                                ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20'
                                : skill.level === 'Advanced'
                                ? 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20'
                                : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Skill Inspector Drawer when clicked */}
                {selectedSkill &&
                  catGroup.skills.some((s) => s.name === selectedSkill) && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs bg-slate-50 dark:bg-slate-950/70 p-3.5 rounded-xl animate-in fade-in duration-150 border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-between font-semibold text-slate-900 dark:text-white">
                        <span>Projects using {selectedSkill}:</span>
                        <button
                          onClick={() => setSelectedSkill(null)}
                          className="text-slate-400 hover:text-slate-600"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="mt-2 space-y-1.5">
                        {catGroup.skills
                          .find((s) => s.name === selectedSkill)
                          ?.usedInProjects.map((pId) => (
                            <a
                              key={pId}
                              href={`#project-${pId}`}
                              className="flex items-center justify-between text-blue-600 dark:text-blue-400 hover:underline font-medium"
                            >
                              <span>• {getProjectNameById(pId)}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                      </div>
                    </div>
                  )}
              </div>
            );
          })}
        </div>

        {/* Quick Summary Banner for Interviewers */}
        <div className="mt-10 p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">
                Enterprise-Ready Technology Governance
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                100% committed to Clean Code, Test-Driven Development (JUnit/Cucumber), SonarQube quality gates, and EAI design patterns.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
          >
            See Real Project Implementations →
          </a>
        </div>
      </div>
    </section>
  );
};
