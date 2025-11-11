"use client";

import { Button } from "@brands/ui/components/button";
import { track } from "@vercel/analytics";

export default function ApplyButton() {
  const trackClick = async () => {
    track("Promotion Clicked", {}, { flags: ["credit-card-promo-flag"] });
  };

  return (
    <Button className="bg-jb-navy hover:bg-jb-navy/80" onClick={trackClick}>
      Apply now
    </Button>
  );
}
