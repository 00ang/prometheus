import Reveal from "@/components/Reveal";

type Device = {
  name: string;
  tagline?: string;
  specs: string[];
  highlight?: string;
};

const devices: Device[] = [
  {
    name: "Adjust 40K",
    tagline: "Tune your puff",
    highlight: "40,000 puffs",
    specs: [
      "MyFlavor · MyCool",
      "MySour · MySweet",
      "Adjustable flavor profile",
      "Up to 40,000 puffs",
    ],
  },
  {
    name: "Off Stamp Crystal Cube",
    tagline: "Transparent · animated",
    highlight: "Up to 35,000 puffs",
    specs: [
      "19 mL e-liquid capacity",
      "50 mg (5%) salt nic",
      "1000 mAh device + 100 mAh pod",
      "Animated screen — battery & liquid indicators",
      "Type-C charging (cable not included)",
    ],
  },
  {
    name: "Breeze Pro",
    tagline: "Compact daily driver",
    highlight: "2,000 puffs",
    specs: [
      "6 mL capacity",
      "5% salt nic",
      "1000 mAh battery",
      "Just 48 g — pocket-friendly",
    ],
  },
  {
    name: "Breeze Prime",
    tagline: "Stepped-up Breeze",
    highlight: "≈ 6,000 puffs",
    specs: [
      "10 mL e-liquid capacity",
      "5% nicotine strength",
      "Charged out of the box",
      "Breeze life indicator",
    ],
  },
  {
    name: "Geek Bar (Dual Mesh)",
    tagline: "Two modes, big tank",
    highlight: "Up to 25,000 puffs",
    specs: [
      "18 mL pre-filled e-liquid",
      "5% (50 mg) nicotine",
      "820 mAh quick-charge battery",
      "Regular ≈ 25K · Pulse ≈ 15K",
      "Dual mesh coil, dual-core heating",
    ],
  },
  {
    name: "Geek Max Ultra X",
    tagline: "High-capacity workhorse",
    highlight: "30,000 puffs",
    specs: [
      "18 mL disposable",
      "5% nicotine strength",
      "All-in-one — no setup",
    ],
  },
  {
    name: "Geek Bar Clio Platinum",
    tagline: "Dual screen · 3 modes · flagship 50K",
    highlight: "Up to 50,000 puffs",
    specs: [
      "16 mL pre-filled e-liquid",
      "5% (50 mg) salt nic",
      "Dual mesh coils",
      "Regular 50K · Pulse 25K · Super Pulse 20K",
      "Dual screen display (battery + liquid)",
      "0 → 80% in ~30 min fast charge",
      "Type-C · draw-activated",
    ],
  },
  {
    name: "Foger Bit 35000",
    tagline: "Slim profile, big numbers",
    highlight: "Up to 35,000 puffs",
    specs: [
      "Size: 52 × 30.5 × 98.8 mm",
      "50 mg/mL nicotine",
      "0.8 Ω dual mesh coil",
      "Draw-activated · 850 mAh",
      "Type-C · overcharge protection",
    ],
  },
  {
    name: "Foger Switch Pro",
    tagline: "Detachable power, smart screen",
    highlight: "30K normal / 18K boost",
    specs: [
      "19 mL visible e-liquid",
      "50 mg (5%) salt nic",
      "1050 mAh rechargeable",
      "Adjustable airflow & power",
      "Detachable powerbank",
      "Smart screen + puff-time indicator",
      "Type-C · overcharge protection",
    ],
  },
];

const DeviceIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="8" y="2" width="8" height="20" rx="2" />
    <path d="M10 6h4" />
    <rect x="10" y="9" width="4" height="6" rx="1" />
    <circle cx="12" cy="18" r="0.6" fill="currentColor" />
  </svg>
);

export default function Featured() {
  return (
    <section id="featured" className="py-20 sm:py-28 bg-ink-900/40 border-y border-white/5">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">In-Stock Disposables</span>
            <h2 className="heading mt-4 text-4xl sm:text-5xl">
              Latest devices on the
              <span className="text-ember-400"> wall</span>.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Real specs, real puff counts, real prices. Stop in to see them in
              person &mdash; flavors rotate weekly and rare drops sell out fast.
            </p>
          </div>
          <p className="text-xs uppercase tracking-widest text-white/40">
            Selection rotates weekly &middot; In-store pricing only
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {devices.map((d, i) => (
            <Reveal key={d.name} delay={i * 60} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-ink-800/80 to-ink-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-ember-500/40 hover:shadow-glow">
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-ember-500/10 blur-2xl transition group-hover:bg-ember-500/25" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-ember-500/30 bg-ember-500/10 text-ember-300 transition group-hover:scale-110 group-hover:border-ember-400">
                      <span className="block h-6 w-6">{DeviceIcon}</span>
                    </div>
                    {d.highlight && (
                      <span className="rounded-full border border-ember-500/40 bg-ember-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-ember-200">
                        {d.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="heading mt-5 text-2xl text-white">{d.name}</h3>
                  {d.tagline && (
                    <p className="mt-1 text-sm text-white/55">{d.tagline}</p>
                  )}

                  <ul className="mt-4 space-y-1.5 text-sm text-white/75">
                    {d.specs.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember-400/70" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-ink-800/40 p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-white/75">
            <span className="heading text-ember-400 text-xl mr-2">&amp; more.</span>
            Discover the latest in vaping technology at our Kalamazoo vape shop.
            We carry top brands of disposable vapes, pod systems, box mods, and an
            extensive selection of e-liquids in every flavor profile imaginable.
            Whether you&apos;re transitioning from traditional tobacco or you&apos;re an
            experienced vaper, our staff can help you find the perfect device and
            liquid.
          </p>
        </div>
      </div>
    </section>
  );
}
