"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@vrands/ui/components/button";

import { useCart } from "./cart-provider";

export default function CartQuantityControls({
  productId,
  color,
  initialQuantity,
}: {
  productId: string;
  color: string;
  initialQuantity: number;
}) {
  const { updateQuantity, isLoading } = useCart();
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = async (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    await updateQuantity(productId, color, newQuantity);
  };

  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleQuantityChange(quantity - 1)}
        disabled={isLoading || quantity <= 1}
        className="size-8 p-0"
      >
        <Minus className="size-4" />
      </Button>

      <span className="w-8 text-center font-medium text-sm">{quantity}</span>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleQuantityChange(quantity + 1)}
        disabled={isLoading}
        className="size-8 p-0"
      >
        <Plus className="size-4" />
      </Button>
    </div>
  );
}
