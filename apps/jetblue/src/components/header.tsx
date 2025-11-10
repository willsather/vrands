"use client";

import { Menu, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-jb-navy text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/*Left: Logo & Mobile Menu*/}
          <div className="flex items-center gap-6">
            {/* Left: Logo & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </button>

              <Link href="/">
                <Image
                  src="https://www.jetblue.com/magnoliapublic/dam/logo/jetblue-logo.svg"
                  alt="Paisly"
                  width={60}
                  height={20}
                  className="h-5 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/flights"
                className="gap-1 border-jb-navy border-b-4 font-bold hover:border-jb-orange"
              >
                Book
              </Link>
              <Link
                href="/manage-trips"
                className="gap-1 border-jb-navy border-b-4 font-bold hover:border-jb-orange"
              >
                Manage Trips
              </Link>
              <Link
                href="/check-in"
                className="gap-1 border-jb-navy border-b-4 font-bold hover:border-jb-orange"
              >
                Check In
              </Link>
            </nav>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="size-12" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="size-12" />
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="mt-2 flex min-h-screen flex-col space-y-4 bg-jb-navy p-4 md:hidden">
            <Link
              href="/flights"
              className="hover:text-jb-orange"
              onClick={() => setMenuOpen(false)}
            >
              Book
            </Link>
            <Link
              href="/manage-trips"
              className="hover:text-jb-orange"
              onClick={() => setMenuOpen(false)}
            >
              Manage Trips
            </Link>
            <Link
              href="/check-in"
              className="hover:text-jb-orange"
              onClick={() => setMenuOpen(false)}
            >
              Check In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
