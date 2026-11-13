import { useEffect } from 'react';
import { ExternalLink, Github, Layers, X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/95">
          <div>
            <div className="flex flex-wrap gap-1.5">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-md bg-sky-500/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-sky-600 dark:text-sky-400"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h3
              id="modal-project-title"
              className="mt-1.5 font-display text-xl font-bold text-slate-900 sm:text-2xl dark:text-white"
            >
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400">{project.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-6 p-6">
          {project.image && (
            <div
              className={`grid gap-4 rounded-2xl border border-slate-200/80 bg-gradient-to-br ${project.accent} p-4 dark:border-zinc-800 ${
                project.secondaryImage ? 'sm:grid-cols-2' : ''
              }`}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="mx-auto max-h-72 w-auto rounded-xl object-contain shadow-md"
              />
              {project.secondaryImage && (
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} secondary view`}
                  className="mx-auto max-h-72 w-auto rounded-xl object-contain shadow-md"
                />
              )}
            </div>
          )}

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
              Overview
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-zinc-300">
              {project.summary}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
              Key Implementation Highlights
            </h4>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-700 dark:text-zinc-300">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
              <Layers className="h-3.5 w-3.5" />
              <span>Tech Stack</span>
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-5 dark:border-zinc-800">
            {project.repos.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-sky-500 dark:text-zinc-950 dark:hover:bg-sky-400"
              >
                <Github className="h-4 w-4" />
                <span>{repo.label}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
