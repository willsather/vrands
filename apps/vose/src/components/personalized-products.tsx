import ProductCard from "@/components/product-card";
import { getRelatedProducts } from "@/lib/product";
import { Suspense } from "react";

interface PersonalizedProductsProps {
  currentProductSlug: string;
  lang: string;
  locale: string;
}

function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="group relative flex h-full min-h-[500px] flex-col bg-gray-50 p-6"
        >
          <div className="flex flex-1 flex-col">
            <div className="flex-1">
              <div className="relative mb-6 h-64" />
              <div className="mb-4">
                <div className="mb-3 h-4 w-24 animate-pulse rounded bg-gray-200" />
                <div className="w-full max-w-full">
                  <div className="flex w-max items-center gap-2 p-0.5 pb-3">
                    {[3, 4, 5].map((j) => (
                      <div
                        key={j}
                        className="size-9 flex-shrink-0 animate-pulse rounded-full bg-gray-200"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-2 h-8 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="mb-4 h-4 w-32 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="relative mt-6">
              <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function RelatedProductsList({
  currentProductSlug,
  lang,
  locale,
}: PersonalizedProductsProps) {
  const relatedProducts = await getRelatedProducts(currentProductSlug);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {relatedProducts.map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
          lang={lang}
          locale={locale}
        />
      ))}
    </div>
  );
}

export default function PersonalizedProducts({
  currentProductSlug,
  lang,
  locale,
}: PersonalizedProductsProps) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 font-bold text-2xl text-gray-900">
        Personalized for You
      </h2>
      <Suspense fallback={<ProductSkeleton />}>
        <RelatedProductsList
          currentProductSlug={currentProductSlug}
          lang={lang}
          locale={locale}
        />
      </Suspense>
    </section>
  );
}
