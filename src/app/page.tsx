"use client";

import { useMemo, useState } from "react";

type Tab = "overview" | "highlights" | "details";

const tabs: { id: Tab; label: string; content: string }[] = [
  {
    id: "overview",
    label: "Overview",
    content:
      "Launch Your Tech Career. From Student to Professional. Start with foundational education, then transition to earning while you learn through our cooperative education model. Your path to success starts here, and no prior experience is required.",
  },
  {
    id: "highlights",
    label: "Highlights",
    content:
      "Tier Learning Path, $65K+ Potential Earnings, 100+ Initial Student Capacity, and 8+ Industry Sectors. The program combines hands-on projects, industry mentorship, and specialized tracks in Web Development, AI & Machine Learning, and Robotics Engineering.",
  },
  {
    id: "details",
    label: "Details",
    content:
      "The three-tier journey takes you from Foundation Builder (2-3 months) to Skill Accelerator (3-4 months) and then Professional Developer (4-6 months). Career support includes portfolio reviews, interview prep, resume guidance, and connections to hiring partners.",
  },
];

const metrics = [
  { value: "$65K+", label: "Potential Earnings" },
  { value: "100+", label: "Initial Student Capacity" },
  { value: "8+", label: "Industry Sectors" },
  { value: "90%+", label: "Target Placement Rate" },
];

const tracks = [
  {
    title: "Web Development",
    description:
      "Master full-stack development with modern frameworks and cloud technologies. Graduate with a job-ready portfolio and GitHub presence.",
    meta: "45+ initial capacity • 24 weeks • React • Node.js • AWS • TypeScript",
    paths: "Frontend Developer, Full Stack Engineer",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Build intelligent systems using Python, TensorFlow, and OpenAI. Prepare for in-demand roles in AI-driven companies.",
    meta: "35+ initial capacity • 28 weeks • Python • TensorFlow • PyTorch • OpenAI",
    paths: "Machine Learning Engineer, AI Research Assistant",
  },
  {
    title: "Robotics Engineering",
    description:
      "Create autonomous systems with real hardware integration. Focus on problem-solving and industry readiness.",
    meta: "30+ initial capacity • 32 weeks • ROS • C++ • Computer Vision • Arduino",
    paths: "Robotics Engineer, Embedded Systems Developer",
  },
];

const faqItems = [
  {
    question: "How does the three-tier model work?",
    answer:
      "In Tier 1, you pay for foundational education. In Tier 2, you start earning through project participation while learning advanced topics. In Tier 3, you earn more as you work on complex projects and leadership responsibilities.",
  },
  {
    question: "Do I need prior experience to start?",
    answer:
      "No formal experience is required. The program looks for commitment, strong problem-solving, and basic computer skills.",
  },
  {
    question: "How long does each tier take?",
    answer:
      "Tier 1 is 2-3 months, Tier 2 is 3-4 months, and Tier 3 is 4-6 months. Progress is competency-based so you can advance at your own pace.",
  },
  {
    question: "What career support is included?",
    answer:
      "Support includes portfolio reviews, resume help, interview preparation, and direct connections to hiring partners during and after the program.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const activeContent = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.content ?? "",
    [activeTab],
  );

  return (
    <div className="min-h-screen bg-transparent text-zinc-800">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12 sm:gap-14 sm:px-6 sm:py-16 lg:px-8">
        <section className="grid gap-8 rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:grid-cols-[1.3fr_1fr] md:gap-10 md:p-10">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs font-medium tracking-wide text-zinc-600 uppercase">
              Innovation Bootcamp University
            </p>
            <h1 className="max-w-3xl text-3xl leading-tight font-bold text-zinc-900 sm:text-4xl">
              Launch Your Tech Career From Student to Professional
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
              Start with foundational education, then transition to earning
              while you learn. Our cooperative education model combines
              structured training with real-world project experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#tabs"
                className="rounded-full bg-[#13A7CB] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0E8FB0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6BD4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222]"
              >
                Pre-Register
              </a>
              <a
                href="#faq"
                className="rounded-full border border-[#13A7CB]/70 bg-transparent px-5 py-2.5 text-sm font-semibold text-[#DDF7FF] transition hover:border-[#13A7CB] hover:bg-[#13A7CB] hover:text-[#0A1D26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6BD4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222]"
              >
                Explore Internships
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm font-medium text-zinc-700"
              >
                <p className="text-xl font-bold text-zinc-900">{metric.value}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="tabs"
          className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10"
        >
          <h2 className="text-2xl font-semibold text-zinc-900">
            Interactive Content Sections
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
            Explore each tab at your own pace. The layout keeps related ideas
            grouped while giving each section enough visual separation.
          </p>
          <div className="mt-6 mb-6 flex flex-wrap gap-2.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-[#13A7CB] text-[#0A1D26]"
                    : "bg-[#2A2A2A] text-[#DDF7FF] hover:bg-[#3A3A3A]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div
            id="content"
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm leading-7 text-zinc-700 sm:text-base"
          >
            {activeContent}
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Specialized Learning Tracks
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
            Each track has a focused scope and clear outcomes to help students
            compare options without information overload.
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {tracks.map((track) => (
              <article
                key={track.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
              >
                <h3 className="text-lg font-semibold text-zinc-900">
                  {track.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {track.description}
                </p>
                <p className="mt-3 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                  {track.meta}
                </p>
                <p className="mt-2 text-sm text-zinc-700">
                  Career Paths: {track.paths}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10"
        >
          <h2 className="text-2xl font-semibold text-zinc-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
            Answers are grouped into collapsible sections so viewers can scan
            quickly, then expand only what they need.
          </p>
          <div className="mt-7 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-zinc-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between bg-zinc-50 px-4 py-3 text-left text-sm font-semibold text-zinc-800 sm:text-base"
                  >
                    {item.question}
                    <span className="ml-4 text-zinc-500">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <p className="border-t border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-600 sm:text-base">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
