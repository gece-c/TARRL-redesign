export default function CookiePolicyPage() {
  return (
    <div className="space-y-8">
      <h1 className="page-title">Cookie Policy</h1>
      <p className="text-sm text-[var(--text-muted)]">Last updated: March 24, 2024</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">What Are Cookies?</h2>
        <p className="text-[var(--text-muted)]">
          Cookies are small text files that are placed on your device when you visit our website.
          They help us provide you with a better experience by remembering your preferences,
          analyzing site usage, and assisting with navigation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">How We Use Cookies</h2>
        <p className="text-[var(--text-muted)]">
          We use cookies and similar tracking technologies to track activity on our website and
          store certain information. This helps us deliver a better and more personalized service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Types of Cookies We Use</h2>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--text-strong)]">Essential Cookies</h3>
          <p className="text-[var(--text-muted)]">
            Required for basic site functionality and security. Cannot be disabled.
          </p>
          <p className="text-[var(--text-muted)]">Examples:</p>
          <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
            <li>Session cookies for authentication</li>
            <li>CSRF tokens for security</li>
            <li>Load balancing cookies</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--text-strong)]">Functional Cookies</h3>
          <p className="text-[var(--text-muted)]">
            Enable enhanced functionality and personalization.
          </p>
          <p className="text-[var(--text-muted)]">Examples:</p>
          <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
            <li>Language preferences</li>
            <li>Theme preferences</li>
            <li>Last visited pages</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--text-strong)]">Analytics Cookies</h3>
          <p className="text-[var(--text-muted)]">
            Help us understand how visitors interact with our website.
          </p>
          <p className="text-[var(--text-muted)]">Examples:</p>
          <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
            <li>Pages visited</li>
            <li>Time spent on site</li>
            <li>Error encounters</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--text-strong)]">Marketing Cookies</h3>
          <p className="text-[var(--text-muted)]">
            Used to track visitors across websites for marketing purposes.
          </p>
          <p className="text-[var(--text-muted)]">Examples:</p>
          <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
            <li>Ad targeting</li>
            <li>Social media sharing</li>
            <li>Campaign effectiveness</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Managing Cookies</h2>
        <p className="text-[var(--text-muted)]">
          Most web browsers allow you to control cookies through their settings. You can:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
          <li>View cookies stored on your device</li>
          <li>Allow or block cookies</li>
          <li>Delete existing cookies</li>
          <li>Set preferences for certain websites</li>
        </ul>
        <p className="text-[var(--text-muted)]">
          Please note that disabling certain cookies may limit your ability to use some features
          of our website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Third-Party Cookies</h2>
        <p className="text-[var(--text-muted)]">
          Some cookies are placed by third-party services that appear on our pages. We do not
          control these third-party cookies. You can learn more about these cookies and how to
          manage them by visiting the respective privacy policies of these third parties.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Updates to This Policy</h2>
        <p className="text-[var(--text-muted)]">
          We may update this Cookie Policy from time to time. We will notify you of any changes by
          posting the new policy on this page and updating the &quot;Last updated&quot; date.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Contact Us</h2>
        <p className="text-[var(--text-muted)]">
          If you have questions about our Cookie Policy, please contact us at
          {" "}
          <a
            href="mailto:privacy@innovationbootcamp.edu"
            className="text-[var(--brand-primary)] underline decoration-[var(--brand-primary)]/50 underline-offset-2 hover:decoration-[var(--brand-primary)]"
          >
            privacy@innovationbootcamp.edu
          </a>
          .
        </p>
      </section>
    </div>
  );
}
