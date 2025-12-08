import { Calendar, HandHeart, Truck, User } from "lucide-react";

export default function WhyBose() {
  return (
    <>
      <section className="mb-20">
        <h1 className="mb-16 font-bold text-5xl text-black">
          Why buy from Bose
        </h1>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* 90-day return policy */}
          <div className="space-y-6">
            <div className="flex size-24 items-center justify-center rounded-full bg-gray-100">
              <Calendar className="size-8 text-black" />
            </div>
            <div>
              <h3 className="mb-4 text-3xl text-black">90-day return policy</h3>
              <p className="mb-4 text-gray-600 leading-relaxed">
                Try it for 90 days to make sure it's right for you.
              </p>
              <a
                href="/#"
                className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline"
              >
                Learn more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="graphics-symbol"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Price match promise */}
          <div className="space-y-6">
            <div className="flex size-24 items-center justify-center rounded-full bg-gray-100">
              <HandHeart className="size-8 text-black" />
            </div>
            <div>
              <h3 className="mb-4 text-3xl text-black">Price match promise</h3>
              <p className="mb-4 text-gray-600 leading-relaxed">
                Shop confidently. We'll match a lower price.
              </p>
              <a
                href="/#"
                className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline"
              >
                Learn more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="graphics-symbol"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Complimentary shipping & returns */}
          <div className="space-y-6">
            <div className="flex size-24 items-center justify-center rounded-full bg-gray-100">
              <Truck className="size-8 text-black" />
            </div>
            <div>
              <h3 className="mb-4 text-3xl text-black">
                Complimentary shipping & returns
              </h3>
              <p className="mb-4 text-gray-600 leading-relaxed">
                On all in-stock orders.
              </p>
              <a
                href="/#"
                className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline"
              >
                Learn more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="graphics-symbol"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* My Bose perks */}
          <div className="space-y-6">
            <div className="flex size-24 items-center justify-center rounded-full bg-gray-100">
              <User className="size-8 text-black" />
            </div>
            <div>
              <h3 className="mb-4 text-3xl text-black">My Bose perks</h3>
              <p className="mb-4 text-gray-600 leading-relaxed">
                My Bose members receive welcome and birthday offers, exclusive
                experiences, and more.
              </p>
              <a
                href="/#"
                className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline"
              >
                Learn more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="graphics-symbol"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sound is Power Section */}
      <section className="mb-24 md:mb-48">
        <h2 className="mb-6 font-bold text-5xl text-black">Sound is Power</h2>
        <p className="text-2xl text-gray-700 leading-relaxed">
          Looks good. Sounds amazing. Your life, your soundtrack, your Bose.
        </p>
      </section>
    </>
  );
}
