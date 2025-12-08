import type { CartItem } from "@/app/actions/cart";
import type { Product } from "@/lib/product";
import type { Locale } from "@vrands/utils";
import { useMemo } from "react";

// Price multipliers for different locales
const getMultiplierForLocale = (locale: Locale): number => {
  const multipliers: Record<Locale, number> = {
    us: 1.0,
    ca: 1.4,
    mx: 20.4,
    uk: 0.8,
    de: 0.95,
    jp: 150,
  };

  return multipliers[locale] || 1.0;
};

export function useCartTotals(
  items: CartItem[],
  products: Product[],
  locale: Locale,
) {
  return useMemo(() => {
    const multiplier = getMultiplierForLocale(locale);

    const totalValue = items.reduce((sum, item) => {
      const product = products.find((p) => p.slug === item.productId);
      if (!product) return sum;

      const basePrice = product.price * multiplier;
      const discount = product.discount ? product.discount * multiplier : 0;
      const finalPrice = discount > 0 ? basePrice - discount : basePrice;

      return sum + finalPrice * item.quantity;
    }, 0);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      totalValue,
      totalItems,
    };
  }, [items, products, locale]);
}
