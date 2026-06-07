"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { howItWorks, global } from "@/content";

const steps = howItWorks.steps;

const HowItWorks = () => {
  return (
    <section className="bg-cloud py-24 md:py-32" id="how-it-works">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left — heading + image */}
          <div className="lg:col-span-5">
            <span className="text-forest text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-forest/40" />
              {howItWorks.eyebrow}
            </span>
            <h2 className="font-playfair font-bold text-ink mb-6" style={{ fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1.12, letterSpacing: "-0.01em" }}>
              {howItWorks.heading}
            </h2>
            <p className="text-stone text-18 leading-relaxed mb-8">
              {howItWorks.body}
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image src={howItWorks.image} alt="WakaWithUS travellers at the beach" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </motion.div>
          </div>

          {/* Right — steps */}
          <div className="lg:col-span-7 lg:pt-4">
            <div className="space-y-2">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 py-7 border-b border-line group"
                >
                  <span className="font-playfair font-bold text-forest text-30 leading-none w-14 flex-shrink-0">{s.n}</span>
                  <div>
                    <h3 className="font-playfair font-bold text-ink text-24 mb-1.5">{s.title}</h3>
                    <p className="text-stone text-16 leading-relaxed">{s.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href={`https://wa.me/${global.whatsapp}?text=Hello%20WakaWithUS!%20I%27d%20like%20to%20book%20a%20trip.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-forest text-white font-semibold text-16 px-8 py-4 rounded-full hover:bg-forest_dark transition-colors duration-300 mt-10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Start on WhatsApp
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
