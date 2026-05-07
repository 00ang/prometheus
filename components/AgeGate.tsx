"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "bpt_age_verified_v1";

export default function AgeGate() {
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      const ok = window.localStorage.getItem(STORAGE_KEY);
      if (!ok) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const confirm = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setOpen(false);
  };

  const deny = () => {
    window.location.href = "https://www.google.com";
  };

  if (!hydrated || !open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 px-4 backdrop-blur"
    >
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900 p-8 text-center shadow-glow">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-ember-500/30 bg-ember-500/10 text-ember-400">
          <span className="heading text-2xl">21+</span>
        </div>
        <h2 id="age-gate-title" className="heading text-3xl text-white sm:text-4xl">
          Are you 21 or older?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          You must be at least 21 years of age to enter this site. By entering you confirm
          you are of legal smoking age in your jurisdiction.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button onClick={confirm} className="btn-primary">
            Yes, I&apos;m 21+
          </button>
          <button onClick={deny} className="btn-ghost">
            No, exit
          </button>
        </div>
        <p className="mt-5 text-[11px] uppercase tracking-widest text-white/40">
          Best Puff Tobacco · Kalamazoo, MI
        </p>
      </div>
    </div>
  );
}
