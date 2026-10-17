import { experience } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <ol className="mt-12 space-y-10">
        {experience.map((job) => (
          <li
            key={job.company + job.period}
            className="grid gap-6 border-t border-line pt-10 md:grid-cols-[220px_1fr] md:gap-12"
          >
            <div>
              <p className="font-mono text-sm text-ink">{job.period}</p>
              <p className="mt-1 text-sm text-soft">{job.duration}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                {job.role} <span className="text-soft">· {job.company}</span>
              </h3>
              <p className="mt-3 text-base leading-relaxed text-body">{job.summary}</p>

              <ul className="mt-5 space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-relaxed text-body">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                    Email & brand projects
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-body">{job.clients.join(" · ")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">Tools</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {job.tools.map((t) => (
                      <span key={t} className="rounded-md border border-line px-2 py-0.5 text-xs text-body">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
