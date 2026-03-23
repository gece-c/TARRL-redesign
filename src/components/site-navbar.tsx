"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/programs", label: "Programs" },
  { href: "/resources", label: "Resources" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/company", label: "Company" },
];

export function SiteNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 bg-[#13A7CB]/60 backdrop-blur-md supports-[backdrop-filter]:bg-[#13A7CB]/45">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.2em] text-white/95 uppercase"
        >
          Innovation Bootcamp
        </Link>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#13A7CB] ${
                  isActive
                    ? "bg-[#9A6BD4] text-white shadow-sm"
                    : "bg-transparent text-white hover:bg-transparent hover:text-[#0D2A33]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
