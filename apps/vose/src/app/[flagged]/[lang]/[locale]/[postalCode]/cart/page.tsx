import { ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";

import { getCart } from "@/app/actions/cart";
import dict from "@/lib/dict.json";
import { getAllProducts } from "@/lib/products";
import { Button } from "@vrands/ui/components/button";
import type { Lang, Locale } from "@vrands/utils";

import { Suspense } from "react";
import CartItemsList from "./cart-items-list";
import CartOrderSummary from "./cart-order-summary";

type CartPageProps = {
  params: Promise<{
    flagged: string;
    lang: Lang;
    locale: Locale;
    postalCode: string;
  }>;
};

export default async function Cart({ params }: CartPageProps) {
  const { lang, locale } = await params;
  const [products, cartData] = await Promise.all([getAllProducts(), getCart()]);
  const t = dict[lang];

  if (cartData.items.length === 0) {
    return (
      <Suspense fallback={null}>
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="text-center">
            <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-gray-400" />
            <h2 className="mb-2 font-bold text-2xl text-gray-900">
              {t.cart.empty.title}
            </h2>
            <p className="mb-8 text-gray-600">{t.cart.empty.description}</p>
            <Link href="/">
              <Button size="lg">{t.cart.empty.shopNow}</Button>
            </Link>
          </div>
        </div>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={null}>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="mb-6 font-bold font-serif text-6xl text-gray-900">
              {t.cart.title}
            </h1>

            <CartItemsList
              items={cartData.items}
              products={products}
              locale={locale}
              lang={lang}
            />
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <CartOrderSummary
              lang={lang}
              locale={locale}
              items={cartData.items}
              products={products}
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
