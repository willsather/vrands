import Link from "next/link";

export default function Hero() {
  return (
    <div className="-mt-20 relative h-[85vh] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://content.gapinc.com/d/6341cg23p1x8d5rbnv0u7fb1sm460o23.mp4?TP=GAP2"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute bottom-16 left-8 max-w-lg md:left-16">
        <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
          Summer starts here.
        </h1>
        <p className="mb-6 text-base text-white/90 leading-relaxed">
          Light layers, easy denim and everything you need for warm-weather days
          ahead.
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="inline-block bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-100"
            prefetch
          >
            Vacation Shop +
          </Link>
          <Link
            href="#"
            className="inline-block border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            prefetch
          >
            New Arrivals +
          </Link>
        </div>
      </div>
    </div>
  );
}
