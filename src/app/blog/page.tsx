import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/SharedComponent/Blog/blogCard";
import { blog } from "@/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Travel stories, trip recaps and behind-the-scenes from WakaWithUs journeys across Cameroon.",
};

export default function BlogPage() {
  const posts = [...blog].sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <Image src="/images/photos/waka.jpeg" alt="WakaWithUS travellers" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: "center 30%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,12,4,0.9) 0%, rgba(20,12,4,0.25) 60%, rgba(20,12,4,0.4) 100%)" }} />
        <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10 pb-14">
          <span className="text-white/80 text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-white/50" />
            Travel journal
          </span>
          <h1 className="font-playfair font-bold text-white" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Stories from the road
          </h1>
          <p className="text-white/75 text-18 max-w-xl mt-5">
            Trip recaps, destination notes and behind-the-scenes from our adventures across Cameroon.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
              {posts.map((post, i) => (
                <BlogCard key={i} blog={post} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-playfair font-bold text-ink text-30 mb-4">Stories coming soon</p>
              <p className="text-stone text-18 mb-6">We&apos;re writing up our latest adventures — check back soon.</p>
              <Link href="/" className="inline-block bg-forest text-white font-medium px-8 py-3 rounded-full hover:bg-forest_dark transition-colors duration-200">
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
