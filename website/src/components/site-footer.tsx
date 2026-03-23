import Link from "next/link";

const legalLinks = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms-of-service", label: "Terms of Service" },
  { href: "/legal/cookie-policy", label: "Cookie Policy" },
  { href: "/legal/accessibility", label: "Accessibility" },
];

const socialLinks = [
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://x.com", label: "X" },
  { href: "https://github.com", label: "GitHub" },
];

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05C21.3 8.6 22 11 22 14.11V21h-4v-5.8c0-1.38-.03-3.15-1.92-3.15-1.93 0-2.22 1.5-2.22 3.05V21h-4V9Z" />
      </svg>
    );
  }

  if (label === "X") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.26l-4.9-6.43L6.4 22H3.28l7.24-8.28L.8 2h6.4l4.43 5.85L18.9 2Zm-1.1 18h1.73L6.26 3.9H4.4L17.8 20Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.82-.25.82-.57v-2.2c-3.34.72-4.04-1.42-4.04-1.42-.54-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.2.08 1.85 1.26 1.85 1.26 1.08 1.85 2.82 1.31 3.5 1 .1-.8.42-1.3.76-1.6-2.66-.3-5.46-1.34-5.46-5.95 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.54.12-3.2 0 0 1.02-.33 3.35 1.24A11.6 11.6 0 0 1 12 6.5c1.02 0 2.06.14 3.02.42 2.33-1.57 3.34-1.24 3.34-1.24.67 1.66.25 2.9.13 3.2.77.84 1.24 1.92 1.24 3.24 0 4.62-2.8 5.64-5.48 5.94.43.38.82 1.12.82 2.27v3.37c0 .32.22.68.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-12 bg-transparent">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-wide text-zinc-700 uppercase">
            Legal
          </p>
          <div className="mt-3 flex flex-col items-start gap-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full bg-transparent px-3 py-1.5 text-sm text-[#DDF7FF] transition hover:bg-[#13A7CB] hover:text-[#0A1D26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6BD4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-zinc-700 uppercase">
            Follow Us
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-[#DDF7FF] transition hover:bg-[#13A7CB] hover:text-[#0A1D26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6BD4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222]"
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
