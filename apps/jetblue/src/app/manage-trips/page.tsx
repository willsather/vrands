import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@brands/ui/components/button";
import { Input } from "@brands/ui/components/input";
import { Label } from "@brands/ui/components/label";

export const metadata: Metadata = {
  title: "Manage Trips",
  description:
    "Skip the (phone) line. It’s fast and easy to change, cancel and manage your JetBlue flights on jetblue.com. Select seats, add extras, check in and more.",
  openGraph: {
    title: "Manage Trips",
    description:
      "Skip the (phone) line. It’s fast and easy to change, cancel and manage your JetBlue flights on jetblue.com. Select seats, add extras, check in and more.",
  },
};

export default function ManageTripsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Breadcrumb */}
      <nav className="border-b bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex h-12 items-center gap-2 text-sm">
            <Link href="/" className="text-jb-blue hover:underline">
              Home
            </Link>
            <span className="text-gray-300">{"/"}</span>
            <span className="text-gray-600">Manage Trips</span>
          </div>

          <h1 className="mb-12 font-bold">Manage trips</h1>
        </div>
      </nav>

      <main className="container mx-auto flex-1 px-4">
        <div className="mx-auto max-w-2xl py-8">
          <div className="space-y-8">
            <h2 className="mb-2 font-bold">
              Change or cancel flights, add bags, & more
            </h2>

            <hr className="my-16 w-full bg-gray-300" />

            <div className="max-w-md">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmationCode">
                    Confirmation code or ticket #
                  </Label>
                  <Input
                    id="confirmationCode"
                    type="text"
                    placeholder="Confirmation code or ticket #"
                    className="w-full"
                  />
                  <p className="text-gray-500 text-sm">
                    ex. ABCDEF or 2790123456789
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-jb-navy text-white hover:bg-jb-navy"
                >
                  Continue
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
