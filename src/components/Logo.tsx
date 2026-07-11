import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

const sizes = { sm: 26, md: 32, lg: 40 };

export function Logo({ size = "md", showText = true }: LogoProps) {
  const px = sizes[size];

  return (
    <Link href="/" className="group flex items-center gap-3">
      <Image
        src="/logo.png"
        alt=""
        width={px}
        height={px}
        style={{ width: px, height: "auto" }}
        className="transition-transform duration-300 group-hover:scale-[1.03]"
        priority
      />
      {showText && (
        <span className="font-display text-[1.05rem] font-normal tracking-tight text-foreground">
          Sherwood<span className="italic text-copper">Fi</span>
        </span>
      )}
    </Link>
  );
}
