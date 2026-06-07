import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { featuredTripsData } from "@/app/api/data";
import { global } from "@/content";

export const metadata: Metadata = {
  title: "Trips",
  description:
    "Upcoming WakaWithUS journeys: Le Point Maka (20 June) and Kribi — A Coastal Escape (16–19 July 2026). See the full programmes and reserve your spot.",
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
            Two adventures with seats open right now — pick your date and come Waka with us.
          </p>
        </div>
      </section>

      {/* Quick selector */}
      <section className="bg-cloud border-b border-line sticky top-0 z-30">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="flex items-center gap-3 overflow-x-auto py-4">
            <span className="text-stone text-14 font-medium whitespace-nowrap mr-2">Jump to:</span>
            {trips.map((tr, i) => (
              <a key={i} href={`#trip-${i}`} className="whitespace-nowrap text-14 font-semibold text-ink bg-white border border-line px-4 py-2 rounded-full hover:border-forest hover:text-forest transition-colors">
                {tr.destination} · {tr.dateRange}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trips */}
      {trips.map((trip, i) => (
        <section key={i} id={`trip-${i}`} className={`scroll-mt-20 py-20 md:py-24 ${i % 2 === 1 ? "bg-cloud" : "bg-white"}`}>
          <div className="container mx-auto lg:max-w-screen-xl px-4">
            <div className="mb-10">
              <span className="text-clay text-12 font-semibold uppercase tracking-widest">{trip.region}</span>
              <h2 className="font-playfair font-bold text-ink mt-2" style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.08 }}>{trip.title}</h2>
              <p className="text-stone text-17 mt-2">{trip.dateRange} · {trip.duration} · {trip.destination}</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Main */}
              <div className="lg:col-span-8">
                {/* Flyer */}
                <a href={trip.flyer} target="_blank" rel="noopener noreferrer" className="group block mb-3">
                  <div className="relative aspect-[57/82] max-w-md mx-auto rounded-3xl overflow-hidden border border-line bg-white">
                    <Image src={trip.flyer} alt={`${trip.title} flyer`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-12 font-semibold text-white px-3 py-1.5 rounded-full bg-ink/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Tap to enlarge
                    </span>
                  </div>
                </a>
                <p className="text-center text-stone text-13 mb-10">The official trip flyer — tap to view full size.</p>

                <p className="text-stone text-18 leading-relaxed mb-4">{trip.description}</p>
                <p className="text-stone text-16 italic mb-12">&ldquo;{trip.highlight}.&rdquo;</p>

                {/* Programme */}
                <h3 className="font-playfair font-bold text-ink text-28 mb-2">The full programme</h3>
                <p className="text-stone text-16 mb-8">Day by day — including travel, activities and meal times.</p>
                <div className="space-y-5 mb-14">
                  {trip.itinerary.map((d, k) => (
                    <div key={k} className="rounded-3xl border border-line overflow-hidden bg-white">
                      <div className="flex items-center justify-between px-6 py-4 bg-cloud border-b border-line">
                        <div className="flex items-baseline gap-3">
                          <span className="font-playfair font-bold text-forest text-20">{d.day}</span>
                          <span className="text-stone text-14">{d.date}</span>
                        </div>
                        <span className="font-semibold text-ink text-15">{d.title}</span>
                      </div>
                      <ul>
                        {d.schedule.map((s, j) => (
                          <li key={j} className="flex items-start gap-5 px-6 py-3.5 border-b border-line last:border-0">
                            <span className="font-semibold text-clay text-14 w-20 flex-shrink-0 tabular-nums">{s.time}</span>
                            <span className="text-ink text-15">{s.activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Activities */}
                <h3 className="font-playfair font-bold text-ink text-28 mb-6">Adventures await</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-14">
                  {trip.activities.map((a, k) => (
                    <div key={k} className="flex items-center gap-3 text-ink text-16">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center text-forest flex-shrink-0" style={{ background: "rgba(55,90,33,0.1)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      {a}
                    </div>
                  ))}
                </div>

                {/* Includes */}
                <h3 className="font-playfair font-bold text-ink text-28 mb-6">What&apos;s included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {trip.inclusions.map((inc, k) => (
                    <div key={k} className="flex items-center gap-3 text-ink text-16">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center text-forest flex-shrink-0" style={{ background: "rgba(55,90,33,0.1)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      {inc}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sticky booking card */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28 rounded-3xl border border-line bg-white p-7 shadow-sm">
                  <div className="flex items-end justify-between mb-6 pb-6 border-b border-line">
                    <div>
                      <p className="text-12 text-stone uppercase tracking-wide">Per person</p>
                      <p className="font-playfair font-bold text-ink text-36 leading-none">{trip.price}<span className="text-15 font-normal text-stone"> XAF</span></p>
                    </div>
                    <span className="text-11 font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gold text-ink">{trip.spotsLeft} left</span>
                  </div>

                  <ul className="space-y-4 mb-7 text-15">
                    <li className="flex items-start justify-between gap-4"><span className="text-stone">Date</span><span className="font-semibold text-ink text-right">{trip.dateRange}</span></li>
                    <li className="flex items-start justify-between gap-4"><span className="text-stone">Departs</span><span className="font-semibold text-ink text-right">{trip.departureTime}</span></li>
                    <li className="flex items-start justify-between gap-4"><span className="text-stone">Meeting point</span><span className="font-semibold text-ink text-right">{trip.meetingPoint}</span></li>
                    <li className="flex items-start justify-between gap-4"><span className="text-stone">Group size</span><span className="font-semibold text-ink text-right">Max {trip.maxPax}</span></li>
                    <li className="flex items-start justify-between gap-4"><span className="text-stone">Dress code</span><span className="font-semibold text-ink text-right">{trip.dressCode}</span></li>
                  </ul>

                  <a
                    href={`https://wa.me/${global.whatsapp}?text=${encodeURIComponent(`Hello WakaWithUS! I'd like to book ${trip.title} (${trip.dateRange}). Please send payment details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-forest text-white font-semibold text-16 py-4 rounded-full hover:bg-forest_dark transition-colors duration-200 mb-3"
                  >
                    Reserve on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full border border-line text-ink font-semibold text-16 py-4 rounded-full hover:border-forest hover:text-forest transition-colors duration-200"
                  >
                    Ask a question
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

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
