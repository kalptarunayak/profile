import React, { useState } from 'react';
import { Project } from '../types';
import { X, Cpu, ArrowRight, Layers, Workflow, Database, Globe, Radio } from 'lucide-react';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  if (!project || !project.architectureFlow) return null;

  const { architectureFlow } = project;

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'client':
        return Globe;
      case 'gateway':
        return Radio;
      case 'service':
        return Workflow;
      case 'queue':
        return Cpu;
      case 'database':
        return Database;
      case 'external':
        return Layers;
      default:
        return Workflow;
    }
  };

  const activeNode = architectureFlow.nodes.find((n) => n.id === activeNodeId) || architectureFlow.nodes[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden backdrop-blur-xl">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                System Topology & Pipeline
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Client: {project.client}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
              {architectureFlow.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {architectureFlow.description}
          </p>

          {/* Interactive Pipeline Nodes Grid */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono">
              Component Topology (Click node to inspect details)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {architectureFlow.nodes.map((node, index) => {
                const Icon = getNodeIcon(node.type);
                const isSelected = (activeNodeId || architectureFlow.nodes[0].id) === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                      isSelected
                        ? 'border-blue-500 bg-blue-500/10 dark:bg-blue-950/60 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        Step {index + 1} • {node.type}
                      </span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">
                        {node.label}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {node.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Data Flow Progression Pipeline */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono">
              End-to-End Data Pipeline Execution Sequence
            </div>
            <div className="flex flex-col gap-2">
              {architectureFlow.connections.map((conn, idx) => {
                const fromNode = architectureFlow.nodes.find((n) => n.id === conn.from);
                const toNode = architectureFlow.nodes.find((n) => n.id === conn.to);
                return (
                  <div
                    key={idx}
                    className="flex flex-wrap items-center gap-2 text-xs p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {fromNode?.label || conn.from}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-300 font-mono text-[11px] flex items-center gap-1 border border-blue-500/20">
                      <ArrowRight className="w-3 h-3" />
                      {conn.label}
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {toNode?.label || conn.to}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Node Detail Inspector */}
          {activeNode && (
            <div className="p-4 rounded-2xl bg-blue-500/10 dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-900/60">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase text-blue-700 dark:text-blue-300">
                  Inspecting Node: {activeNode.label}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1">
                {activeNode.description}
              </p>
            </div>
          )}

          {/* Interviewer Talking Points on this Architecture */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white font-mono flex items-center gap-2">
              Key Engineering Talking Points for Interviewer:
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {project.interviewTalkingPoints.map((tp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>{tp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold cursor-pointer shadow-md shadow-blue-500/20"
          >
            Close Architecture View
          </button>
        </div>
      </div>
    </div>
  );
};
