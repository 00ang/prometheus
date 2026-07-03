import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Kalamazoo&apos;s neighborhood smoke shop &mdash; vapes, e-liquid, glass,
              hookah, cigars, premium tobacco, RAW, exotic snacks &amp; drinks.
              Lowest prices in town. 21+ only.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="heading text-xl text-white">Visit</h4>
            <address className="mt-3 not-italic text-sm leading-relaxed text-white/70">
              635 N 9th St, Suite E
              <br />
              Kalamazoo, MI 49009
              <br />
              Next to Walmart
            </address>
            <a
              href="tel:+12692548351"
              className="mt-3 inline-block text-sm text-ember-300 hover:text-ember-200"
            >
              (269) 254-8351
            </a>
          </div>

          <div className="lg:col-span-2">
            <h4 className="heading text-xl text-white">Hours</h4>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>Open Daily</li>
              <li>9 AM – 10 PM</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="heading text-xl text-white">Sections</h4>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>
                <a href="/#about" className="hover:text-ember-300">
                  About
                </a>
              </li>
              <li>
                <a href="/#products" className="hover:text-ember-300">
                  Products
                </a>
              </li>
              <li>
                <a href="/#brands" className="hover:text-ember-300">
                  Brands
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-ember-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#hours" className="hover:text-ember-300">
                  Hours
                </a>
              </li>
              <li>
                <a href="/#visit" className="hover:text-ember-300">
                  Visit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs uppercase tracking-widest text-white/40">
            &copy; {year} Best Puff Tobacco &amp; Exotic Snacks. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-widest text-white/40">
            21+ only &middot; Please use tobacco products responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
