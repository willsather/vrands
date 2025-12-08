import Image from "next/image";

import dict from "@/lib/dict.json";
import type { Lang } from "@vrands/utils";
import HeroCTAButtons from "./hero-cta-buttons";

export default function HeroSection({
  lang,
  showPrimaryButton = true,
  showSecondaryButton = true,
  variation = "back-to-school",
}: {
  lang: Lang;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  variation?: string;
}) {
  const content =
    dict[lang].hero[variation as keyof typeof dict.en.hero] ||
    dict[lang].hero["back-to-school"];

  const getImageSrc = () => {
    switch (variation) {
      case "ultra-open-earbuds":
        return "https://8hvqnvqjkkn6ntus.public.blob.vercel-storage.com/img/hero/hero-2.avif";
      case "bose-heritage":
        return "https://8hvqnvqjkkn6ntus.public.blob.vercel-storage.com/img/hero/hero-3.webp";
      default:
        return "https://8hvqnvqjkkn6ntus.public.blob.vercel-storage.com/img/hero/hero.avif";
    }
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-center bg-cover bg-no-repeat">
        <Image
          src={getImageSrc()}
          alt="Back-to-school Sale"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Bottom left */}
      <div className="relative flex h-full items-end">
        <div className="container px-6 pb-12 md:pb-16">
          <div className="max-w-2xl">
            {/* Small label */}
            <p className="mb-4 font-medium text-sm text-white/90 uppercase tracking-wide">
              {content.label}
            </p>

            {/* Main headline */}
            <h1 className="mb-6 font-bold font-serif text-5xl text-white leading-tight">
              {content.title}
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-xl text-white/90 leading-relaxed md:text-lg">
              {content.subtitle}
            </p>

            {/* Action buttons */}
            <HeroCTAButtons
              showPrimaryButton={showPrimaryButton}
              showSecondaryButton={showSecondaryButton}
              primaryButtonText={content.primaryButton}
              secondaryButtonText={content.secondaryButton}
              variation={variation}
              lang={lang}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
