import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag("posts", "max");

  return NextResponse.json({ revalidated: true });
}
