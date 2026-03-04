"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menu = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/program" },
  { name: "About", href: "/about" },
  { name: "Gallery", href:"/gallery"},
  { name: "Registration", href: "/registration" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 border-b border-creativo-border bg-creativo-light">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-creativo-dark"
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
                className={`
                  no-underline
                  transition-all duration-200 ease-out
                  ${
                    isActive
                      ? "font-bold uppercase text-base"
                      : "text-sm lowercase text-creativo-dark hover:text-creativo-magenta hover:scale-[1.12] hover:font-semibold"
                  }
                `}
                style={isActive ? { color: "#EE2158" } : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-creativo-dark"
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
        <div className="md:hidden border-t border-creativo-border bg-creativo-light">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {menu.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    no-underline
                    transition-all
                    ${
                      isActive
                        ? "font-bold uppercase text-base"
                        : "lowercase text-creativo-dark"
                    }
                  `}
                  style={isActive ? { color: "#EE2158" } : undefined}
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
