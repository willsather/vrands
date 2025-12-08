import Link from "next/link";

import dict from "@/lib/dict.json";
import type { Lang } from "@vrands/utils";

export function GetStartedButton({
  lang,
  onClick,
  className,
}: {
  lang?: Lang;
  onClick?: () => void;
  className?: string;
}) {
  const t = dict[lang || "en"];
  return (
    <Link
      href="/#get-started"
      onClick={onClick}
      className={`rounded-xl border border-[#001E2B] bg-[#00ED64] px-4 py-2 font-medium text-sm transition-colors duration-200 hover:rounded-full ${className || ""}`}
    >
      {t.buttons.getStarted}
    </Link>
  );
}
