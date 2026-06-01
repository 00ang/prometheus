import ProductImage from "@/components/ProductImage";
import Reveal from "@/components/Reveal";

type Category = {
  title: string;
  blurb: string;
  items: string[];
  icon: React.ReactNode;
  image?: string;
  imageAlt?: string;
};

const Icon = {
  Vape: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="9" width="13" height="6" rx="2" />
      <path d="M17 11h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2" />
      <path d="M7 6c1 1 0 2 0 3M11 5c1 1 0 2 0 3" />
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
  Glass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6v4l3 5v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9l3-5z" />
      <path d="M6 14h12" />
    </svg>
  ),
  Snack: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8c2-3 12-3 14 0l-2 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
      <path d="M9 13h6" />
    </svg>
  ),
};

const categories: Category[] = [
  {
    title: "Disposable Vapes & E-Liquids",
    blurb:
      "Top brands of disposable vapes, pod systems, and box mods alongside an extensive selection of e-liquids in every flavor profile imaginable. Whether you’re transitioning from traditional tobacco or you’re an experienced vaper, our staff can help you find the perfect device and liquid.",
    items: [
      "Disposable vapes (2K to 40K puffs)",
      "Pod systems & box mods",
      "Freebase & salt nic e-liquid",
      "Coils, pods & replacement parts",
    ],
    icon: Icon.Vape,
    image: "/images/vapes.png",
    imageAlt: "Disposable vapes and pod systems wall at Best Puff Tobacco",
  },
  {
    title: "Premium Tobacco & Cigars",
    blurb:
      "Cigarettes, pipe tobacco, rolling tobacco, and premium cigars from renowned manufacturers. We maintain proper humidity for our cigar inventory and can help you select the perfect smoke for any occasion.",
    items: [
      "Premium cigars (humidified)",
      "Pipe & rolling tobacco",
      "Domestic & import cigarettes",
      "Cigarillos, Black & Milds, Swishers",
    ],
    icon: Icon.Cigar,
    image: "/images/humidor.png",
    imageAlt: "Walk-in humidor at Best Puff Tobacco in Kalamazoo",
  },
  {
    title: "Hookah Products",
    blurb:
      "Best Puff Tobacco is Kalamazoo’s hookah headquarters. We stock complete hookah setups, replacement parts, premium shisha tobacco in dozens of flavors, natural coals, and all the accessories you need for the perfect session.",
    items: [
      "Complete hookah setups",
      "Premium shisha — dozens of flavors",
      "Natural & quick-light coals",
      "Hoses, bowls, foil, tongs, grommets",
    ],
    icon: Icon.Hookah,
    image: "/images/hookah.jpg",
    imageAlt: "Hookah display at Best Puff Tobacco in Kalamazoo",
  },
  {
    title: "Smoking Glass & Accessories",
    blurb:
      "Quality smoking glass including water pipes, hand pipes, bubblers, and dab rigs from trusted manufacturers. We also carry grinders, rolling papers, storage solutions, cleaning supplies, and every accessory a smoking enthusiast needs.",
    items: [
      "Water pipes, bubblers & dab rigs",
      "Hand pipes & nectar collectors",
      "Grinders, lighters & torches",
      "RAW papers, cones, trays & tips",
    ],
    icon: Icon.Glass,
    image: "/images/glass-wall.png",
    imageAlt: "Glass pipes and water pipes wall at Best Puff Tobacco",
  },
  {
    title: "Exotic Snacks & Drinks",
    blurb:
      "Looking for unique treats? Our exotic snacks section features hard-to-find beverages, candies, and snacks from around the world — the perfect complement to your smoke shop visit.",
    items: [
      "Exotic sodas & energy drinks",
      "International chips & candy",
      "Limited-edition releases",
      "Hot snacks & jerky",
    ],
    icon: Icon.Snack,
    image: "/images/snacks-1.png",
    imageAlt: "Exotic snacks and candy display at Best Puff Tobacco",
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
            Five departments, one neighborhood shop. From the latest disposables to
            humidified premium cigars, hookah, glass, and exotic snacks — we keep
            it all on the wall.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800/70 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-ember-500/40 hover:bg-ink-700/60 hover:shadow-glow">
                {c.image && (
                  <ProductImage src={c.image} alt={c.imageAlt ?? c.title} />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-ember-500/30 bg-ember-500/10 text-ember-300 transition group-hover:scale-110 group-hover:border-ember-400">
                    <span className="block h-6 w-6">{c.icon}</span>
                  </div>
                  <h3 className="heading text-2xl text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{c.blurb}</p>
                  <ul className="mt-5 grid grid-cols-1 gap-1.5 text-sm text-white/70">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember-400/70" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-6 sm:p-8">
            <span className="eyebrow">Quality Guaranteed</span>
            <p className="mt-3 text-white/75 leading-relaxed">
              Every product at Best Puff Tobacco is carefully selected for quality
              and value. We stand behind what we sell and are always happy to
              answer questions about our inventory.
            </p>
          </div>
          <div className="rounded-2xl border border-ember-500/30 bg-ember-500/[0.07] p-6 sm:p-8">
            <span className="eyebrow">Visit Our Kalamazoo Store</span>
            <p className="mt-3 text-white/75 leading-relaxed">
              The best way to see our full selection is to visit us in person at
              <span className="text-white"> 635 N 9th Street, Kalamazoo, MI 49009</span>.
              Our staff is ready to help you find exactly what you&apos;re looking for.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#visit" className="btn-primary !py-2.5 !px-5">
                Get Directions
              </a>
              <a href="tel:+12692548351" className="btn-ghost !py-2.5 !px-5">
                Call (269) 254-8351
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
