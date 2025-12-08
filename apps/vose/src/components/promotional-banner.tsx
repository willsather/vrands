"use client";

import { useEffect, useState } from "react";

export function PromotionalBanner({ text }: { text: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < 50);
    };

    // Set initial visibility based on current scroll position
    setIsVisible(window.scrollY < 50);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 right-0 left-0 z-50 bg-[#b4bec7] px-4 py-3 text-center text-black text-xs transition-all duration-500 ease-in-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {text}
    </div>
  );
}
