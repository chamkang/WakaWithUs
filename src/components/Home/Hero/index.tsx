"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";
import CountUp from "@/components/Home/CountUp";
import { hero, global } from "@/content";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Background video */}
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={`${getImagePrefix()}images/photos/mount-cameroon.jpg`}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${getImagePrefix()}videos/waka.mp4`} type="video/mp4" />
        </video>
      </motion.div>

      {/* Scrim for legibility */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,12,4,0.88) 0%, rgba(20,12,4,0.25) 45%, rgba(20,12,4,0.5) 100%)" }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto lg:max-w-screen-xl px-4 h-full flex flex-col justify-end pb-28 md:pb-32">

          {/* Announcement pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 self-start rounded-full px-4 py-2 mb-7 backdrop-blur-sm border border-white/20"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <span className="text-white text-13 font-semibold tracking-wide">{hero.pill}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-playfair font-bold text-white max-w-4xl"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)", lineHeight: 1.04, letterSpacing: "-0.02em" }}
          >
            {hero.headlineLead} <span className="text-gold">{hero.headlineAccent}</span> {hero.headlineEnd}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-white/80 text-18 md:text-20 max-w-xl mt-7 leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <Link
              href="/trips"
              className="inline-flex items-center gap-2 bg-forest text-white font-semibold text-16 px-8 py-4 rounded-full hover:bg-forest_dark transition-colors duration-300 shadow-lg"
            >
              {hero.primaryCta}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={`https://wa.me/${global.whatsapp}?text=Hello%20WakaWithUS!%20I%27d%20love%20to%20plan%20a%20trip.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-16 px-8 py-4 rounded-full border border-white/40 hover:bg-white/10 transition-colors duration-300"
            >
              {hero.secondaryCta}
            </a>
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 border-t border-white/15 backdrop-blur-sm"
          style={{ background: "rgba(20,12,4,0.3)" }}
        >
          <div className="container mx-auto lg:max-w-screen-xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {hero.stats.map((s, i) => (
                <div key={i} className="py-5 px-4 text-center md:text-left">
                  <CountUp end={s.end} decimals={s.decimals} suffix={s.suffix} className="font-playfair font-bold text-white text-22 leading-none" />
                  <p className="text-white/60 text-12 mt-1 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
