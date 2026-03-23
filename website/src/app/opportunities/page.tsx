const opportunities = [
  {
    title: "Internships",
    description:
      "Apply for hands-on roles with partner companies and gain practical experience while continuing your learning.",
  },
  {
    title: "Industry Partners",
    description:
      "Collaborate with companies across technology, AI, robotics, and data sectors through mentorship and projects.",
  },
  {
    title: "Become an Advisor",
    description:
      "Share your expertise, mentor students, and help shape the next generation of tech professionals.",
  },
  {
    title: "Career Support",
    description:
      "Get resume guidance, interview coaching, job search support, and access to hiring partners and alumni network.",
  },
];

export default function OpportunitiesPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12 sm:gap-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          Opportunities
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
          Discover internships, partner networks, advisor opportunities, and
          career services designed to accelerate your transition into tech.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {opportunities.map((item) => (
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
