import { education, skillGroups } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-subtle">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionHeading eyebrow="Skills" title="What I bring to a team" />
          <div className="mt-10 space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-white px-3 py-1.5 text-sm text-body"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Education" title="Background" />
          <ol className="mt-10 space-y-4">
            {education.map((e) => (
              <li key={e.school} className="rounded-xl border border-line bg-white p-6">
                <p className="font-mono text-xs text-soft">{e.period}</p>
                <h3 className="mt-2 text-base font-semibold text-ink">{e.credential}</h3>
                <p className="mt-1 text-sm text-body">{e.school}</p>
                <p className="text-sm text-soft">{e.location}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
