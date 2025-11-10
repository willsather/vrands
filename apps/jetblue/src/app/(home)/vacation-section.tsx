import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function VacationSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="container mx-auto max-w-5xl py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Spring Break Card */}
          <div className="overflow-hidden rounded-lg bg-gray-100/75 shadow-sm">
            <div className="relative h-64">
              <Image
                src="https://jetblue.com/magnoliapublic/dam/ui-assets/promos/Always-summer_lime.jpg?width=1440?width=1440"
                alt="Beach bag with towels"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative p-8">
              <div className="absolute bottom-0 left-0 h-1 w-full" />
              <h2 className="mb-4 font-bold text-3xl text-jb-navy">
                Make a (spring) break for it.
              </h2>
              <p className="mb-6 text-gray-700">
                Psst.... It's not too late to book travel for March and beyond.
              </p>

              <Button
                variant="default"
                className="bg-jb-navy px-8 font-semibold text-white hover:bg-jb-navy"
              >
                See low fares
              </Button>
            </div>
          </div>

          {/* Vacation Packages Card */}
          <div className="overflow-hidden rounded-lg bg-gray-100/75 shadow-sm">
            <div className="relative h-64">
              <Image
                src="https://jetblue.com/magnoliapublic/dam/ui-assets/promos/JBV-FlashSale-022025-lightblue_reduced.jpg?width=1440?width=1440"
                alt="People running on beach with surfboards"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative p-8">
              <h2 className="mb-4 font-bold text-3xl text-jb-navy">
                Up to $600 off vacation packages.
              </h2>
              <p className="mb-6 text-gray-700">
                Take a (spring) break with savings on flight + hotel & flight +
                cruise packages. Hurry, lock in your vacation plans by 2/24!
              </p>
              <Button
                variant="default"
                className="flex items-center gap-2 bg-jb-navy px-8 font-semibold text-white hover:bg-jb-navy"
              >
                Get promo code
                <ArrowUpRight className="size-4" />
              </Button>
              <p className="mt-4 text-gray-500 text-sm">
                For travel 2/28/25-1/15/26. Min. spend & terms apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
