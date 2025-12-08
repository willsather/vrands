import type { Metadata } from "next";
import Link from "next/link";

import TrendingDestinations from "@/app/flights/trending-destinations";
import BookFlight from "@/components/book-flight";

export const metadata: Metadata = {
  title: "Flights",
  description:
    "Ready, jet, GO! Find JetBlue flights, airfare deals and TrueBlue award travel to 100+ destinations in the U.S., Latin America, the Caribbean—and London.",
  openGraph: {
    title: "Flights",
    description:
      "Ready, jet, GO! Find JetBlue flights, airfare deals and TrueBlue award travel to 100+ destinations in the U.S., Latin America, the Caribbean—and London.",
  },
};

export default function FlightsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="border-b bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex h-12 items-center gap-2 text-sm">
            <Link href="/" className="text-jb-blue hover:underline">
              Home
            </Link>
            <span className="text-gray-300">{"/"}</span>
            <span className="text-gray-600">Flights</span>
          </div>

          <h1 className="mb-12 font-bold">Flights</h1>
        </div>
      </nav>

      <div className="mt-8 flex flex-col items-center justify-center">
        <h2 className="mb-8">Feeling fly today?</h2>

        <BookFlight />

        <hr className="my-16 w-full bg-gray-300" />

        <TrendingDestinations />
      </div>
    </div>
  );
}
