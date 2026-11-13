import { Award, ExternalLink, GraduationCap, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION } from '../data/portfolio';

export function CredentialsSection() {
  return (
    <section id="credentials" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
            Academic Background
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>

          <div className="mt-7 space-y-4">
            {EDUCATION.map((edu) => (
              <div
                key={edu.school}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs dark:border-zinc-800/90 dark:bg-zinc-900/70"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-500/12 text-sky-600 dark:text-sky-400">
                      <GraduationCap className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                        {edu.school}
                      </h3>
                      <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
                        {edu.degree}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-600 dark:text-zinc-300">
                        {edu.field}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] text-slate-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                    {edu.period}
                  </span>
                </div>

                {edu.details.length > 0 && (
                  <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-600 dark:border-zinc-800/80 dark:text-zinc-400">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
            Verified Learning
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Licenses &amp; Certifications
          </h2>

          <div className="mt-7 space-y-3.5">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-xs transition-colors hover:border-slate-300 dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-zinc-700"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-slate-600 dark:bg-zinc-800 dark:text-zinc-300">
                        {cert.tag}
                      </span>
                      {cert.issued && (
                        <span className="font-mono text-[11px] text-slate-400 dark:text-zinc-500">
                          {cert.issued}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-600 dark:text-zinc-400">
                      {cert.issuer}
                      {cert.credentialId ? ` · ID: ${cert.credentialId}` : ''}
                    </p>
                  </div>
                </div>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Verify ${cert.title}`}
                    className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-sky-600 transition-colors hover:bg-slate-50 dark:border-zinc-800 dark:text-sky-400 dark:hover:bg-zinc-800"
                  >
                    <span>Verify</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            ))}

            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/8 p-4.5">
              <div className="flex items-center gap-2.5 text-amber-700 dark:text-amber-300">
                <Award className="h-5 w-5 shrink-0" />
                <div>
                  <p className="text-sm font-bold">Champion — NSUDC Intra Debate 2024</p>
                  <p className="text-xs opacity-90">
                    Asian Parliamentary Debate · Featured achievement on LinkedIn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
