import type { Metadata } from "next";
import Link from "next/link";
import TopDealsBar from "@/components/TopDealsBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog & Newsletter | Best Puff Tobacco",
  description:
    "Product of the week, device spotlights, and shop news from Best Puff Tobacco in Kalamazoo, MI.",
};

export default function BlogIndex() {
  const all = getAllPosts();
  const [featured, ...rest] = all;

  return (
    <>
      <TopDealsBar />
      <Navbar />
      <main className="pt-36 pb-20 sm:pt-44">
        <section className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Blog &amp; Newsletter</span>
            <h1 className="heading mt-4 text-5xl sm:text-6xl">
              Fresh from the
              <span className="text-ember-400"> shop</span>.
            </h1>
            <p className="mt-4 text-white/70 leading-relaxed">
              Product of the week, device spotlights, and updates straight from the
              counter at 635 N 9th Street.
            </p>
          </div>
        </section>

        {featured && (
          <section className="container-x mt-12">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-8 transition hover:border-ember-500/40 sm:p-12"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-ember-500 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                  {featured.category}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/40">
                  {formatPostDate(featured.date)} · {featured.readMinutes} min read
                </span>
              </div>
              <h2 className="heading mt-4 text-3xl text-white transition group-hover:text-ember-200 sm:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-3xl text-white/70 leading-relaxed sm:text-lg">
                {featured.dek}
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ember-300">
                Read the post
                <span className="transition group-hover:translate-x-1">→</span>
              </p>
            </Link>
          </section>
        )}

        {rest.length > 0 && (
          <section className="container-x mt-12">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-800/60 p-6 transition hover:border-ember-500/40 hover:bg-ink-700/60"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-ember-500/40 bg-ember-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ember-200">
                      {p.category}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-white/40">
                      {formatPostDate(p.date)}
                    </span>
                  </div>
                  <h3 className="heading mt-4 text-2xl text-white transition group-hover:text-ember-200">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {p.excerpt}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ember-300">
                    Read more
                    <span className="transition group-hover:translate-x-1">→</span>
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
