import { flag } from "flags/next";

export const showPromoBanner = flag<boolean>({
  key: "show-promo-banner-flag",
  defaultValue: false,
  description: "show promo banner instead of brand links in top bar",
  decide() {
    return false;
  },
});
