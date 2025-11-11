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
    <main className="mt-32 bg-background pb-16 md:mt-48">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="aspect-square bg-[#e9e9e7]">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="h-full w-full bg-muted-foreground/10 object-cover object-center"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-8 md:mt-0 md:w-1/2">
            <h1 className="font-light text-3xl tracking-wider">
              {product.name} {product.size && `${product.size}`}
            </h1>
            <p className="mt-2 text-muted-foreground text-xl">
              {product.price}
            </p>

            <div className="mt-8 border-gray-200 border-t pt-8">
              <p className="wrap-anywhere whitespace-pre-line font-light text-gray-600 text-sm leading-relaxed">
                {product.description ||
                  "This luxurious Hermès piece exemplifies the brand's commitment to exceptional craftsmanship and timeless design. Made with the finest materials and attention to detail that has defined Hermès since 1837."}
              </p>
            </div>

            <div className="mt-8">
              <button
                type="button"
                className="w-full border border-gray-800 bg-gray-800 px-6 py-4 font-light text-sm text-white transition-colors hover:bg-gray-900"
              >
                ADD TO CART
              </button>

              <button
                type="button"
                className="mt-4 w-full border border-gray-300 px-6 py-4 font-light text-sm transition-colors hover:border-gray-800"
              >
                FIND IN STORES
              </button>
            </div>

            <div className="mt-8 space-y-4">
              <div className="border-gray-200 border-t pt-4">
                <h3 className="font-medium text-sm">Details</h3>
                <p className="mt-2 font-light text-gray-600 text-sm">
                  Reference: H{Math.floor(Math.random() * 900000) + 100000}
                  <br />
                  Made in France
                  <br />
                  {product.size && `Size: ${product.size}`}
                </p>
              </div>

              <div className="border-gray-200 border-t pt-4">
                <h3 className="font-medium text-sm">Shipping & Returns</h3>
                <p className="mt-2 font-light text-gray-600 text-sm">
                  Complimentary standard shipping
                  <br />
                  Estimated delivery
                  {postalCode !== "undefined" ? (
                    <>
                      {" "}
                      to <span className="font-bold">{postalCode}</span>
                    </>
                  ) : (
                    ""
                  )}
                  : 2-4 business days
                  <br />
                  Free returns within 30 days
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
