import { profile, services } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="About" title="Design that feels simple, built on solid engineering." />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-body">
            {profile.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>

        <div className="grid content-start gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="rounded-xl border border-line bg-subtle p-6 transition-colors hover:border-line-strong hover:bg-white"
            >
              <span className="font-mono text-xs text-faint">0{i + 1}</span>
              <h3 className="mt-4 text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
