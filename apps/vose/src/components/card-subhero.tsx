import Image from "next/image";

import CardSubheroCTAButtons from "./card-subhero-cta-buttons";

export default function CardSubhero() {
  return (
    <div className="my-16" id="explore">
      <div className="relative mb-6 h-96 w-full bg-black">
        <div className="absolute inset-0 opacity-80">
          <Image
            src="https://8hvqnvqjkkn6ntus.public.blob.vercel-storage.com/img/home/back-to-school-card.avif"
            alt="Back to School"
            width={1000}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute top-4 left-6">
          <span className="font-medium text-sm text-white tracking-wide">
            BACK-TO-SCHOOL GIFT GUIDE
          </span>
        </div>
        <div className="absolute bottom-6 left-6 max-w-md">
          <h1 className="mb-3 font-bold text-5xl text-white">
            Sound that makes the grade
          </h1>
          <p className="mb-6 text-lg text-white">
            Shop a selection of gifts that can start the school year on a high
            note.
          </p>
          <CardSubheroCTAButtons
            type="gift-guide"
            buttonText="VIEW GIFT GUIDE"
          />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Certified Refurbished Sale */}
        <div className="relative h-80 overflow-hidden rounded-lg bg-emerald-600">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://8hvqnvqjkkn6ntus.public.blob.vercel-storage.com/img/home/refurbished-card.avif"
              alt="Back to School"
              width={1000}
              height={500}
            />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-end p-6">
            <h2 className="mb-3 font-bold text-4xl text-white">
              Certified Refurbished Sale
            </h2>
            <p className="mb-6 text-lg text-white">
              All the performance you expect — for less. Save up to 40% for a
              limited time.
            </p>
            <CardSubheroCTAButtons type="refurbished" buttonText="SHOP" />
          </div>
        </div>

        {/* Bose × NME Giveaway */}
        <div className="relative h-80 overflow-hidden rounded-lg bg-gray-900">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://8hvqnvqjkkn6ntus.public.blob.vercel-storage.com/img/home/giveaway-card.avif"
              alt="Giveaway to School"
              width={1000}
              height={500}
            />
          </div>
          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <div className="text-center" />
            <div>
              <h2 className="mb-3 font-bold text-4xl text-white">
                Bose × NME C25 Giveaway
              </h2>
              <p className="mb-6 text-lg text-white">
                Win the limited-edition C25 mixtape, a cassette player, and a
                pair of QuietComfort headphones.
              </p>
              <CardSubheroCTAButtons type="giveaway" buttonText="ENTER NOW" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
