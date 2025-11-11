import { BoseLogo } from "@/components/bose-logo";
import { HermesLogo } from "@/components/hermes-logo";
import { JetblueLogo } from "@/components/jetblue-logo";
import { MongoDBLogo } from "@/components/mongodb-logo";
import { TechcrunchLogo } from "@/components/techcrunch-logo";
import Link from "next/link";

const sites = [
  {
    name: "TechCrunch",
    url: "https://vechcrunch.vercel.app/",
    description:
      "Technology news platform clone showcasing Next.js modern features and responsive design",
    logo: TechcrunchLogo,
    brandColor: "bg-[#008C00]",
    technologies: [
      { icon: "/nextjs.svg" },
    ],
  },
  {
    name: "JetBlue",
    url: "https://vetblue.vercel.app/",
    description:
      "Airline website clone featuring booking flow, flight search, and customer portal functionality",
    logo: JetblueLogo,
    brandColor: "bg-[#00205B]",
    technologies: [
      { icon: "/nextjs.svg" },
    ],
  },
  {
    name: "MongoDB",
    url: "https://vongodb.vercel.app",
    description:
      "Developer platform clone with experimentation via Gartner subhero, edge config, and analytics integration",
    logo: MongoDBLogo,
    brandColor: "bg-green-600",
    technologies: [
      { icon: "/nextjs.svg" },
      { icon: "/blob.svg" },
      { icon: "/edge.svg" },
    ],
  },
  {
    name: "Bose",
    url: "https://vose.vercel.app",
    description:
      "E-commerce site with store locator, personalization, cart persistence, and localization features",
    logo: BoseLogo,
    brandColor: "bg-black",
    technologies: [
      { icon: "/nextjs.svg" },
      { icon: "/blob.svg" },
      { icon: "/edge.svg" },
    ],
  },
  {
    name: "Hermes",
    url: "https://vermes.vercel.app",
    description:
      "Product catalog with search functionality, mobile-first design, and responsive layouts",
    logo: HermesLogo,
    brandColor: "bg-orange-600",
    technologies: [
      { icon: "/nextjs.svg" },
      { icon: "/blob.svg" },
      { icon: "/edge.svg" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 font-sans">
            brand demos
          </h1>
          <p className="text-zinc-400 text-sm font-mono">
            by{" "}
            <Link 
              href="https://sather.ws" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              sather.ws
            </Link>
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sites.map((site) => {
            const LogoComponent = site.logo;
            return (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-500/20 flex flex-col h-full">
                  <div
                    className={`flex h-32 items-center justify-center ${site.brandColor} border-zinc-800 border-b flex-shrink-0`}
                  >
                    <LogoComponent className="h-12 w-32 text-white" />
                  </div>
                  <div className="bg-zinc-900 px-6 pt-6 pb-6 flex flex-col flex-grow">
                    <p className="text-left text-sm text-zinc-300 leading-relaxed">
                      {site.description}
                    </p>

                    <div className="flex gap-2 mt-auto pt-6">
                      {site.technologies.map((tech) => (
                        <img
                          key={tech.icon}
                          src={tech.icon}
                          alt={tech.icon}
                          className="size-5"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
