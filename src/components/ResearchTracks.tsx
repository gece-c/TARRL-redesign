import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const tracks = [
  {
    id: "humanoids",
    name: "Humanoids",
    accent: "#BF0A30",
    description: "Humanoid robots that move, perceive, and act in the real world."
  },
  {
    id: "quadrupeds",
    name: "Quadrupeds",
    accent: "#8C1C3A",
    description: "Legged robots for locomotion and terrain adaptation."
  },
  {
    id: "perception",
    name: "Perception & Sensing",
    accent: "#BF0A30",
    description: "Vision, touch, and multimodal sensing for embodied agents."
  },
  {
    id: "tooling",
    name: "Tooling & Simulation",
    accent: "#8C1C3A",
    description: "Simulation environments and tooling for rapid iteration."
  },
  {
    id: "space",
    name: "Space Robotics",
    accent: "#BF0A30",
    description: "Robotics for terrestrial testbeds and off-world scenarios."
  }
];

const TrackItem: React.FC<{
  track: (typeof tracks)[number];
  index: number;
  active: boolean;
  setActive: () => void;
}> = ({ track, index, active, setActive }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    amount: 0.4,
    once: false
  });

  React.useEffect(() => {
    if (inView) setActive();
  }, [inView, setActive]);

  return (
    <div
      ref={ref}
      className={`relative border-l border-offWhite/15 pl-5 py-5 transition-colors ${
        active ? "border-texasRed" : ""
      }`}
    >
      <div className="absolute -left-[3px] top-6 h-2 w-2 rounded-full bg-offWhite" />
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-offWhite/60">
        Track {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-offWhite/85">
        {track.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-offWhite/80">
        {track.description}
      </p>
    </div>
  );
};

export const ResearchTracks: React.FC = () => {
  const [activeId, setActiveId] = useState(tracks[0].id);
  const prefersReducedMotion = usePrefersReducedMotion();

  const activeTrack = tracks.find((t) => t.id === activeId) ?? tracks[0];

  return (
    <section
      id="research-tracks"
      className="relative overflow-hidden bg-transparent py-20 sm:py-24"
    >
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offWhite/70">
            Research Tracks
          </p>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Resources and support to accelerate your robotics research.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-offWhite/80 md:text-base">
            Focus areas where we're pushing the boundaries of what's possible in embodied AI and robotics.
          </p>

          <motion.div
            className="mt-10 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-offWhite/15 bg-texasBlue/60 p-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 0.6, ease: "easeOut" }
            }
          >
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-offWhite/60">
                  Research Tracks
                </p>
                <motion.p
                  key={activeTrack.id}
                  className="text-3xl font-extrabold tracking-tight"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 0.4, ease: "easeOut" }
                  }
                >
                  {activeTrack.name}
                </motion.p>
                <p className="max-w-xs text-sm leading-relaxed text-offWhite/80">
                  {activeTrack.description}
                </p>
              </div>
              <div className="relative flex h-28 items-center justify-center">
                <svg
                  viewBox="0 0 200 120"
                  className="h-full w-auto"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="track-line" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={activeTrack.accent} />
                      <stop offset="100%" stopColor="#8C1C3A" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="8"
                    y="8"
                    width="184"
                    height="104"
                    rx="16"
                    fill="none"
                    stroke="rgba(242,242,242,0.18)"
                  />
                  <motion.path
                    d="M20 96 C60 20 140 20 180 96"
                    fill="none"
                    stroke="url(#track-line)"
                    strokeWidth="2"
                    initial={prefersReducedMotion ? false : { pathLength: 0 }}
                    animate={prefersReducedMotion ? undefined : { pathLength: 1 }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { duration: 1.4, ease: "easeInOut" }
                    }
                  />
                  <motion.circle
                    cx="20"
                    cy="96"
                    r="4"
                    fill={activeTrack.accent}
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.7 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { delay: 0.1, duration: 0.4 }
                    }
                  />
                  <motion.circle
                    cx="180"
                    cy="96"
                    r="4"
                    fill={activeTrack.accent}
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.7 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { delay: 0.3, duration: 0.4 }
                    }
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-2">
          {tracks.map((track, index) => (
            <TrackItem
              key={track.id}
              track={track}
              index={index}
              active={activeId === track.id}
              setActive={() => setActiveId(track.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

