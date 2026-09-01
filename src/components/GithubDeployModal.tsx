import React, { useState } from 'react';
import { X, Github, Copy, Check, Terminal, Globe, ExternalLink } from 'lucide-react';

interface GithubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GithubDeployModal: React.FC<GithubDeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  if (!isOpen) return null;

  const copySnippet = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const ghPagesScript = `npm install -D gh-pages
# Add to package.json scripts:
# "deploy": "vite build && gh-pages -d dist"
npm run deploy`;

  const githubActionsYaml = `name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden backdrop-blur-xl">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-slate-900 text-white dark:bg-slate-800 dark:text-white border border-slate-700">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                How to Publish to GitHub Pages (github.io)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ready for one-click hosting on your custom or github.io domain
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {/* Method 1: GitHub Actions (Recommended) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                1
              </span>
              <span>Option A: Automated GitHub Actions (Recommended)</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Create a file named <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-blue-600 dark:text-blue-400">.github/workflows/deploy.yml</code> in your repository. Every time you push to <code className="font-mono">main</code>, GitHub will automatically build and publish to your <code className="font-mono font-bold">username.github.io</code>!
            </p>

            <div className="relative rounded-xl bg-slate-950 p-4 font-mono text-xs text-slate-200 overflow-x-auto border border-slate-800">
              <button
                onClick={() => copySnippet('actions', githubActionsYaml)}
                className="absolute right-3 top-3 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-[11px] text-white flex items-center gap-1 cursor-pointer transition-colors border border-slate-700"
              >
                {copiedIndex === 'actions' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy Workflow
                  </>
                )}
              </button>
              <pre className="max-h-48 overflow-y-auto scrollbar-none pt-4 text-[11px]">
                {githubActionsYaml}
              </pre>
            </div>
          </div>

          {/* Method 2: NPM gh-pages CLI */}
          <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">
                2
              </span>
              <span>Option B: Direct CLI Deployment with <code className="font-mono">gh-pages</code></span>
            </div>
            <div className="relative rounded-xl bg-slate-950 p-4 font-mono text-xs text-slate-200 border border-slate-800">
              <button
                onClick={() => copySnippet('cli', ghPagesScript)}
                className="absolute right-3 top-3 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-[11px] text-white flex items-center gap-1 cursor-pointer transition-colors border border-slate-700"
              >
                {copiedIndex === 'cli' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy Command
                  </>
                )}
              </button>
              <pre className="pt-2 text-[11px]">{ghPagesScript}</pre>
            </div>
          </div>

          {/* Base URL tip for GitHub Pages */}
          <div className="p-4 rounded-xl bg-blue-500/10 dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-900/60 text-xs space-y-1.5">
            <div className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Configured for Sub-directory Deployments (e.g. <code className="font-mono text-blue-600 dark:text-blue-300">kalptarunayak.github.io/profile/</code>)</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              <code className="font-mono font-bold bg-white dark:bg-slate-900 px-1 py-0.5 rounded border border-slate-200 dark:border-slate-800">base: &apos;./&apos;</code> has been pre-configured in your <code className="font-mono">vite.config.ts</code> file. This ensures all JavaScript chunks, CSS stylesheets, and assets load seamlessly under your <code className="font-mono">/profile/</code> repository path without 404 blank screen issues.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer shadow-md shadow-blue-500/20"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
