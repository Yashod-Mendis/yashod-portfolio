import { profile } from "@/lib/data";
import { ArrowUpRight, GitHub, LinkedIn, Mail, Phone } from "./icons";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, Icon: Phone },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, Icon: LinkedIn },
  { label: "GitHub", value: profile.githubLabel, href: profile.github, Icon: GitHub },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div className="overflow-hidden rounded-2xl bg-ink px-6 py-14 sm:px-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something people enjoy using.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-faint">
              I&apos;m open to full-time UI/UX roles and freelance projects. The quickest way to
              reach me is email, and I usually reply within a day.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-line"
            >
              <Mail />
              Send me an email
            </a>
          </div>

          <ul className="divide-y divide-white/10 rounded-xl border border-white/10">
            {channels.map(({ label, value, href, Icon }) => {
              const external = href.startsWith("http");
              return (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/5"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-md bg-white/10 text-white">
                      <Icon width={16} height={16} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-faint">{label}</span>
                      <span className="block truncate text-sm text-white">{value}</span>
                    </span>
                    <ArrowUpRight
                      width={16}
                      height={16}
                      className="shrink-0 text-faint transition-colors group-hover:text-white"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
