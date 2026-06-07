"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  return (
    <div
      className="relative"
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      <Link
        href={item.href}
        className={`text-17 font-medium nav-underline transition-colors duration-200 ${
          path === item.href ? "text-primary" : "text-white hover:text-primary"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="inline-block ml-1"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {submenuOpen && item.submenu && (
        <div
          className="absolute py-2 left-0 mt-0.5 w-60 bg-darkmode shadow-lg rounded-lg border border-dark_border border-opacity-30"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 text-17 transition-colors duration-150 ${
                path === subItem.href
                  ? "text-primary"
                  : "text-muted hover:text-primary"
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
