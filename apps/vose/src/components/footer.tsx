import Image from "next/image";

import LocaleSelector from "@/components/locale-selector";
import { Newsletter } from "@/components/newsletter";
import dict from "@/lib/dict.json";
import type { Lang, Locale } from "@vrands/utils";

export function Footer({ lang, locale }: { lang: Lang; locale: Locale }) {
  const t = dict[lang];
  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-bold font-sans text-4xl text-black md:text-5xl">
            {t.footer.newsletter.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600 text-lg">
            {t.footer.newsletter.description}
          </p>
          <Newsletter lang={lang} />
        </div>

        {/* Breadcrumb */}
        <div className="mb-12">
          <span className="text-gray-600">{t.footer.breadcrumb}</span>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 gap-8 text-xs md:grid-cols-5">
          {/* Customer Care */}
          <div>
            <h3 className="mb-4 font-sans font-semibold text-black">
              {t.footer.customerCare.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.customerCare.troubleshooting}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.customerCare.repairReplacement}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.customerCare.orderTracking}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.customerCare.signInJoin}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.customerCare.perks}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.customerCare.register}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.customerCare.boseCare}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.customerCare.contactUs}
                </a>
              </li>
            </ul>
          </div>

          {/* Our company */}
          <div>
            <h3 className="mb-4 font-sans font-semibold text-black">
              {t.footer.company.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.company.aboutUs}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.company.findStore}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.company.esg}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.company.careers}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.company.pressRoom}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.company.stories}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.company.partnerships}
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="inline-flex items-center text-gray-600 hover:text-black"
                >
                  {t.footer.company.worldwide}
                  <svg
                    className="ml-1 size-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Offers */}
          <div>
            <h3 className="mb-4 font-sans font-semibold text-black">
              {t.footer.offers.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.offers.giftCards}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.offers.idMeProgram}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.offers.corporateGifting}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.offers.partnerProgram}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.offers.refurbished}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-600 hover:text-black">
                  {t.footer.offers.tradeUp}
                </a>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="mb-4 font-sans font-semibold text-black">
              {t.footer.additionalLinks.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#"
                  className="inline-flex items-center text-gray-600 hover:text-black"
                >
                  {t.footer.additionalLinks.automotive}
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="inline-flex items-center text-gray-600 hover:text-black"
                >
                  {t.footer.additionalLinks.resellerPortal}
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Apps */}
          <div>
            <div className="space-y-4">
              {/* Bose app */}
              <div className="flex items-center space-x-3">
                <div className="flex size-12 items-center justify-center rounded-lg border border-black">
                  <Image
                    src="https://8hvqnvqjkkn6ntus.public.blob.vercel-storage.com/img/apps/bose.jpeg"
                    alt={t.footer.apps.bose}
                    width={150}
                    height={150}
                  />
                </div>
                <span className="text-gray-600">{t.footer.apps.bose}</span>
              </div>

              {/* Bose Connect App */}
              <div className="flex items-center space-x-3">
                <div className="overflow-none flex size-12 items-center justify-center rounded-lg border border-black">
                  <Image
                    src="https://8hvqnvqjkkn6ntus.public.blob.vercel-storage.com/img/apps/connect.png"
                    alt={t.footer.apps.connect}
                    width={150}
                    height={150}
                  />
                </div>
                <span className="text-gray-600">{t.footer.apps.connect}</span>
              </div>

              {/* Bose QCE App */}
              <div className="flex items-center space-x-3">
                <div className="flex size-12 items-center justify-center border border-black">
                  <Image
                    src="https://8hvqnvqjkkn6ntus.public.blob.vercel-storage.com/img/apps/qce.webp"
                    alt={t.footer.apps.qce}
                    width={150}
                    height={150}
                  />
                </div>
                <span className="text-gray-600">{t.footer.apps.qce}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end">
          <LocaleSelector currentLang={lang} currentLocale={locale} />
        </div>
      </div>
    </footer>
  );
}
