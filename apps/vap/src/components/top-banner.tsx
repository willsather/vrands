import { ShoppingBag, User } from "lucide-react";
import Link from "next/link";

import { showPromoBanner } from "@/lib/flags";

const brandLinks = [
  { name: "Gap", href: "/" },
  { name: "Old Navy", href: "#" },
  { name: "Banana Republic", href: "#" },
  { name: "Athleta", href: "#" },
  { name: "Gap Factory", href: "#" },
];

export default async function TopBanner() {
  const isPromo = await showPromoBanner();

  if (isPromo) {
    return (
      <div className="bg-[#111] px-4 py-2">
        <div className="mx-auto max-w-7xl text-white text-xs tracking-wide">
          Black Friday Sale! 20% off. Everything. All day.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#111] px-4 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <nav className="flex items-center gap-4">
          {brandLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 text-xs transition-colors hover:text-white"
              prefetch
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#account"
            className="text-white/80 transition-colors hover:text-white"
            prefetch
          >
            <User className="h-4 w-4" />
          </Link>
          <Link
            href="#cart"
            className="text-white/80 transition-colors hover:text-white"
            prefetch
          >
            <ShoppingBag className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
