import Image from "next/image";
import { publicAsset } from "@/lib/asset-path";
import { profile, stats } from "@/lib/data";
import { ArrowRight, Download, MapPin } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* Subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f1f3_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f3_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-16 pb-20 sm:px-8 md:pt-24 md:pb-28 lg:grid-cols-[1.35fr_1fr]">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-body">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open to full-time opportunities
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
            <span className="mt-2 block text-soft">{profile.role}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">{profile.headline}</p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-soft">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              View my work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={publicAsset(profile.cvUrl)}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line-strong bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <Download />
              Download CV
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-soft">
            <MapPin width={16} height={16} />
            Based in {profile.location} · Open to on-site, hybrid & remote roles
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="mx-auto max-w-sm rounded-2xl border border-line bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
              {profile.photo ? (
                <Image
                  src={publicAsset(profile.photo)}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, 90vw"
                  className="object-cover"
                />
              ) : (
                <div className="grid size-full place-items-center bg-gradient-to-b from-muted to-line">
                  <span className="text-7xl font-semibold tracking-tight text-faint">YM</span>
                </div>
              )}
            </div>
            <dl className="grid grid-cols-3 divide-x divide-line pt-3">
              {stats.map((s) => (
                <div key={s.label} className="px-2 py-2 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-xl font-semibold text-ink">{s.value}</dd>
                  <dd className="mt-0.5 text-[11px] leading-tight text-soft">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
