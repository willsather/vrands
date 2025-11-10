import { homeFlags } from "@/lib/flags";
import { precompute } from "flags/next";
import { type NextRequest, NextResponse } from "next/server";

export const config = { matcher: ["/"] };

export async function middleware(request: NextRequest) {
  const code = await precompute(homeFlags);

  const nextUrl = new URL(
    `/${code}${request.nextUrl.pathname}${request.nextUrl.search}`,
    request.url,
  );

  return NextResponse.rewrite(nextUrl, { request });
}
