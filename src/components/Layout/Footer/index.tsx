import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import { global } from "@/content";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="bg-ink">
      {/* Newsletter bar above footer */}
      <div className="border-b border-dark_border border-opacity-20">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-lora text-24 font-semibold mb-1">
                Get trip updates & travel inspiration
              </h3>
              <p className="text-muted text-opacity-70 text-17">
                Subscribe for new trips, destination guides, and exclusive offers.
              </p>
            </div>
            <div className="flex gap-0 w-full md:w-auto max-w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-dark_border border-opacity-40 border-r-0 py-3 px-5 text-white rounded-l-lg flex-1 min-w-0 md:flex-none md:w-72 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-5 md:px-6 py-3 rounded-r-lg font-medium hover:bg-mid_brown transition-colors duration-200 whitespace-nowrap flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-10 gap-10">

          {/* Column 1 — Logo + tagline + socials */}
          <div className="lg:col-span-5 md:col-span-6 col-span-12">
            <Logo />
            <p className="text-muted text-opacity-70 text-17 mt-4 font-cormorant italic text-xl">
              {global.motto}.
            </p>
            <p className="text-muted text-opacity-60 text-16 mt-4 max-w-sm">
              WakaWithUS organises curated trips to destinations across Cameroon —
              from rainforests to highlands, golden beaches to cultural heartlands.
            </p>
            {/* Social links */}
            <div className="flex gap-5 items-center mt-8">
              <Link
                href={`https://wa.me/${global.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="WhatsApp"
              >
                <Icon
                  icon="fa6-brands:whatsapp"
                  width="24"
                  height="24"
                  className="text-muted group-hover:text-primary transition-colors duration-200"
                />
              </Link>
              <Link href={global.instagram} className="group" aria-label="Instagram">
                <Icon
                  icon="fa6-brands:instagram"
                  width="24"
                  height="24"
                  className="text-muted group-hover:text-primary transition-colors duration-200"
                />
              </Link>
              <Link href={global.facebook} className="group" aria-label="Facebook">
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="24"
                  height="24"
                  className="text-muted group-hover:text-primary transition-colors duration-200"
                />
              </Link>
              <Link href={global.tiktok} target="_blank" rel="noopener noreferrer" className="group" aria-label="TikTok">
                <Icon
                  icon="fa6-brands:tiktok"
                  width="24"
                  height="24"
                  className="text-muted group-hover:text-primary transition-colors duration-200"
                />
              </Link>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="lg:col-span-3 md:col-span-3 col-span-6">
            <h4 className="text-white font-lora font-semibold text-18 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {headerData.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-muted text-opacity-70 hover:text-primary text-16 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact & Legal */}
          <div className="lg:col-span-4 md:col-span-3 col-span-6">
            <h4 className="text-white font-lora font-semibold text-18 mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon icon="fa6-brands:whatsapp" width="18" height="18" className="text-primary flex-shrink-0" />
                <a
                  href={`https://wa.me/${global.whatsapp}`}
                  className="text-muted text-opacity-70 hover:text-primary text-16 transition-colors duration-200"
                >
                  {global.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon icon="tabler:mail" width="18" height="18" className="text-primary flex-shrink-0" />
                <a
                  href={`mailto:${global.email}`}
                  className="text-muted text-opacity-70 hover:text-primary text-16 transition-colors duration-200"
                >
                  {global.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Icon icon="tabler:map-pin" width="18" height="18" className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted text-opacity-70 text-16">
                  {global.location}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {footerlabels.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.herf}
                    className="text-muted text-opacity-60 hover:text-primary text-14 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-dark_border border-opacity-20">
        <div className="container mx-auto lg:max-w-screen-xl px-4 py-5">
          <p className="text-muted text-opacity-50 text-14 text-center">
            © WakaWithUS 2026. All rights reserved. {global.motto}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
