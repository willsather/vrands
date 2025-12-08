"use client";

import { useEffect, useState } from "react";

import dict from "@/lib/dict.json";
import type { Lang } from "@vrands/utils";

export function PromotionalBanner({
  text,
  lang = "en",
}: {
  text: "mongo-8.0" | "voyage" | "conference" | "mcp-server";
  lang?: Lang;
}) {
  const t = dict[lang];
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variations = {
    conference: {
      text: t.promotionalBanner.conference.text,
      cta: t.promotionalBanner.conference.cta,
    },
    "mcp-server": {
      text: t.promotionalBanner.mcpServer.text,
      cta: t.promotionalBanner.mcpServer.cta,
    },
    "mongo-8.0": {
      text: t.promotionalBanner.mongo8.text,
      cta: t.promotionalBanner.mongo8.cta,
    },
    voyage: {
      text: t.promotionalBanner.voyage.text,
      cta: t.promotionalBanner.voyage.cta,
    },
  };

  return (
    <div
      className="fixed top-0 right-0 left-0 z-10 flex items-center gap-2 bg-[#00684A] px-2 py-2 font-mono text-[10px] text-white transition-all duration-500 ease-in-out sm:gap-5 sm:px-4 sm:py-3 sm:text-xs"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="flex-shrink-0 whitespace-nowrap rounded-3xl bg-[#B1FF05] px-2 py-0.5 text-[#001E2B] uppercase">
        {variations[text]?.cta}
      </div>
      <span className="font-medium">{variations[text]?.text}</span>
    </div>
  );
}
