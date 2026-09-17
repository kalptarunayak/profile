import React, { useState } from 'react';
import { candidateProfile, projectsData, executiveHighlights, interviewQAList } from '../data/resumeData';
import {
  X,
  Presentation,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Cpu,
  Layers,
  Workflow,
  FileText,
  Clock,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';

interface InterviewPitchModeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InterviewPitchMode: React.FC<InterviewPitchModeProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'pitch' | 'star' | 'qa' | 'strengths'>('pitch');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  if (!isOpen) return null;

  const currentProject = projectsData[currentProjectIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-5xl w-full h-[90vh] flex flex-col overflow-hidden backdrop-blur-xl">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  PRESENTER / INTERVIEW MODE
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  Interactive Pitch Deck for {candidateProfile.name}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Live Interview Cheatsheet & Presentation Deck
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-x-auto">
          <button
            onClick={() => setActiveTab('pitch')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'pitch'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Clock className="w-4 h-4" />
            60s Elevator Pitch
          </button>

          <button
            onClick={() => setActiveTab('star')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'star'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            STAR Project Stories ({projectsData.length})
          </button>

          <button
            onClick={() => setActiveTab('strengths')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'strengths'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Core Technical Strengths
          </button>

          <button
            onClick={() => setActiveTab('qa')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'qa'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Architecture Q&A Cheat Sheet
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {activeTab === 'pitch' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-slate-50 to-white dark:from-blue-950/40 dark:via-slate-900/60 dark:to-slate-900 border border-blue-500/20 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  <Clock className="w-4 h-4" />
                  Structured 60-Second Presentation
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  &quot;Hello, I am Kalpataru Nayak — Senior Java Developer with 12+ years building resilient microservices and integration pipelines.&quot;
                </h3>

                <div className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    <strong>1. Core Specialization:</strong> I specialize in enterprise Java (Java 8 &amp; 17), Spring Boot microservices, and asynchronous Enterprise Application Integration (EAI) patterns utilizing Apache Camel, Apache Kafka, RabbitMQ, and Camunda BPM.
                  </p>
                  <p>
                    <strong>2. Track Record:</strong> Over the past 12+ years with Cognizant and Tech Mahindra, I have led and delivered 5 mission-critical systems across Gas &amp; Power trading (Uniper), Insurance policy migrations (NIC), global ERP modernization (Oxford University Press), and high-speed automated warehouse routing (Honeywell).
                  </p>
                  <p>
                    <strong>3. Architectural Philosophy:</strong> I prioritize zero-defect engineering through strict SonarQube quality gates, comprehensive test automation with JUnit and Cucumber BDD, and cloud-native containerized deployments on Azure Kubernetes Service.
                  </p>
                </div>
              </div>

              {/* 4 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {executiveHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800"
                  >
                    <div className="text-xl font-mono font-bold text-blue-600 dark:text-blue-400">
                      {item.metric}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {item.subtext}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'star' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Project Carousel Controls */}
              <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-600 text-white">
                    Project {currentProjectIndex + 1} of {projectsData.length}
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-xs sm:max-w-md">
                    {currentProject.client}: {currentProject.title.split('—')[0]}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setCurrentProjectIndex((prev) => (prev > 0 ? prev - 1 : projectsData.length - 1))}
                    className="p-1.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer border border-slate-200 dark:border-slate-700"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentProjectIndex((prev) => (prev < projectsData.length - 1 ? prev + 1 : 0))}
                    className="p-1.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer border border-slate-200 dark:border-slate-700"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* STAR Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-blue-500/10 dark:bg-blue-950/40 border border-blue-500/20 space-y-2">
                  <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest block">
                    1. Situation
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentProject.starBreakdown.situation}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-indigo-500/10 dark:bg-indigo-950/40 border border-indigo-500/20 space-y-2">
                  <span className="font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-widest block">
                    2. Task & My Role
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentProject.starBreakdown.task}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/20 space-y-2 text-xs sm:text-sm">
                <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-widest block">
                  3. Key Actions Taken (Technical Implementation)
                </span>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                  {currentProject.starBreakdown.action.map((act, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/20 space-y-2 text-xs sm:text-sm">
                <span className="font-mono text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-widest block">
                  4. Results Delivered
                </span>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                  {currentProject.starBreakdown.result.map((res, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">✓</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'strengths' && (
            <div className="space-y-4 animate-in fade-in duration-150 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-500" />
                  Enterprise Integration Patterns (EIP) & Apache Camel
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Expertise building declarative Camel routing topologies utilizing Splitter, Content Enricher, Aggregator, Dynamic Router, and Dead Letter Channel error handlers with Kafka and SFTP integration.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-indigo-500" />
                  High-Throughput Messaging (Kafka & RabbitMQ)
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Designing scalable partition strategies in Kafka for trade execution streams and implementing AMQP priority queues with manual ACK and Dead-Letter Exchanges in RabbitMQ for physical warehouse conveyor routing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  Zero-Technical Debt & TDD Governance
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Proactive quality assurance using SonarQube & SonarLint in IDEs, high-coverage JUnit testing, and Cucumber BDD acceptance tests that align engineering delivery with business stakeholders.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'qa' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {interviewQAList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2 text-xs sm:text-sm"
                >
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-600 dark:text-blue-400">
                    {item.category}
                  </span>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.question}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.answerSummary}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            Contact: {candidateProfile.email} • {candidateProfile.phone}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer shadow-md shadow-blue-500/20"
          >
            Exit Presenter View
          </button>
        </div>
      </div>
    </div>
  );
};
