import HeroSection from "@/components/hero-section";
import Subhero from "@/components/subhero";
import { flags } from "@/lib/flags";
import { LangSchema } from "@brands/utils";
import { deserialize } from "flags/next";

export default async function Home({
  params,
}: {
  params: Promise<{
    flagged: string;
    lang: string;
    postalCode: string;
  }>;
}) {
  const { flagged, lang } = await params;
  const decisions = await deserialize(flags, flagged);

  const validLang = LangSchema.parse(lang);

  return (
    <div className="mx-2 space-y-8">
      <HeroSection
        lang={validLang}
        showPrimaryButton={decisions["show-hero-primary-button"]}
        showSecondaryButton={decisions["show-hero-secondary-button"]}
      />

      {decisions["show-subhero"] && <Subhero lang={validLang} />}
    </div>
  );
}
