import type { ReactNode } from "react";

export function generateStaticParams() {
  return [{ flag: "" }];
}

export default function FlagLayout({ children }: { children: ReactNode }) {
  return children;
}
