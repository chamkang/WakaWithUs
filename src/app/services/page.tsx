import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services as servicesContent, global } from "@/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "General trips, private journeys, trip consultation, trip negotiation, fitness & networking, and nightlife adventures across Cameroon.",
};

const icons = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 7h18M3 12h18M3 17h18" /><circle cx="7" cy="7" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="17" cy="17" r="1.4" fill="currentColor" stroke="none" /></svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 21v-2a4 4 0 0 0-3-3.87" /><path d="M4 21v-2a4 4 0 0 1 3-3.87" /><circle cx="12" cy="7" r="4" /></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M16 3h5v5" /><path d="M8 21H3v-5" /><path d="M21 3l-7.5 7.5" /><path d="M3 21l7.5-7.5" /></svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6.5 6.5l11 11" /><path d="M21 21l-1-1" /><path d="M3 3l1 1" /><path d="M18 22l4-4" /><path d="M2 6l4-4" /><path d="M3 10l7-7" /><path d="M14 21l7-7" /></svg>,
  <svg key="5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 3h14l-7 8z" /><path d="M12 11v8" /><path d="M8 21h8" /></svg>,
];
const services = servicesContent.map((s, i) => ({ ...s, icon: icons[i % icons.length] }));

const steps = [
  { n: "01", t: "Tell us your vibe", d: "Pick a service and share what you're after." },
  { n: "02", t: "We plan it", d: "We design the route, prices and logistics." },
  { n: "03", t: "You confirm", d: "Lock it in with a simple deposit." },
  { n: "04", t: "Waka!", d: "Show up and enjoy — we handle the rest." },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <Image src="/images/photos/waka.jpeg" alt="WakaWithUS group in Cameroon" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: "center 30%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,12,4,0.9) 0%, rgba(20,12,4,0.25) 60%, rgba(20,12,4,0.4) 100%)" }} />
        <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10 pb-14">
          <span className="text-white/80 text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-white/50" />
            What we do
          </span>
          <h1 className="font-playfair font-bold text-white" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Our services
          </h1>
          <p className="text-white/75 text-18 max-w-xl mt-5">
            Six ways to experience Cameroon with us — from ready-made group trips to
            fully bespoke journeys, planning help and unforgettable nights out.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="group relative bg-cloud rounded-3xl border border-line p-8 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300">
                {s.tag && (
                  <span className="absolute top-6 right-6 text-11 font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gold text-ink">{s.tag}</span>
                )}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-forest mb-6" style={{ background: "rgba(55,90,33,0.1)" }}>
                  {s.icon}
                </div>
                <h3 className="font-playfair font-bold text-ink text-24 mb-3">{s.title}</h3>
                <p className="text-stone text-15 leading-relaxed mb-6">{s.text}</p>
                <a
                  href={`https://wa.me/${global.whatsapp}?text=${encodeURIComponent(`Hello WakaWithUS! I'm interested in your ${s.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-forest font-semibold text-15 group-hover:gap-3 transition-all duration-200"
                >
                  Enquire
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cloud py-20 md:py-28 border-y border-line">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="text-center mb-14">
            <span className="text-clay text-13 font-semibold uppercase tracking-[0.3em] inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-clay/50" />
              How it works
              <span className="w-8 h-px bg-clay/50" />
            </span>
            <h2 className="font-playfair font-bold text-ink" style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)" }}>Simple from start to finish</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i}>
                <span className="font-playfair font-bold text-forest text-40 leading-none">{s.n}</span>
                <h3 className="font-playfair font-bold text-ink text-20 mt-3 mb-2">{s.t}</h3>
                <p className="text-stone text-15 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto lg:max-w-screen-xl px-4 text-center">
          <h2 className="font-playfair font-bold text-ink mb-5" style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)" }}>Not sure which fits?</h2>
          <p className="text-stone text-18 mb-9 max-w-lg mx-auto">
            Tell us what you have in mind and we&apos;ll point you to the right service —
            or build something custom just for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/${global.whatsapp}?text=Hello%20WakaWithUS!%20I%27d%20like%20help%20choosing%20a%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-forest text-white font-semibold text-16 px-8 py-4 rounded-full hover:bg-forest_dark transition-colors duration-200"
            >
              Chat on WhatsApp
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-line text-ink font-semibold text-16 px-8 py-4 rounded-full hover:border-forest hover:text-forest transition-colors duration-200">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
