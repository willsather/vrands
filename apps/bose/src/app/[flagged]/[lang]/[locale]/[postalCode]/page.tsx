import CardSubhero from "@/components/card-subhero";
import HeroSection from "@/components/hero-section";
import ProductCard from "@/components/product-card";
import WhyBose from "@/components/why-bose";
import { flags } from "@/lib/flags";
import { getProducts } from "@/lib/product";
import { LangSchema, LocaleSchema } from "@brands/utils";
import { deserialize } from "flags/next";

export default async function Home({
  params,
}: {
  params: Promise<{
    flagged: string;
    lang: string;
    locale: string;
    postalCode: string;
  }>;
}) {
  const products = await getProducts();
  const { flagged, lang, locale } = await params;
  const decisions = await deserialize(flags, flagged);

  const validLang = LangSchema.parse(lang);
  const validLocale = LocaleSchema.parse(locale);

  return (
    <div className="space-y-8">
      <HeroSection
        lang={validLang}
        showPrimaryButton={decisions["show-hero-primary-button"]}
        showSecondaryButton={decisions["show-hero-secondary-button"]}
        variation={decisions["hero-variation"]}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <h2 className="font-bold font-serif text-4xl">
            {validLang === "en"
              ? "Trending Products"
              : "Productos de tendencia"}
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                lang={validLang}
                locale={validLocale}
              />
            ))}
          </div>
        </div>

        <CardSubhero />

        <WhyBose />
      </main>
    </div>
  );
}
