"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/data";
import { ArrowUpRight } from "./icons";
import { ProjectCover } from "./project-cover";
import { SectionHeading } from "./section-heading";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="border-y border-line bg-subtle">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects"
            description="High-fidelity Figma designs for travel, hospitality, service and product clients, delivered during my time at Smart eWorks and beyond."
          />
          <p className="shrink-0 text-sm text-soft">
            <span className="font-semibold text-ink">{projects.length}</span> projects
          </p>
        </div>

        <div role="group" aria-label="Filter projects" className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => {
            const isActive = f === active;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-white"
                    : "border-line-strong bg-white text-body hover:border-ink"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => {
            const Wrapper = p.link ? "a" : "div";
            return (
              <li key={p.name}>
                <Wrapper
                  {...(p.link ? { href: p.link, target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.18)]"
                >
                  <ProjectCover project={p} />
                  <div className="flex flex-1 flex-col border-t border-line p-6">
                    <div className="flex items-center justify-between gap-3 text-xs text-soft">
                      <span>{p.type}</span>
                      <span className="font-mono">{p.period}</span>
                    </div>
                    <h3 className="mt-2 flex items-center gap-2 text-lg font-semibold text-ink">
                      {p.name}
                      {p.link && (
                        <ArrowUpRight
                          width={16}
                          height={16}
                          className="text-faint transition-colors group-hover:text-ink"
                        />
                      )}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-soft">{p.description}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-1.5">
                      {p.featured && (
                        <span className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                          Featured
                        </span>
                      )}
                      {p.tools.map((t) => (
                        <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs text-body">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Wrapper>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
