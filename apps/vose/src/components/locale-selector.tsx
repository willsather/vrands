"use client";
import { Check, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@vrands/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@vrands/ui/components/dropdown-menu";
import type { Lang, Locale } from "@vrands/utils";

interface LocaleSelectorProps {
  currentLang: Lang;
  currentLocale: Locale;
}

export default function LocaleSelector({
  currentLang,
  currentLocale,
}: LocaleSelectorProps) {
  const router = useRouter();

  // Language options with display names
  const languageOptions = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
  ];

  // Locale options with display names and flags
  const localeOptions = [
    { code: "us", name: "United States", flag: "🇺🇸" },
    { code: "mx", name: "Mexico", flag: "🇲🇽" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
    { code: "de", name: "Germany", flag: "🇩🇪" },
    { code: "jp", name: "Japan", flag: "🇯🇵" },
  ];

  // Get current language and locale display info
  const currentLanguage =
    languageOptions.find((lang) => lang.code === currentLang) ||
    languageOptions[0];
  const currentCountry =
    localeOptions.find((loc) => loc.code === currentLocale) || localeOptions[0];

  // Handle selection change
  const handleChange = (type: "language" | "locale", value: string) => {
    // Update the selection
    const newLang = type === "language" ? value : currentLang;
    const newLocale = type === "locale" ? value : currentLocale;

    // Set cookies for future requests
    document.cookie = `NEXT_LANGUAGE=${newLang}; path=/; max-age=${60 * 60 * 24 * 365}`;
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;

    // Refresh the current page to apply the new language/locale
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-1 text-muted-foreground hover:text-foreground"
          aria-label={`${currentLanguage?.name || "Language"} / ${currentCountry?.flag || "🌍"} ${currentCountry?.name || "Country"}`}
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="text-lg">{currentCountry?.flag || "🌍"}</span>
            <span>{currentCountry?.name || "Country"}</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64 p-2" align="start">
        <DropdownMenuLabel className="font-medium text-sm">
          Language
        </DropdownMenuLabel>

        <div className="mb-2 space-y-1">
          {languageOptions.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              className="flex cursor-pointer items-center justify-between"
              onClick={() => handleChange("language", lang.code)}
            >
              <span>{lang.name}</span>
              {currentLang === lang.code && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuLabel className="font-medium text-sm">
          Country
        </DropdownMenuLabel>
        <div className="space-y-1">
          {localeOptions.map((locale) => (
            <DropdownMenuItem
              key={locale.code}
              className="flex cursor-pointer items-center justify-between"
              onClick={() => handleChange("locale", locale.code)}
            >
              <div className="flex items-center">
                <span className="mr-2">{locale.flag}</span>
                <span>{locale.name}</span>
              </div>
              {currentLocale === locale.code && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
