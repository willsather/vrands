import { getPostalCode } from "@brands/utils";
import { type NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // skip next.js internal paths and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|js|css)$/)
  ) {
    return NextResponse.next();
  }

  const postalCode = getPostalCode(request);

  const newUrl = new URL(request.nextUrl);
  newUrl.pathname = `/${postalCode}${pathname}`;

  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: ["/((?!_next|api|img|.well-known|.*\\..*).*)"],
};
