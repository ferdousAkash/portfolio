import { useState, type FormEvent } from 'react';
import { Check, Copy, Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusNote, setStatusNote] = useState<string | null>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatusNote(`Email: ${PROFILE.email}`);
    }
  };

  const handleCompose = (e: FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject.trim() || `Portfolio Inquiry from ${name.trim() || 'Visitor'}`,
    );
    const body = encodeURIComponent(
      `Hi Akash,\n\n${message.trim()}\n\n—\nFrom: ${name.trim() || 'Portfolio Visitor'}${
        senderEmail.trim() ? ` (${senderEmail.trim()})` : ''
      }`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${mailSubject}&body=${body}`;
    setStatusNote('Opening your email client with the pre-filled message.');
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-200/80 bg-slate-50/70 py-14 sm:py-20 dark:border-zinc-800/80 dark:bg-zinc-950/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
              Get in Touch
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Let&apos;s build or collaborate.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
              Open to conversations around AI/ML workflows, full-stack engineering, data science
              research, and cross-functional project delivery.
            </p>

            <div className="mt-7 space-y-3">
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/70">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/12 text-sky-600 dark:text-sky-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-zinc-400">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-sm font-semibold text-slate-900 hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/70">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-400">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] font-medium text-slate-500 dark:text-zinc-400">
                    Phone
                  </p>
                  <a
                    href={`tel:${PROFILE.phone.replace(/[^+\d]/g, '')}`}
                    className="text-sm font-semibold text-slate-900 hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/70">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/12 text-violet-600 dark:text-violet-400">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] font-medium text-slate-500 dark:text-zinc-400">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {PROFILE.location} (Remote Worldwide)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:text-sky-400"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:text-sky-400"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:text-sky-400"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleCompose}
              className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8 dark:border-zinc-800/90 dark:bg-zinc-900/70"
            >
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Send a Message
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400">
                Drafts a structured email directly to {PROFILE.email}.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-slate-700 dark:text-zinc-300"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Rahman"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-sky-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-sky-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-slate-700 dark:text-zinc-300"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-sky-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-slate-700 dark:text-zinc-300"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project inquiry / Collaboration"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-sky-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-sky-500"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-slate-700 dark:text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, role, or idea..."
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-sky-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-sky-500"
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 dark:bg-sky-500 dark:text-zinc-950 dark:hover:bg-sky-400"
                >
                  <Send className="h-4 w-4" />
                  <span>Send via Email</span>
                </button>
                {statusNote && (
                  <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {statusNote}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
