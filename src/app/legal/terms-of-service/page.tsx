export default function TermsOfServicePage() {
  return (
    <div className="space-y-8">
      <h1 className="page-title">Terms of Service</h1>
      <p className="text-sm text-[var(--text-muted)]">Last updated: March 24, 2024</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">1. Agreement to Terms</h2>
        <p className="text-[var(--text-muted)]">
          By accessing and using Innovation Bootcamp University&apos;s website and services, you
          agree to be bound by these Terms of Service. If you do not agree to these terms, please
          do not use our services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">2. Services Description</h2>
        <p className="text-[var(--text-muted)]">
          Innovation Bootcamp University provides educational services, including but not limited
          to:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
          <li>Online coding bootcamps and courses</li>
          <li>Educational resources and materials</li>
          <li>Career support services</li>
          <li>Mentorship and guidance</li>
          <li>Industry networking opportunities</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">3. User Accounts</h2>
        <p className="text-[var(--text-muted)]">
          When you create an account with us, you must provide accurate and complete information.
          You are responsible for maintaining the confidentiality of your account credentials and
          for all activities under your account.
        </p>
        <h3 className="text-lg font-semibold text-[var(--text-strong)]">Account Security</h3>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
          <li>Choose a strong password</li>
          <li>Keep your login credentials secure</li>
          <li>Notify us immediately of any unauthorized access</li>
          <li>Do not share your account with others</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">4. Payment Terms</h2>
        <p className="text-[var(--text-muted)]">
          Program fees and payment schedules are clearly outlined during the enrollment process. By
          enrolling in our programs, you agree to:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
          <li>Pay all fees by the specified due dates</li>
          <li>Provide accurate billing information</li>
          <li>Accept our refund and cancellation policies</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">
          5. Intellectual Property
        </h2>
        <p className="text-[var(--text-muted)]">
          All content provided through our services, including but not limited to course materials,
          videos, code examples, and documentation, is protected by copyright and other
          intellectual property laws.
        </p>
        <h3 className="text-lg font-semibold text-[var(--text-strong)]">Usage Rights</h3>
        <p className="text-[var(--text-muted)]">
          Students are granted a limited, non-exclusive license to use the materials for personal
          educational purposes only. You may not:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
          <li>Share or distribute course materials</li>
          <li>Use materials for commercial purposes</li>
          <li>Modify or create derivative works</li>
          <li>Remove copyright notices or branding</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">6. Code of Conduct</h2>
        <p className="text-[var(--text-muted)]">
          Students are expected to maintain professional behavior and adhere to our code of
          conduct, including:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
          <li>Treating others with respect and courtesy</li>
          <li>Maintaining academic integrity</li>
          <li>Following instructor guidelines</li>
          <li>Respecting intellectual property rights</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">
          7. Privacy and Data Protection
        </h2>
        <p className="text-[var(--text-muted)]">
          We collect and process personal data as described in our Privacy Policy. By using our
          services, you consent to our data practices.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">
          8. Limitation of Liability
        </h2>
        <p className="text-[var(--text-muted)]">
          Innovation Bootcamp University provides its services &quot;as is&quot; and makes no
          warranties, express or implied. We shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">9. Changes to Terms</h2>
        <p className="text-[var(--text-muted)]">
          We reserve the right to modify these terms at any time. Changes will be effective
          immediately upon posting to our website. Your continued use of our services constitutes
          acceptance of the modified terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">
          10. Contact Information
        </h2>
        <p className="text-[var(--text-muted)]">
          If you have questions about these Terms of Service, please contact us:
        </p>
        <p className="text-[var(--text-muted)]">
          Email:
          {" "}
          <a
            href="mailto:legal@innovationbootcamp.edu"
            className="text-[var(--brand-primary)] underline decoration-[var(--brand-primary)]/50 underline-offset-2 hover:decoration-[var(--brand-primary)]"
          >
            legal@innovationbootcamp.edu
          </a>
        </p>
        <p className="text-[var(--text-muted)]">Phone: +1 (555) 123-4567</p>
        <p className="text-[var(--text-muted)]">Address: 123 Innovation Street, Tech City, TC 12345</p>
      </section>
    </div>
  );
}
