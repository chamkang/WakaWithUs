"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq as faqs } from "@/content";

const FAQItem = ({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) => (
  <div className="border-b border-line">
    <button onClick={onClick} className="w-full flex items-center justify-between gap-4 py-6 text-left group">
      <span className="font-playfair font-bold text-ink text-20 md:text-22 group-hover:text-forest transition-colors">{q}</span>
      <span className={`flex-shrink-0 w-9 h-9 rounded-full border border-line flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-forest border-forest rotate-45" : ""}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#fff" : "#1A1410"} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
      </span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-stone text-16 leading-relaxed pb-6 pr-12 max-w-2xl">{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-24 md:py-32" id="faq">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-forest text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-forest/40" />
              Good to know
            </span>
            <h2 className="font-playfair font-bold text-ink mb-5" style={{ fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1.12, letterSpacing: "-0.01em" }}>
              Questions, answered
            </h2>
            <p className="text-stone text-17 leading-relaxed">
              Still unsure about something? Message us on WhatsApp — a real person
              will reply, usually within the hour.
            </p>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} isOpen={open === i} onClick={() => setOpen(open === i ? null : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
