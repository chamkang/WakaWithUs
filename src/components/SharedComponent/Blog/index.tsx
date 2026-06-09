import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import BlogCard from "./blogCard";
import { blog } from "@/content";

const BlogPreview: React.FC = () => {
  const posts = [...blog]
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-white" id="blog">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">

        {/* Section header */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="text-clay text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-clay/50" />
              Travel inspiration
            </span>
            <h2
              className="font-playfair font-bold text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              From the journal
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-16 text-forest font-semibold hover:gap-3 transition-all duration-200"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Read all articles
            <Icon icon="solar:arrow-right-outline" width="22" height="22" />
          </Link>
        </div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {posts.map((post, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={`${200 + i * 100}`} data-aos-duration="800">
              <BlogCard blog={post} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
