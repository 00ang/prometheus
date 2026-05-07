export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="absolute inset-0 -z-10 bg-grid-fade [background-size:100%_100%,40px_40px,40px_40px]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-ember-500/10 via-transparent to-transparent" />
      <div className="absolute -top-32 left-1/2 -z-10 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-ember-500/20 blur-[120px]" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
            Kalamazoo, Michigan · 21+
          </span>
          <h1 className="heading mt-5 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl xl:text-8xl">
            All your smoke
            <br />
            <span className="text-ember-400">needs</span> in one stop.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Best Puff Tobacco &amp; Exotic Snacks is Kalamazoo&apos;s go-to spot for vapes,
            e-liquids, glass, hookah, fine cigars, premium tobacco, RAW gear, and a
            curated wall of exotic snacks &amp; drinks — all at the lowest prices in town.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="btn-primary">
              Shop the Selection
            </a>
            <a href="#visit" className="btn-ghost">
              Get Directions
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-md text-left">
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">Open</dt>
              <dd className="heading text-2xl text-white">7 Days</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">Until</dt>
              <dd className="heading text-2xl text-white">11 PM</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">Prices</dt>
              <dd className="heading text-2xl text-ember-400">Lowest</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-ember-500/30 via-transparent to-transparent blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-1">
              <div className="rounded-[1.75rem] bg-ink-950 p-7">
                <p className="eyebrow">Today&apos;s Highlights</p>
                <ul className="mt-5 space-y-4">
                  {[
                    {
                      title: "Disposables",
                      sub: "Geek Bar · Raz · Lost Mary · Breeze",
                    },
                    {
                      title: "Premium Cigars",
                      sub: "Walk-in humidor stocked weekly",
                    },
                    {
                      title: "Hookah Bar Setup",
                      sub: "Bowls, hoses, coals & shisha",
                    },
                    {
                      title: "Exotic Snacks & Drinks",
                      sub: "Imports you won&apos;t find anywhere else",
                    },
                  ].map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ember-400" />
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p
                          className="text-xs text-white/55"
                          dangerouslySetInnerHTML={{ __html: item.sub }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-white/40">
                      Next to Walmart
                    </p>
                    <p className="text-sm font-semibold text-white">
                      635 N 9th St, Suite E
                    </p>
                  </div>
                  <a href="#visit" className="text-sm font-semibold text-ember-300 hover:text-ember-200">
                    Visit →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
