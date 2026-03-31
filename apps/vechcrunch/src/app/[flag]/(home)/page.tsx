import { deserialize } from "flags/next";
import { Suspense } from "react";

import HeroSkeleton from "@/components/skeletons/hero-skeleton";
import LatestPostsSkeleton from "@/components/skeletons/latest-posts-skeleton";
import VenturePostsSkeleton from "@/components/skeletons/venture-posts-skeleton";
import Separator from "@/components/separator";
import Hero from "@/app/[flag]/(home)/hero";
import LatestPostsSection from "@/app/[flag]/(home)/latest-posts";
import TitleSection from "@/app/[flag]/(home)/title";
import UpcomingEvents from "@/app/[flag]/(home)/upcoming-events";
import VenturePostsSection from "@/app/[flag]/(home)/venture-posts";
import { flags } from "@/lib/flags";

export default async function HomePage({
  params,
}: {
  params: Promise<{ flag: string }>;
}) {
  const { flag } = await params;
  const decisions = await deserialize(flags, flag);
  const showInBrief = decisions["in-brief-flag"];

  return (
    <div className="min-h-screen bg-white">
      <TitleSection />

      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>

      <Separator />

      <main>
        <Suspense fallback={<LatestPostsSkeleton />}>
          <LatestPostsSection showInBrief={showInBrief} />
        </Suspense>

        <Suspense fallback={<VenturePostsSkeleton />}>
          <VenturePostsSection showInBrief={showInBrief} />
        </Suspense>

        <UpcomingEvents />
      </main>
    </div>
  );
}
