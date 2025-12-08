"use client";

import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";

import { addToCart } from "@/app/actions/cart";
import type { Product } from "@/lib/product";
import { formatPrice } from "@/lib/utils";
import { Button } from "@vrands/ui/components/button";

import { ScrollArea, ScrollBar } from "@vrands/ui/components/scroll-area";
import { useCart } from "./cart-provider";

export default function ProductCard({
  product,
  lang,
  locale,
}: {
  product: Product;
  lang: string;
  locale: string;
}) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { refreshCart } = useCart();

  if (product?.colors == null || product.colors[0] == null) {
    return null;
  }

  const current = product.colors[selectedColor] ?? product.colors[0];

  const handleAddToCart = () => {
    const formData = new FormData();
    formData.append("productId", product.slug);
    formData.append("quantity", "1");
    formData.append("locale", locale);
    formData.append("color", current.name);

    // analytics context
    formData.append("section", "trending");
    formData.append("productTitle", product.title);
    formData.append("productPrice", product.price.toString());
    formData.append("productCategory", product.category || "audio");

    startTransition(async () => {
      await addToCart(formData);
      await refreshCart();
    });
  };

  return (
    <div className="group relative flex h-full flex-col bg-gray-50 p-6">
      {/* Heart Icon */}
      <Button
        onClick={(e) => {
          e.preventDefault();
          setIsFavorited(!isFavorited);
        }}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-colors hover:bg-white"
      >
        <Heart
          className={`h-5 w-5 ${isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"}`}
        />
      </Button>

      <Link
        href={`/products/${product.slug}`}
        prefetch
        className="flex flex-1 flex-col"
      >
        <div className="flex-1">
          {/* Product Image */}
          <div className="relative mb-6">
            <Image
              className="h-64 w-full object-contain"
              src={current.image}
              height={400}
              width={400}
              alt={product.title}
            />
          </div>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-4">
              <p className="mb-3 text-gray-900 text-sm">
                <span className="font-medium">Color:</span>{" "}
                <span>{current.name}</span>
              </p>

              <ScrollArea className="w-full max-w-full">
                <div className="flex w-max items-center gap-2 p-0.5 pb-3">
                  {product.colors.map((color, i) => (
                    <button
                      type="button"
                      key={color.hex}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedColor(i);
                      }}
                      className={`size-8 flex-shrink-0 rounded-full border transition-all ${
                        selectedColor === i
                          ? "scale-110 border-gray-900"
                          : "border-gray-300 hover:border-gray-400"
                      }}`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          )}

          {/* Product Title */}
          <h3 className="mb-2 font-medium text-2xl text-gray-900">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="mb-4 flex items-center gap-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`size-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-black text-black"
                      : i < product.rating
                        ? "fill-black/50 text-black"
                        : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-blue-600 text-sm hover:underline">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        {/* Price/Button Container - Fixed to bottom left */}
        <div className="relative mt-6">
          <div className="text-gray-900 text-lg transition-opacity group-hover:opacity-0">
            {product.discount ? (
              <div className="flex items-center gap-3">
                <span className="font-medium">
                  {formatPrice(product.price - product.discount, locale)}
                </span>
                <div className="flex items-baseline justify-center gap-3 text-sm">
                  <span className="text-red-500 line-through">
                    {formatPrice(product.price, locale)}
                  </span>
                  <span className="text-green-600">
                    Save{" "}
                    {formatPrice(product.discount, locale).replace(/\.00$/, "")}
                  </span>
                </div>
              </div>
            ) : (
              <span className="font-medium">
                {formatPrice(product.price, locale)}
              </span>
            )}
          </div>

          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
            disabled={isPending}
            className="absolute bottom-0 left-0 w-auto border-black bg-transparent text-lg opacity-0 transition-opacity hover:bg-gray-100 disabled:opacity-50 group-hover:opacity-100"
          >
            Add to Cart
          </Button>
        </div>
      </Link>
    </div>
  );
}
