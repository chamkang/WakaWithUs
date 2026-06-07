import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about, global } from "@/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "WakaWithUS began in 2024 when two friends from Buea, Ekema and Onell, travelled to the Bimbia Slave Trade Center — and decided to help others rediscover Cameroon.",
};

const valueIcons = [
  "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20",
  "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 0",
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "M3 21h18M5 21V7l8-4v18M19 21V11l-6-4",
];
const values = about.values.map((v, i) => ({ t: v.title, d: v.desc, icon: valueIcons[i % valueIcons.length] }));
const timeline = about.timeline;
const founders = about.founders;

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image src="/images/photos/waka.jpeg" alt="The WakaWithUS community" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: "center 30%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,12,4,0.9) 0%, rgba(20,12,4,0.25) 60%, rgba(20,12,4,0.4) 100%)" }} />
        <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10 pb-14">
          <span className="text-white/80 text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-white/50" />
            Who we are
          </span>
          <h1 className="font-playfair font-bold text-white" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            {about.heading}
          </h1>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden order-2 lg:order-1">
              <Image src={about.image} alt="On the road through Cameroon" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-clay text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-clay/50" />
                Our story
              </span>
              <h2 className="font-playfair font-bold text-ink mb-6" style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.12 }}>
                {about.storyHeading}
              </h2>
              {about.story.map((para, k) => (
                <p key={k} className="text-stone text-18 leading-relaxed mb-5">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-cloud py-20 md:py-28 border-y border-line">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="text-center mb-14">
            <span className="text-forest text-13 font-semibold uppercase tracking-[0.3em] inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-forest/40" />
              The founders
              <span className="w-8 h-px bg-forest/40" />
            </span>
            <h2 className="font-playfair font-bold text-ink" style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)" }}>Two friends, one idea</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {founders.map((f, i) => (
              <div key={i} className="bg-white rounded-3xl border border-line p-8 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center font-playfair font-bold text-white text-30" style={{ background: i === 0 ? "#375A21" : "#9A4715" }}>
                  {f.initial}
                </div>
                <h3 className="font-playfair font-bold text-ink text-24">{f.name}</h3>
                <p className="text-clay text-14 font-semibold uppercase tracking-wide mb-3">{f.role}</p>
                <p className="text-stone text-15 leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="text-center mb-14">
            <span className="text-clay text-13 font-semibold uppercase tracking-[0.3em] inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-clay/50" />
              Our journey
              <span className="w-8 h-px bg-clay/50" />
            </span>
            <h2 className="font-playfair font-bold text-ink" style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)" }}>How far we&apos;ve walked</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((m, i) => (
              <div key={i} className="flex gap-6 md:gap-10 pb-10 last:pb-0 relative">
                {/* line */}
                {i < timeline.length - 1 && <span className="absolute left-[39px] md:left-[55px] top-14 bottom-0 w-px bg-line" />}
                <div className="flex-shrink-0 w-20 md:w-28 text-right">
                  <span className="font-playfair font-bold text-forest text-22 md:text-26">{m.year}</span>
                </div>
                <div className="relative pl-6">
                  <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-forest ring-4 ring-white" />
                  <h3 className="font-playfair font-bold text-ink text-22 mb-1.5">{m.title}</h3>
                  <p className="text-stone text-16 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cloud py-20 md:py-28 border-y border-line">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="text-center mb-14">
            <span className="text-forest text-13 font-semibold uppercase tracking-[0.3em] inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-forest/40" />
              What drives us
              <span className="w-8 h-px bg-forest/40" />
            </span>
            <h2 className="font-playfair font-bold text-ink" style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)" }}>Our values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-forest mb-5" style={{ background: "rgba(55,90,33,0.1)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d={v.icon} /></svg>
                </div>
                <h3 className="font-playfair font-bold text-ink text-20 mb-2">{v.t}</h3>
                <p className="text-stone text-15 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto lg:max-w-screen-xl px-4 text-center">
          <h2 className="font-playfair font-bold text-ink mb-5" style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)" }}>Come Waka with us</h2>
          <p className="text-stone text-18 mb-9 max-w-lg mx-auto">
            The next journey is already on the calendar. There&apos;s a place in the group for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/trips" className="inline-flex items-center gap-2 bg-forest text-white font-semibold text-16 px-8 py-4 rounded-full hover:bg-forest_dark transition-colors duration-200">
              See the upcoming trip
            </Link>
            <a href={`https://wa.me/${global.whatsapp}?text=Hello%20WakaWithUS!%20I%27d%20love%20to%20learn%20more.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-line text-ink font-semibold text-16 px-8 py-4 rounded-full hover:border-forest hover:text-forest transition-colors duration-200">
              Chat with us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
