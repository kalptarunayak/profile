import React, { useState } from 'react';
import { candidateProfile, executiveHighlights } from '../data/resumeData';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  Presentation,
  FileCode,
  ShieldCheck,
  Cpu,
  Workflow,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenPitchMode: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPitchMode }) => {
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [showFullPitch, setShowFullPitch] = useState(false);

  const handleCopySummary = () => {
    navigator.clipboard.writeText(candidateProfile.summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section id="summary" className="pt-24 pb-12 sm:pt-28 sm:pb-16 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Card - Sleek Glass Panel */}
        <div className="rounded-2xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/30 relative">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10">
            {/* Candidate Info Left Column */}
            <div className="space-y-4 max-w-3xl">
              {/* Eyebrow & Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 uppercase tracking-wider font-mono">
                  <Cpu className="w-3.5 h-3.5" />
                  Java 17 & Microservices
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase tracking-wider font-mono">
                  <Workflow className="w-3.5 h-3.5" />
                  Enterprise Integration (EAI)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {candidateProfile.location}
                </span>
              </div>

              {/* Candidate Headline */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {candidateProfile.name}
                </h1>
                <p className="mt-1.5 text-base sm:text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono">
                  {candidateProfile.title}
                </p>
              </div>

              {/* Summary Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {candidateProfile.summary}
              </p>

              {/* Contact Chips */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <a
                  href={`mailto:${candidateProfile.email}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800/90 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium"
                >
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>{candidateProfile.email}</span>
                </a>
                <a
                  href={`tel:${candidateProfile.phone}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800/90 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium"
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>{candidateProfile.phone}</span>
                </a>
                <button
                  onClick={handleCopySummary}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700 text-xs font-medium cursor-pointer"
                  title="Copy Executive Summary to Clipboard"
                >
                  {copiedSummary ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 opacity-70" />
                      <span>Copy Bio</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Action Box Right Column - Sleek Container */}
            <div className="lg:w-80 flex flex-col gap-3 p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 shadow-inner">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Interviewer Quick Actions
              </div>

              <button
                onClick={onOpenPitchMode}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer group"
              >
                <span className="flex items-center gap-2">
                  <Presentation className="w-4 h-4" />
                  Presenter / Pitch Mode
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#projects"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-900 dark:text-white font-medium text-sm border border-slate-200 dark:border-slate-700/80 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-indigo-500" />
                  Explore 5 Case Studies
                </span>
                <span className="text-xs text-slate-400 font-mono">STAR Model</span>
              </a>

              <a
                href="#interview-prep"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-900 dark:text-white font-medium text-sm border border-slate-200 dark:border-slate-700/80 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Technical Q&A Notes
                </span>
                <span className="text-xs text-slate-400 font-mono">Camel/Kafka</span>
              </a>

              {/* Status pill */}
              <div className="mt-2 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Current Employer:</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200">Cognizant</span>
              </div>
            </div>
          </div>

          {/* 60-Second Elevator Pitch Banner for Live Interviews */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="rounded-xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono">
                      60-Second Interviewer Pitch
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    &quot;I am a Senior Java Developer with 12+ years specializing in enterprise integration, Spring Boot microservices, and asynchronous event pipelines with Apache Camel and Kafka...&quot;
                  </p>
                </div>
                <button
                  onClick={() => setShowFullPitch(!showFullPitch)}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline shrink-0 cursor-pointer pt-1"
                >
                  {showFullPitch ? 'Show Less' : 'Read Full Pitch'}
                </button>
              </div>

              {showFullPitch && (
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 space-y-2 animate-in fade-in duration-200 leading-relaxed">
                  <p>
                    Across my career at <strong>Cognizant</strong> and <strong>Tech Mahindra</strong>, I have engineered mission-critical platforms including Uniper&apos;s multi-commodity Gas & Power trading system, NIC&apos;s insurance policy integration (Insuremo to EBAO), Oxford University Press&apos;s SAP S/4HANA migration middleware, and Honeywell&apos;s automated Warehouse Execution Systems.
                  </p>
                  <p>
                    My core technical superpower is designing <strong>fault-tolerant message routing architectures</strong> (Apache Camel EIPs, Kafka partition strategies, RabbitMQ priority channels, Camunda state orchestration) and enforcing <strong>zero-debt quality</strong> with SonarQube and comprehensive JUnit/Cucumber test suites.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4 Executive Metric / Capability Cards - Sleek Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {executiveHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tracking-tight group-hover:scale-105 transition-transform inline-block">
                {item.metric}
              </div>
              <div className="mt-2 text-sm font-bold text-slate-900 dark:text-white">
                {item.label}
              </div>
              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
