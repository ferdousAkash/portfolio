import { useState } from 'react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCES, type ExperienceCategory } from '../data/portfolio';

type FilterType = 'All' | ExperienceCategory;
const FILTERS: FilterType[] = ['All', 'Leadership & Ops', 'Engineering', 'Community'];

export function ExperienceSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const visible =
    activeFilter === 'All'
      ? EXPERIENCES
      : EXPERIENCES.filter((item) => item.categories.includes(activeFilter));

  return (
    <section
      id="experience"
      className="border-y border-slate-200/80 bg-slate-50/70 py-14 sm:py-20 dark:border-zinc-800/80 dark:bg-zinc-950/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
              Career Timeline
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Experience &amp; Leadership
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
              From engineering full-stack web apps and campus R&amp;D to leading cross-functional
              remote delivery at Skarion.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                    active
                      ? 'bg-slate-900 text-white shadow-sm dark:bg-sky-500 dark:text-zinc-950'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-10 space-y-6 before:absolute before:top-3 before:bottom-3 before:left-4 before:w-px before:bg-slate-200 md:before:left-6 dark:before:bg-zinc-800">
          {visible.map((exp, idx) => (
            <article key={exp.id} className="relative pl-11 md:pl-16">
              <span
                className={`absolute top-6 left-2.5 flex h-3.5 w-3.5 items-center justify-center rounded-full ring-4 ring-slate-50 md:left-[17px] dark:ring-zinc-950 ${
                  idx === 0 && exp.duration === 'Current'
                    ? 'bg-emerald-500'
                    : 'bg-sky-500'
                }`}
              />

              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all hover:border-slate-300 sm:p-6 dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-zinc-700">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-zinc-800 dark:text-zinc-300">
                        {exp.type}
                      </span>
                      {exp.highlight && (
                        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/12 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                          <Sparkles className="h-3 w-3" />
                          {exp.highlight}
                        </span>
                      )}
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-sky-600 dark:text-sky-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs text-slate-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                    <Calendar className="h-3.5 w-3.5 text-sky-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-zinc-800/90 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
