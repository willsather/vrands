import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type React from "react";
import { Suspense } from "react";

import { CartProvider } from "@/components/cart-provider";

import "@/app/globals.css";

const bose = localFont({
  src: [
    {
      path: "../../public/fonts/BoseText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BoseText-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/BoseText-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/BoseText-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-bose",
  display: "swap",
});

const boseHeadline = localFont({
  src: [
    {
      path: "../../public/fonts/Bose-HeadlineRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Bose-HeadlineBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Bose-HeadlineBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-bose-headline",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bose",
  description:
    "Study hard. Play loud. Save big. · Trending Products · Sound that makes the grade · Study-ready speakers · Sound, meet style",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bose.variable} ${boseHeadline.variable} font-sans`}>
        <CartProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </CartProvider>
        <Analytics />
        <SpeedInsights />
        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
