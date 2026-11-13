import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-8 dark:border-zinc-800/80 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-xs text-slate-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} {PROFILE.fullName}. All rights reserved.
        </p>

        <div className="no-print flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-zinc-400">
          <a
            href={PROFILE.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1 text-slate-700 transition-colors hover:bg-slate-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            <span>Top</span>
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
