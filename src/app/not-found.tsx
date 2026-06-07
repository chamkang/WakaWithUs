import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | WakaWithUS",
};

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-ivory flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-lg">
        <p className="text-primary font-playfair font-bold text-86 leading-none mb-4">
          404
        </p>
        <h1 className="font-playfair font-bold text-midnight_text text-36 mb-5">
          You seem to have wandered off the trail
        </h1>
        <p className="text-caramel text-18 mb-8">
          Even the best explorers take a wrong turn sometimes. Let us guide you back to the adventure.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="bg-primary text-white font-medium text-17 px-8 py-3 rounded-lg hover:bg-mid_brown transition-colors duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/trips"
            className="border border-primary text-primary font-medium text-17 px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
          >
            Browse Trips
          </Link>
        </div>
      </div>
    </main>
  );
}
