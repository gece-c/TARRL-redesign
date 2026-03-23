export default function CompanyPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12 sm:gap-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Company</h1>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-600 sm:text-base">
          Innovation Bootcamp University pioneers a cooperative education model
          that combines intensive learning with real-world experience. Our
          mission is to make high-quality tech education accessible while
          helping students earn as they learn.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Core Values</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-600">
            <li>Learn & Earn Model</li>
            <li>Industry-Driven Curriculum</li>
            <li>Community Focus</li>
            <li>Global Opportunities</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Contact</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            analytics@flomadlabs.com
            <br />
            +1 (555) 123-4567
            <br />
            123 Innovation Way, Tech Hub, CA 94103
          </p>
        </article>
      </section>
    </main>
  );
}
