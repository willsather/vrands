"use client";

import { X } from "lucide-react";
import Link from "next/link";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: string[];
}

export default function MobileNavbar({
  isOpen,
  onClose,
  navLinks,
}: MobileNavbarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      <div className="p-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button type="button" onClick={onClose} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link} className="border-b border-gray-100 pb-4">
                <Link
                  href="#"
                  onClick={onClose}
                  className="text-base font-medium text-gray-800"
                  prefetch
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
