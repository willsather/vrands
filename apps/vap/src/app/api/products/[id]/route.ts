import { getProduct } from "@/lib/products";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const product = await getProduct(id);

  if (product == null) {
    return NextResponse.json(
      {
        status: 404,
        message: "Product not found",
      },
      { status: 404 },
    );
  }

  return NextResponse.json(product);
}
