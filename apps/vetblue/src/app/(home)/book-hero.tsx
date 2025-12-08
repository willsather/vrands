import BookFlight from "@/components/book-flight";

export default function BookHero({ title }: { title: string }) {
  return (
    <div className="relative bg-jb-navy text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://www.jetblue.com/magnoliapublic/dam/Booker-Pattern_Pink_wOverlay_1980x1080.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative mx-auto flex flex-col items-center gap-8 px-4 py-12">
        <h1 className="relative mb-12 text-center font-bold text-4xl text-white">
          {title}
        </h1>

        <BookFlight />
      </div>
    </div>
  );
}
