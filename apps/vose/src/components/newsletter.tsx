"use client";

import dict from "@/lib/dict.json";
import type { Lang } from "@vrands/utils";
import { type FormEvent, useState } from "react";

export function Newsletter({ lang }: { lang: Lang }) {
  const [email, setEmail] = useState("");
  const t = dict[lang];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Not Implemented");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md items-center justify-center gap-4"
    >
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.footer.newsletter.emailPlaceholder}
          className="w-full border-0 border-gray-300 border-b-2 bg-transparent pb-2 text-lg placeholder-gray-500 outline-none focus:border-black"
          required
        />
      </div>
      <button
        type="submit"
        className="flex items-center gap-2 border border-black px-6 py-2 transition-colors duration-200 hover:bg-black hover:text-white"
      >
        {t.footer.newsletter.signUp}
        <svg
          className="size-4"
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
      </button>
    </form>
  );
}
