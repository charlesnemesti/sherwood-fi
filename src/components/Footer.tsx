import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/docs", label: "Documentation" },
  { href: "/markets", label: "Markets" },
  { href: "https://robinhoodchain.blockscout.com", label: "Explorer ↗", external: true },
  { href: "https://docs.robinhood.com/chain/", label: "Chain Docs ↗", external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="site-container py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo size="lg" />
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted">
              Onchain tax lien markets on Robinhood Chain. Not investment advice.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-mono text-[0.6875rem] uppercase tracking-wider text-muted transition-colors hover:text-copper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="section-rule mt-10" />

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.625rem] text-muted/70">
            $SHERWOOD · 0x8f3a…e7f8
          </p>
          <p className="font-mono text-[0.625rem] text-muted/50">
            © 2026 Sherwood Fi
          </p>
        </div>
      </div>
    </footer>
  );
}
