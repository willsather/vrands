import { generatePermutations } from "flags/next";
import type { ReactNode } from "react";

import { flags } from "@/lib/flags";

export async function generateStaticParams() {
  const codes = await generatePermutations(flags);
  return codes.map((code) => ({ flag: code }));
}

export default function FlagLayout({ children }: { children: ReactNode }) {
  return children;
}
