import Link from "next/link";

import { TechCrunchLogo } from "@/icons/logo";
import { MenuIcon } from "@/icons/menu-icon";
import { SearchIcon } from "@/icons/search-icon";

const mainNavItems = [
  { label: "Latest", href: "/latest" },
  { label: "Startups", href: "/startups" },
  { label: "Apps", href: "/apps" },
  { label: "Venture", href: "/venture" },
  { label: "AI", href: "/ai" },
];

export default function HeaderSkeleton({
  showLogo = true,
}: {
  showLogo?: boolean;
}) {
  return (
    <header className="sticky top-0 z-50 w-full bg-tc-black">
      <div className="shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between gap-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <TechCrunchLogo className="size-8 fill-white md:hidden" />
              </Link>

              {showLogo ? (
                <Link
                  href="/"
                  className="mr-8 hidden font-bold text-white text-xl md:flex md:items-center md:gap-4"
                >
                  <TechCrunchLogo className="size-8" />
                  TechCrunch
                </Link>
              ) : null}

              <nav className="hidden items-center space-x-6 md:flex">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-bold text-white transition-colors hover:text-tc-green-100 hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center">
              <div className="rounded-3xl p-3 text-white">
                <SearchIcon className="size-4" />
              </div>

              <div className="rounded-3xl p-3 text-white md:hidden">
                <MenuIcon className="size-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
