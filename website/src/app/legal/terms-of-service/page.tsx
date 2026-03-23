export default function TermsPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
        <h1 className="text-3xl font-bold text-zinc-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-zinc-500">Last updated: March 24, 2024</p>
        <p className="mt-5 text-sm leading-7 text-zinc-700 sm:text-base">
          By using our services, you agree to our terms regarding account
          security, payments, intellectual property, code of conduct, and
          platform use. Continued use after updates means acceptance of revised
          terms.
        </p>
      </section>
      <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-semibold text-zinc-900">Key sections</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700 sm:text-base">
          <li>Account responsibilities and acceptable use expectations.</li>
          <li>Payment terms, refunds, and service availability notices.</li>
          <li>Content ownership, licenses, and policy update process.</li>
        </ul>
      </section>
    </main>
  );
}
