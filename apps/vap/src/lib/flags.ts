import { vercelAdapter } from "@flags-sdk/vercel";
import { flag } from "flags/next";

export const showPromoBanner = flag<boolean>({
  key: "promo-banner",
  defaultValue: false,
  description: "show promo banner instead of brand links in top bar",
  adapter: vercelAdapter(),
});
