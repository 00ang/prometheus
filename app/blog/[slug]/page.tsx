import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostBody from "@/components/PostBody";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found | Best Puff Tobacco" };
  return {
    title: `${post.title} | Best Puff Tobacco`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function PostPage({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const others = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 sm:pt-36">
        <article className="container-x">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-ember-300"
            >
              ← Back to Blog
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-ember-500 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                {post.category}
              </span>
              <span className="text-xs uppercase tracking-widest text-white/40">
                {formatPostDate(post.date)} · {post.readMinutes} min read
              </span>
            </div>

            <h1 className="heading mt-5 text-4xl text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-white/70 sm:text-xl">
              {post.dek}
            </p>

            <hr className="my-10 border-white/10" />

            <PostBody blocks={post.body} />

            <div className="mt-14 rounded-3xl border border-ember-500/30 bg-ember-500/[0.07] p-6 sm:p-8">
              <span className="eyebrow">Stop in to grab one</span>
              <p className="mt-2 text-white/80 leading-relaxed">
                Best Puff Tobacco · 635 N 9th Street, Suite E, Kalamazoo, MI 49009 ·
                next to Walmart.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="tel:+12692548351" className="btn-primary">
                  Call (269) 254-8351
                </a>
                <Link href="/#visit" className="btn-ghost">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </article>

        {others.length > 0 && (
          <section className="container-x mt-20">
            <div className="mx-auto max-w-3xl">
              <span className="eyebrow">Keep Reading</span>
              <h2 className="heading mt-3 text-3xl text-white sm:text-4xl">
                More from the shop.
              </h2>
            </div>
            <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2">
              {others.map((p) => (
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
