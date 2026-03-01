import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

// Only humanoid/ and robodog/ assets (exclude humanoid-png, robodog-png)
import humanoid1 from "../assets/humanoid/humanoids-1.jpg";
import humanoid5 from "../assets/humanoid/humanoids-5.png";
import humanoid6 from "../assets/humanoid/humanoids-6.jpg";
import robodog1 from "../assets/robodog/robodog-1.png";
import robodog2 from "../assets/robodog/robodog-2.jpeg";

const CAROUSEL_IMAGES = [
  { src: humanoid1, alt: "Humanoid robotics research" },
  { src: humanoid5, alt: "Humanoid robotics lab" },
  { src: humanoid6, alt: "Humanoid embodied AI" },
  { src: robodog1, alt: "Quadruped robodog platform" },
  { src: robodog2, alt: "Robodog research" }
];

const AUTOPLAY_INTERVAL_MS = 5000;

export const ImageCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.clientWidth;
    el.scrollTo({ left: index * slideWidth, behavior: "smooth" });
  };

  // Sync active index from scroll position (scroll-snap)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const slideWidth = el.clientWidth;
      const index = Math.round(el.scrollLeft / slideWidth);
      setActiveIndex(Math.min(index, CAROUSEL_IMAGES.length - 1));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Optional autoplay (disabled when prefers-reduced-motion)
  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % CAROUSEL_IMAGES.length;
        scrollToIndex(next);
        return next;
      });
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <section
      id="carousel"
      className="relative w-full bg-transparent py-6 sm:py-8"
      aria-label="Research imagery carousel"
    >
      {/* Wrapper so side blurs match image strip height and stay fixed (don't scroll with content) */}
      <div className="relative mx-auto w-[60%]">
        {/* Full-width scroll container; height from aspect ratio below */}
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {CAROUSEL_IMAGES.map((item, index) => (
            <div
              key={index}
              className="relative h-0 w-full flex-shrink-0 flex-grow-0"
              style={{
                paddingBottom: "42%",
                scrollSnapAlign: "center",
                scrollSnapStop: "always"
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-texasBlue/20">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center"
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Edge fades: same height as image strip, fixed to left/right of viewport (do not scroll) */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#361259] to-transparent sm:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#361259] to-transparent sm:w-24"
          aria-hidden
        />
      </div>

      {/* Dots + prev/next */}
      <div className="mx-auto mt-6 flex max-w-6xl items-center justify-center gap-4 px-4">
        <button
          type="button"
          onClick={() => {
            const prev = activeIndex === 0 ? CAROUSEL_IMAGES.length - 1 : activeIndex - 1;
            scrollToIndex(prev);
          }}
          className="rounded-full border border-offWhite/20 p-2 text-offWhite/70 transition-colors hover:border-texasRed/60 hover:bg-texasRed/20 hover:text-offWhite focus:outline-none focus:ring-2 focus:ring-texasRed/50"
          aria-label="Previous slide"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {CAROUSEL_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              className="rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-texasRed/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
            >
              <motion.span
                className="block h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5"
                style={{
                  backgroundColor: activeIndex === index ? "#BF0A30" : "rgba(242,242,242,0.35)"
                }}
                transition={
                  prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 25 }
                }
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            const next = (activeIndex + 1) % CAROUSEL_IMAGES.length;
            scrollToIndex(next);
          }}
          className="rounded-full border border-offWhite/20 p-2 text-offWhite/70 transition-colors hover:border-texasRed/60 hover:bg-texasRed/20 hover:text-offWhite focus:outline-none focus:ring-2 focus:ring-texasRed/50"
          aria-label="Next slide"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};
