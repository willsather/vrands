import { Suspense } from "react";

import HeroSkeleton from "@/app/(components)/(skeletons)/hero-skeleton";
import LatestPostsSkeleton from "@/app/(components)/(skeletons)/latest-posts-skeleton";
import VenturePostsSkeleton from "@/app/(components)/(skeletons)/venture-posts-skeleton";
import Separator from "@/app/(components)/separator";
import Hero from "@/app/(home)/hero";
import LatestPostsSection from "@/app/(home)/latest-posts";
import TitleSection from "@/app/(home)/title";
import UpcomingEvents from "@/app/(home)/upcoming-events";
import VenturePostsSection from "@/app/(home)/venture-posts";

/*
 * DEMO: Pages
 *
 * Automatically create frontend application routing
 * without having to specify pages and a router.
 *
 * All routes are specified and determined via the
 * file path under `/app`
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TitleSection />

      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>

      <Separator />

      <main>
        <Suspense fallback={<LatestPostsSkeleton />}>
          <LatestPostsSection />
        </Suspense>

        <Suspense fallback={<VenturePostsSkeleton />}>
          <VenturePostsSection />
        </Suspense>

        <UpcomingEvents />
      </main>
    </div>
  );
}
