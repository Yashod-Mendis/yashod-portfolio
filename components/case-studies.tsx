import Image from "next/image";
import Link from "next/link";
import { publicAsset } from "@/lib/asset-path";
import { caseStudies } from "@/lib/case-studies";
import { ArrowRight } from "./icons";
import { SectionHeading } from "./section-heading";

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading
        eyebrow="Case studies"
        title="Design process, start to finish"
        description="A closer look at selected projects: the problem, the goals, the key design decisions and the final screens."
      />

      <ol className="mt-14 space-y-16 md:space-y-24">
        {caseStudies.map((cs, i) => (
          <li key={cs.slug}>
            <Link
              href={`/case-studies/${cs.slug}`}
              className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-muted lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={publicAsset(cs.cover)}
                  alt={`${cs.title} design preview`}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="lg:col-span-5">
                <p className="flex items-center gap-3 text-xs text-soft">
                  <span className="font-mono text-ink">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
                  <span className="font-semibold uppercase tracking-[0.14em]">{cs.eyebrow}</span>
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {cs.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-body">{cs.summary}</p>

                <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6">
                  {cs.meta.map((m) => (
                    <div key={m.label}>
                      <dt className="text-xs text-faint">{m.label}</dt>
                      <dd className="mt-1 text-sm font-medium text-ink">{m.value}</dd>
                    </div>
                  ))}
                </dl>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">
                  Read case study
                  <ArrowRight
                    width={16}
                    height={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
