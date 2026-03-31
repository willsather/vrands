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

export default async function HomePage({
  params,
}: {
  params: Promise<{ flag: string }>;
}) {
  const { flag } = await params;

  return (
    <div className="min-h-screen bg-white">
      <TitleSection />

      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>

      <Separator />

      <main>
        <Suspense fallback={<LatestPostsSkeleton />}>
          <LatestPostsSection code={flag} />
        </Suspense>

        <Suspense fallback={<VenturePostsSkeleton />}>
          <VenturePostsSection code={flag} />
        </Suspense>

        <UpcomingEvents />
      </main>
    </div>
  );
}
