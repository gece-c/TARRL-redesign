import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import humanoidPng from "../assets/humanoid-png/humanoids-2.png";

const steps = [
  {
    id: "remote",
    title: "Remote first participation",
    body: "You join from wherever you are. Collaboration runs through shared repositories, documentation, and regular online meetings. Time zones are handled through a mix of asynchronous work and scheduled sessions."
  },
  {
    id: "access",
    title: "Access to robots and infrastructure",
    body: "You interact with physical robots through teleoperation, streamed sensor data, and digital twins. You can run experiments, evaluate models, and iterate on behaviors without being physically present."
  },
  {
    id: "pods",
    title: "Distributed research pods",
    body: "You work in focused pods aligned to specific tracks, such as humanoids, quadrupeds, perception, tooling, or space robotics. Each pod has clear goals, milestones, and shared documentation."
  },
  {
    id: "culture",
    title: "Open, written culture",
    body: "Decisions, insights, and results live in shared documents, experiment logs, and code. This lets contributors in different time zones stay aligned and move quickly."
  }
];

/** Picks the step whose center is closest to the viewport center (scroll-spy style). */
function useActiveStepByViewportCenter(
  stepRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  stepIds: string[]
) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const refs = stepRefs.current;

    const updateActive = () => {
      const viewportCenter = window.innerHeight / 2;
      let bestIndex = 0;
      let bestDistance = Infinity;

      for (let i = 0; i < refs.length; i++) {
        const el = refs[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      }

      setActiveIndex((prev) => (prev !== bestIndex ? bestIndex : prev));
    };

    updateActive();
    const raf = requestAnimationFrame(updateActive);
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [stepIds.join(",")]);

  return activeIndex;
}

const StepItem: React.FC<{
  step: (typeof steps)[number];
  index: number;
  active: boolean;
  stepRef: (el: HTMLDivElement | null) => void;
}> = ({ step, index, active, stepRef }) => {
  return (
    <div
      ref={stepRef}
      className={`relative border-l border-offWhite/15 pl-5 py-5 transition-colors ${
        active ? "border-maroon" : ""
      }`}
    >
      <div className="absolute -left-[3px] top-6 h-2 w-2 rounded-full bg-offWhite" />
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-offWhite/60">
        Step {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-offWhite/85">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-offWhite/80">
        {step.body}
      </p>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setStepRef = (index: number) => (el: HTMLDivElement | null) => {
    stepRefs.current[index] = el;
  };

  const activeIndex = useActiveStepByViewportCenter(
    stepRefs,
    steps.map((s) => s.id)
  );
  const activeId = steps[activeIndex]?.id ?? steps[0].id;
  const stepNumber = String(activeIndex + 1).padStart(2, "0");

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-transparent py-20 sm:py-24"
    >
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offWhite/70">
            How It Works
          </p>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Remote first is not a compromise in this model, it is a force multiplier.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-offWhite/80 md:text-base">
            Your location should not limit your impact.
          </p>
          <motion.div
            className="mt-10 flex h-40 items-center justify-center overflow-hidden rounded-3xl border border-offWhite/15 bg-texasBlue/60"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 0.6, ease: "easeOut" }
            }
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <motion.div
                key={stepNumber}
                className="text-[5rem] font-extrabold tracking-tight text-offWhite/5 md:text-[7rem]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 0.55, ease: "easeOut" }
                }
              >
                {stepNumber}
              </motion.div>
              <div className="absolute inset-x-10 grid grid-cols-3 text-center align-center text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-offWhite/60">
                <span className="mt-1.5">Remote First</span>
                <span className="mt-1.5">Embodied AI</span>
                <span className="">Open-source robotics</span>
              </div>
            </div>
          </motion.div>
          <div className="hidden justify-center lg:flex">
            <img src={humanoidPng} alt="" className="max-h-[260px]" />
          </div>
        </div>

        <div className="space-y-2">
          {steps.map((step, index) => (
            <StepItem
              key={step.id}
              step={step}
              index={index}
              active={activeId === step.id}
              stepRef={setStepRef(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

