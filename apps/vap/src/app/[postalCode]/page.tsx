import Hero from "@/components/hero";
import ProductCarousel from "@/components/product-carousel";
import { getProducts } from "@/lib/products";

export async function generateStaticParams() {
  return [{ postalCode: "undefined" }];
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Hero />
      <ProductCarousel products={products} />
    </main>
  );
}
