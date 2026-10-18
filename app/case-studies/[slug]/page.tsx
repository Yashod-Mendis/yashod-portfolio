import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { caseStudies, getCaseStudy, type Slide } from "@/lib/case-studies";
import { profile } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata(props: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} Case Study | ${profile.name}`,
    description: cs.summary,
  };
}

function SlideImage({ slide, priority }: { slide: Slide; priority?: boolean }) {
  // Slides are small, text-heavy exports: serve the originals untouched so
  // type stays crisp instead of being recompressed.
  return (
    <Image
      src={slide.src}
      alt={slide.alt}
      width={slide.width}
      height={slide.height}
      unoptimized
      priority={priority}
      className="block h-auto w-full"
    />
  );
}

export default async function CaseStudyPage(props: PageProps<"/case-studies/[slug]">) {
  const { slug } = await props.params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const index = caseStudies.indexOf(cs);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm text-soft transition-colors hover:text-ink"
          >
            <ArrowRight width={16} height={16} className="rotate-180" />
            <span className="hidden sm:inline">All case studies</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <p className="truncate text-sm font-semibold text-ink">{cs.title}</p>
          {cs.prototype ? (
            <a
              href={cs.prototype}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-ink px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              <span className="hidden sm:inline">View prototype</span>
              <span className="sm:hidden">Prototype</span>
              <ArrowUpRight width={14} height={14} />
            </a>
          ) : (
            <span className="w-16" aria-hidden="true" />
          )}
        </div>
      </header>

      <main className="flex-1 bg-subtle">
        <h1 className="sr-only">{cs.title} case study</h1>
        <article className="mx-auto max-w-[1440px] bg-white shadow-[0_0_0_1px_var(--color-line)]">
          {cs.sections.map((section, i) =>
            section.kind === "slide" ? (
              <SlideImage key={section.slide.src} slide={section.slide} priority={i === 0} />
            ) : (
              <div
                key={`grid-${i}`}
                className="grid gap-4 px-[5.556%] pb-[5.556%] pt-6 sm:grid-cols-2 sm:gap-6 lg:gap-10"
                style={{ backgroundColor: section.background }}
              >
                {section.slides.map((s) => (
                  <SlideImage key={s.src} slide={s} />
                ))}
              </div>
            ),
          )}
        </article>

        <nav
          aria-label="More case studies"
          className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <Link
            href="/#case-studies"
            className="text-sm text-soft transition-colors hover:text-ink"
          >
            ← Back to all case studies
          </Link>
          <Link
            href={`/case-studies/${next.slug}`}
            className="group inline-flex items-center gap-4 rounded-xl border border-line bg-white px-6 py-4 transition-colors hover:border-line-strong"
          >
            <span>
              <span className="block text-xs text-faint">Next case study</span>
              <span className="mt-0.5 block text-base font-semibold text-ink">{next.title}</span>
            </span>
            <ArrowRight
              width={18}
              height={18}
              className="text-ink transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
