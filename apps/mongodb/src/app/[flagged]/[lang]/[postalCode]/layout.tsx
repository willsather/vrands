import { type FlagValuesType, encryptFlagValues } from "flags";
import { deserialize } from "flags/next";
import { FlagValues } from "flags/react";
import type React from "react";
import { Suspense } from "react";

import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { PromotionalBanner } from "@/components/promotional-banner";
import { flags } from "@/lib/flags";
import { LangSchema } from "@brands/utils";

async function ConfidentialFlagValues({ values }: { values: FlagValuesType }) {
  const encryptedFlagValues = await encryptFlagValues(values);
  return <FlagValues values={encryptedFlagValues} />;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
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
    <>
      <PromotionalBanner
        text={decisions["banner-text-variation"]}
        lang={validLang}
      />

      <div className="pt-12">
        <Navbar lang={validLang} />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer lang={validLang} />
      </div>

      <Suspense fallback={null}>
        <ConfidentialFlagValues values={decisions} />
      </Suspense>
    </>
  );
}
