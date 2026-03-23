export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
        <h1 className="text-3xl font-bold text-zinc-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-zinc-500">Last updated: March 24, 2024</p>
        <p className="mt-5 text-sm leading-7 text-zinc-700 sm:text-base">
          Innovation Bootcamp University is committed to protecting your privacy.
          We collect personal and usage data to deliver services, improve the
          platform, process payments, and communicate key updates. You may
          request access, correction, or deletion of your data.
        </p>
      </section>
      <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-semibold text-zinc-900">Your rights</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700 sm:text-base">
          <li>Request a copy of the personal data we hold about you.</li>
          <li>Ask us to correct inaccurate or outdated information.</li>
          <li>Request deletion where legally and operationally applicable.</li>
        </ul>
      </section>
    </main>
  );
}
