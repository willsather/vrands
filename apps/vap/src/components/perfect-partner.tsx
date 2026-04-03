import Image from "next/image";
import Link from "next/link";

import { getPartnerProducts } from "@/lib/products";

export function PerfectPartnerSkeleton() {
  return (
    <div className="mt-16">
      <h3 className="text-xl font-semibold">You might also like</h3>
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-[3/4] bg-gray-100" />
            <div className="mt-3">
              <div className="h-4 w-3/4 rounded bg-gray-100" />
              <div className="mt-2 h-3 w-1/4 rounded bg-gray-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function PerfectPartner() {
  const recommendedProducts = await getPartnerProducts();

  return (
    <div className="mt-16">
      <h3 className="text-xl font-semibold">You might also like</h3>
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {recommendedProducts.map((product) => (
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
    </div>
  );
}
