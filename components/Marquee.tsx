const tags = [
  "Vapes",
  "E-Liquid",
  "Salt Nic",
  "Disposables",
  "Glass Pipes",
  "Bongs",
  "Nectar Collectors",
  "RAW",
  "Rolling Papers",
  "Hookah",
  "Shisha",
  "Coals",
  "Cigars",
  "Cigarettes",
  "Premium Tobacco",
  "Lighters",
  "Grinders",
  "Exotic Snacks",
  "Exotic Drinks",
  "Gifts",
];

export default function Marquee() {
  const items = [...tags, ...tags];
  return (
    <section
      aria-hidden="true"
      className="border-y border-white/10 bg-gradient-to-r from-ink-900 via-ink-800 to-ink-900 py-5 marquee overflow-hidden"
    >
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="heading text-2xl tracking-wider text-white/70"
          >
            <span className="text-ember-400">◆</span> {t}
          </span>
        ))}
      </div>
    </section>
  );
}
