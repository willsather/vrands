import { edgeConfigAdapter } from "@flags-sdk/edge-config";
import { flag } from "flags/next";

export const showHeroPrimaryButton = flag<boolean>({
  key: "show-hero-primary-button",
  description: "show/hide hero primary button (SHOP SALE)",
  adapter: edgeConfigAdapter(),
  defaultValue: true,
});

export const showHeroSecondaryButton = flag<boolean>({
  key: "show-hero-secondary-button",
  description: "show/hide hero secondary button (VIEW GIFT GUIDE)",
  adapter: edgeConfigAdapter(),
  defaultValue: true,
});

export const showDeliveryText = flag<boolean>({
  key: "show-delivery-text",
  description: "enable delivery date text on product page",
  adapter: edgeConfigAdapter(),
  defaultValue: true,
});

export const promoBannerFlag = flag<string>({
  key: "banner-text-variation",
  description: "change the promo banner text",
  defaultValue:
    "Purchase an aviation headset and get free Black QuietComfort Earbuds. Ends 8/30",
  options: [
    {
      value:
        "Purchase an aviation headset and get free Black QuietComfort Earbuds. Ends 8/30",
      label: "Aviation Headset + QuietComfort",
    },
    {
      value: "Save up to 40% on premium Bose speakers. Limited time offer!",
      label: "Speakers Sale",
    },
    {
      value: "Get the best wireless earbuds with noise cancellation. Shop now!",
      label: "Earbuds Special",
    },
    {
      value: "Experience ultimate sound with our flagship headphones. 25% off!",
      label: "Headphones Deal",
    },
  ],
  decide() {
    const variations = [
      "Purchase an aviation headset and get free Black QuietComfort Earbuds. Ends 8/30",
      "Save up to 40% on premium Bose speakers. Limited time offer!",
      "Get the best wireless earbuds with noise cancellation. Shop now!",
      "Experience ultimate sound with our flagship headphones. 25% off!",
    ] as const;

    return (
      variations[Math.floor(Math.random() * variations.length)] ??
      "Purchase an aviation headset and get free Black QuietComfort Earbuds. Ends 8/30"
    );
  },
});

export const heroVariation = flag<string>({
  key: "hero-variation",
  description: "hero section variation with different images and content",
  defaultValue: "back-to-school",
  options: [
    {
      value: "back-to-school",
      label: "Back-to-School Sale",
    },
    {
      value: "ultra-open-earbuds",
      label: "Ultra Open Earbuds Promo",
    },
    {
      value: "bose-heritage",
      label: "Bose Heritage Story",
    },
  ],
  decide() {
    const variations = [
      "back-to-school",
      "ultra-open-earbuds",
      "bose-heritage",
    ] as const;
    return (
      variations[Math.floor(Math.random() * variations.length)] ??
      "back-to-school"
    );
  },
});

export const flags = [
  showHeroPrimaryButton,
  showHeroSecondaryButton,
  heroVariation,
  promoBannerFlag,
  showDeliveryText,
] as const;
