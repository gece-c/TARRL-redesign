import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variantStyles: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-[var(--primary)] text-black hover:bg-[#39c7e8] active:bg-[#0d8fae] border-[var(--primary)]",
  secondary:
    "bg-[var(--primary)] text-black hover:bg-[#39c7e8] active:bg-[#0d8fae] border-[var(--primary)]",
  ghost:
    "bg-transparent text-[var(--text)] hover:bg-[var(--surface-muted)] active:bg-[var(--surface)] border-[var(--text-muted)]"
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-lg border px-5 py-2 font-semibold transition-colors ${variantStyles[variant]}`}
    >
      {children}
    </Link>
  );
}
