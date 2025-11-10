import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    logo: "https://www.jetblue.com/magnoliapublic/dam/ui-assets/graphics/Logo-JetBlue-Mid-Blue-RGB.svg",
    title: "Flights",
    description:
      "100+ destinations in the U.S., Latin America, Caribbean, Canada and across the Atlantic.",
    link: "#",
    linkText: "Explore low fares →",
  },
  {
    logo: "https://www.jetblue.com/magnoliapublic/dam/ui-assets/graphics/JBV-Horizontal-midBlue-RGB-v2.svg",
    title: "Packages",
    description:
      "Enjoy even more savings (and perks!) with a vacation package.",
    link: "#",
    linkText: "Explore packages →",
  },
  {
    logo: "https://www.jetblue.com/magnoliapublic/dam/ui-assets/graphics/Paisly-Stacked-midBlue-RGB-v2.svg",
    title: "Stays, cars & more",
    description: "Unlock exclusive savings & earn TrueBlue points on it all.",
    link: "#",
    linkText: "Explore trip deals →",
  },
  {
    logo: "https://www.jetblue.com/magnoliapublic/dam/ui-assets/graphics/TrueBlue_JetBlue_2.svg",
    title: "Points & perks",
    description:
      "Earn points, perks and award travel with the JetBlue family & our partners.",
    link: "#",
    linkText: "Join TrueBlue →",
  },
  {
    logo: "https://www.jetblue.com/magnoliapublic/dam/ui-assets/graphics/JetBlue_Barclay_Card_2.svg",
    title: "Credit cards",
    description: "Rack up points, perks and savings.",
    link: "#",
    linkText: "Explore our cards →",
  },
  {
    logo: "https://www.jetblue.com/magnoliapublic/dam/ui-assets/graphics/Troupe-midBlue-RGB-v2.svg",
    title: "Group trip planning",
    description:
      "A free JetBlue-backed app to make your next group trip a snap.",
    link: "#",
    linkText: "Explore Troupe →",
  },
];

export default function PartnersSection() {
  return (
    <>
      <div className="mx-24 mb-16 grid grid-cols-1 grid-rows-2 gap-12 text-center md:grid-cols-3 lg:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title} className="space-y-4">
            {section.logo && (
              <div className="flex justify-center">
                <Image
                  src={section.logo}
                  alt={section.title}
                  width={20}
                  height={20}
                  className="h-20 w-auto"
                />
              </div>
            )}

            <h3 className="font-bold text-xl">{section.title}</h3>
            <p className="text-center text-gray-600 text-sm">
              {section.description}
            </p>
            <Link
              href={section.link}
              className="text-blue-600 text-sm hover:underline"
            >
              {section.linkText}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex h-24 items-center justify-center bg-jb-navy text-center ">
        <a href="/" className="font-bold text-white hover:underline">
          Ready to start planning?
        </a>
      </div>
    </>
  );
}
