import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import { Inter } from "next/font/google";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TopBanner from "@/components/top-banner";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gap",
  description:
    "Shop Gap for casual women's, men's, maternity, baby & kids clothes. Browse the latest collections and find quality denim, tees, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <Suspense fallback={null}>
          <TopBanner />
        </Suspense>
        <Navbar />

        <Suspense fallback={null}>{children}</Suspense>

        <Footer />

        <Analytics />
        <SpeedInsights />
        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
