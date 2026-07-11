import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/docs", label: "Documentation" },
  { href: "/markets", label: "Markets" },
  { href: "#", label: "Explorer ↗", external: true },
  { href: "#", label: "Faucet ↗", external: true },
  { href: "#", label: "$SHERWOOD on Virtuals ↗", external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Logo size="lg" />

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-2 border-t border-border/40 pt-8">
          <p className="font-mono text-xs text-muted">
            $SHERWOOD CA: 0x8f3a2b1c9d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8
          </p>
          <p className="text-xs text-muted/70">
            © 2026 Sherwood Fi. Not investment advice. Digital assets involve risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
