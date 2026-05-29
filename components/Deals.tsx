import Reveal from "@/components/Reveal";

type Deal = {
  badge: string;
  headline: string;
  detail: string;
  fine?: string;
  href?: string;
  cta?: string;
};

const deals: Deal[] = [
  {
    badge: "Storewide",
    headline: "20% OFF",
    detail: "All glass & smoking accessories",
    fine: "Walk-in only · while supplies last",
    href: "#products",
    cta: "See selection",
  },
  {
    badge: "Stack & save",
    headline: "$3 OFF",
    detail: "When you buy any 2 vapes",
    fine: "Mix & match · in-stock devices",
    href: "#featured",
    cta: "Browse devices",
  },
  {
    badge: "Product of the Week",
    headline: "30% OFF",
    detail: "DOJO Sphere disposables",
    fine: "Limited time · while supplies last",
    href: "/blog/dojo-sphere-30-percent-off",
    cta: "Read the post",
  },
];

export default function Deals() {
  return (
    <section id="deals" className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-pulse-dot rounded-full bg-ember-400" />
                <span className="relative h-2 w-2 rounded-full bg-ember-400" />
              </span>
              Current Deals
            </span>
            <h2 className="heading mt-4 text-4xl sm:text-5xl">
              Save in store on the
              <span className="text-ember-400"> good stuff</span>.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Rotating in-store promotions on our most popular departments.
              Walk-in only — stop by the counter to claim.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((d, i) => (
            <Reveal key={d.headline + d.detail} delay={i * 90}>
              <a
                href={d.href ?? "#visit"}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ember-500/30 bg-gradient-to-br from-ember-700/20 via-ink-800 to-ink-900 p-7 transition hover:border-ember-400 hover:from-ember-600/25"
              >
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-ember-500/15 blur-3xl transition group-hover:bg-ember-500/25" />
                <div className="relative">
                  <span className="inline-flex items-center rounded-full border border-ember-500/40 bg-ember-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ember-200">
                    {d.badge}
                  </span>
                  <p className="heading mt-5 text-6xl text-white sm:text-7xl">
                    {d.headline}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{d.detail}</p>
                  {d.fine && (
                    <p className="mt-1 text-xs uppercase tracking-widest text-white/40">
                      {d.fine}
                    </p>
                  )}
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ember-300">
                    {d.cta ?? "Visit shop"}
                    <span className="transition group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
