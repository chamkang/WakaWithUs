"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { why } from "@/content";

const icons = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 6 9 17l-5-5" /></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
];
const features = why.features.map((f, i) => ({ ...f, icon: icons[i % icons.length] }));

const WhyWaka = () => {
  return (
    <section className="bg-white py-24 md:py-32" id="about">
      <div className="container mx-auto lg:max-w-screen-xl px-4">

        {/* Feature: image + copy */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden order-2 lg:order-1"
          >
            <Image src={why.image} alt="A guided safari drive at sunset" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-clay text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-clay/50" />
              {why.eyebrow}
            </span>
            <h2 className="font-playfair font-bold text-ink mb-6" style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.12, letterSpacing: "-0.01em" }}>
              {why.heading}
            </h2>
            <p className="text-stone text-18 leading-relaxed mb-5">
              {why.body1}
            </p>
            <p className="text-stone text-18 leading-relaxed mb-8">
              {why.body2}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-forest text-white font-semibold text-16 px-7 py-3.5 rounded-full hover:bg-forest_dark transition-colors duration-300"
            >
              Our story
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </motion.div>
        </div>

        {/* Differentiators grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-forest mb-5" style={{ background: "rgba(55,90,33,0.1)" }}>
                {f.icon}
              </div>
              <h3 className="font-playfair font-bold text-ink text-20 mb-2">{f.title}</h3>
              <p className="text-stone text-15 leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWaka;
