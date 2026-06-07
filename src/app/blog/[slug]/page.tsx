import type { Metadata } from "next";
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";
import Image from "next/image";
import Link from "next/link";
import { getImagePrefix } from "@/utils/utils";
import { format } from "date-fns";
import ShareButtons from "@/components/SharedComponent/Blog/ShareButtons";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug, ["title", "excerpt"]);
  return {
    title: post.title ?? "Blog Post",
    description: post.excerpt ?? "",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "excerpt",
    "coverImage",
    "author",
    "content",
    "slug",
  ]);

  const content = await markdownToHtml(post.content ?? "");

  const relatedPosts = getAllPosts(["title", "slug", "coverImage", "date"])
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  return (
    <main>
      {/* Hero image */}
      <section className="bg-darkmode pt-24 relative overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "21/9" }}>
          {post.coverImage && (
            <Image
              src={`${getImagePrefix()}${post.coverImage}`}
              alt={post.title ?? "Blog post"}
              fill
              className="object-cover opacity-50"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-darkmode via-darkmode/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container mx-auto lg:max-w-screen-xl px-4 pb-12">
            <p className="text-primary font-cormorant italic text-20 mb-3">
              Travel Journal
            </p>
            <h1 className="font-playfair font-bold text-white text-36 md:text-54 max-w-3xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-muted text-opacity-60 text-15">
              {post.author && <span>By {post.author}</span>}
              {post.date && (
                <>
                  <span>·</span>
                  <span>{format(new Date(post.date), "MMMM dd, yyyy")}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-ivory py-16">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Main article */}
            <article className="lg:col-span-2">
              <div
                className="blog-details prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="font-lora font-semibold text-midnight_text text-18 mb-4">
                  Share this article
                </p>
                <ShareButtons title={post.title ?? ""} />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Related posts */}
              <div className="bg-white rounded-2xl border border-border p-6 mb-6">
                <h3 className="font-lora font-semibold text-midnight_text text-18 mb-5">
                  More Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((related, i) => (
                    <Link
                      key={i}
                      href={`/blog/${related.slug}`}
                      className="group flex gap-3 items-start"
                    >
                      {related.coverImage && (
                        <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={`${getImagePrefix()}${related.coverImage}`}
                            alt={related.title ?? ""}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-midnight_text text-14 font-medium group-hover:text-primary transition-colors duration-200 line-clamp-2">
                          {related.title}
                        </p>
                        {related.date && (
                          <p className="text-caramel text-12 mt-1">
                            {format(new Date(related.date), "MMM dd, yyyy")}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="bg-primary rounded-2xl p-6 text-center">
                <h3 className="font-playfair font-bold text-white text-20 mb-3">
                  Never Miss a Story
                </h3>
                <p className="text-white text-opacity-80 text-15 mb-4">
                  Get new articles and trip launches delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-60 rounded-lg px-4 py-2 text-15 mb-3 focus:outline-none"
                />
                <button className="w-full bg-white text-primary font-medium py-2 rounded-lg text-15 hover:bg-ivory transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <section className="bg-ivory pb-12">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium text-17 hover:text-mid_brown transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Travel Journal
          </Link>
        </div>
      </section>
    </main>
  );
}
