export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github?: string;
  linkedin?: string;
  summary: string;
  experienceYears: number;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    iconName?: string;
    highlight?: boolean;
    usedInProjects: string[];
  }[];
}

export interface ProjectArchitectureNode {
  id: string;
  label: string;
  type: 'client' | 'gateway' | 'service' | 'queue' | 'database' | 'external';
  description: string;
}

export interface ProjectArchitectureFlow {
  title: string;
  description: string;
  nodes: ProjectArchitectureNode[];
  connections: { from: string; to: string; label: string }[];
}

export interface StarMethodology {
  situation: string;
  task: string;
  action: string[];
  result: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  role: string;
  domain: 'Energy & Trading' | 'Insurance' | 'Publishing & Enterprise ERP' | 'Warehouse & Logistics' | 'Government & e-Governance';
  period?: string;
  summary: string;
  environment: string[];
  keyHighlights: string[];
  starBreakdown: StarMethodology;
  architectureFlow?: ProjectArchitectureFlow;
  technicalChallengesSolved: string[];
  interviewTalkingPoints: string[];
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  keyResponsibilities: string[];
  coreTech: string[];
  projectsInvolved: string[];
}

export interface InterviewQA {
  category: string;
  question: string;
  answerSummary: string;
  talkingPoints: string[];
  relevantProjects: string[];
}
