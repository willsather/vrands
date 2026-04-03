import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import {
  PerfectPartner,
  PerfectPartnerSkeleton,
} from "@/components/perfect-partner";
import { getProduct, getProducts } from "@/lib/products";

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map(({ id }) => ({
    id,
    postalCode: "undefined",
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string; postalCode: string }>;
}) {
  const { id, postalCode } = await params;
  const product = await getProduct(id);

  if (product == null) {
    notFound();
  }

  return (
    <main className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-4 pt-8 md:px-8">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* product image */}
          <div className="md:w-1/2">
            <div className="aspect-[3/4] bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={800}
                className="h-full w-full bg-gray-100 object-cover object-center"
              />
            </div>
          </div>

          {/* product details */}
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h1 className="text-2xl font-semibold text-gray-900">
              {product.name}
            </h1>
            <p className="mt-2 text-xl text-gray-700">{product.price}</p>

            {product.description && (
              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="text-sm leading-relaxed text-gray-600">
                  {product.description}
                </p>
              </div>
            )}

            {product.bullets && product.bullets.length > 0 && (
              <ul className="mt-4 list-disc space-y-1 pl-5">
                {product.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm text-gray-600">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 space-y-3">
              <button
                type="button"
                className="w-full bg-black px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Add to Bag
              </button>
              <button
                type="button"
                className="w-full border border-black px-6 py-4 text-sm font-semibold transition-colors hover:bg-gray-50"
              >
                Find in Store
              </button>
            </div>

            <div className="mt-8 space-y-4">
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-semibold">Shipping</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Free shipping on orders over $50
                  <br />
                  Estimated delivery
                  {postalCode !== "undefined" ? (
                    <>
                      {" "}
                      to <span className="font-semibold">{postalCode}</span>
                    </>
                  ) : (
                    ""
                  )}
                  : 3-5 business days
                  <br />
                  Free returns within 45 days
                </p>
              </div>
            </div>
          </div>
        </div>

        <Suspense fallback={<PerfectPartnerSkeleton />}>
          <PerfectPartner />
        </Suspense>
      </div>
    </main>
  );
}
