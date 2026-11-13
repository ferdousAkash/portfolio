import { IMPACT_METRICS } from '../data/portfolio';

export function ImpactBar() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {IMPACT_METRICS.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-slate-200/90 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-sky-500/40 hover:shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/60 dark:hover:border-sky-500/40"
          >
            <p className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              {metric.value}
            </p>
            <p className="mt-1 text-sm font-semibold text-sky-600 dark:text-sky-400">
              {metric.label}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
              {metric.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
