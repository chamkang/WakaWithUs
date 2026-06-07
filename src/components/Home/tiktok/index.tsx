"use client";
import { useEffect } from "react";
import { global } from "@/content";

const TikTokFeed = () => {
  const url = global.tiktok;
  const handle = global.tiktokHandle;
  useEffect(() => {
    const id = "tiktok-embed-script";
    document.getElementById(id)?.remove();
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://www.tiktok.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section className="bg-cloud py-24 md:py-32" id="tiktok">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <span className="text-clay text-13 font-semibold uppercase tracking-[0.3em] inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-clay/50" />
            On TikTok
            <span className="w-8 h-px bg-clay/50" />
          </span>
          <h2 className="font-playfair font-bold text-ink" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            Follow our adventures
          </h2>
          <p className="text-stone text-17 mt-4 max-w-md mx-auto">
            The vibes, the views, the people — catch every Waka as it happens
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-forest font-semibold"> @{handle}</a>.
          </p>
        </div>

        <div className="flex justify-center">
          {/* TikTok creator embed (rendered by embed.js) */}
          <blockquote
            className="tiktok-embed"
            cite={url}
            data-unique-id={handle}
            data-embed-type="creator"
            style={{ maxWidth: 780, minWidth: 288, width: "100%" }}
          >
            <section>
              <a target="_blank" rel="noopener noreferrer" href={`${url}?refer=creator_embed`}>
                @{handle}
              </a>
            </section>
          </blockquote>
        </div>

        <div className="text-center mt-10">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-white font-semibold text-16 px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
            Open TikTok profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default TikTokFeed;
