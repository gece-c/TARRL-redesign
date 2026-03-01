import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const navLinks = [
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#research-tracks", label: "Research Tracks" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#who-this-is-for", label: "Who This Is For" }
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const pulseAnimation = prefersReducedMotion
    ? {}
    : {
        animate: {
          boxShadow: [
            "0 0 0 0 rgba(191,10,48,0.55)",
            "0 0 0 12px rgba(191,10,48,0)"
          ]
        },
        transition: {
          duration: 1.8,
          repeat: Infinity,
          ease: "easeOut"
        }
      };

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 bg-[rgba(0,40,104,0.85)] backdrop-blur-md transition-colors"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-[0.15em] text-offWhite">
              TARRL
            </span>
            {/* Texas flag appears exactly once here */}
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              aria-hidden="true"
              className="shrink-0 drop-shadow-[0_0_1px_rgba(242,242,242,0.9)]"
            >
              <rect
                x="0.5"
                y="0.5"
                width="23"
                height="15"
                fill="none"
                stroke="#F2F2F2"
                strokeWidth="1"
              />
              <rect x="0" y="0" width="8" height="16" fill="#002868" />
              <rect x="8" y="0" width="16" height="8" fill="#F2F2F2" />
              <rect x="8" y="8" width="16" height="8" fill="#BF0A30" />
              <polygon
                points="4,3 4.9,5.4 7.4,5.4 5.3,6.9 6.1,9.4 4,7.9 1.9,9.4 2.7,6.9 0.6,5.4 3.1,5.4"
                fill="#F2F2F2"
              />
            </svg>
          </div>
        </a>

        <button
          className="flex items-center gap-2 rounded-full border border-offWhite/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-offWhite/80 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span>Menu</span>
          <span className="relative h-3 w-4">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 bg-offWhite transition ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 top-1.5 h-0.5 bg-offWhite transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 top-3 h-0.5 bg-offWhite transition ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-xs font-semibold tracking-[0.18em] uppercase">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-offWhite/70 transition hover:text-offWhite"
              >
                {link.label}
              </a>
            ))}
          </div>
          <motion.a
            href="#apply"
            className="rounded-full bg-texasRed px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-offWhite"
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.03 }}
            whileTap={{ scale: prefersReducedMotion ? 1 : 0.97 }}
            {...pulseAnimation}
          >
            Apply Now
          </motion.a>
        </div>
      </nav>

      {open && (
        <div className="border-t border-purple/60 bg-texasBlue/98 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-offWhite/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-texasRed px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-offWhite"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

