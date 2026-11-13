import { Award, Code2, Cpu, Globe2, Layers, Music } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="relative aspect-[4/4.3] overflow-hidden">
              <img
                src={PROFILE.images.campusPortrait}
                alt="Md. Ferdous Hasan Zihad Akash at North South University"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/45 to-transparent p-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-sky-300">
                  NSU ECE · Dhaka
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  Computer Science &amp; Engineering (AI Major)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 divide-x divide-slate-200 border-t border-slate-200 dark:divide-zinc-800 dark:border-zinc-800">
              <div className="p-4">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-zinc-400">
                  <Globe2 className="h-3.5 w-3.5 text-sky-500" />
                  <span>Languages</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-zinc-100">
                  English &amp; Bengali
                </p>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-zinc-400">
                  <Music className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Off the Clock</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-zinc-100">
                  Debate &amp; Guitar
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
            About Me
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            An engineer&apos;s rigor paired with an operator&apos;s accountability.
          </h2>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 dark:text-zinc-300">
            <p>
              I started out building PHP &amp; MySQL relief platforms, Flutter mobile apps, and
              PyTorch computer vision classifiers during my Computer Science &amp; Engineering degree
              at North South University (Major in Artificial Intelligence, Minor in Data
              Communication &amp; Network).
            </p>
            <p>
              Today, I work remotely as a{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">
                Project Manager at Skarion
              </strong>{' '}
              while pursuing an{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">
                M.Sc. in Statistics &amp; Data Science
              </strong>{' '}
              at Jahangirnagar University. Across technical and operational teams, I translate
              ambiguous goals into structured workflows, KPI-backed delivery, and reliable
              AI-assisted systems.
            </p>
            <p>
              Outside of shipping code and managing projects, I am a passionate parliamentary
              debater (Champion, NSUDC Intra 2024 &amp; former Sub-Executive of Debate Development),
              guitarist, and longtime campus volunteer.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-slate-900 dark:text-white">
                Operational &amp; Delivery Leadership
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                Revenue-aligned project execution ($50K+ supported), workload orchestration, SOPs,
                client relationships, and AI workflow QA.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-slate-900 dark:text-white">
                AI, Data &amp; Full-Stack Engineering
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                Hands-on across Python, PyTorch/TFLite vision models, LLM pipelines, MERN/PERN APIs,
                and cross-platform Flutter apps.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-slate-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 dark:border-zinc-800">
              <Award className="h-3.5 w-3.5 text-amber-500" />
              NSUDC Intra 2024 Champion
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 dark:border-zinc-800">
              <Code2 className="h-3.5 w-3.5 text-sky-500" />
              500+ LinkedIn Network · 860+ Followers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
