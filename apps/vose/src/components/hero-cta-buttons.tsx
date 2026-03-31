"use client";

import { track } from "@vercel/analytics";
import { Button } from "@vrands/ui/components/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface HeroCTAButtonsProps {
  showPrimaryButton: boolean;
  showSecondaryButton: boolean;
  primaryButtonText: string;
  secondaryButtonText: string;
  variation: string;
  lang: string;
}

export default function HeroCTAButtons({
  showPrimaryButton,
  showSecondaryButton,
  primaryButtonText,
  secondaryButtonText,
  variation,
  lang,
}: HeroCTAButtonsProps) {
  const handlePrimaryButtonClick = () => {
    track("hero_primary_cta_click", {
      button_text: primaryButtonText,
      hero_variation: variation,
      language: lang,
      section: "hero",
      button_type: "primary",
    });
  };

  const handleSecondaryButtonClick = () => {
    track("hero_secondary_cta_click", {
      button_text: secondaryButtonText,
      hero_variation: variation,
      language: lang,
      section: "hero",
      button_type: "secondary",
    });
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      {showPrimaryButton && (
        <Button
          size="lg"
          className="bg-white px-8 font-semibold text-black hover:bg-white/90"
          onClick={handlePrimaryButtonClick}
          asChild
        >
          <Link href="/products">{primaryButtonText}</Link>
        </Button>
      )}

      {showSecondaryButton && (
        <Button
          variant="ghost"
          size="lg"
          className="group font-medium text-white hover:bg-transparent hover:text-white hover:underline"
          onClick={handleSecondaryButtonClick}
          asChild
        >
          <Link href="/products">
            {secondaryButtonText}
            <ChevronRight className="ml-2 size-5" />
          </Link>
        </Button>
      )}
    </div>
  );
}
