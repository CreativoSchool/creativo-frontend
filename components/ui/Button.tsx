import Link from "next/link";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  target?: "_blank" | "_self";
  rel?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  target,
  rel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors duration-200";

  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-creativo-magenta text-white hover:bg-creativo-magenta-dark",
    secondary:
      "bg-neutral-200 text-neutral-800 hover:bg-neutral-300",
    outline:
      "border border-creativo-magenta text-creativo-magenta hover:bg-creativo-magenta hover:text-white",
  };

  // Jika ada href → render sebagai link
  if (href) {
    // External link
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={`${base} ${styles[variant]}`}
        >
          {children}
        </a>
      );
    }

    // Internal link (Next.js)
    return (
      <Link href={href} className={`${base} ${styles[variant]}`}>
        {children}
      </Link>
    );
  }

  // Fallback (button biasa)
  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
