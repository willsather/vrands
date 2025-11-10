import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | JetBlue",
    default: "JetBlue | Airline Tickets, Flights & Airfare",
  },
  description:
    "Book your next flight with JetBlue and enjoy award-winning service and entertainment.",
  applicationName: "JetBlue",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "16x16 32x32 64x64",
      },
      {
        url: "/favicons/favicon-16.png",
        sizes: "16x16",
      },
      {
        url: "/favicons/favicon-32.png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />

        {/*DEMO: Vercel Analytics/Speed Insights SDK Packages for reporting*/}
        <Analytics />
        <SpeedInsights />

        {/*DEMO: Vercel Toolbar */}
        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
