import { ArrowRight, Github, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/80 bg-grid-pattern dark:border-zinc-800/80"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl dark:bg-sky-500/12"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/10"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{PROFILE.badge}</span>
          </div>

          <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-400">
            {PROFILE.fullName}
          </p>

          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08] dark:text-white">
            {PROFILE.heroTitleStart}{' '}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent dark:from-sky-400 dark:via-cyan-300 dark:to-emerald-400">
              {PROFILE.heroTitleAccent}
            </span>{' '}
            {PROFILE.heroTitleEnd}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-300">
            {PROFILE.heroDescription}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-sky-500 dark:text-zinc-950 dark:hover:bg-sky-400"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-all hover:border-slate-400 hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-200/80 pt-6 dark:border-zinc-800/80">
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-zinc-400">
              <MapPin className="h-3.5 w-3.5 text-sky-500" />
              <span>{PROFILE.location}</span>
            </div>

            <span className="hidden text-slate-300 sm:inline dark:text-zinc-700">|</span>

            <div className="flex items-center gap-2">
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-sky-500/50 dark:hover:text-sky-400"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-sky-500/50 dark:hover:text-sky-400"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-sky-500/50 dark:hover:text-sky-400"
              >
                <Instagram className="h-3.5 w-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-100 via-white to-slate-100 px-6 pt-8 shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-950">
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-6 h-64 rounded-full bg-gradient-to-tr from-sky-500/20 via-cyan-400/10 to-emerald-400/20 blur-2xl"
              />

              <div className="relative flex justify-center">
                <img
                  src={PROFILE.images.heroPortrait}
                  alt={PROFILE.fullName}
                  className="relative z-10 h-[360px] w-auto object-contain object-bottom drop-shadow-[0_18px_28px_rgba(2,6,23,0.35)] sm:h-[400px]"
                />
              </div>

              <div className="relative z-20 -mx-6 border-t border-slate-200/80 bg-white/90 px-6 py-4 backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-950/90">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                      Current Focus
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white">
                      AI Operations &amp; Delivery @ Skarion
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-right">
                    <p className="font-mono text-sm font-bold text-emerald-700 dark:text-emerald-300">
                      $50K+
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-emerald-600/90 dark:text-emerald-400/80">
                      Revenue
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-float-slow absolute -top-3 -right-2 hidden rounded-2xl border border-slate-200 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur sm:block dark:border-zinc-800 dark:bg-zinc-900/95">
              <p className="font-mono text-[11px] font-semibold text-slate-900 dark:text-zinc-100">
                M.Sc. Data Science
              </p>
              <p className="text-[10px] text-slate-500 dark:text-zinc-400">
                Jahangirnagar University
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
