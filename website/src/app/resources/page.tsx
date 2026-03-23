const resources = [
  {
    title: "How It Works",
    description:
      "Understand the three-tier model: foundation learning, transition to earning, and professional growth.",
  },
  {
    title: "Student Handbook",
    description:
      "Find policies, schedules, support services, certification requirements, and communication guidelines.",
  },
  {
    title: "Blog",
    description:
      "Read insights on tech education, tutorials, and student success stories from mentors and industry voices.",
  },
  {
    title: "FAQs",
    description:
      "Get answers to common questions about applications, support, financing options, and outcomes.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12 sm:gap-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Resources</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
          Access guides, handbooks, tutorials, and reference content that
          supports your learning journey from beginner to professional.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {resources.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
          >
            <h2 className="text-xl font-semibold text-zinc-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              {item.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
