import type { Metadata } from "next";
import { getAllPosts } from "@/utils/markdown";
import BlogCard from "@/components/SharedComponent/Blog/blogCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Travel guides, destination stories, cultural insights, and trip inspiration from across Cameroon.",
};

const categories = [
  "All",
  "Travel Tips",
  "Destination Guides",
  "Culture",
  "Food",
  "Wildlife",
  "News",
];

export default function BlogPage() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      {/* Hero */}
      <section className="bg-darkmode pt-40 pb-16 relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary opacity-10 blur-400 rounded-full -top-20 -right-20" />
        <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-1">
          <p className="text-primary font-cormorant italic text-24 mb-3">
            Travel Inspiration
          </p>
          <h1 className="font-playfair font-bold text-white text-54 md:text-70 mb-5">
            Our Travel Journal
          </h1>
          <p className="text-muted text-opacity-70 text-18 max-w-xl">
            Destination guides, cultural stories, travel tips, and behind-the-scenes
            from our adventures across Cameroon.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="bg-ivory border-b border-border py-5">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="flex items-center gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-15 font-medium whitespace-nowrap transition-colors duration-200 ${
                  cat === "All"
                    ? "bg-primary text-white"
                    : "bg-white border border-border text-caramel hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="bg-ivory py-16">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          {posts.length > 0 ? (
            <>
              {/* Featured post — first/latest */}
              <div className="mb-12">
                <BlogCard blog={posts[0]} />
              </div>

              {/* Rest of posts */}
              {posts.length > 1 && (
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                  {posts.slice(1).map((post, i) => (
                    <BlogCard key={i} blog={post} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="font-playfair font-bold text-midnight_text text-30 mb-4">
                Stories coming soon
              </p>
              <p className="text-caramel text-18 mb-6">
                Our team is working on destination guides and travel stories.
              </p>
              <Link
                href="/"
                className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-lg hover:bg-mid_brown transition-colors duration-200"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
