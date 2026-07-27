import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/logo";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/75 backdrop-blur-md supports-backdrop-filter:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" aria-label="Daily English Patterns home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden h-8 px-3 text-slate-600 hover:text-slate-900 sm:inline-flex"
            render={<a href="#login" />}
            nativeButton={false}
          >
            Login
          </Button>
          <Button
            size="sm"
            className="h-8 bg-blue-600 px-4 text-white hover:bg-blue-700"
            render={<a href="/session" />}
            nativeButton={false}
          >
            Start Learning
          </Button>
        </div>
      </div>
    </header>
  );
}
