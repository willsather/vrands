"use client";

import type { CartItem } from "@/app/actions/cart";
import { useCartTotals } from "@/hooks/use-cart-totals";
import dict from "@/lib/dict.json";
import type { Product } from "@/lib/product";
import { formatPrice } from "@/lib/utils";
import type { Lang, Locale } from "@vrands/utils";

export default function CartTotals({
  lang,
  locale,
  items,
  products,
}: {
  lang: Lang;
  locale: Locale;
  items: CartItem[];
  products: Product[];
}) {
  const { totalItems, totalValue } = useCartTotals(items, products, locale);
  const t = dict[lang];

  return (
    <>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">
          {`${t.cart.orderSummary.items} (${totalItems})`}
        </span>
        <span className="font-medium">{formatPrice(totalValue, locale)}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{t.cart.orderSummary.shipping}</span>
        <span className="font-medium text-green-600">
          {t.cart.orderSummary.shippingFree}
        </span>
      </div>

      <div className="border-gray-200 border-t pt-3">
        <div className="flex justify-between font-bold text-lg">
          <span>{t.cart.orderSummary.total}</span>
          <span>{formatPrice(totalValue, locale)}</span>
        </div>
      </div>
    </>
  );
}
