import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, locale: string) {
  const currencyMap = {
    us: { currency: "USD", multiplier: 1.0 },
    ca: { currency: "CAD", multiplier: 1.4 },
    mx: { currency: "MXN", multiplier: 20.4 },
    uk: { currency: "GBP", multiplier: 0.8 },
    de: { currency: "EUR", multiplier: 0.95 },
    jp: { currency: "JPY", multiplier: 150 },
  } as const;

  const currencyInfo =
    currencyMap[locale as keyof typeof currencyMap] || currencyMap.us;
  const { currency, multiplier } = currencyInfo;

  // Convert the price using the multiplier
  const convertedPrice = price * multiplier;

  // Format the price according to the specified approach
  return convertedPrice.toLocaleString("en-US", {
    currency,
    maximumFractionDigits: currency === "JPY" ? 0 : 2,
    minimumFractionDigits: currency === "JPY" ? 0 : 2,
    style: "currency",
  });
}
