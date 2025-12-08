import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import localFont from "next/font/local";
import type React from "react";
import { Suspense } from "react";

import "@/app/globals.css";

const euclid = localFont({
  src: [
    {
      path: "../../public/fonts/euclid-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/euclid-medium.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-euclid",
  display: "swap",
});

const mongoDBSerif = localFont({
  src: [
    {
      path: "../../public/fonts/mongodb-serif-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/mongodb-serif-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/mongodb-serif-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mongodb-serif",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export const metadata: Metadata = {
  title: "MongoDB",
  description:
    "Get your ideas to market faster with a flexible, AI-ready database. MongoDB makes working with data easy.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${euclid.variable} ${mongoDBSerif.variable} ${sourceCodePro.variable} font-sans`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
