import React from 'react';
import { candidateProfile, skillCategories, projectsData, workExperienceList } from '../data/resumeData';

export const PrintResumeView: React.FC = () => {
  return (
    <div id="print-resume" className="hidden print:block p-8 bg-white text-black font-sans max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="border-b-2 border-slate-900 pb-4">
        <h1 className="text-2xl font-bold uppercase tracking-tight text-slate-900">
          {candidateProfile.name}
        </h1>
        <p className="text-sm font-semibold text-slate-700 mt-0.5">
          {candidateProfile.title}
        </p>
        <div className="flex flex-wrap gap-4 text-xs text-slate-600 mt-2 font-mono">
          <span>Email: {candidateProfile.email}</span>
          <span>•</span>
          <span>Phone: {candidateProfile.phone}</span>
          <span>•</span>
          <span>Location: {candidateProfile.location}</span>
        </div>
      </div>

      {/* Professional Profile */}
      <div className="space-y-1">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
          Professional Profile
        </h2>
        <p className="text-xs text-slate-800 leading-relaxed pt-1">
          {candidateProfile.summary}
        </p>
      </div>

      {/* Core Technical Skills */}
      <div className="space-y-1">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
          Core Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs pt-1">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="text-xs">
              <span className="font-bold text-slate-900">{cat.category}: </span>
              <span className="text-slate-700">
                {cat.skills.map((s) => s.name).join(', ')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Employment History */}
      <div className="space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
          Employment History
        </h2>
        {workExperienceList.map((exp) => (
          <div key={exp.id} className="text-xs space-y-1">
            <div className="flex justify-between items-baseline font-bold text-slate-900">
              <span>{exp.role} — {exp.company}</span>
              <span className="font-mono text-[11px] text-slate-600">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
              {exp.keyResponsibilities.slice(0, 3).map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Key Project Experience */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
          Key Project Experience
        </h2>
        {projectsData.map((project) => (
          <div key={project.id} className="text-xs space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-slate-900">
                {project.title}
              </span>
              <span className="font-mono text-[11px] text-slate-600">
                Client: {project.client} | Role: {project.role}
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-600">
              <span className="font-bold">Environment: </span>
              {project.environment.join(', ')}
            </div>
            <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
              {project.keyHighlights.slice(0, 3).map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
