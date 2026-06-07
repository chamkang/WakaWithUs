"use client";
import { motion } from "framer-motion";
import { marquee as places } from "@/content";

const Marquee = () => {
  const row = [...places, ...places];
  return (
    <div className="bg-ink py-5 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {row.map((p, i) => (
          <span key={i} className="flex items-center text-white/90 font-playfair text-22 md:text-26">
            <span className="px-6">{p}</span>
            <span className="text-gold text-15">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
