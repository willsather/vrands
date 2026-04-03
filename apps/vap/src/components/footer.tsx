import Link from "next/link";

const footerColumns = [
  {
    title: "Get to Know Us",
    links: [
      { text: "About Gap", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Gap Inc.", href: "#" },
      { text: "ESG", href: "#" },
      { text: "Press", href: "#" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { text: "Contact Us", href: "#" },
      { text: "Shipping & Returns", href: "#" },
      { text: "Store Locator", href: "#" },
      { text: "Gift Cards", href: "#" },
      { text: "Size Guide", href: "#" },
    ],
  },
  {
    title: "Our Brands",
    links: [
      { text: "Gap", href: "#" },
      { text: "Old Navy", href: "#" },
      { text: "Banana Republic", href: "#" },
      { text: "Athleta", href: "#" },
      { text: "Gap Factory", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-black"
                      prefetch
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-xs text-gray-500">
            &copy; 2025 Gap Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-black" prefetch>
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-black" prefetch>
              Terms of Use
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-black" prefetch>
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
