import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo-white-text.svg"
      alt="Gap"
      width={120}
      height={80}
      className="h-14 w-auto"
    />
  );
}
