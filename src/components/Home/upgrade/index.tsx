"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonialsData } from "@/app/api/data";

const FALLBACK = "/images/photos/coast-kribi.jpg";

const Testimonials = () => {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const count = testimonialsData.length;

  const go = (n: number) => { setDir(n > i ? 1 : -1); setI((n + count) % count); };
  const next = () => { setDir(1); setI((p) => (p + 1) % count); };
  const prev = () => { setDir(-1); setI((p) => (p - 1 + count) % count); };

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setI((p) => (p + 1) % count); }, 5500);
    return () => clearInterval(t);
  }, [count]);

  const t = testimonialsData[i];

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden" id="reviews">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="mb-14">
          <span className="text-clay text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-clay/50" />
            Traveller stories
          </span>
          <h2 className="font-playfair font-bold text-ink" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            Loved by 500+ walkers
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative rounded-3xl border border-line overflow-hidden bg-cloud">
          <div className="grid lg:grid-cols-2 min-h-[420px]">
            {/* Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image src={(t as { image?: string }).image || FALLBACK} alt={t.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={i}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-gold text-18">★</span>
                    ))}
                  </div>
                  <p className="font-playfair text-ink leading-snug mb-7" style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.9rem)" }}>
                    &ldquo;{t.review}&rdquo;
                  </p>
                  <p className="font-semibold text-ink text-17">{t.name}</p>
                  <p className="text-stone text-14">{t.location} · {t.trip}</p>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center gap-4 mt-10">
                <button onClick={prev} aria-label="Previous" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-forest hover:border-forest hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={next} aria-label="Next" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-forest hover:border-forest hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
                <div className="flex gap-2 ml-2">
                  {testimonialsData.map((_, d) => (
                    <button key={d} onClick={() => go(d)} aria-label={`Go to ${d + 1}`} className={`h-2 rounded-full transition-all duration-300 ${d === i ? "w-7 bg-forest" : "w-2 bg-line"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
