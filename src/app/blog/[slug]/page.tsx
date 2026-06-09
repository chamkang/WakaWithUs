import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { blog } from "@/content";
import ShareButtons from "@/components/SharedComponent/Blog/ShareButtons";

type Props = { params: { slug: string } };

function fmt(d?: string) {
  if (!d) return "";
  const t = new Date(d);
  return isNaN(t.getTime()) ? "" : format(t, "MMMM dd, yyyy");
}

export function generateStaticParams() {
  return blog.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blog.find((p) => p.slug === params.slug);
  return { title: post?.title ?? "Blog", description: post?.excerpt ?? "" };
}

export default function BlogPostPage({ params }: Props) {
  const post = blog.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blog.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <main className="bg-white">
      {/* Hero image */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image src={post.coverImage || "/images/photos/rainforest.jpg"} alt={post.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,12,4,0.92) 0%, rgba(20,12,4,0.25) 60%, rgba(20,12,4,0.4) 100%)" }} />
        <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10 pb-12">
          <p className="text-gold font-cormorant italic text-20 mb-3">{post.tag || "Travel Journal"}</p>
          <h1 className="font-playfair font-bold text-white max-w-3xl" style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", lineHeight: 1.06, letterSpacing: "-0.02em" }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-3 mt-4 text-white/70 text-15">
            {post.author && <span>By {post.author}</span>}
            {post.date && (<><span>·</span><span>{fmt(post.date)}</span></>)}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Article */}
            <article className="lg:col-span-2">
              {post.excerpt && (
                <p className="font-cormorant italic text-stone text-24 leading-relaxed mb-10">{post.excerpt}</p>
              )}

              <div className="space-y-8">
                {post.sections.map((s, i) => (
                  <div key={i}>
                    {s.heading && (
                      <h2 className="font-playfair font-bold text-ink text-28 mb-3">{s.heading}</h2>
                    )}
                    {s.text && (
                      <p className="text-ink/85 text-18 leading-relaxed whitespace-pre-line">{s.text}</p>
                    )}
                    {s.image && (
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mt-5 border border-line">
                        <Image src={s.image} alt={s.heading || post.title} fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-line">
                <p className="font-playfair font-semibold text-ink text-18 mb-4">Share this story</p>
                <ShareButtons title={post.title} />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-4">
                <p className="text-clay text-12 font-semibold uppercase tracking-widest mb-2">More stories</p>
                {related.map((r, i) => (
                  <Link key={i} href={`/blog/${r.slug}`} className="group flex gap-4 items-center rounded-2xl border border-line p-3 hover:border-forest transition-colors">
                    <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={r.coverImage || "/images/photos/rainforest.jpg"} alt={r.title} fill sizes="80px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-ink text-15 font-semibold leading-snug group-hover:text-forest transition-colors line-clamp-2">{r.title}</p>
                      <p className="text-stone text-12 mt-1">{fmt(r.date)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-14">
            <Link href="/blog" className="inline-flex items-center gap-2 text-forest font-semibold text-16 hover:gap-3 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Back to the journal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
