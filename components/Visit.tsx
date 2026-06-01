export default function Visit() {
  const address = "635 N 9th St Suite E, Kalamazoo, MI 49009";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="visit" className="py-20 sm:py-28 bg-ink-900/40 border-t border-white/5">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">Visit Us</span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">
            Find us on
            <br />
            <span className="text-ember-400">N 9th Street</span>.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We&apos;re tucked into Suite E at 635 N 9th Street, right next to Walmart.
            Easy parking, easy in &amp; out.
          </p>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">
                Address
              </dt>
              <dd className="mt-1 text-lg text-white">
                635 N 9th St, Suite E
                <br />
                Kalamazoo, MI 49009
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">Phone</dt>
              <dd className="mt-1">
                <a
                  href="tel:+12692548351"
                  className="text-lg text-white hover:text-ember-300"
                >
                  (269) 254-8351
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">
                Landmark
              </dt>
              <dd className="mt-1 text-lg text-white">
                Right next to Walmart Supercenter
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Open in Google Maps
            </a>
            <a href="tel:+12692548351" className="btn-ghost">
              Call the Shop
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800 aspect-[16/9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero.png"
              alt="Best Puff Tobacco storefront on N 9th Street in Kalamazoo, MI"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-ember-400 animate-pulse-dot" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                Storefront · 635 N 9th St
              </span>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-800 aspect-[16/10]">
            <iframe
              title="Best Puff Tobacco location map"
              src={mapEmbed}
              loading="lazy"
              className="h-full w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-xs uppercase tracking-widest text-white/40">
            Map &middot; 635 N 9th St Suite E, Kalamazoo, MI 49009
          </p>
        </div>
      </div>
    </section>
  );
}
