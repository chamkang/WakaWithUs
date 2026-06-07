import {
  Playfair_Display,
  DM_Sans,
  Lora,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import ThemeProvider from "@/components/ThemeProvider";
import type { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WakaWithUS — Rediscover Cameroon, one Waka at a Time",
    template: "%s | WakaWithUS",
  },
  description:
    "Discover Cameroon through curated trips to its rainforests, highlands, beaches, and cultural heartlands. WakaWithUS organises authentic, unforgettable travel experiences across Cameroon.",
  keywords: [
    "Cameroon travel",
    "Cameroon trips",
    "Kribi beach",
    "Bafoussam",
    "Limbe",
    "Cameroon tourism",
    "Africa travel",
  ],
  openGraph: {
    title: "WakaWithUS — Rediscover Cameroon, one Waka at a Time",
    description:
      "Curated trips across Cameroon's rainforests, highlands, and beaches.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${lora.variable} ${cormorant.variable} font-dm-sans bg-ivory text-midnight_text`}
      >
        <ThemeProvider>
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
