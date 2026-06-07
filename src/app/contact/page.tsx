import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/Contact/ContactForm";
import { global } from "@/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with WakaWithUS — WhatsApp +237 675 844 288, email, or send us a message. We reply within hours.",
};

const cards = [
  {
    label: "WhatsApp",
    value: global.phoneDisplay,
    note: "Our fastest channel — we reply within hours",
    href: `https://wa.me/${global.whatsapp}`,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
    ),
  },
  {
    label: "Email",
    value: global.email,
    note: "For detailed enquiries and partnerships",
    href: `mailto:${global.email}`,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
    ),
  },
  {
    label: "Where we are",
    value: global.location,
    note: "South West Region — where it all began",
    href: "",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <Image src="/images/photos/waka.jpeg" alt="WakaWithUS travellers" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: "center 30%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,12,4,0.9) 0%, rgba(20,12,4,0.25) 60%, rgba(20,12,4,0.4) 100%)" }} />
        <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10 pb-14">
          <span className="text-white/80 text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-white/50" />
            Get in touch
          </span>
          <h1 className="font-playfair font-bold text-white" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Let&apos;s plan your Waka
          </h1>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left — details */}
            <div className="lg:col-span-5">
              <span className="text-clay text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-clay/50" />
                Reach us
              </span>
              <h2 className="font-playfair font-bold text-ink mb-5" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)", lineHeight: 1.12 }}>
                A real person, every time
              </h2>
              <p className="text-stone text-18 leading-relaxed mb-10">
                Questions about a trip, a custom journey, or just want to say hi? Reach out any
                way you like — WhatsApp is fastest.
              </p>

              <div className="space-y-4">
                {cards.map((c, i) => {
                  const inner = (
                    <div className="flex items-start gap-4 bg-cloud border border-line rounded-2xl p-5 hover:border-forest transition-colors duration-200">
                      <span className="w-12 h-12 rounded-xl flex items-center justify-center text-forest flex-shrink-0" style={{ background: "rgba(55,90,33,0.1)" }}>
                        {c.icon}
                      </span>
                      <div>
                        <p className="text-12 text-stone uppercase tracking-wide">{c.label}</p>
                        <p className="font-semibold text-ink text-17">{c.value}</p>
                        <p className="text-stone text-13 mt-0.5">{c.note}</p>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="block">{inner}</a>
                  ) : (
                    <div key={i}>{inner}</div>
                  );
                })}
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <div className="bg-cloud border border-line rounded-3xl p-8 md:p-10">
                <h3 className="font-playfair font-bold text-ink text-26 mb-2">Send us a message</h3>
                <p className="text-stone text-15 mb-8">Fill this in and we&apos;ll pick it up on WhatsApp.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
