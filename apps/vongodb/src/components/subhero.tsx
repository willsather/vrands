"use client";

import { track } from "@vercel/analytics";
import Image from "next/image";
import Link from "next/link";

import dict from "@/lib/dict.json";
import type { Lang } from "@vrands/utils";

export default function Subhero({ lang }: { lang: Lang }) {
  const t = dict[lang];

  const handleReportClick = () => {
    track("gartner_report_click", {
      language: lang,
      section: "subhero",
      button_type: "cta",
      report_type: "gartner_magic_quadrant",
    });
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="grid items-center lg:grid-cols-2">
            {/* Mobile: Icon first, Desktop: Text first */}
            <div className="order-2 space-y-6 p-8 lg:order-1 lg:p-12">
              <h2 className="max-w-md text-3xl text-gray-900 leading-tight md:text-4xl">
                {t.subhero.title}
              </h2>

              <p className="max-w-lg text-gray-600 text-lg leading-relaxed">
                {t.subhero.description}
              </p>

              <Link
                href="/#gartner-report"
                onClick={handleReportClick}
                className="block w-full rounded-xl bg-[#001E2B] px-6 py-3 text-center font-medium text-white transition-all duration-200 hover:rounded-full lg:inline-block lg:w-auto"
              >
                {t.subhero.ctaText}
              </Link>
            </div>

            {/* Mobile: Icon first, Desktop: Icon second */}
            <div className="relative order-1 h-full min-h-[300px] lg:order-2">
              {/* Background blob pattern - extends to edge */}
              <svg
                className="absolute inset-0 hidden h-full w-full fill-green-100/60 lg:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 604 397"
                preserveAspectRatio="xMaxYMid slice"
                role="graphics-symbol"
              >
                <path d="M154.964 258.019c0-43.057 34.363-78.001 77.474-78.001h1.249c42.486 0 77.474-34.944 77.474-77.377v-1.248c0-43.056 34.989-77.376 77.475-77.376h.624c43.111 0 77.475-34.32 77.475-77.377v-1.248c0-42.432 34.988-77.377 77.474-77.377h1.249c42.486 0 77.474 34.945 77.474 77.377V334.77c0 86.737-70.601 156.625-156.822 156.625H76.24c-42.486 0-77.474-34.944-77.474-77.376v-1.248c0-43.057 34.988-77.377 78.099-77.377 43.11.624 78.099-34.32 78.099-77.376Z" />
              </svg>

              {/* Main illustration */}
              <div className="relative z-10 flex h-full items-center justify-center p-8">
                <Image
                  src="https://zlbmkgaohavraaed.public.blob.vercel-storage.com/hero/subhero-icon.svg"
                  alt="MongoDB 3D blocks illustration"
                  width={400}
                  height={300}
                  className="w-full max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
