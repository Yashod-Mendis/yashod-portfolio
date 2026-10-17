import Image from "next/image";
import type { Project } from "@/lib/data";

/**
 * A neutral wireframe-style cover. Used until a real screenshot is
 * added via the project's `image` field.
 */
export function ProjectCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={`${project.name} ${project.type} design`}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  const initials = project.name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  if (project.platform === "mobile") {
    return (
      <div aria-hidden="true" className="relative grid aspect-[16/10] place-items-center overflow-hidden bg-muted">
        <div className="flex translate-y-6 gap-4 transition-transform duration-500 group-hover:translate-y-4">
          {[0, 1].map((n) => (
            <div key={n} className="h-44 w-24 rounded-[18px] border border-line-strong bg-white p-2 shadow-sm">
              <div className="mx-auto h-1 w-6 rounded-full bg-line" />
              <div className={`mt-3 h-14 rounded-lg ${n === 0 ? "bg-accent/85" : "bg-line"}`} />
              <div className="mt-2 h-1.5 w-3/4 rounded-full bg-line-strong" />
              <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-line" />
              <div className="mt-3 grid grid-cols-2 gap-1.5">
                <div className="h-8 rounded-md bg-subtle ring-1 ring-line" />
                <div className="h-8 rounded-md bg-subtle ring-1 ring-line" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="relative aspect-[16/10] overflow-hidden bg-muted px-6 pt-6">
      <div className="h-full translate-y-2 rounded-t-lg border border-b-0 border-line-strong bg-white shadow-sm transition-transform duration-500 group-hover:translate-y-0">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="size-1.5 rounded-full bg-line-strong" />
          <span className="size-1.5 rounded-full bg-line-strong" />
          <span className="size-1.5 rounded-full bg-line-strong" />
          <span className="ml-3 h-1.5 w-20 rounded-full bg-muted" />
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-semibold tracking-wider text-ink">{initials}</span>
            <div className="flex gap-1.5">
              <span className="h-1 w-5 rounded-full bg-line-strong" />
              <span className="h-1 w-5 rounded-full bg-line-strong" />
              <span className="h-1 w-5 rounded-full bg-line-strong" />
            </div>
          </div>
          <div className="mt-3 flex h-20 flex-col justify-end rounded-md bg-gradient-to-br from-accent to-[#3b5a85] p-3">
            <span className="h-1.5 w-2/5 rounded-full bg-white/90" />
            <span className="mt-1.5 h-1 w-1/4 rounded-full bg-white/60" />
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            <div className="h-10 rounded-md bg-subtle ring-1 ring-line" />
            <div className="h-10 rounded-md bg-subtle ring-1 ring-line" />
            <div className="h-10 rounded-md bg-subtle ring-1 ring-line" />
          </div>
        </div>
      </div>
    </div>
  );
}
