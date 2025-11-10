import { flag } from "flags/next";

export const creditCardPromoFlag = flag<boolean>({
  key: "credit-card-promo-flag",
  description: "enable displaying new credit card promotion",
  decide() {
    return true;
  },
});

export const heroTextFlag = flag<string>({
  key: "hero-text-flag",
  description: "change home page hero cta for booking flights",
  options: [
    { value: "Celebrating 25 years, nonstop." },
    {
      value: "Flying, but make it better.",
    },
    {
      value: "Welcome back, frequent flyer",
    },
  ],
  decide() {
    return "Celebrating 25 years, nonstop.";
  },
});

export const homeFlags = [creditCardPromoFlag, heroTextFlag] as const;
