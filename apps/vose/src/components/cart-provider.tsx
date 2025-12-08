"use client";

import type React from "react";
import { useCallback } from "react";

import {
  type CartData,
  type CartItem,
  getCart,
  removeFromCart,
  updateCartItemQuantity,
} from "@/app/actions/cart";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";

type CartContextType = {
  items: CartItem[];
  totalItems: number;
  locale: string;
  refreshCart: () => Promise<void>;
  removeItem: (productId: string, color: string) => Promise<void>;
  updateQuantity: (
    productId: string,
    color: string,
    quantity: number,
  ) => Promise<void>;
  isLoading: boolean;
};

const CartContext = createContext<CartContextType>({
  items: [],
  totalItems: 0,
  locale: "us",
  refreshCart: async () => {},
  removeItem: async () => {},
  updateQuantity: async () => {},
  isLoading: false,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartData, setCartData] = useState<CartData>({
    items: [],
    locale: "us",
  });
  const [isPending, startTransition] = useTransition();

  // Calculate total items from cart data
  const totalItems = cartData.items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const refreshCart = useCallback(async () => {
    const cart = await getCart();
    setCartData(cart);
  }, []);

  const removeItem = async (productId: string, color: string) => {
    startTransition(async () => {
      const updatedCart = await removeFromCart(productId, color);
      setCartData(updatedCart);
    });
  };

  const updateQuantity = async (
    productId: string,
    color: string,
    quantity: number,
  ) => {
    startTransition(async () => {
      const updatedCart = await updateCartItemQuantity(
        productId,
        color,
        quantity,
      );
      setCartData(updatedCart);
    });
  };

  // initialize cart data on mount
  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  return (
    <CartContext.Provider
      value={{
        ...cartData,
        totalItems,
        refreshCart,
        removeItem,
        updateQuantity,
        isLoading: isPending,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
