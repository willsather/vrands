import { track } from "@vercel/analytics/server";
import Image from "next/image";

import ApplyButton from "@/app/(home)/apply-button";

export default async function CreditCardPromo() {
  await track("Promotion Shown", {}, { flags: ["credit-card-promo-flag"] });

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-bold text-3xl text-blue-900">
            Earn 70,000 bonus points.
          </h2>
          <p className="text-gray-600">
            Earn 70,000 bonus TrueBlue points after qualifying account activity.
          </p>

          <ApplyButton />

          <p className="text-gray-500 text-sm">Terms apply.</p>
        </div>

        <div className="overflow-hidden rounded-lg">
          <Image
            src="https://jetblue.com/magnoliapublic/dam/ui-assets/promos/Barclays-LTO-70K-New-Pink.jpg?width=1120"
            alt="Credit card promotion"
            width={600}
            height={400}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
