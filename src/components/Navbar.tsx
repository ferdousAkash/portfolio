import { useState } from 'react';
import { FileText, Menu, Moon, Printer, Sun, X } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ darkMode, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 font-mono text-sm font-semibold text-sky-400 transition-transform group-hover:scale-105 dark:bg-sky-500/15 dark:text-sky-400 dark:ring-1 dark:ring-sky-500/30">
            A.
          </span>
          <span>{PROFILE.shortName}</span>
          <span className="hidden text-xs font-normal text-slate-400 sm:inline dark:text-zinc-500">
            / fhzakash
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download="Md_Ferdous_Hasan_Zihad_Akash_Resume.pdf"
            title="Download ATS Resume PDF"
            className="hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 sm:inline-flex dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => window.print()}
            title="Print or save portfolio as PDF"
            className="hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 sm:inline-flex dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Save PDF</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-all hover:bg-slate-800 sm:inline-flex dark:bg-sky-500 dark:text-zinc-950 dark:hover:bg-sky-400"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden dark:border-zinc-800 dark:text-zinc-300"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Md_Ferdous_Hasan_Zihad_Akash_Resume.pdf"
              onClick={() => setMobileOpen(false)}
              className="mt-1 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-left text-sm font-medium text-slate-700 dark:border-zinc-800 dark:text-zinc-300"
            >
              <FileText className="h-4 w-4" />
              Download ATS Resume (PDF)
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                window.print();
              }}
              className="mt-1 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-left text-sm font-medium text-slate-700 dark:border-zinc-800 dark:text-zinc-300"
            >
              <Printer className="h-4 w-4" />
              Save Portfolio PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
