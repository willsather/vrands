import Image from "next/image";

import type { CartItem } from "@/app/actions/cart";
import dict from "@/lib/dict.json";
import type { Product } from "@/lib/product";
import { formatPrice } from "@/lib/utils";
import type { Lang, Locale } from "@vrands/utils";

import CartQuantityControls from "./cart-quantity-controls";
import CartRemoveButton from "./cart-remove-button";

export default function SkinnyProductCard({
  item,
  product,
  locale,
  lang = "en",
  isLast = false,
}: {
  item: CartItem;
  product: Product | undefined;
  locale: Locale;
  lang?: Lang;
  isLast?: boolean;
}) {
  if (!product) {
    return null;
  }

  const color =
    product.colors.find((c) => c.name === item.color) || product.colors[0];

  if (color == null) {
    return null;
  }

  const t = dict[lang];

  // Calculate price with locale multiplier
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

  const basePrice = product.price * getMultiplierForLocale(locale);
  const discount = product.discount
    ? product.discount * getMultiplierForLocale(locale)
    : 0;
  const finalPrice = discount > 0 ? basePrice - discount : basePrice;

  return (
    <div
      className={`flex items-center gap-4 py-4 ${!isLast ? "border-gray-200 border-b" : ""}`}
    >
      {/* Product Image */}
      <div className="flex-shrink-0">
        <Image
          src={color.image}
          alt={`${product.title} in ${color.name}`}
          width={80}
          height={80}
          className="h-20 w-20 rounded-md bg-gray-50 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-medium text-gray-900 text-lg">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm">
          {t.cart.product.color}: {color.name}
        </p>

        <div className="mt-1">
          {discount > 0 ? (
            <div className="space-y-1">
              <p className="font-medium text-gray-900 text-lg">
                {formatPrice(finalPrice, locale)}
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-red-500 text-xs line-through">
                  {formatPrice(basePrice, locale)}
                </span>
                <span className="font-medium text-green-600 text-xs">
                  Save {formatPrice(discount, locale).replace(/\.00$/, "")}
                </span>
              </div>
            </div>
          ) : (
            <p className="font-medium text-gray-900 text-lg">
              {formatPrice(finalPrice, locale)}
            </p>
          )}
        </div>
      </div>

      {/* Quantity Controls */}
      <CartQuantityControls
        productId={item.productId}
        color={item.color}
        initialQuantity={item.quantity}
      />

      <CartRemoveButton productId={item.productId} color={item.color} />

      {/* Subtotal */}
      <div className="min-w-0 text-right">
        <p className="font-medium text-gray-900 text-lg">
          {formatPrice(finalPrice * item.quantity, locale)}
        </p>
      </div>
    </div>
  );
}
