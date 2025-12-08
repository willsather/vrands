"use client";

import dict from "@/lib/dict.json";
import type { Lang } from "@vrands/utils";
import { langToLocale } from "@vrands/utils";

interface StoreLocatorProps {
  lang: Lang;
  postalCode: string;
  enabled: boolean;
}

export default function StoreLocator({
  lang,
  postalCode,
  enabled,
}: StoreLocatorProps) {
  const t = dict[lang];

  if (!enabled) {
    return null;
  }

  if (postalCode == null || postalCode === "undefined") {
    return null;
  }

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  const formattedDate = deliveryDate.toLocaleDateString(langToLocale(lang), {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  // replace {date} placeholder in the translation
  const deliveryText = t.delivery.text.replace("{date}", formattedDate);

  return (
    <p className="text-gray-600 text-sm">
      {deliveryText}{" "}
      <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
        {postalCode}
      </span>
    </p>
  );
}
