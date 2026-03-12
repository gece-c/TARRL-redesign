import React from "react";
import { motion } from "framer-motion";
import { ParticleNetwork } from "./ParticleNetwork";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const wordVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

const heroText =
  "Advance your career. Be at the center of the future.".split(" ");

const containerVariants = {
  hidden: {},
  visible: (shouldReduce: boolean) => ({
    transition: shouldReduce
      ? undefined
      : {
          staggerChildren: 0.06
        }
  })
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

const stats = [
  {
    label: "Remote first",
    sub: "Join from anywhere"
  },
  {
    label: "Embodied AI",
    sub: "Real robots, real environments"
  },
  {
    label: "Open-source robotics",
    sub: "Build in public"
  }
];

const TexasFlag: React.FC = () => (
  <div
    className="pointer-events-none my-6 w-full aspect-[3/2] px-4 sm:px-6 md:px-10 lg:px-16"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 3 2"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full object-cover"
    >
      {/* Blue vertical bar: one-third the length (fly) per Texas Gov Code Ch 3100 */}
      <rect width="1" height="2" fill="#002869" />
      {/* White five-pointed star: diameter = 3/4 of blue stripe width, centered in blue bar */}
      <g transform="translate(0.5, 1) scale(1.875)">
        <path
          fill="#fff"
          d="M0,-0.2 L0.059,-0.062 L0.191,-0.062 L0.076,0.024 L0.118,0.154 L0,0.076 L-0.118,0.154 L-0.076,0.024 L-0.191,-0.062 L-0.059,-0.062 Z"
        />
      </g>
      {/* White (top half of right 2/3) */}
      <rect x="1" y="0" width="2" height="1" fill="#fff" />
      {/* Red (bottom half of right 2/3) */}
      <rect x="1" y="1" width="2" height="1" fill="#BF0A30" />
    </svg>
  </div>
);

export const Hero: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-transparent"
    >
      <ParticleNetwork />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-28 text-center md:pt-32 lg:pb-24">
        <div className="w-full">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            transition={
              prefersReducedMotion
                ? undefined
                : { delay: 0.3, duration: 0.6, ease: "easeOut" }
            }
          >
            <p className="text-5xl font-extrabold tracking-tight text-maroon md:text-6xl lg:text-7xl">
              TARRL
            </p>
            <p className="mt-3 text-lg font-medium text-offWhite/85 md:text-xl">
              Texas Advanced Robotics Research Lab
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            transition={
              prefersReducedMotion
                ? undefined
                : { delay: 0.45, duration: 0.5, ease: "easeOut" }
            }
          >
            <TexasFlag />
          </motion.div>

          <motion.div
            className="mt-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            custom={prefersReducedMotion}
          >
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              {heroText.map((word, index) => (
                <React.Fragment key={index}>
                  <motion.span
                    variants={wordVariants}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { duration: 0.45, ease: "easeOut" }
                    }
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                  {index !== heroText.length - 1 && "\u00A0"}
                </React.Fragment>
              ))}
            </h1>
          </motion.div>

          <motion.p
            className="mt-4 mx-auto max-w-xl text-sm font-medium uppercase tracking-[0.25em] text-offWhite/70"
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? "visible" : "visible"}
            variants={fadeUp}
            transition={
              prefersReducedMotion
                ? undefined
                : { delay: 0.8, duration: 0.5, ease: "easeOut" }
            }
          >
            Remote first. Open to the world.
          </motion.p>

          <motion.p
            className="mt-6 mx-auto max-w-xl text-sm leading-relaxed text-offWhite/80 md:text-base"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            transition={
              prefersReducedMotion
                ? undefined
                : { delay: 1.1, duration: 0.6, ease: "easeOut" }
            }
          >
            An open source Embodied AI lab and venture playground where
            advanced AI, robotics, and human imagination come together to
            create agents and robots that move, perceive, learn, and
            collaborate in the real world.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            transition={
              prefersReducedMotion
                ? undefined
                : { delay: 1.3, duration: 0.6, ease: "easeOut" }
            }
          >
            <a
              href="https://hephaestus.international/internships"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-texasRed px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-offWhite"
            >
              Apply to Join TARRL
            </a>
            <a
              href="#who-we-are"
              className="rounded-full border border-offWhite/30 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-offWhite/80 hover:border-maroon hover:text-offWhite"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            className="mt-12 w-full max-w-3xl mx-auto"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            transition={
              prefersReducedMotion
                ? undefined
                : { delay: 1.6, duration: 0.6, ease: "easeOut" }
            }
          >
            <div className="grid gap-6 place-items-center text-center text-xs text-offWhite/80 sm:grid-cols-3 sm:place-items-stretch">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="sm:border-l sm:border-offWhite/18 sm:pl-6 first:sm:border-l-0 first:sm:pl-0"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { delay: 0.2 * i, duration: 0.45, ease: "easeOut" }
                  }
                >
                  <motion.div
                    className="text-sm font-semibold text-offWhite"
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { delay: 0.15 * i, duration: 0.4 }
                    }
                  >
                    {stat.label}
                  </motion.div>
                  <p className="mt-1 text-[0.68rem] text-offWhite/70">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

