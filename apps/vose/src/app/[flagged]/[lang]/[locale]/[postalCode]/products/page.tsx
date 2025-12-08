import type { Metadata } from "next";

import ProductCard from "@/components/product-card";
import WhyBose from "@/components/why-bose";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our full collection of Bose products",
};

export default async function ProductsPage({
  params,
}: {
  params: Promise<{
    lang: string;
    locale: string;
    postalCode: string;
  }>;
}) {
  const { lang, locale } = await params;
  const products = await getAllProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 font-bold font-serif text-5xl text-gray-900">
          All Products
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-0.5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            lang={lang}
            locale={locale}
          />
        ))}
      </div>

      <div className="my-16">
        <WhyBose />
      </div>
    </div>
  );
}
