"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#featured", label: "Devices" },
  { href: "/#brands", label: "Brands" },
  { href: "/blog", label: "Blog" },
  { href: "/#hours", label: "Hours" },
  { href: "/#visit", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/85 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ember-500/40 bg-ember-500/10 text-ember-300 heading text-lg">
            BP
          </span>
          <span className="heading text-xl tracking-wide text-white">
            Best Puff <span className="text-ember-400">Tobacco</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
          <a href="tel:+12692548351" className="btn-primary !py-2 !px-4 !text-xs">
            (269) 254-8351
          </a>
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink-950/95 backdrop-blur">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="nav-link py-2"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+12692548351"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Call (269) 254-8351
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
