import React from "react";
import Hero from "@/components/Home/Hero";
import Intro from "@/components/Home/intro";
import Marquee from "@/components/Home/marquee";
import DestinationsGallery from "@/components/Home/platform";
import FeaturedTrips from "@/components/Home/work";
import WhyWaka from "@/components/Home/portfolio";
import HowItWorks from "@/components/Home/timeline";
import Testimonials from "@/components/Home/upgrade";
import TikTokFeed from "@/components/Home/tiktok";
import FAQ from "@/components/Home/faq";
import BlogPreview from "@/components/SharedComponent/Blog";
import FinalSection from "@/components/Home/perks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WakaWithUS — Rediscover Cameroon, one Waka at a Time",
  description:
    "Small-group journeys to Cameroon's coastlines, rainforests, highlands and summits — led by locals. Rediscover Cameroon, one Waka at a time.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Marquee />
      <DestinationsGallery />
      <FeaturedTrips />
      <WhyWaka />
      <HowItWorks />
      <Testimonials />
      <TikTokFeed />
      <FAQ />
      <BlogPreview />
      <FinalSection />
    </main>
  );
}
