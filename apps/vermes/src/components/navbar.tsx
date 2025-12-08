"use client";

import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { Input } from "@vrands/ui/components/input";
import { Logo } from "./logo";
import MobileNavbar from "./mobile-navbar";

const navigationItems = [
  {
    title: "WOMEN",
    links: [
      {
        category: "Ready-to-wear",
        href: "/category/ready-to-wear",
        items: [
          "Coats & Outerwear",
          "Jackets",
          "Dresses",
          "Skirts & Shorts",
          "Pants",
          "Knitwear",
          "Tops & Shirts",
        ],
      },
      {
        category: "Accessories",
        href: "/category/jewelry",
        items: ["Hats", "Gloves", "Scarves & Ties", "Belts", "Fashion Jewelry"],
      },
      {
        category: "Bags & Clutches",
        href: "/category/leather",
        items: ["Bags", "Clutches", "Small Leather Goods"],
      },
      {
        category: "Shoes",
        href: "/category/womens-shoes",
        items: ["Boots & Ankle Boots", "Sneakers", "Sandals", "Pumps & Heels"],
      },
    ],
  },
  {
    title: "MEN",
    links: [
      {
        category: "Ready-to-wear",
        href: "/category/ready-to-wear",
        items: [
          "Coats & Outerwear",
          "Jackets",
          "Suits",
          "Pants",
          "Knitwear",
          "Shirts",
          "T-shirts & Polos",
        ],
      },
      {
        category: "Accessories",
        href: "/category/jewelry",
        items: ["Hats", "Gloves", "Scarves & Ties", "Belts", "Fashion Jewelry"],
      },
      {
        category: "Bags & Luggage",
        href: "/category/leather",
        items: ["Bags", "Briefcases", "Small Leather Goods", "Travel"],
      },
      {
        category: "Shoes",
        href: "/category/mens-shoes",
        items: ["Boots", "Sneakers", "Loafers", "Sandals"],
      },
    ],
  },
  {
    title: "HOME, OUTDOOR AND EQUESTRIAN",
    links: [
      {
        category: "Home",
        href: "/category/tableware",
        items: [
          "Furniture",
          "Lighting",
          "Tableware",
          "Decorative Objects",
          "Textiles",
        ],
      },
      {
        category: "Outdoor",
        href: "/category/tableware",
        items: ["Garden Furniture", "Beach", "Sports"],
      },
      {
        category: "Equestrian",
        href: "/category/tableware",
        items: [
          "Riding Accessories",
          "Saddles",
          "Horse Equipment",
          "Stable Accessories",
        ],
      },
    ],
  },
  {
    title: "JEWELRY AND WATCHES",
    links: [
      {
        category: "Jewelry",
        href: "/category/jewelry",
        items: ["Necklaces", "Bracelets", "Rings", "Earrings", "Brooches"],
      },
      {
        category: "Watches",
        href: "/category/jewelry",
        items: [
          "Women's Watches",
          "Men's Watches",
          "Pocket Watches",
          "Watch Straps",
        ],
      },
    ],
  },
  {
    title: "FRAGRANCES AND MAKE-UP",
    links: [
      {
        category: "Fragrances",
        href: "/category/jewelry",
        items: [
          "Women's Fragrances",
          "Men's Fragrances",
          "Unisex Fragrances",
          "Bath & Body",
        ],
      },
      {
        category: "Make-up",
        href: "/category/jewelry",
        items: ["Lipstick", "Face", "Eyes", "Nails"],
      },
    ],
  },
  {
    title: "GIFTS AND PETIT H",
    links: [
      {
        category: "Gifts",
        href: "/category/jewelry",
        items: [
          "Gifts for Her",
          "Gifts for Him",
          "Gifts for the Home",
          "Corporate Gifts",
        ],
      },
      {
        category: "Petit H",
        href: "/category/jewelry",
        items: ["Objects", "Accessories", "Jewelry", "Limited Editions"],
      },
    ],
  },
  {
    title: "SPECIAL EDITIONS AND SERVICES",
    links: [
      {
        category: "Special Editions",
        href: "#about",
        items: ["Limited Collections", "Collaborations", "Exclusive Pieces"],
      },
      {
        category: "Services",
        href: "#services",
        items: [
          "Repairs",
          "Personalization",
          "Gift Wrapping",
          "Delivery Services",
        ],
      },
    ],
  },
  {
    title: "ABOUT HERMÈS",
    links: [
      {
        category: "The House of Hermès",
        href: "#house",
        items: ["History", "Craftsmanship", "Sustainability", "Press"],
      },
      {
        category: "Contact",
        href: "#contact",
        items: ["Find a Store", "Customer Service", "Careers", "FAQ"],
      },
    ],
  },
];

export default function Navbar() {
  const router = useRouter();
  const isMobile = useIsMobile();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // prevent body scrolling when the mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (title: string) => {
    if (!isMobile) {
      setActiveDropdown(title);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const handleClearSearch = () => {
    setSearchValue("");
    // Remove focus from the input after clearing
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((mo) => !mo);
  };

  const completeSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.blur();
      setIsSearchFocused(false);
    }

    const query = searchValue;

    setSearchValue("");

    router.push(`/search?q=${query}`);
  };

  return (
    <header>
      <div
        className={`fixed top-0 right-0 left-0 z-40 ${
          isHovered || activeDropdown ? "bg-white" : "bg-white/70"
        } backdrop-blur-sm transition-colors duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between p-4">
          <div className="flex w-32 items-center justify-start gap-4 md:hidden">
            <button type="button" onClick={toggleMobileMenu} aria-label="Menu">
              <Menu className="h-6 w-6 text-gray-800" />
            </button>
            <button
              type="button"
              onClick={toggleMobileSearch}
              aria-label="Search"
            >
              <Search className="h-6 w-6 text-gray-800" />
            </button>
          </div>

          {/* Search Input */}
          <div
            className={`w-full md:w-64 ${isSearchFocused ? "flex" : "hidden md:flex"} items-center border-foreground border-b`}
          >
            <Search className="mt-1 hidden w-8 pr-2 text-gray-800/50 md:flex" />
            <Input
              ref={searchInputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && completeSearch()}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => !isMobile && setIsSearchFocused(false)}
              placeholder="Search"
              className="border-none shadow-none focus-visible:outline-none focus-visible:ring-0"
            />
            {(isSearchFocused || searchValue) && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="-translate-y-1/2 absolute top-1/2 right-2"
                aria-label="Clear search"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>
            )}
          </div>

          {/* Logo */}
          <Link
            href="/"
            className={`${isMobile && isSearchFocused ? "hidden" : "flex justify-center"}`}
            prefetch
            aria-label="Hermes"
          >
            <Logo />
          </Link>

          {/* Icons */}
          <div
            className={`flex w-32 items-center justify-end gap-8 md:w-64 ${isMobile && isSearchFocused ? "hidden" : "block"}`}
          >
            <Link
              href="#account"
              className="flex items-center text-gray-800 text-sm"
              prefetch
            >
              <User className="h-5 w-5 md:mr-1" />
              <span className="hidden md:inline">Account</span>
            </Link>
            <Link
              href="#cart"
              className="flex items-center text-gray-800 text-sm"
              prefetch
            >
              <ShoppingBag className="h-5 w-5 md:mr-1" />
              <span className="hidden md:inline">Cart</span>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden border-b md:block ${isHovered || activeDropdown ? "border-gray-200" : "border-gray-200/70"}`}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-center">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
              >
                <button
                  type="button"
                  className={`relative px-4 py-5 font-medium text-gray-800 text-xs tracking-wider hover:after:absolute hover:after:right-4 hover:after:bottom-3 hover:after:left-4 hover:after:h-px hover:after:bg-black ${
                    activeDropdown === item.title
                      ? "after:absolute after:right-4 after:bottom-3 after:left-4 after:h-px after:bg-black"
                      : ""
                  }`}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </div>

          {navigationItems.map((item) => (
            <div
              key={`dropdown-${item.title}`}
              className={`absolute top-full right-0 left-0 bg-white px-8 py-6 shadow-lg transition-all duration-300 ${
                activeDropdown === item.title
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <div className="mx-auto grid max-w-7xl grid-cols-4 gap-8">
                {item.links.map((section) => (
                  <div key={section.category}>
                    <Link
                      href={section.href}
                      className="mb-3 font-medium text-gray-900 text-sm"
                      prefetch
                    >
                      {section.category}
                    </Link>
                    <ul className="space-y-2">
                      {section.items.map((subItem) => (
                        <li key={subItem}>
                          <Link
                            href={section.href}
                            className="text-gray-600 text-xs hover:text-black hover:underline"
                            onClick={handleMouseLeave}
                            prefetch
                          >
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {isMobile && (
        <MobileNavbar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navItems={navigationItems}
        />
      )}
    </header>
  );
}
