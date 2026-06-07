"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? () => setSubmenuOpen(!submenuOpen) : undefined}
        className={`flex items-center justify-between w-full py-3 text-18 font-medium border-b border-dark_border border-opacity-10 transition-colors duration-200 ${
          path === item.href ? "text-primary" : "text-muted hover:text-primary"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-200 ${submenuOpen ? "rotate-180" : ""}`}
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
        <div className="bg-dark_grey rounded-lg py-2 mt-1">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block px-4 py-2 text-muted text-16 hover:text-primary transition-colors duration-150"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
