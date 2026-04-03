"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { Input } from "@vrands/ui/components/input";
import { Logo } from "./logo";
import MobileNavbar from "./mobile-navbar";

const navLinks = [
  "Women",
  "Men",
  "Girls",
  "Boys",
  "Baby & Toddler",
  "GapStudio",
  "GapX",
];

export default function Navbar() {
  const isMobile = useIsMobile();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleClearSearch = () => {
    setSearchValue("");
    if (searchInputRef.current) {
      searchInputRef.current.blur();
      setIsSearchFocused(false);
    }
  };

  const toggleMobileSearch = () => {
    setIsSearchFocused((sf) => !sf);
    if (searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <header>
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          {/* mobile controls */}
          <div className="flex w-24 items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={toggleMobileSearch}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* logo */}
          <Link
            href="/"
            className={isMobile && isSearchFocused ? "hidden" : "block"}
            prefetch
            aria-label="Gap"
          >
            <Logo />
          </Link>

          {/* desktop nav links */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm font-medium text-gray-800 transition-colors hover:text-black"
                prefetch
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* search */}
          <div
            className={`${isSearchFocused ? "flex" : "hidden md:flex"} w-full items-center md:w-56`}
          >
            <div className="relative flex w-full items-center rounded-sm border border-gray-300 bg-gray-50 px-2">
              <Search className="h-4 w-4 text-gray-400" />
              <Input
                ref={searchInputRef}
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => !isMobile && setIsSearchFocused(false)}
                placeholder="Search"
                className="border-none bg-transparent shadow-none focus-visible:outline-none focus-visible:ring-0"
              />
              {(isSearchFocused || searchValue) && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {isMobile && (
        <MobileNavbar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navLinks={navLinks}
        />
      )}
    </header>
  );
}
