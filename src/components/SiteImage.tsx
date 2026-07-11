import Image from "next/image";

type SiteImageProps = {
  src: string;
  alt: string;
  variant?: "hero" | "feature" | "banner" | "inline";
  priority?: boolean;
  caption?: string;
};

const aspect = {
  hero: "aspect-[16/10]",
  feature: "aspect-[4/3]",
  banner: "aspect-[21/9]",
  inline: "aspect-[3/2]",
};

export function SiteImage({
  src,
  alt,
  variant = "inline",
  priority = false,
  caption,
}: SiteImageProps) {
  return (
    <figure className={`site-image site-image--${variant}`}>
      <div className={`site-image__frame ${aspect[variant]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="site-image__img"
          sizes={
            variant === "hero"
              ? "(max-width: 1024px) 100vw, 45vw"
              : "(max-width: 768px) 100vw, 40vw"
          }
          priority={priority}
        />
        <div className="site-image__overlay" aria-hidden />
      </div>
      {caption && <figcaption className="site-image__caption">{caption}</figcaption>}
    </figure>
  );
}
