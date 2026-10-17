import { profile } from "@/lib/data";
import { GitHub, LinkedIn, Mail } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-soft sm:flex-row sm:px-8">
        <p>
          © {profile.year} {profile.name}. References available on request.
        </p>
        <div className="flex items-center gap-1">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="grid size-9 place-items-center rounded-md hover:bg-muted hover:text-ink">
            <Mail width={16} height={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-9 place-items-center rounded-md hover:bg-muted hover:text-ink">
            <LinkedIn width={16} height={16} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-9 place-items-center rounded-md hover:bg-muted hover:text-ink">
            <GitHub width={16} height={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
