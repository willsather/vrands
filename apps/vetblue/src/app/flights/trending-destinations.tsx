import Image from "next/image";

interface Destination {
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  date: string;
  price: number;
  image: string;
}

const destinations: Destination[] = [
  {
    from: "Boston",
    fromCode: "BOS",
    to: "Presque Isle",
    toCode: "PQI",
    date: "Mar 12",
    price: 44,
    image:
      "https://assets.airtrfx.com/media-em/b6/cities/PQI.jpg?height=500&width=500&quality=80&fit=crop&format=auto&opt=true",
  },
  {
    from: "Boston",
    fromCode: "BOS",
    to: "Syracuse",
    toCode: "SYR",
    date: "Mar 13",
    price: 49,
    image:
      "https://assets.airtrfx.com/media-em/b6/cities/SYR.jpg?height=500&width=500&quality=80&fit=crop&format=auto&opt=true",
  },
  {
    from: "Boston",
    fromCode: "BOS",
    to: "Washington, D.C.",
    toCode: "DCA",
    date: "Apr 1",
    price: 59,
    image:
      "https://assets.airtrfx.com/media-em/b6/cities/DCA.jpg?height=500&width=500&quality=80&fit=crop&format=auto&opt=true",
  },
];

export default function TrendingDestinations() {
  return (
    <>
      <div className="mb-8">
        <h2 className="my-6 font-bold text-3xl">Trending destinations</h2>
      </div>

      <div className="relative">
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-8">
          {destinations.map((destination) => (
            <div
              key={destination.to}
              className="flex-none overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
            >
              <div className="relative h-48">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.to}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="tebg-jb-navy mb-1 font-bold text-lg">
                  {destination.from} ({destination.fromCode}) to{" "}
                  {destination.to} ({destination.toCode})
                </h3>
                <p className="mb-4 text-gray-600">{destination.date}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-600 text-sm">From</span>
                  <span className="tebg-jb-navy font-bold text-2xl">
                    ${destination.price}
                  </span>
                  <span className="text-gray-600 text-sm">*</span>
                </div>
                <p className="text-gray-600 text-sm">one-way</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 max-w-5xl text-gray-500 text-xs">
        *Fares displayed reflect one-way pricing and have been collected within
        the last 24 hours. Fares reflect recent availability, which may change
        at any time. Fare shown may be Blue Basic, our most restrictive fare
        option, which is subject to additional restrictions. Award travel is
        subject to additional taxes and fees. Additional bag fees may apply and
        may vary based on frequent flyer or other status.
      </p>
    </>
  );
}
