"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { featuredTripsData } from "@/app/api/data";
import { global } from "@/content";

const UpcomingTrips = () => {
  const trips = featuredTripsData;
  const [t, setT] = useState(0);
  const count = trips.length;
  const trip = trips[t];

  const next = () => setT((p) => (p + 1) % count);
  const prev = () => setT((p) => (p - 1 + count) % count);

  useEffect(() => {
    if (count < 2) return;
    const id = setInterval(() => setT((p) => (p + 1) % count), 6500);
    return () => clearInterval(id);
  }, [count]);

  return (
    <section className="bg-white py-24 md:py-32" id="trips">
      <div className="container mx-auto lg:max-w-screen-xl px-4">

        <div className="text-center mb-14">
          <span className="text-forest text-13 font-semibold uppercase tracking-[0.3em] inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-forest/40" />
            Next departures
            <span className="w-8 h-px bg-forest/40" />
          </span>
          <h2 className="font-playfair font-bold text-ink" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            Our upcoming journeys
          </h2>
        </div>

        {/* Trip carousel */}
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-line shadow-sm bg-cloud">
          {/* Image (links to that trip's programme) */}
          <div className="relative h-80 lg:h-auto min-h-[380px] bg-cloud">
            <Link href={`/trips#trip-${t}`} className="absolute inset-0 block group" aria-label="View full programme">
              <AnimatePresence mode="wait">
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={trip.flyer}
                    alt={trip.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-3"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,12,4,0.35), transparent 45%)" }} />
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-12 font-semibold text-ink bg-white/90 px-4 py-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View full programme →
              </span>
            </Link>

            <span className="absolute top-5 left-5 z-10 text-11 font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gold text-ink">
              {trip.spotsLeft} spots left
            </span>

            {/* Trip switch arrows */}
            {count > 1 && (
              <>
                <button onClick={prev} aria-label="Previous trip" className="absolute top-1/2 left-4 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1410" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button onClick={next} aria-label="Next trip" className="absolute top-1/2 right-4 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1410" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
                </button>
              </>
            )}
          </div>

          {/* Text */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={t} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                <span className="text-clay text-12 font-semibold uppercase tracking-widest mb-2 block">{trip.region}</span>
                <h3 className="font-playfair font-bold text-ink mb-4" style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)", lineHeight: 1.1 }}>{trip.title}</h3>
                <p className="text-stone text-16 leading-relaxed mb-7">{trip.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-7">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-full flex items-center justify-center text-forest flex-shrink-0" style={{ background: "rgba(55,90,33,0.1)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    </span>
                    <div><p className="text-11 text-stone uppercase tracking-wide">Date</p><p className="text-15 font-semibold text-ink">{trip.dateRange}</p></div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-full flex items-center justify-center text-forest flex-shrink-0" style={{ background: "rgba(55,90,33,0.1)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" /></svg>
                    </span>
                    <div><p className="text-11 text-stone uppercase tracking-wide">Duration</p><p className="text-15 font-semibold text-ink">{trip.duration}</p></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {trip.inclusions.slice(0, 4).map((inc, k) => (
                    <span key={k} className="text-12 font-medium text-ink px-3 py-1.5 rounded-full border border-line">✓ {inc}</span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-line">
                  <div>
                    <p className="text-12 text-stone">Per person</p>
                    <p className="font-playfair font-bold text-ink text-30 leading-none">{trip.price} <span className="text-14 font-normal text-stone">XAF</span></p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`https://wa.me/${global.whatsapp}?text=${encodeURIComponent(`Hello WakaWithUS! I'd like to book ${trip.title} (${trip.dateRange}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-forest text-white text-15 font-semibold px-6 py-3 rounded-full hover:bg-forest_dark transition-colors duration-200"
                    >
                      Reserve
                    </a>
                    <Link href={`/trips#trip-${t}`} className="text-forest text-15 font-semibold px-6 py-3 rounded-full border border-forest/40 hover:bg-forest hover:text-white transition-colors duration-200">
                      Full plan
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            {count > 1 && (
              <div className="flex gap-2 mt-8">
                {trips.map((_, d) => (
                  <button key={d} onClick={() => setT(d)} aria-label={`Trip ${d + 1}`} className={`h-2 rounded-full transition-all duration-300 ${d === t ? "w-7 bg-forest" : "w-2 bg-line"}`} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTrips;
