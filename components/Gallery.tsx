import Reveal from "@/components/Reveal";

const gallery = [
  {
    src: "/images/tobacco-wall.png",
    alt: "Premium tobacco wall at Best Puff Tobacco",
    caption: "The tobacco wall",
  },
  {
    src: "/images/drinks.png",
    alt: "Exotic drinks cooler at Best Puff Tobacco",
    caption: "Exotic drinks cooler",
  },
  {
    src: "/images/snacks-2.png",
    alt: "Exotic snacks aisle at Best Puff Tobacco",
    caption: "Snacks from around the world",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-20 sm:py-28 bg-ink-900/40 border-y border-white/5"
    >
      <div className="absolute -top-32 left-0 -z-10 h-72 w-[40rem] -translate-x-1/4 rounded-full bg-ember-500/10 blur-[120px]" />

      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">Inside the Shop</span>
            <h2 className="heading mt-4 text-4xl sm:text-5xl">
              Take a quick walk
              <span className="text-ember-400"> down the aisle</span>.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              A look at what&apos;s on the shelves right now. Stop in to see the full
              selection in person.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 90}>
              <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 transition duration-300 hover:-translate-y-1 hover:border-ember-500/40 hover:shadow-glow">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
                  <span className="heading text-xl text-white">{g.caption}</span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur">
                    In store
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
