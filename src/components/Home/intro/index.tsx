"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { intro } from "@/content";

const Intro = () => {
  return (
    <section className="bg-cloud py-24 md:py-32">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Statement */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-forest text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-7"
            >
              <span className="w-8 h-px bg-forest/40" />
              {intro.eyebrow}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair font-bold text-ink"
              style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)", lineHeight: 1.18, letterSpacing: "-0.01em" }}
            >
              {intro.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone text-18 leading-relaxed mt-8 max-w-xl"
            >
              {intro.body}
            </motion.p>
          </div>

          {/* Accent image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src={intro.image}
                alt="A WakaWithUS traveller on the road through Cameroon"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(16,12,8,0.4), transparent 50%)" }} />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/85 font-cormorant italic text-22 leading-snug">
                  &ldquo;{intro.quote}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
