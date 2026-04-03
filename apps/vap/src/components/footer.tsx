import Link from "next/link";

const footerColumns = [
  {
    title: "Customer Support",
    links: [
      "Customer service",
      "Shipping",
      "Returns & exchanges",
      "Track your order",
      "Gift cards",
      "Size & fit guides",
      "Buy online, pick up in store",
      "GapCash",
    ],
  },
  {
    title: "Encore Membership Program",
    links: [
      "Become an Encore Member - it's free",
      "Learn more about Encore",
      "Activate credit card",
      "Apply now for an Encore Credit Card",
    ],
  },
  {
    title: "About Us",
    links: [
      "Careers",
      "Our values",
      "Create Better",
      "Inclusion & Belonging",
      "Join our creator community",
    ],
  },
  {
    title: "Find Us",
    links: ["Contact us", "Store locator", "Sign up for texts"],
  },
];

const legalLinks = [
  "Privacy Policy",
  "Your Privacy Choices",
  "Your California Privacy Rights",
  "Terms of Use",
  "Sustainability",
  "About Gap Inc.",
  "Americans with Disabilities Act",
  "California Transparency in Supply Chains Act",
  "Gap Inc. Policies",
];

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* top promo section */}
      <div className="border-t border-gray-200">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
          {/* email signup */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Sign up for email</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
              <button
                type="button"
                className="bg-black px-6 py-3 text-sm font-semibold text-white"
              >
                Sign up
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Get access to exclusive offers, new arrivals, and other perks.
            </p>
            <Link
              href="#"
              className="mt-1 inline-block text-sm text-black underline"
              prefetch
            >
              Privacy policy
            </Link>
          </div>

          {/* credit card */}
          <div className="border-l border-gray-200 pl-8">
            <h3 className="mb-4 text-lg font-semibold">
              Encore Credit Card
            </h3>
            <p className="text-sm text-gray-600">
              Extra 20% off your first purchase with your new card at Gap
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href="#"
                className="text-sm font-semibold text-black underline"
                prefetch
              >
                Apply now
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold text-black underline"
                prefetch
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* app promo */}
          <div className="border-l border-gray-200 pl-8">
            <h3 className="mb-4 text-lg font-semibold">Get the Gap app</h3>
            <p className="text-sm text-gray-600">
              Scan the QR code below to download our app and get exclusive
              access, special offers, and more perks.
            </p>
          </div>
        </div>
      </div>

      {/* link columns */}
      <div className="border-t border-gray-200">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 md:grid-cols-4 md:px-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((text) => (
                  <li key={text}>
                    <Link
                      href="#"
                      className="text-sm text-gray-500 hover:text-black"
                      prefetch
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* bottom legal bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500">
            <span>&copy; 2026 The Gap, Inc.</span>
            {legalLinks.map((text) => (
              <span key={text} className="flex items-center gap-2">
                <span>|</span>
                <Link href="#" className="hover:text-black" prefetch>
                  {text}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
