"use client";

import { Menu, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useCart } from "./cart-provider";

import dict from "@/lib/dict.json";
import type { Lang, Locale } from "@vrands/utils";

export default function Navbar({
  lang,
  locale,
}: {
  lang: Lang;
  locale: Locale;
}) {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //  added mobile menu state

  return (
    <nav className="sticky top-0 z-20 border-gray-200 border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/*  Desktop navigation - hidden on mobile */}
          <div className="hidden w-1/3 gap-4 md:flex">
            {dict[lang].navbar.items.map((item, i) => (
              <Link
                key={item.name}
                href={item.route}
                className="tracking-tight transition-colors hover:text-gray-600"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/*  Mobile hamburger menu - visible only on mobile */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-gray-600 transition-colors hover:text-gray-900"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/*  Logo - adjusted width for mobile */}
          <div className="flex justify-center md:w-1/3">
            <Link
              href="/"
              className="font-bold font-serif text-3xl tracking-tight"
            >
              <Image
                src="https://8hvqnvqjkkn6ntus.public.blob.vercel-storage.com/img/bose.svg"
                alt="Bose"
                width={120}
                height={32}
              />
            </Link>
          </div>

          {/*  Cart */}
          <div className="flex justify-end md:w-1/3">
            <Link
              href="/cart"
              className="relative p-2 text-gray-600 transition-colors hover:text-gray-900"
            >
              <ShoppingCart className="size-5" />
              {totalItems > 0 && (
                <span className="-translate-y-1/3 absolute top-2 right-0.5 flex size-1.5 translate-x-1/3 transform items-center justify-center rounded-full bg-black font-bold" />
              )}
            </Link>
          </div>
        </div>
      </div>

      {/*  Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-5 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            onKeyDown={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu panel */}
          <div className="fixed top-0 left-0 h-full w-64 transform bg-white shadow-xl transition-transform">
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="font-semibold text-lg">Menu</h2>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-600 transition-colors hover:text-gray-900"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4">
              <div className="space-y-4">
                {dict[lang].navbar.items.map((item, i) => (
                  <Link
                    key={item.name}
                    href={item.route}
                    className="block py-2 text-lg tracking-tight transition-colors hover:text-gray-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
