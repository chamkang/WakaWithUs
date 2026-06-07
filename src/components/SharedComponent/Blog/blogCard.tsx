import React from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";

const cardPhotos = [
  "/images/photos/rainforest.jpg",
  "/images/photos/coast-kribi.jpg",
  "/images/photos/highlands.jpg",
  "/images/photos/waterfall.jpg",
  "/images/photos/safari.jpg",
  "/images/photos/valley.jpg",
];

const BlogCard = ({ blog, index = 0 }: { blog: Blog; index?: number }) => {
  const { title, excerpt, date, slug } = blog;
  const photo = cardPhotos[index % cardPhotos.length];

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="rounded-3xl overflow-hidden border border-line bg-white transition-all duration-300 hover:-translate-y-1.5">
        {/* Photo header */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={photo}
            alt={title || "WakaWithUS journal"}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute bottom-4 left-4 text-11 font-semibold uppercase tracking-widest text-white px-3 py-1.5 rounded-full" style={{ background: "rgba(30,92,67,0.85)" }}>
            Travel Journal
          </span>
        </div>

        {/* Body */}
        <div className="p-6">
          <span className="text-stone text-12 font-semibold uppercase tracking-wide">
            {format(new Date(date), "MMM dd, yyyy")}
          </span>
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
