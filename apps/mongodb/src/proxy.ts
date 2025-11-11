import { flags } from "@/lib/flags";
import { getLanguage, getLocale, getPostalCode } from "@brands/utils";
import { precompute } from "flags/next";
import { type NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // skip Next.js internal paths and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|js|css)$/)
  ) {
    return NextResponse.next();
  }

  // get the preferred language and postal code
  const language = getLanguage(request);
  const postalCode = getPostalCode(request);

  // compute our flags
  const flagged = await precompute(flags);

  const newUrl = new URL(request.nextUrl);
  newUrl.pathname = `/${flagged}/${language}/${postalCode}${pathname}`;

  // rewrite the request (internal only, URL doesn't change for the user)
  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: ["/((?!_next|api|img|.well-known|.*\\..*).*)"],
};
