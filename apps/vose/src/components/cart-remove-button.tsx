"use client";

import { X } from "lucide-react";

import { Button } from "@vrands/ui/components/button";

import { useCart } from "./cart-provider";

export default function CartRemoveButton({
  productId,
  color,
}: {
  productId: string;
  color: string;
}) {
  const { removeItem, isLoading } = useCart();

  const handleRemove = async () => {
    await removeItem(productId, color);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleRemove}
      disabled={isLoading}
      className="h-8 w-8 p-0 text-gray-400 hover:text-red-500"
    >
      <X className="h-4 w-4" />
    </Button>
  );
}
