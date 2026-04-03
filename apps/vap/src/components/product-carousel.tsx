import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/products";

export default function ProductCarousel({
  products,
}: {
  products: Product[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <h2 className="mb-8 text-2xl font-semibold">More new arrivals.</h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="group block transition-opacity hover:opacity-90"
            prefetch
          >
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={667}
                className="h-full w-full bg-gray-100 object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-sm font-medium text-gray-900">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
