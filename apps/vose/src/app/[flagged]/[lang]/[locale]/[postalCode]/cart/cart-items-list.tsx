import type { CartItem } from "@/app/actions/cart";
import SkinnyProductCard from "@/components/skinny-product-card";
import type { Product } from "@/lib/product";
import type { Lang, Locale } from "@vrands/utils";

export default function CartItemsList({
  items,
  products,
  locale,
  lang,
}: {
  items: CartItem[];
  products: Product[];
  locale: Locale;
  lang: Lang;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      {items.map((item, index) => {
        const product = products.find((p) => p.slug === item.productId);
        return (
          <SkinnyProductCard
            key={`${item.productId}-${item.color}`}
            item={item}
            product={product}
            locale={locale}
            lang={lang}
            isLast={index === items.length - 1}
          />
        );
      })}
    </div>
  );
}
