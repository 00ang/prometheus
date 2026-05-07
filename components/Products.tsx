type Category = {
  title: string;
  blurb: string;
  items: string[];
  icon: React.ReactNode;
};

const Icon = {
  Vape: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="9" width="13" height="6" rx="2" />
      <path d="M17 11h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2" />
      <path d="M7 6c1 1 0 2 0 3M11 5c1 1 0 2 0 3" />
    </svg>
  ),
  Liquid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6v3H9z" />
      <path d="M8 6h8l-1 4h-6z" />
      <path d="M7 10h10v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
      <path d="M11 14v4M13 14v4" />
    </svg>
  ),
  Glass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6v4l3 5v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9l3-5z" />
      <path d="M6 14h12" />
    </svg>
  ),
  Cigar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="10" width="18" height="4" rx="2" />
      <path d="M20 12h2" />
      <path d="M5 12h12" />
    </svg>
  ),
  Hookah: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v5" />
      <path d="M9 8h6l-1 4h-4z" />
      <path d="M10 12v3a2 2 0 0 0 2 2v0" />
      <ellipse cx="12" cy="19" rx="6" ry="2" />
      <path d="M16 14c2 0 4 1 4 3" />
    </svg>
  ),
  Roll: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="9" width="18" height="6" rx="3" />
      <path d="M7 9v6M11 9v6M15 9v6" />
    </svg>
  ),
  Snack: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8c2-3 12-3 14 0l-2 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
      <path d="M9 13h6" />
    </svg>
  ),
  Gift: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M3 12h18" />
      <path d="M12 8v13" />
      <path d="M8 8a2 2 0 1 1 0-4c2 0 4 4 4 4M16 8a2 2 0 1 0 0-4c-2 0-4 4-4 4" />
    </svg>
  ),
};

const categories: Category[] = [
  {
    title: "Vapes & Disposables",
    blurb:
      "A full wall of disposable devices and pod systems from the brands you trust.",
    items: [
      "Disposable vapes",
      "Pod systems",
      "Mods & batteries",
      "Coils & pods",
      "Cartridge devices",
    ],
    icon: Icon.Vape,
  },
  {
    title: "E-Liquid & Salt Nic",
    blurb:
      "Premium freebase and salt nic e-liquids in every flavor profile and strength.",
    items: [
      "Freebase e-liquid",
      "Salt nic",
      "Tobacco & menthol",
      "Fruit, dessert & menthol",
      "0mg / 3mg / 6mg / 35mg / 50mg",
    ],
    icon: Icon.Liquid,
  },
  {
    title: "Glass & Smoking Pipes",
    blurb:
      "Hand-blown glass pipes, water pieces, and dab gear for every level of collector.",
    items: [
      "Glass pipes",
      "Water pipes & bongs",
      "Nectar collectors",
      "Bowls & bangers",
      "Cleaners & accessories",
    ],
    icon: Icon.Glass,
  },
  {
    title: "Cigars & Cigarettes",
    blurb:
      "Fine cigars from boutique to brand-name and a complete cigarette wall.",
    items: [
      "Premium cigars",
      "Machine-made cigars",
      "Black & Milds",
      "Cigarillos",
      "Domestic & import cigarettes",
    ],
    icon: Icon.Cigar,
  },
  {
    title: "Hookah & Shisha",
    blurb:
      "Everything to set up at home — pipes, hoses, bowls, coals, and shisha tobacco.",
    items: [
      "Hookah pipes",
      "Shisha tobacco",
      "Hoses, bowls & grommets",
      "Charcoal & burners",
      "Foil, tongs & cleaners",
    ],
    icon: Icon.Hookah,
  },
  {
    title: "RAW & Rolling Supplies",
    blurb:
      "Genuine RAW papers, cones, trays, tips, and the rolling tools to match.",
    items: [
      "RAW papers & cones",
      "Tips & filters",
      "Rolling trays",
      "Grinders",
      "Lighters & torches",
    ],
    icon: Icon.Roll,
  },
  {
    title: "Exotic Snacks & Drinks",
    blurb:
      "Imports and limited drops you won&apos;t find at the grocery store down the street.",
    items: [
      "Exotic sodas",
      "International chips & candy",
      "Energy drinks",
      "Limited-edition releases",
      "Hot snacks & jerky",
    ],
    icon: Icon.Snack,
  },
  {
    title: "Accessories & Gifts",
    blurb:
      "The little things that complete the setup — and make great last-minute gifts.",
    items: [
      "Lighters & Zippos",
      "Ashtrays",
      "Storage & stash gear",
      "Apparel & novelties",
      "Gift-ready bundles",
    ],
    icon: Icon.Gift,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">What We Carry</span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">
            One stop. <span className="text-ember-400">Every</span> aisle.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We keep the entire shop stocked &mdash; from everyday essentials to the
            harder-to-find pieces. If you don&apos;t see it, ask. We&apos;ll often special
            order it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <article key={c.title} className="card group">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-ember-500/30 bg-ember-500/10 text-ember-300">
                <span className="block h-6 w-6">{c.icon}</span>
              </div>
              <h3 className="heading text-2xl text-white">{c.title}</h3>
              <p
                className="mt-2 text-sm text-white/60 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: c.blurb }}
              />
              <ul className="mt-4 space-y-1.5 text-sm text-white/70">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember-400/70" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs uppercase tracking-widest text-white/40">
          Selection rotates weekly &middot; Walk-in humidor &middot; In-stock pricing only
        </p>
      </div>
    </section>
  );
}
