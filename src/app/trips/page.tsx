import type { Metadata } from "next";
import Image from "next/image";
import { featuredTripsData } from "@/app/api/data";
import { global } from "@/content";
import TripsExplorer from "@/components/Trips/TripsExplorer";

export const metadata: Metadata = {
  title: "Trips",
  description:
    "Upcoming WakaWithUS journeys: Le Point Maka (20 June) and Kribi — A Coastal Escape (16–19 July 2026). Tap a trip to see the full programme and reserve your spot.",
};

export default function TripsPage() {
  const trips = featuredTripsData;

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/photos/waka.jpeg"
          alt="WakaWithUS travellers in Cameroon"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,12,4,0.9) 0%, rgba(20,12,4,0.25) 60%, rgba(20,12,4,0.4) 100%)" }} />
        <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10 pb-14">
          <span className="text-white/80 text-13 font-semibold uppercase tracking-[0.3em] flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-white/50" />
            {trips.length} upcoming journeys
          </span>
          <h1 className="font-playfair font-bold text-white" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Where we&apos;re going next
          </h1>
          <p className="text-white/75 text-18 max-w-xl mt-5">
            Adventures with seats open right now — tap one to see the full plan, then come Waka with us.
          </p>
        </div>
      </section>

      {/* Cards → tap → full programme */}
      <TripsExplorer />

      {/* More coming soon */}
      <section className="bg-ink py-20">
        <div className="container mx-auto lg:max-w-screen-xl px-4 text-center">
          <h2 className="font-playfair font-bold text-white text-30 mb-3">More journeys on the way</h2>
          <p className="text-white/70 text-17 mb-8 max-w-lg mx-auto">
            Message us on WhatsApp to be the first to hear when new trips open — or to plan a private one of your own.
          </p>
          <a
            href={`https://wa.me/${global.whatsapp}?text=Hello%20WakaWithUS!%20Please%20keep%20me%20posted%20on%20upcoming%20trips.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-forest text-white font-semibold text-16 px-8 py-4 rounded-full hover:bg-forest_dark transition-colors duration-200"
          >
            Get trip alerts
          </a>
        </div>
      </section>
    </main>
  );
}
