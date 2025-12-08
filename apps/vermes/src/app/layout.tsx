import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import { Inter } from "next/font/google";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";

import CollapsibleFooter from "@/components/collapsible-footer";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hermès",
  description:
    "Discover all the collections of Hermès, fashion accessories, scarves and ties, belts and ready-to-wear, perfumes, watches and jewelry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <Navbar />

        <Suspense fallback={null}>{children}</Suspense>

        <CollapsibleFooter />
        <Footer />

        <Analytics />
        <SpeedInsights />
        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
