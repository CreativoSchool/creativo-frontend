"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const menu = [
  { name: "home", href: "/" },
  { name: "programs", href: "/program" },
  { name: "about", href: "/about" },
  { name: "gallery", href: "/gallery" },
  { name: "registration", href: "/registration" },
  { name: "contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-white transition-shadow duration-300
        ${scrolled ? "shadow-sm" : ""}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-neutral-800"
        >
          Creativo
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-9">
          {menu.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm tracking-wide transition-colors duration-300 group
                  ${
                    isActive
                      ? "text-pink-600 font-medium"
                      : "text-neutral-700 hover:text-pink-600"
                  }
                `}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-pink-600 transition-all duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-800"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white shadow-sm">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {menu.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm transition-colors duration-300
                    ${
                      isActive
                        ? "text-pink-600 font-medium"
                        : "text-neutral-700"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}