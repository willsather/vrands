import { type FlagValuesType, encrypt } from "flags";
import { generatePermutations } from "flags/next";
import { deserialize } from "flags/next";
import { FlagValues } from "flags/react";
import { type ReactNode, Suspense } from "react";

import { homeFlags } from "@/lib/flags";

async function ConfidentialFlagValues({ values }: { values: FlagValuesType }) {
  const encryptedFlagValues = await encrypt(values);
  return <FlagValues values={encryptedFlagValues} />;
}

export async function generateStaticParams() {
  return [];

  // generate permutations for pages to be built at build time
  // const codes = await generatePermutations(homeFlags);
  // return codes.map((code) => ({ code }));
}

export default async function HomeLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ code: string }>;
}) {
  const code = (await params).code;
  const values = await deserialize(homeFlags, code);

  return (
    <>
      {children}

      <Suspense fallback={null}>
        <ConfidentialFlagValues values={values} />
      </Suspense>
    </>
  );
}
