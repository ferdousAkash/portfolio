import { Briefcase, Cpu, Globe, Smartphone } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolio';

const ICONS = [Briefcase, Cpu, Globe, Smartphone];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-y border-slate-200/80 bg-slate-50/70 py-14 sm:py-20 dark:border-zinc-800/80 dark:bg-zinc-950/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
            Capabilities
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Technical &amp; Operational Stack
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400">
            Grouped by real delivery domains—combining strategic leadership, AI/ML modeling,
            full-stack engineering, and mobile development.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={group.title}
                className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs dark:border-zinc-800/90 dark:bg-zinc-900/70"
              >
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/12 text-sky-600 dark:text-sky-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-slate-200/80 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-sky-500/40 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
