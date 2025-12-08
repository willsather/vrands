import { deserialize } from "flags/next";
import { notFound } from "next/navigation";

import { LangSchema, LocaleSchema } from "@brands/utils";

import PersonalizedProducts from "@/components/personalized-products";
import ProductDetail from "@/components/product-detail";
import { flags } from "@/lib/flags";
import { getProducts } from "@/lib/product";
import { Suspense } from "react";

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    flagged: string;
    lang: string;
    locale: string;
    postalCode: string;
    slug: string;
  }>;
}) {
  const { flagged, lang, locale, postalCode, slug } = await params;
  const products = await getProducts();
  const decisions = await deserialize(flags, flagged);

  const validLang = LangSchema.parse(lang);
  const validLocale = LocaleSchema.parse(locale);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <Suspense fallback={null}>
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <ProductDetail
            product={product}
            lang={validLang}
            locale={validLocale}
            postalCode={postalCode}
            showDeliveryText={decisions["show-delivery-text"]}
          />
          <PersonalizedProducts
            currentProductSlug={slug}
            lang={validLang}
            locale={validLocale}
          />
        </div>
      </main>
    </Suspense>
  );
}
