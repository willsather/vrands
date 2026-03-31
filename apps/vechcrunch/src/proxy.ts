import { precompute } from "flags/next";
import { type NextRequest, NextResponse } from "next/server";

import { flags } from "@/lib/flags";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|js|css)$/)
  ) {
    return NextResponse.next();
  }

  const code = await precompute(flags);

  const newUrl = new URL(request.nextUrl);
  newUrl.pathname = `/${code}${pathname}`;

  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
