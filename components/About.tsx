import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">About the Shop</span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">
            Kalamazoo&apos;s neighborhood smoke shop &mdash; with the
            <span className="text-ember-400"> exotic </span>
            twist.
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7 space-y-5 text-white/75 leading-relaxed">
          <p>
            Best Puff Tobacco &amp; Exotic Snacks is your local one-stop on N 9th Street,
            right next to Walmart. We stock the everyday essentials &mdash; cigarettes,
            cigars, vapes and accessories &mdash; alongside a deep selection of glass,
            hookah, RAW gear, and harder-to-find imports.
          </p>
          <p>
            Whether you&apos;re grabbing a disposable on the way out of town, hunting for
            a specific shisha flavor, or stocking up on rare snacks and drinks from
            around the world, our team will help you find it &mdash; at the lowest price
            in town.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 pt-3">
            {[
              "Lowest prices in Kalamazoo",
              "Open late, 7 days a week",
              "Knowledgeable, friendly staff",
              "Walk-in humidor & glass wall",
              "Constantly rotating exotics",
              "21+ verified storefront",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-800/50 px-4 py-3 text-sm text-white/80"
              >
                <span className="text-ember-400">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
