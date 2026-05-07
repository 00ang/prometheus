import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <section id="blog" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">Blog &amp; Newsletter</span>
            <h2 className="heading mt-4 text-4xl sm:text-5xl">
              Fresh from the
              <span className="text-ember-400"> shop</span>.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Product of the week, device spotlights, and the news worth knowing
              before you stop in.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold uppercase tracking-widest text-ember-300 hover:text-ember-200"
          >
            View all posts →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          <Link
            href={`/blog/${featured.slug}`}
            className="group lg:col-span-3 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-7 transition hover:border-ember-500/40 sm:p-10"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-ember-500 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                {featured.category}
              </span>
              <span className="text-xs uppercase tracking-widest text-white/40">
                {formatPostDate(featured.date)} · {featured.readMinutes} min read
              </span>
            </div>
            <h3 className="heading mt-4 text-3xl text-white transition group-hover:text-ember-200 sm:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
              {featured.dek}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ember-300">
              Read the post
              <span className="transition group-hover:translate-x-1">→</span>
            </p>
          </Link>

          <div className="lg:col-span-2 flex flex-col gap-5">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-ink-800/60 p-6 transition hover:border-ember-500/40 hover:bg-ink-700/60"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-ember-500/40 bg-ember-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ember-200">
                    {p.category}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-white/40">
                    {formatPostDate(p.date)}
                  </span>
                </div>
                <h4 className="heading mt-3 text-xl text-white transition group-hover:text-ember-200 sm:text-2xl">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
