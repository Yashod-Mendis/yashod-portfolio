"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { Close, Menu } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-md transition-colors ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-md bg-ink text-xs font-semibold tracking-wide text-white">
            YM
          </span>
          <span className="text-sm font-semibold text-ink">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            download
            className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-md text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close width={22} height={22} /> : <Menu width={22} height={22} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-body"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-3">
              <a
                href={profile.cvUrl}
                download
                className="block rounded-md bg-ink px-4 py-3 text-center text-sm font-medium text-white"
              >
                Download resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
