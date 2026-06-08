"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featuredTripsData } from "@/app/api/data";
import { global } from "@/content";

const Check = () => (
  <span className="w-7 h-7 rounded-full flex items-center justify-center text-forest flex-shrink-0" style={{ background: "rgba(55,90,33,0.12)" }}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
  </span>
);

const TripsExplorer = () => {
  const trips = featuredTripsData;
  const [selected, setSelected] = useState<number | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // Deep-link support: /trips#trip-1 opens that trip
  useEffect(() => {
    const fromHash = () => {
      const m = window.location.hash.match(/^#trip-(\d+)$/);
      if (m) {
        const idx = Number(m[1]);
        if (idx >= 0 && idx < trips.length) setSelected(idx);
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [trips.length]);

  const open = (i: number) => {
    setSelected(i);
    if (typeof history !== "undefined") history.replaceState(null, "", `#trip-${i}`);
    requestAnimationFrame(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };
  const back = () => {
    setSelected(null);
    if (typeof history !== "undefined") history.replaceState(null, "", window.location.pathname);
    requestAnimationFrame(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const trip = selected != null ? trips[selected] : null;

  return (
    <section ref={topRef} className="bg-cloud scroll-mt-24 py-16 md:py-24">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <AnimatePresence mode="wait">
          {trip === null ? (
            /* ---------- LIST OF TRIP CARDS ---------- */
            <motion.div key="list" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <div className="text-center mb-12">
                <span className="text-clay text-13 font-semibold uppercase tracking-[0.3em] inline-flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-clay/50" />
                  Choose a journey
                  <span className="w-8 h-px bg-clay/50" />
                </span>
                <h2 className="font-playfair font-bold text-ink" style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)" }}>
                  Tap a trip to see the full plan
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {trips.map((tr, i) => (
                  <motion.button
                    key={i}
                    onClick={() => open(i)}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="group text-left rounded-3xl overflow-hidden border border-line bg-white shadow-sm"
                  >
                    <div className="relative h-56 overflow-hidden bg-cloud">
                      <Image src={tr.flyer} alt={tr.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,12,4,0.55), transparent 55%)" }} />
                      <span className="absolute top-4 left-4 text-11 font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gold text-ink">
                        {tr.spotsLeft} spots left
                      </span>
                      <span className="absolute bottom-4 left-4 right-4 text-white font-playfair font-bold text-22 leading-tight">{tr.title}</span>
                    </div>
                    <div className="p-6">
                      <span className="text-clay text-12 font-semibold uppercase tracking-widest">{tr.region}</span>
                      <p className="text-stone text-15 mt-2 mb-4">{tr.dateRange} · {tr.duration}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-line">
                        <p className="font-playfair font-bold text-ink text-22 leading-none">{tr.price} <span className="text-13 font-normal text-stone">XAF</span></p>
                        <span className="inline-flex items-center gap-2 text-forest font-semibold text-15 group-hover:gap-3 transition-all">
                          View programme
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            /* ---------- TRIP DETAIL ---------- */
            <motion.div key={`detail-${selected}`} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <button onClick={back} className="inline-flex items-center gap-2 text-stone hover:text-forest font-semibold text-15 mb-8 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                All trips
              </button>

              <div className="mb-10">
                <span className="text-clay text-12 font-semibold uppercase tracking-widest">{trip.region}</span>
                <h2 className="font-playfair font-bold text-ink mt-2" style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.08 }}>{trip.title}</h2>
                <p className="text-stone text-17 mt-2">{trip.dateRange} · {trip.duration} · {trip.destination}</p>
              </div>

              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
                {/* Main */}
                <div className="lg:col-span-8">
                  <a href={trip.flyer} target="_blank" rel="noopener noreferrer" className="group block mb-3">
                    <div className="relative aspect-[57/82] max-w-md mx-auto rounded-3xl overflow-hidden border border-line bg-white">
                      <Image src={trip.flyer} alt={`${trip.title} flyer`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
                      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-12 font-semibold text-white px-3 py-1.5 rounded-full bg-ink/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">Tap to enlarge</span>
                    </div>
                  </a>
                  <p className="text-center text-stone text-13 mb-10">The official trip flyer — tap to view full size.</p>

                  <p className="text-stone text-18 leading-relaxed mb-4">{trip.description}</p>
                  <p className="text-stone text-16 italic mb-12">&ldquo;{trip.highlight}.&rdquo;</p>

                  <h3 className="font-playfair font-bold text-ink text-28 mb-2">The full programme</h3>
                  <p className="text-stone text-16 mb-8">Day by day — including travel, activities and meal times.</p>
                  <div className="space-y-5 mb-14">
                    {trip.itinerary.map((d, k) => (
                      <div key={k} className="rounded-3xl border border-line overflow-hidden bg-white">
                        <div className="flex items-center justify-between px-6 py-4 bg-cloud border-b border-line">
                          <div className="flex items-baseline gap-3">
                            <span className="font-playfair font-bold text-forest text-20">{d.day}</span>
                            <span className="text-stone text-14">{d.date}</span>
                          </div>
                          <span className="font-semibold text-ink text-15">{d.title}</span>
                        </div>
                        <ul>
                          {d.schedule.map((s, j) => (
                            <li key={j} className="flex items-start gap-5 px-6 py-3.5 border-b border-line last:border-0">
                              <span className="font-semibold text-clay text-14 w-20 flex-shrink-0 tabular-nums">{s.time}</span>
                              <span className="text-ink text-15">{s.activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-playfair font-bold text-ink text-28 mb-6">Adventures await</h3>
                  <div className="grid sm:grid-cols-2 gap-3 mb-14">
                    {trip.activities.map((a, k) => (
                      <div key={k} className="flex items-center gap-3 text-ink text-16"><Check />{a}</div>
                    ))}
                  </div>

                  <h3 className="font-playfair font-bold text-ink text-28 mb-6">What&apos;s included</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {trip.inclusions.map((inc, k) => (
                      <div key={k} className="flex items-center gap-3 text-ink text-16"><Check />{inc}</div>
                    ))}
                  </div>
                </div>

                {/* Sticky booking card */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28 rounded-3xl border border-line bg-white p-7 shadow-sm">
                    <div className="flex items-end justify-between mb-6 pb-6 border-b border-line">
                      <div>
                        <p className="text-12 text-stone uppercase tracking-wide">Per person</p>
                        <p className="font-playfair font-bold text-ink text-36 leading-none">{trip.price}<span className="text-15 font-normal text-stone"> XAF</span></p>
                      </div>
                      <span className="text-11 font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gold text-ink">{trip.spotsLeft} left</span>
                    </div>
                    <ul className="space-y-4 mb-7 text-15">
                      <li className="flex items-start justify-between gap-4"><span className="text-stone">Date</span><span className="font-semibold text-ink text-right">{trip.dateRange}</span></li>
                      <li className="flex items-start justify-between gap-4"><span className="text-stone">Departs</span><span className="font-semibold text-ink text-right">{trip.departureTime}</span></li>
                      <li className="flex items-start justify-between gap-4"><span className="text-stone">Meeting point</span><span className="font-semibold text-ink text-right">{trip.meetingPoint}</span></li>
                      <li className="flex items-start justify-between gap-4"><span className="text-stone">Group size</span><span className="font-semibold text-ink text-right">Max {trip.maxPax}</span></li>
                      <li className="flex items-start justify-between gap-4"><span className="text-stone">Dress code</span><span className="font-semibold text-ink text-right">{trip.dressCode}</span></li>
                    </ul>
                    <a
                      href={`https://wa.me/${global.whatsapp}?text=${encodeURIComponent(`Hello WakaWithUS! I'd like to book ${trip.title} (${trip.dateRange}). Please send payment details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-forest text-white font-semibold text-16 py-4 rounded-full hover:bg-forest_dark transition-colors duration-200 mb-3"
                    >
                      Reserve on WhatsApp
                    </a>
                    <Link href="/contact" className="flex items-center justify-center w-full border border-line text-ink font-semibold text-16 py-4 rounded-full hover:border-forest hover:text-forest transition-colors duration-200">
                      Ask a question
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TripsExplorer;
