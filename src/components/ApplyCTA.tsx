import React from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export const ApplyCTA: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="apply" className="relative overflow-hidden bg-transparent py-20 sm:py-24">
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offWhite/70">
          Join TARRL as a Research Associate
        </p>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
          We are assembling a global network of Research Associate Interns and Fellows.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-offWhite/85 md:text-base">
          PhD candidates, PhDs, postdocs, experienced professionals, and exceptional builders across
          AI, robotics, software, systems, design, and related fields are invited to work on
          ambitious open Embodied AI projects in education, health, travel and hospitality,
          entertainment, and the space sector.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-offWhite/85 md:text-base">
          You bring
          <br />
          The expertise, curiosity, and drive
        </p>
        <p className="mt-4 text-sm leading-relaxed text-offWhite/85 md:text-base">
          We provide
          <br />
          The robots, infrastructure, and mission
        </p>
        <motion.div
          className="mt-8 flex justify-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.55, ease: "easeOut" }
          }
        >
          <a
            href="#apply"
            className="rounded-full bg-texasRed px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-offWhite"
          >
            Apply to Join TARRL
          </a>
        </motion.div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-offWhite/60">
          Remote first · Embodied AI · Open-source robotics
        </p>
      </div>
    </section>
  );
};

