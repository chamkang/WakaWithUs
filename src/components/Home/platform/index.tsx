"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { destinations as destinationsContent } from "@/content";

type Region = {
  name: string;
  image: string;
  places: string;
  blurb: string;
  trips: number;
};

const regions: Region[] = destinationsContent.regions;

const DestinationCard = ({ region, index }: { region: Region; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 150, damping: 15 });
  const glowX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const sheen = useTransform(glowX, (x) => `radial-gradient(circle at ${x} 0%, rgba(255,255,255,0.25), transparent 55%)`);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-3xl overflow-hidden cursor-pointer aspect-[3/4] will-change-transform"
      >
        {/* Photo */}
        <Image
          src={region.image}
          alt={region.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
        {/* Scrim */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(16,12,8,0.9) 0%, rgba(16,12,8,0.15) 55%, rgba(16,12,8,0.25) 100%)" }} />

        {/* Moving sheen for obvious 3D feedback */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{ background: sheen }}
        />

        {/* Floating text (raised in Z for depth) */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end" style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}>
          <span className="text-white/70 text-11 font-semibold uppercase tracking-[0.2em] mb-2">
            {region.trips} journeys
          </span>
          <h3 className="font-playfair font-bold text-white text-22 md:text-28 leading-tight mb-2">{region.name}</h3>
          <p className="text-white/75 text-12 md:text-13 mb-1">{region.places}</p>
          <p className="text-white/60 text-12 md:text-13 leading-relaxed hidden sm:block">{region.blurb}</p>
        </div>

        {/* Corner number, raised further */}
        <span
          className="absolute top-5 right-5 font-playfair text-white/40 text-26 font-bold"
          style={{ transform: "translateZ(90px)" }}
        >
          0{index + 1}
        </span>
      </motion.div>
    </motion.div>
  );
};

const DestinationsGallery = () => {
  return (
    <section className="bg-white py-24 md:py-32" id="destinations">
      <div className="container mx-auto lg:max-w-screen-xl px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-clay text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-clay/50" />
              {destinationsContent.eyebrow}
            </span>
            <h2 className="font-playfair font-bold text-ink" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
              {destinationsContent.heading}
            </h2>
          </div>
          <p className="text-stone text-17 max-w-sm">
            {destinationsContent.note}
          </p>
        </div>

        {/* 3D cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {regions.map((r, i) => (
            <DestinationCard key={i} region={r} index={i} />
          ))}
        </div>

        <div className="mt-12">
          <Link href="/trips" className="inline-flex items-center gap-2 text-forest font-semibold text-16 hover:gap-3 transition-all duration-200">
            See every destination
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsGallery;
