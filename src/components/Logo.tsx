import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

const sizes = {
  sm: 28,
  md: 36,
  lg: 48,
};

export function Logo({ size = "md", showText = true }: LogoProps) {
  const px = sizes[size];

  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="Sherwood Fi"
        width={px}
        height={px}
        className="rounded-lg transition-transform group-hover:scale-105"
        priority
      />
      {showText && (
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">
          Sherwood<span className="text-gold">Fi</span>
        </span>
      )}
    </Link>
  );
}
