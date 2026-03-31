"use client";

import { track } from "@vercel/analytics";
import { Button } from "@vrands/ui/components/button";
import Link from "next/link";

interface CardSubheroCTAButtonsProps {
  type: "gift-guide" | "refurbished" | "giveaway";
  buttonText: string;
}

export default function CardSubheroCTAButtons({
  type,
  buttonText,
}: CardSubheroCTAButtonsProps) {
  const handleClick = () => {
    let eventName = "";
    let cardType = "";

    switch (type) {
      case "gift-guide":
        eventName = "gift_guide_cta_click";
        cardType = "back_to_school";
        break;
      case "refurbished":
        eventName = "refurbished_shop_cta_click";
        cardType = "certified_refurbished_sale";
        break;
      case "giveaway":
        eventName = "giveaway_cta_click";
        cardType = "bose_nme_giveaway";
        break;
    }

    track(eventName, {
      section: "card_subhero",
      button_text: buttonText,
      card_type: cardType,
    });
  };

  const baseClasses = "bg-white text-black hover:bg-gray-100";
  const sizeClasses = type === "gift-guide" ? "" : "w-fit";

  return (
    <Button
      variant="outline"
      className={`${baseClasses} ${sizeClasses}`}
      onClick={handleClick}
      asChild
    >
      <Link href="/products">{buttonText}</Link>
    </Button>
  );
}
