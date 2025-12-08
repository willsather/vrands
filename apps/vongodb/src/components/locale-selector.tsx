"use client";

import { Check, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@vrands/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@vrands/ui/components/dropdown-menu";
import type { Lang } from "@vrands/utils";

export default function LocaleSelector({ lang }: { lang: Lang }) {
  const router = useRouter();

  // Language options with display names
  const languageOptions: { code: Lang; name: string; flag?: string }[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  // Get current language and locale display info
  const currentLanguage =
    languageOptions.find(({ code }) => code === lang) || languageOptions[0];

  // Handle selection change
  const handleChange = (type: "language", value: string) => {
    // Update the selection
    const newLang = type === "language" ? value : lang;

    // Set cookies for future requests
    document.cookie = `NEXT_LANGUAGE=${newLang}; path=/; max-age=${60 * 60 * 24 * 365}`;

    // Refresh the current page to apply the new language/locale
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-1 text-gray-300 hover:text-white"
          aria-label={`${currentLanguage?.name || "Language"}`}
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="text-lg">{currentLanguage?.flag || "🌍"}</span>
            <span className="text-sm">{currentLanguage?.name}</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-48 rounded-lg border-gray-600 bg-gray-800 p-2"
        align="start"
      >
        <DropdownMenuLabel className="font-medium text-gray-300 text-sm">
          Language
        </DropdownMenuLabel>

        <div className="mt-3 space-y-1">
          {languageOptions.map(({ code, name, flag }) => (
            <DropdownMenuItem
              key={code}
              className="flex cursor-pointer items-center justify-between text-gray-300 hover:bg-transparent focus:border-none focus:bg-transparent focus:outline-none focus:ring-0 data-[highlighted]:bg-transparent"
              onClick={() => handleChange("language", code)}
            >
              <div className="flex items-center space-x-2">
                <span className="text-base">{flag}</span>
                <span className="hover:font-bold hover:underline">{name}</span>
              </div>
              {lang === code && <Check className="h-4 w-4 text-green-400" />}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
