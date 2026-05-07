const brands = [
  "Geek Bar",
  "Lost Mary",
  "Raz",
  "Breeze",
  "Mr. Vapor",
  "North Vape",
  "Esco Bar",
  "Elf Bar",
  "Funky Republic",
  "Juicy Bar",
  "RAW",
  "Zig-Zag",
  "Backwoods",
  "Swisher Sweets",
  "Black & Mild",
  "Al Fakher",
  "Fumari",
  "Starbuzz",
  "Romeo y Julieta",
  "Macanudo",
  "Acid",
  "Drew Estate",
  "Zippo",
  "Clipper",
  "BIC",
  "Storz & Bickel",
  "PuffCo",
  "Grav",
  "Hemper",
  "OCB",
];

export default function Brands() {
  return (
    <section id="brands" className="py-20 sm:py-28 bg-ink-900/40 border-y border-white/5">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">Brands We Carry</span>
            <h2 className="heading mt-4 text-4xl sm:text-5xl">
              The names you <span className="text-ember-400">already trust</span>.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              We stock the established staples and the latest drops &mdash; across
              vapes, hookah, cigars, and accessories.
            </p>
          </div>
          <p className="text-xs uppercase tracking-widest text-white/40">
            Don&apos;t see a brand? Ask in store &mdash; we may have it behind the counter.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {brands.map((b) => (
            <li
              key={b}
              className="rounded-xl border border-white/10 bg-ink-800/60 px-4 py-4 text-center text-sm font-semibold uppercase tracking-wider text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-ember-500/40 hover:bg-ink-700/60 hover:text-ember-200"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
