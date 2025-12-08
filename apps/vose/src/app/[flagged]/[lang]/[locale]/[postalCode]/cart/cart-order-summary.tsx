"use client";

import type { CartItem } from "@/app/actions/cart";
import CartTotals from "@/components/cart-totals";
import dict from "@/lib/dict.json";
import type { Product } from "@/lib/product";
import { Button } from "@vrands/ui/components/button";
import type { Lang, Locale } from "@vrands/utils";

export default function CartOrderSummary({
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
  const t = dict[lang];

  return (
    <div className="sticky top-24 mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h2 className="mb-4 font-bold text-gray-900 text-lg">
        {t.cart.orderSummary.title}
      </h2>

      <div className="mb-6 space-y-3">
        <CartTotals
          lang={lang}
          locale={locale}
          items={items}
          products={products}
        />
      </div>

      <Button
        className="w-full"
        size="lg"
        onClick={() => alert("Not Implemented")}
      >
        {t.cart.orderSummary.checkout}
      </Button>

      <p className="mt-4 text-center text-gray-500 text-xs">
        {t.cart.orderSummary.taxesNote}
      </p>
    </div>
  );
}
