import { useState } from 'react';
import { ArrowUpRight, Bot, Eye, Github, Server } from 'lucide-react';
import { PROJECTS, type ProjectCategory, type ProjectItem } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';

type ProjectFilter = 'All' | ProjectCategory;
const PROJECT_FILTERS: ProjectFilter[] = ['All', 'AI & ML', 'Full-Stack', 'Mobile', 'Systems'];

function ProjectVisualPreview({ project }: { project: ProjectItem }) {
  if (project.image) {
    return (
      <div
        className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent} p-4`}
      >
        <img
          src={project.image}
          alt={project.title}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          className="h-auto max-h-full w-auto rounded-xl object-contain shadow-lg transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {project.featured && (
          <span className="absolute top-3 left-3 rounded-full bg-zinc-950/75 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-sky-300 backdrop-blur">
            Featured
          </span>
        )}
      </div>
    );
  }

  const isAI = project.categories.includes('AI & ML');

  return (
    <div
      className={`relative flex h-56 flex-col justify-between overflow-hidden bg-gradient-to-br ${project.accent} p-5`}
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-slate-900 shadow-sm dark:bg-zinc-950/80 dark:text-sky-400">
          {isAI ? <Bot className="h-5 w-5" /> : <Server className="h-5 w-5" />}
        </span>
        {project.featured && (
          <span className="rounded-full bg-zinc-950/75 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-sky-300 backdrop-blur">
            Featured
          </span>
        )}
      </div>

      <div className="rounded-xl border border-slate-200/70 bg-white/85 p-3.5 font-mono text-[11px] text-slate-700 shadow-sm backdrop-blur dark:border-zinc-700/70 dark:bg-zinc-950/80 dark:text-zinc-300">
        {isAI ? (
          <div className="space-y-1">
            <p className="text-sky-600 dark:text-sky-400">$ pipeline --mode medical-llm-qa</p>
            <p className="text-slate-500 dark:text-zinc-400">
              → Retrieval + Clinical Q&amp;A + Tumor Analysis
            </p>
            <p className="text-emerald-600 dark:text-emerald-400">status: reproducible notebook ready</p>
          </div>
        ) : (
          <div className="space-y-1">
            <p className="text-sky-600 dark:text-sky-400">POST /api/v1/auth/login · 200 OK</p>
            <p className="text-slate-500 dark:text-zinc-400">
              → Express + JWT + bcrypt + MongoDB / SQL
            </p>
            <p className="text-emerald-600 dark:text-emerald-400">suite: full-stack CRUD verified</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  const visibleProjects =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
            Selected Work
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Featured Engineering Projects
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
            AI vision models, LLM chatbots, humanitarian web platforms, and full-stack systems—all
            backed by live GitHub repositories.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((tab) => {
            const active = filter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                  active
                    ? 'bg-slate-900 text-white shadow-sm dark:bg-sky-500 dark:text-zinc-950'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs transition-all hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-lg dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-sky-500/40"
          >
            <ProjectVisualPreview project={project} />

            <div className="flex flex-1 flex-col p-6">
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

              <h3 className="mt-3 font-display text-lg font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-slate-500 dark:text-zinc-400">
                {project.subtitle}
              </p>

              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
                {project.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 5).map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="rounded-lg bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-zinc-800 dark:text-zinc-400">
                    +{project.tech.length - 5}
                  </span>
                )}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Case Study</span>
                </button>

                <a
                  href={project.repos[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 transition-colors hover:text-slate-950 dark:text-zinc-300 dark:hover:text-white"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
