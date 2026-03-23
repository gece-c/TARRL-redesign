export default function CookiePolicyPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
        <h1 className="text-3xl font-bold text-zinc-900">Cookie Policy</h1>
        <p className="mt-2 text-sm text-zinc-500">Last updated: March 24, 2024</p>
        <p className="mt-5 text-sm leading-7 text-zinc-700 sm:text-base">
          We use essential, functional, analytics, and marketing cookies to
          improve site performance and personalization. You can manage cookie
          preferences through your browser settings.
        </p>
      </section>
      <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-semibold text-zinc-900">Cookie categories</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700 sm:text-base">
          <li>Essential cookies for core platform functionality.</li>
          <li>Analytics cookies to understand usage and improve experience.</li>
          <li>Optional marketing cookies for relevant communication.</li>
        </ul>
      </section>
    </main>
  );
}
