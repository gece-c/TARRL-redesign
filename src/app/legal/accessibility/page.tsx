export default function AccessibilityPage() {
  return (
    <div className="space-y-8">
      <h1 className="page-title">Accessibility Statement</h1>
      <p className="text-[var(--text-muted)]">
        Innovation Bootcamp University is committed to ensuring digital accessibility for people
        with disabilities. We are continually improving the user experience for everyone and
        applying the relevant accessibility standards.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Our Commitment</h2>
        <p className="text-[var(--text-muted)]">
          We strive to ensure that our website and all digital content are accessible to everyone,
          regardless of ability or technology. Our goal is to meet WCAG 2.2 Level AA standards
          for web accessibility.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Accessibility Features</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
          <li>Semantic HTML to ensure proper structure and navigation</li>
          <li>ARIA landmarks and labels where appropriate</li>
          <li>Sufficient color contrast ratios</li>
          <li>Keyboard navigation support</li>
          <li>Alt text for images</li>
          <li>Resizable text without loss of functionality</li>
          <li>Clear focus indicators</li>
          <li>Skip to main content link</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Assistive Technologies</h2>
        <p className="text-[var(--text-muted)]">
          Our website is designed to be compatible with various assistive technologies, including:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
          <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
          <li>Speech recognition software</li>
          <li>Screen magnification tools</li>
          <li>Alternative input devices</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Known Issues</h2>
        <p className="text-[var(--text-muted)]">
          While we strive for perfect accessibility, there may be some areas of our website that
          are not fully accessible. We are actively working to identify and resolve any
          accessibility issues.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Feedback and Support</h2>
        <p className="text-[var(--text-muted)]">
          We welcome your feedback on the accessibility of our website. If you encounter any
          accessibility barriers or have suggestions for improvement, please contact us at:
        </p>
        <p className="text-[var(--text-muted)]">Email: accessibility@innovationbootcamp.edu</p>
        <p className="text-[var(--text-muted)]">Phone: (555) 123-4567</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Continuous Improvement</h2>
        <p className="text-[var(--text-muted)]">
          We are committed to continually improving the accessibility of our website and services.
          We regularly review our accessibility features and work to implement best practices as
          they evolve.
        </p>
      </section>

      <p className="text-sm text-[var(--text-muted)]">Last updated: March 24, 2024</p>
    </div>
  );
}
