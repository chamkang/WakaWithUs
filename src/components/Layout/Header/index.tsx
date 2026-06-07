"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 ${
        sticky
          ? "shadow-lg bg-ink bg-opacity-95 backdrop-blur-sm pt-5"
          : "shadow-none md:pt-6 pt-5 bg-transparent"
      }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
          <Logo />

          <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle className="hidden sm:flex" />
            {/* Book a Trip CTA — primary nav action */}
            <Link
              href="/trips"
              className="hidden lg:block bg-primary text-white border border-primary hover:bg-transparent hover:text-primary px-5 py-2 rounded-lg font-medium text-17 transition-all duration-200"
            >
              Book a Trip
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
            </button>
          </div>
        </div>

        {/* Mobile overlay backdrop */}
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
        )}

        {/* Mobile slide-out menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-ink shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-6">
            <Logo />
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-white hover:text-primary"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col items-start p-6 gap-2">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className="mt-6 w-full flex items-center justify-between gap-3">
              <Link
                href="/trips"
                className="flex-1 block text-center bg-primary text-white border border-primary px-4 py-3 rounded-lg font-medium hover:bg-transparent hover:text-primary transition-all duration-200"
                onClick={() => setNavbarOpen(false)}
              >
                Book a Trip
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
