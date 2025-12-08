import Image from "next/image";

import LocaleSelector from "@/components/locale-selector";
import dict from "@/lib/dict.json";
import type { Lang } from "@vrands/utils";

export function Footer({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <footer className="bg-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
          {/* Logo and Language Selector */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Image
                src="https://zlbmkgaohavraaed.public.blob.vercel-storage.com/logo.svg"
                alt="MongoDB"
                width={120}
                height={40}
                className="mb-6"
              />
              <div className="flex items-center space-x-2 text-sm">
                <LocaleSelector lang={lang} />
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-6 font-semibold text-white">
              {t.footer.about.title}
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.about.careers}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.about.investorRelations}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.about.legal}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.about.privacyPolicy}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.about.github}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.about.securityInfo}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.about.trustCenter}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.about.connectWithUs}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 font-semibold text-white">
              {t.footer.support.title}
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.support.contactUs}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.support.customerPortal}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.support.atlasStatus}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.support.customerSupport}
                </a>
              </li>
            </ul>
          </div>

          {/* Deployment Options */}
          <div>
            <h3 className="mb-6 font-semibold text-white">
              {t.footer.deploymentOptions.title}
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.deploymentOptions.mongodbAtlas}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.deploymentOptions.enterpriseAdvanced}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.deploymentOptions.communityEdition}
                </a>
              </li>
            </ul>
          </div>

          {/* Data Basics */}
          <div>
            <h3 className="mb-6 font-semibold text-white">
              {t.footer.dataBasics.title}
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.dataBasics.vectorDatabases}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.dataBasics.nosqlDatabases}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.dataBasics.documentDatabases}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.dataBasics.ragDatabase}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.dataBasics.acidTransactions}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.dataBasics.mernStack}
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  {t.footer.dataBasics.meanStack}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-gray-700 border-t pt-8">
          <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
