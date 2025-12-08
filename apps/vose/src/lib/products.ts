import type { Product } from "./product";

export async function getAllProducts(): Promise<Product[]> {
  if (process.env.EDGE_CONFIG == null) {
    throw new Error(
      "Edge config not found. Please set the EDGE_CONFIG environment variable.",
    );
  }

  const data = await fetch(process.env.EDGE_CONFIG, {
    // FIXME: add data cache and revalidate api route
    // next: {
    //   revalidate: 60 * 60 * 24 * 365,
    //   tags: ["products"],
    // },
  }).then(async (res) => await res.json());

  return data.items.products as Product[];
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  const products = await getAllProducts();
  return products.find((product) => product.slug === slug);
}

export async function getProductsByIds(
  productIds: string[],
): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter((product) => productIds.includes(product.slug));
}
