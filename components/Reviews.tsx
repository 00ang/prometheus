import Reveal from "@/components/Reveal";

type Review = {
  quote: string;
  source: string;
  rating?: number;
};

const reviews: Review[] = [
  {
    quote:
      "Phenomenal service! Excellent selection of nicotine vapes! Awesome glass pieces!",
    source: "Yelp customer review",
    rating: 5,
  },
  {
    quote:
      "Fantastic, friendly, and helpful staff. I have never regretted purchasing products from here. Ever. Also a pretty sweet rewards program to boot.",
    source: "Yelp customer review",
    rating: 5,
  },
  {
    quote:
      "Been there many times and have never had anything other than A+ service from any of the employees.",
    source: "Yelp customer review",
    rating: 5,
  },
  {
    quote: "This vape shop is great and employees are top notch.",
    source: "Yelp customer review",
    rating: 5,
  },
  {
    quote:
      "Love the service and the people are awesome that work there. The selection is unmatched and the deals are great.",
    source: "Yelp customer review",
    rating: 5,
  },
  {
    quote:
      "Prices are great and I really like the staff — friendly and helpful every visit.",
    source: "Yelp customer review",
    rating: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="flex items-center gap-0.5 text-ember-400" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        >
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-20 sm:py-28 bg-ink-900/40 border-y border-white/5"
    >
      <div className="absolute -top-32 left-1/2 -z-10 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-ember-500/10 blur-[120px]" />

      <div className="container-x">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">What Customers Say</span>
              <h2 className="heading mt-4 text-4xl sm:text-5xl">
                Kalamazoo&apos;s
                <span className="text-ember-400"> top-notch</span>
                <br />
                smoke shop staff.
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Friendly faces, fast service, and a selection regulars call
                unmatched. Real words from real visitors.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-800/60 px-5 py-3">
              <Stars />
              <div>
                <p className="text-sm font-semibold text-white">5.0</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">
                  Yelp customers
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.quote.slice(0, 24)} delay={i * 80}>
              <figure className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 p-6 transition hover:border-ember-500/40 hover:bg-ink-700/60">
                <span
                  aria-hidden
                  className="absolute -top-4 right-4 heading text-7xl text-ember-500/20 select-none"
                >
                  &ldquo;
                </span>
                <Stars count={r.rating ?? 5} />
                <blockquote className="mt-4 text-white/85 leading-relaxed">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[11px] uppercase tracking-widest text-white/40">
                  — {r.source}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
