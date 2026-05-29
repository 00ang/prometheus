"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const features = [
  "Patented kinetic gravity-fed activation",
  "360° rotation for hands-free use",
  "Aluminum & borosilicate glass construction",
  "Closed-loop airflow design",
  "One in stock — walk-in only",
];

export default function StundenglassShowcase() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="stundenglass"
      className="relative overflow-hidden py-20 sm:py-28 bg-ink-900/40 border-y border-white/5"
    >
      <div className="absolute -top-32 right-0 -z-10 h-72 w-[40rem] rounded-full bg-ember-500/15 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-[40rem] -translate-x-1/4 translate-y-1/3 rounded-full bg-ember-500/10 blur-[120px]" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <span className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-dot rounded-full bg-ember-400" />
              <span className="relative h-2 w-2 rounded-full bg-ember-400" />
            </span>
            In Stock · Walk-In Only
          </span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Stündenglass
            <br />
            <span className="text-ember-400">Gravity Hookah</span>
          </h2>
          <p className="mt-5 max-w-xl text-white/70 leading-relaxed sm:text-lg">
            The award-winning, kinetic gravity-fed glass hookah used by collectors
            worldwide. We have <span className="text-white font-semibold">one</span> on
            the shelf right now — come see it in person before it&apos;s gone.
          </p>

          <div className="mt-7 flex items-baseline gap-3">
            <span className="heading text-5xl text-white sm:text-6xl">$599</span>
            <span className="text-xs uppercase tracking-widest text-white/40">
              In-store price · cash or card
            </span>
          </div>

          <ul className="mt-7 grid gap-2 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-white/80"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember-400" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+12692548351" className="btn-primary shine">
              Call to Hold — (269) 254-8351
            </a>
            <a href="#visit" className="btn-ghost">
              Get Directions
            </a>
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-widest text-white/40">
            21+ only · While supplies last · One unit available
          </p>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none animate-float">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-ember-500/30 via-ember-500/0 to-transparent blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-2 shadow-glow">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-ink-950">
                {!imgFailed ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/images/stundenglass.jpg"
                    alt="Stündenglass gravity hookah in stock at Best Puff Tobacco"
                    onError={() => setImgFailed(true)}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-ember-500/40 bg-ember-500/10 text-ember-300">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-12 w-12"
                      >
                        <path d="M8 3h8v3a4 4 0 0 1-2 3.5V14a4 4 0 0 0 2 3.5V21H8v-3.5A4 4 0 0 0 10 14V9.5A4 4 0 0 1 8 6z" />
                        <path d="M6 3h12" />
                        <path d="M6 21h12" />
                      </svg>
                    </div>
                    <p className="heading text-2xl text-white">Stündenglass</p>
                    <p className="text-xs uppercase tracking-widest text-white/40">
                      Photo available in store
                    </p>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/80 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-ember-500/40 bg-ink-950/70 px-3 py-1.5 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember-400 animate-pulse-dot" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                    In Stock · 1 Left
                  </span>
                </div>
                <div className="absolute right-4 bottom-4 rounded-2xl bg-ember-500 px-4 py-2 shadow-glow">
                  <p className="heading text-2xl leading-none text-white">$599</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
