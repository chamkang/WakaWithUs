import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

type BlogCardData = {
  slug?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  coverImage?: string;
  tag?: string;
};

function safeDate(d?: string) {
  if (!d) return "";
  const t = new Date(d);
  return isNaN(t.getTime()) ? "" : format(t, "MMM dd, yyyy");
}

const BlogCard = ({ blog }: { blog: BlogCardData; index?: number }) => {
  const { title, excerpt, date, slug, coverImage, tag } = blog;
  const photo = coverImage || "/images/photos/rainforest.jpg";

  return (
    <Link href={`/blog/${slug}`} className="group block h-full">
      <div className="rounded-3xl overflow-hidden border border-line bg-white h-full transition-all duration-300 hover:-translate-y-1.5">
        {/* Cover photo (editable from the dashboard) */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={photo}
            alt={title || "WakaWithUS journal"}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute bottom-4 left-4 text-11 font-semibold uppercase tracking-widest text-white px-3 py-1.5 rounded-full" style={{ background: "rgba(55,90,33,0.85)" }}>
            {tag || "Travel Journal"}
          </span>
        </div>

        {/* Body */}
        <div className="p-6">
          {date && (
            <span className="text-stone text-12 font-semibold uppercase tracking-wide">{safeDate(date)}</span>
          )}
          <h5 className="font-playfair font-bold text-ink text-20 mt-2 mb-3 group-hover:text-forest transition-colors duration-200 line-clamp-2">
            {title}
          </h5>
          {excerpt && (
            <p className="text-stone text-15 mb-4 line-clamp-2 leading-relaxed">{excerpt}</p>
          )}
          <span className="text-forest text-14 font-semibold inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
            Read more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
