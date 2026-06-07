"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { global } from "@/content";

const gallery = [
  { src: "/images/photos/waterfall.jpg", alt: "Waterfall in the rainforest", span: "row-span-2" },
  { src: "/images/photos/cuisine.jpg", alt: "Cameroonian cuisine", span: "" },
  { src: "/images/photos/coast-aerial.jpg", alt: "Aerial view of the coastline", span: "row-span-2" },
  { src: "/images/photos/valley.jpg", alt: "Highland valley", span: "" },
  { src: "/images/photos/lake-mountains.jpg", alt: "Mountain lake", span: "" },
  { src: "/images/photos/wildlife-giraffe.jpg", alt: "Wildlife at sunset", span: "" },
];

const FinalSection = () => {
  return (
    <>
      {/* Gallery */}
      <section className="bg-cloud py-24 md:py-32" id="gallery">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-clay text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-clay/50" />
                Postcards
              </span>
              <h2 className="font-playfair font-bold text-ink" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
                Moments from the road
              </h2>
            </div>
            <p className="text-stone text-17 max-w-sm">
              A glimpse of what waits for you — captured by travellers just like you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
            {gallery.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative rounded-2xl overflow-hidden group ${g.span}`}
              >
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA over image */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <Image src="/images/photos/coast-kribi.jpg" alt="Sunset over a Cameroon beach" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(20,12,4,0.85) 0%, rgba(20,12,4,0.55) 60%, rgba(20,12,4,0.4) 100%)" }} />

        <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-playfair font-bold text-white mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.06, letterSpacing: "-0.02em" }}>
              Your Cameroon is waiting.
            </h2>
            <p className="text-white/80 text-18 leading-relaxed mb-10 max-w-lg">
              Tell us where you dream of going. We&apos;ll handle the rest —
              and you&apos;ll come home with stories worth telling.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${global.whatsapp}?text=Hello%20WakaWithUS!%20I%27m%20ready%20to%20plan%20my%20trip!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-ink font-semibold text-16 px-8 py-4 rounded-full hover:bg-cloud transition-colors duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Chat on WhatsApp
              </a>
              <a
                href="/trips"
                className="inline-flex items-center gap-2 text-white font-semibold text-16 px-8 py-4 rounded-full border border-white/40 hover:bg-white/10 transition-colors duration-300"
              >
                Browse all trips
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${global.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg wa-float"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </>
  );
};

export default FinalSection;
