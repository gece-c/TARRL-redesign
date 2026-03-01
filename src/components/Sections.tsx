import React from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export const WhoWeAre: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const lines = [
    "We are not a traditional university lab.",
    "Not a corporate R&D center.",
    "Not a bootcamp."
  ];

  return (
    <section id="who-we-are" className="relative bg-transparent py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offWhite/60">
          Who We Are (And Are Not)
        </p>

        <motion.div
          className="mt-8 space-y-4 border-l-2 border-texasRed/70 pl-5 sm:pl-6"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerChildren}
        >
          {lines.map((line) => (
            <motion.p
              key={line}
              className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl md:text-3xl"
              variants={fadeInUp}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-offWhite/80 md:text-base"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
        >
          <p>
            We are Texas Advanced Robotics Research Lab, an open, venture driven Embodied AI
            institute where curiosity meets courage and AI, robotics, and design collide.
          </p>
          <p>
            TARRL is built primarily for PhD candidates, current PhDs and postdocs, and experienced
            industry professionals who want to go beyond papers, titles, and conference badges and
            actually ship code, systems, and robots that other people can use.
          </p>
          <p>
            Whether your background is in AI or machine learning, robotics, software engineering,
            systems architecture, human robot interaction, controls, product design, simulation, or
            another relevant area, there is space for you to contribute at the Research Associate
            level.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-4 text-sm"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerChildren}
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-offWhite/10 bg-texasBlue/30 px-4 py-3"
          >
            <p className="text-sm font-medium text-offWhite/85">Remote first by design</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-offWhite/10 bg-texasBlue/30 px-4 py-3"
          >
            <p className="text-sm font-medium text-offWhite/85">Join from anywhere</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const WhyWeExist: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const problems = [
    "Real robots sit behind funding cycles, closed labs, or corporate NDAs",
    "Labs and infrastructure are expensive",
    "Open datasets are fragmented",
    "Brilliant ideas often stop at the simulation or paper stage"
  ];

  const verticals = [
    "Education",
    "Health and human performance",
    "Travel and hospitality",
    "Entertainment and experiential media",
    "The space sector"
  ];

  return (
    <section id="why-we-exist" className="relative bg-transparent py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offWhite/70">
              Why We Exist
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
              In advanced robotics and AI, access is often a maze
            </h2>
            <motion.ul
              className="mt-6 space-y-3 text-sm leading-relaxed text-offWhite/85 md:text-base"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={staggerChildren}
            >
              {problems.map((item) => (
                <motion.li key={item} className="flex gap-3" variants={fadeInUp}>
                  <span className="mt-1 h-px w-4 flex-none bg-texasRed" aria-hidden="true" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              className="mt-6 max-w-xl text-sm leading-relaxed text-offWhite/80 md:text-base"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              Breaking into serious Embodied AI work should not depend on your zip code, your
              passport, or a single advisor.
            </motion.p>

            <motion.p
              className="mt-4 max-w-xl text-sm leading-relaxed text-offWhite/80 md:text-base"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              TARRL exists to widen the doors, connect top minds to real robots and realistic
              environments, ignite hands-on collaboration, and make the work real, open, and
              reproducible for everyone on the team.
            </motion.p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offWhite/70">
                Our Verticals
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {verticals.map((vertical) => (
                  <motion.span
                    key={vertical}
                    className="rounded-full border border-offWhite/25 px-3.5 py-1.5 text-xs font-medium text-offWhite/85"
                    whileHover={{
                      borderColor: "#BF0A30",
                      backgroundColor: "rgba(140,28,58,0.25)",
                      transition: { duration: 0.18 }
                    }}
                  >
                    {vertical}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              className="rounded-3xl border border-offWhite/10 bg-purple/30 p-5 text-sm leading-relaxed text-offWhite/80"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              <p>
                Through our connection to the Texas innovation and space ecosystem, including NASA
                related activity, SpaceX and other space leaders, and collaboration with Texas A&M,
                TARRL is well positioned to explore how Embodied AI and robotics can support space
                industry challenges, from terrestrial testbeds to off world scenarios.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhatWeBelieve: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const beliefs = [
    {
      title: "Turn ideas into reality",
      body: "Turn your research ideas into running code, robots, and experiments."
    },
    {
      title: "Open source stacks",
      body: "Prototype open source stacks that others can build on and cite."
    },
    {
      title: "Ambitious concepts",
      body: "Explore ambitious concepts that do not fit neatly into a single grant or corporate roadmap."
    },
    {
      title: "Global community",
      body: "Work with a global, remote first community of serious builders who care about impact and rigor."
    }
  ];

  const icon = (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6 text-offWhite/80"
      aria-hidden="true"
    >
      <path
        d="M6 22L14 8l4 7 8-5-8 14-4-7-8 5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );

  return (
    <section id="what-we-believe" className="relative bg-transparent py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offWhite/70">
            What We Believe
          </p>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
            We are not here to give you one more credential and send you back to business as usual.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-offWhite/80 md:text-base">
            We exist to put you closer to the center of what comes next in Embodied AI.
          </p>
        </div>

        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          {beliefs.map((belief) => (
            <motion.div
              key={belief.title}
              variants={fadeInUp}
              className="backdrop-card group relative overflow-hidden rounded-3xl border border-offWhite/10 p-5 transition-colors"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(140,28,58,0.45),_transparent_60%)]" />
              </div>
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-full border border-offWhite/20 bg-texasBlue/60 p-2">
                    {icon}
                  </div>
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-offWhite/80">
                  {belief.title}
                </h3>
                <p className="text-sm leading-relaxed text-offWhite/80">{belief.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-10 max-w-3xl text-sm leading-relaxed text-offWhite/80 md:text-base"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          No one owns your mind here. We build in the open, share credit, and let the work and
          results speak for themselves.
        </motion.p>
      </div>
    </section>
  );
};

