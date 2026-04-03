import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/products";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="min-h-[50vh] w-full">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
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
                className="h-full w-full bg-gray-100 object-cover object-center"
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
    </div>
  );
}
