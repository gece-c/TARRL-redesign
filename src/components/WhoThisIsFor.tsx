import React from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const items = [
  "PhD candidates, PhDs, postdocs, or experienced practitioners in AI, robotics, software, systems, design, or closely related fields",
  "Deep passion for robotics, AI, and embodied intelligence",
  "Want hands on access to real robots and real problems without needing to change institutions or countries",
  "Care about open science and open source, not only closed corporate IP",
  "Thrive in remote first, globally distributed teams, combining async work with focused live sessions",
  "Want to advance their careers by building visible, credible, high impact projects at the center of where the field is heading"
];

export const WhoThisIsFor: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="who-this-is-for"
      className="relative bg-transparent py-20 sm:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offWhite/70">
            Who This Is For
          </p>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
            TARRL Research Associate roles are internship style positions designed primarily for PhD level and experienced candidates, with an open door for exceptional and highly motivated applicants from other paths.
          </h2>
        </div>

        <motion.div
          className="mt-8 space-y-3"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {items.map((item) => (
            <motion.button
              key={item}
              type="button"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group flex w-full items-start gap-3 rounded-2xl border border-offWhite/15 bg-texasBlue/70 px-4 py-3 text-left text-sm leading-relaxed text-offWhite/85 transition-colors"
            >
              <span className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-[6px] border border-offWhite/40 bg-transparent transition-colors group-hover:border-texasRed group-hover:bg-texasRed">
                <svg
                  viewBox="0 0 16 16"
                  className="h-3 w-3 text-offWhite opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <polyline
                    points="3 8.5 6.5 12 13 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{item}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.p
          className="mt-8 max-w-3xl text-sm leading-relaxed text-offWhite/80 md:text-base"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.5, ease: "easeOut" }
          }
        >
          If you see yourself in that mix, you are exactly the kind of person we want to hear from.
        </motion.p>
      </div>
    </section>
  );
};

