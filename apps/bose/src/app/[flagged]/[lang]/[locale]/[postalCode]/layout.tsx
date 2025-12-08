import type React from "react";
import { Suspense } from "react";

import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { PromotionalBanner } from "@/components/promotional-banner";
import { flags } from "@/lib/flags";
import { LangSchema, LocaleSchema } from "@brands/utils";

import { type FlagValuesType, encryptFlagValues } from "flags";
import { deserialize } from "flags/next";
import { FlagValues } from "flags/react";

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
    locale: string;
    postalCode: string;
  }>;
}) {
  const { flagged, lang, locale } = await params;
  const decisions = await deserialize(flags, flagged);

  const validLang = LangSchema.parse(lang);
  const validLocale = LocaleSchema.parse(locale);

  return (
    <Suspense fallback={null}>
      <PromotionalBanner text={decisions["banner-text-variation"]} />

      <div className="pt-12">
        <Navbar lang={validLang} locale={validLocale} />
        {children}
        <Footer lang={validLang} locale={validLocale} />
      </div>

      <Suspense fallback={null}>
        <ConfidentialFlagValues values={decisions} />
      </Suspense>
    </Suspense>
  );
}
