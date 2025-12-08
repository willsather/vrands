"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { GetStartedButton } from "@/components/get-started-button";
import { Logo } from "@/components/logo";
import dict from "@/lib/dict.json";
import { Button } from "@vrands/ui/components/button";
import type { Lang } from "@vrands/utils";

export default function Navbar({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const navigationItems = t.navbar.items;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-50 border-gray-200 border-b bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Logo className="fill-[#001E2B]" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.route}
                  className="flex items-center font-medium text-gray-900 text-sm transition-colors duration-200 hover:text-gray-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden items-center space-x-4 md:flex">
              {/* Search Icon */}
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-gray-600 transition-colors hover:text-gray-900"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Support Link */}
              <Link
                href="/support"
                className="font-medium text-gray-900 text-sm transition-colors duration-200 hover:text-gray-600"
              >
                {t.navbar.support}
              </Link>

              {/* Sign In Link */}
              <Link
                href="/signin"
                className="font-medium text-gray-900 text-sm transition-colors duration-200 hover:text-gray-600"
              >
                {t.navbar.signIn}
              </Link>

              <GetStartedButton lang={lang} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 transition-colors hover:text-gray-900"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-28 bottom-0 z-40 bg-white md:hidden">
          <div className="flex h-full flex-col">
            {/* Navigation Links */}
            <div className="flex-1 px-4 py-6">
              <div className="space-y-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.route}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-medium text-gray-900 text-lg transition-colors duration-200 hover:text-gray-600"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/support"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-medium text-gray-900 text-lg transition-colors duration-200 hover:text-gray-600"
                >
                  {t.navbar.support}
                </Link>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-gray-200 border-t bg-gray-50 px-4 py-6">
              <div className="space-y-4">
                <Link
                  href="/signin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full rounded-xl border border-[#001E2B] bg-[#001E2B] px-4 py-2 text-center font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                >
                  {t.navbar.signIn}
                </Link>
                <div
                  onClick={() => setIsMobileMenuOpen(false)}
                  onKeyDown={() => setIsMobileMenuOpen(false)}
                >
                  <GetStartedButton
                    lang={lang}
                    className="block w-full text-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
