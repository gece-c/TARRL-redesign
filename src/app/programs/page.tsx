const programCards = [
  {
    title: "Web Development",
    text: "Learn full-stack web development with modern technologies including React, Next.js, Node.js, databases, APIs, and deployment.",
  },
  {
    title: "AI & Machine Learning",
    text: "Master AI and ML fundamentals with Python, TensorFlow, PyTorch, NLP, computer vision, and responsible AI practices.",
  },
  {
    title: "Robotics",
    text: "Build and program robotic systems with ROS, control systems, sensor integration, autonomous behavior, and real-world projects.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12 sm:gap-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Programs</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
          Choose from our cutting-edge programs designed to launch your tech
          career through a learn-and-earn cooperative model.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {programCards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
          >
            <h2 className="text-xl font-semibold text-zinc-900">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              {card.text}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
