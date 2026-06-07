// WakaWithUS — content is now sourced from the editable store at src/content/site.json
// (managed by the admin dashboard). These re-exports keep existing imports working.
import { trips, testimonials } from "@/content";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Privacy Policy", herf: "#" },
  { label: "Terms of Service", herf: "#" },
  { label: "FAQ", herf: "/#faq" },
  { label: "Latest News", herf: "/blog" },
];

export const featuredTripsData = trips;
export const testimonialsData = testimonials;
