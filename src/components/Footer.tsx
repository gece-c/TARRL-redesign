import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-10 text-sm text-offWhite/75">
      {/* Gradient from page blue/purple into footer dark so there’s no hard line */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 40, 104, 0.4) 5%,
            #020617 100%
          )`
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offWhite/70">
            TARRL
          </p>
          <p className="mt-2 max-w-xs text-sm">
            Texas Advanced Robotics Research Lab - An open source Embodied AI lab and venture
            playground.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm md:items-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offWhite/60">
            Quick Links
          </p>
          <nav className="mt-2 flex flex-col gap-1 text-sm md:items-center">
            <a href="#who-we-are" className="hover:text-offWhite">
              Who We Are
            </a>
            <a href="#research-tracks" className="hover:text-offWhite">
              Research Tracks
            </a>
            <a href="#how-it-works" className="hover:text-offWhite">
              How It Works
            </a>
            <a href="https://hephaestus.international/internships" target="_blank" rel="noopener noreferrer" className="hover:text-offWhite">
              Apply
            </a>
          </nav>
        </div>

        <div className="space-y-2 text-sm md:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offWhite/60">
            Contact
          </p>
          <p>Austin, Texas</p>
          <p>Remote First</p>
          <a href="mailto:contact@tarrl.org" className="hover:text-offWhite">
            contact@tarrl.org
          </a>
        </div>
      </div>
    </footer>
  );
};
