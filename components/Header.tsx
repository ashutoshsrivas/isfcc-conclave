"use client";

import { useEffect, useState } from "react";
import { EVENT, NAV } from "@/content/event";
import CoBranding from "./CoBranding";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a
          href="#top"
          aria-label="ISFCC 2026 — home"
          className={`flex items-center gap-3 transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <CoBranding labels={false} size="sm" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="nav-link text-sm font-medium text-brown-soft transition-colors hover:text-rust"
            >
              {n.label}
            </a>
          ))}
          <a
            href={EVENT.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine rounded-full bg-orange px-5 py-2 text-sm font-semibold text-cream hover:bg-orange-bright"
          >
            Register
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-brown lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-line bg-cream/95 backdrop-blur-md lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4"
            aria-label="Mobile"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-brown-soft transition-colors hover:bg-brown/5 hover:text-rust"
              >
                {n.label}
              </a>
            ))}
            <a
              href={EVENT.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-orange px-5 py-3 text-center text-base font-semibold text-cream"
            >
              Register / Express Interest
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
